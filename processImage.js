const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputImagePath = path.join(__dirname, 'public', 'Deepak.webp');
const iconOutputPath = path.join(__dirname, 'app', 'icon.png');
const ogOutputPath = path.join(__dirname, 'app', 'opengraph-image.png');

async function createImages() {
  if (!fs.existsSync(inputImagePath)) {
    console.error('Deepak.webp not found');
    return;
  }

  // 1. Create 64x64 circular icon.png
  const circleSvgIcon = Buffer.from(
    `<svg width="64" height="64">
      <circle cx="32" cy="32" r="32" />
     </svg>`
  );

  await sharp(inputImagePath)
    .resize(64, 64)
    .composite([{ input: circleSvgIcon, blend: 'dest-in' }])
    .png()
    .toFile(iconOutputPath);

  console.log('icon.png created.');

  // 2. Create OpenGraph Image (1200x630)
  // Create the transparent circle version of DK image for overlaying in open graph
  const circleSvgProfile = Buffer.from(
    `<svg width="400" height="400">
      <circle cx="200" cy="200" r="200" />
     </svg>`
  );

  const roundedProfileBuffer = await sharp(inputImagePath)
    .resize(400, 400)
    .composite([{ input: circleSvgProfile, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // Draw the custom OG layout
  const ogWidth = 1200;
  const ogHeight = 630;

  // Background gradient: mostly dark with an orange tint in center
  await sharp({
    create: {
      width: ogWidth,
      height: ogHeight,
      channels: 4,
      background: { r: 10, g: 10, b: 10, alpha: 1 }
    }
  })
    // Insert text via SVG
    .composite([
      {
        input: Buffer.from(`
          <svg width="1200" height="630">
            <defs>
               <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
                 <stop offset="0%" style="stop-color:rgb(20,20,20);stop-opacity:1" />
                 <stop offset="100%" style="stop-color:rgb(0,0,0);stop-opacity:1" />
               </radialGradient>
            </defs>
            <rect width="1200" height="630" fill="url(#grad1)" />
            <!-- Text area -->
            <text x="560" y="280" font-family="sans-serif" font-size="80" font-weight="900" fill="#ffffff" letter-spacing="-2">
              Deepakkumar V<tspan fill="#fb6415">.</tspan>
            </text>
            <text x="560" y="340" font-family="sans-serif" font-size="36" font-weight="500" fill="#a3a3a3">
              Full Stack Developer &amp; Designer
            </text>
            <!-- Badges -->
            <rect x="560" y="400" width="160" height="50" rx="25" fill="#1a1a1a" stroke="#333" stroke-width="2" />
            <text x="585" y="433" font-family="sans-serif" font-size="22" font-weight="600" fill="#ffffff">Web Dev</text>

            <rect x="740" y="400" width="200" height="50" rx="25" fill="#1a1a1a" stroke="#333" stroke-width="2" />
            <text x="765" y="433" font-family="sans-serif" font-size="22" font-weight="600" fill="#ffffff">UI/UX Design</text>

            <rect x="960" y="400" width="200" height="50" rx="25" fill="#1a1a1a" stroke="#333" stroke-width="2" />
            <text x="985" y="433" font-family="sans-serif" font-size="22" font-weight="600" fill="#ffffff">Video Editing</text>
            
            <!-- Avatar orange glow effect behind image -->
            <circle cx="340" cy="315" r="215" fill="#fb6415" opacity="0.2" filter="blur(20px)" />
            <circle cx="340" cy="315" r="208" fill="none" stroke="#fb6415" stroke-width="8" opacity="0.4" />
          </svg>
        `),
        top: 0,
        left: 0
      },
      // Place rounded image
      {
        input: roundedProfileBuffer,
        top: 115, // 315 - 200
        left: 140  // 340 - 200
      }
    ])
    .png()
    .toFile(ogOutputPath);

    console.log('opengraph-image.png created.');
}

createImages().catch(console.error);
