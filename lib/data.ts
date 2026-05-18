import {
  Mail, Github, Linkedin, Globe, MapPin, ExternalLink, Home, User,
  Code2, Layers, Smartphone, Video, Camera, Figma,
  ArrowRight, Award, Star, GitBranch, CheckCircle2,
  Monitor, Palette, Film, Phone, Send, Calendar,
  ShieldCheck, Layout, TabletSmartphone, History, Sparkles
} from "lucide-react";

export const profile = {
  name: "Deepakkumar V",
  role: "Developer",
  tagline: "Software Development • Designs • Visual Arts",
  location: "Karpagam College, Coimbatore",
  avatar: "/Deepak.webp",
  initials: "DV",
  username: "deepak",
  email: "deepakviji5556@gmail.com",
  github: "https://github.com/Deepak5556",
  linkedin: "https://linkedin.com/in/deepakkumarv",
  twitter: "https://x.com/Deepak5556",
  instagram: "https://instagram.com/deepak_v_5556",
  linktree: "https://linktr.ee/deepakv5556",
  website: "deepakportfolioo.web.app",
};

export const aboutDetails = {
  paragraphs: [
    "I'm a passionate Full Stack Developer with hands-on experience building responsive web and mobile applications. I love crafting products that solve real problems with clean, maintainable code.",
    "Currently studying at Karpagam College, I focus on React, Flutter, and the MERN stack — constantly learning, shipping, and improving. I am based in Coimbatore."
  ]
};

export const skillDetails = [
  {
    icon: Code2,
    title: "Software Development",
    desc: "Building scalable web and cross-platform mobile applications with modern stacks.",
    tools: ["React", "Next.js", "Flutter", "Node.js", "Dart"],
    href: "/software"
  },
  {
    icon: Layout,
    title: "Designs",
    desc: "Crafting pixel-perfect designs and intuitive User Experiences for all platforms.",
    tools: ["Figma", "UI/UX", "Adobe XD", "Branding"],
    href: "/designs"
  },
  {
    icon: Sparkles,
    title: "Visual Art",
    desc: "Cinematic video production and professional photography with post-processing.",
    tools: ["Premiere Pro", "After Effects", "Photoshop", "Lightroom"],
    href: "/media"
  },
];

export const homeAboutDetails = {
  paragraphs: [
    "I’m Deepakkumar V, a full stack developer, mobile app developer, and UI/UX designer with a strong passion for creating seamless digital experiences. I specialize in building modern web and mobile applications that combine functionality, performance, and intuitive design.",
    "Beyond development, I’m deeply involved in visual creativity as a videographer, video editor, photographer, and photo editor. This creative background helps me approach projects with a strong sense of storytelling, aesthetics, and user engagement.",
    "I focus on delivering clean, polished, and meaningful work, paying close attention to both technical quality and visual detail. Whether designing interfaces, developing applications, or creating visual content, I strive to build experiences that are impactful, user-friendly, and visually compelling."
  ],
  tags: [
    "Web Developer",
    "Mobile Developer",
    "UI/UX Designer",
    "Videographer",
    "Photographer"
  ]
};

export const navItems = [
  { id: "/", label: "Home", icon: Home },
  { id: "/about", label: "About", icon: User },
  { id: "/software", label: "Software", icon: Layers },
  { id: "/designs", label: "Designs", icon: Palette },
  { id: "/media", label: "Visual Arts", icon: Film },
  { id: "/contact", label: "Contact", icon: Mail },
];

export const techStack = [
  {
    category: "Software Development",
    items: ["Frontend", "Backend", "Database", "Tools"]
  },
  {
    category: "Video Editing",
    items: ["After Effects", "Premiere Pro", "CapCut"]
  },
  {
    category: "Photo Editing",
    items: ["Photoshop", "Illustrator", "Lightroom", "Canva", "Picsart"]
  },
  {
    category: "Designing",
    items: ["Adobe XD", "Canva", "Framer", "Figma"]
  },
];

export const projects = [
  {
    title: "Dhruva",
    description: "The CATOM team developed kcedhruva.in, the official website for our college's Dhruva event, improving user engagement and accessibility. It offers event details, schedules, and registration features. I'm proud to be part of this team and contribute to its success.",
    tech: ["React", "Tailwind CSS", "SEO"],
    image: "https://deepakportfolioo.web.app/assets/dhruva-BYimjnIf.webp",
    icon: ShieldCheck,
  },
  {
    title: "Blood Donation App",
    description: "A user-friendly Flutter-based Blood Donation App designed to streamline the process of finding blood donors and requesting donations. The app features donor registration, search for nearby donors, request forms, and emergency contact options for quick assistance.",
    tech: ["Flutter", "Firebase", "Dart"],
    link: "https://deepakportfolioo.web.app",
    image: "https://deepakportfolioo.web.app/assets/bloodDonationApp-B9GIfnV1.webp",
    icon: Globe,
  },
  {
    title: "SnapLearn",
    description: "SnapLearn App is a Flutter-based mobile application that uses image recognition to describe what's in a photo. Users can upload or snap pictures, and the app instantly provides a simple explanation. Designed for learning, accessibility, and fun, it makes visual discovery easy and engaging.",
    tech: ["Flutter", "Firebase", "Dart", "Claude API "],
    link: "https://deepakportfolioo.web.app",
    image: "https://deepakportfolioo.web.app/assets/snaplearn-ZHnt1vW8.webp",
    icon: Layout,
  },
];

export const achievements = [
  {
    id: "hackfest-2k24",
    event: "Second Prize - National Level Hackathon",
    org: "Erode Sengunthar Engineering College",
    desc: "Secured 2nd place in NATIONAL LEVEL HACKATHON - HACKFEST 2k24 conducted by the Department of Computer Science and Engineering.",
    year: "2024",
    details: [
      "Gained hands-on experience working in a real hackathon environment with strict timelines.",
      "Led the team as a Team Leader, managing tasks and ensuring smooth collaboration.",
      "Built and presented a functional App solution under time constraints.",
      "Improved problem-solving, communication, and leadership skills.",
      "Learned to quickly convert ideas into real-world applications.",
      "Experienced industry-level project presentation and pitching."
    ]
  }
];

export const videoTools = ["Premiere Pro", "After Effects", "CapCut", "DaVinci Resolve"];
export const photoTools = ["Photoshop", "Lightroom", "Canva", "Snapseed"];

export const videos = [
  {
    id: "college-trip",
    title: "College Trip",
    tools: ["CapCut"],
    description: "Edited this college trip video to bring out the vibe, energy, and memories in the best way. Focused on smooth transitions, beat sync cuts, cinematic color grading, and clean text animations to keep it engaging and fun throughout.",
    videoSrc: "/web/trip.webm",
    poster: "/web/trip.webp"
  },
  {
    id: "dhruva-2025",
    title: "Dhruva 2025",
    tools: ["After Effects"],
    description: "Edited highlights from Dhruva 2025 to capture the energy, crowd vibe, and key moments of the event. Used smooth transitions, beat sync cuts, motion graphics, and cinematic color grading to make the video feel lively and engaging from start to finish.",
    videoSrc: "/web/dhruva.webm",
    poster: "https://imgs.search.brave.com/9Crsp6AsY-V1l9-Ea5KeRVsrBYEGH-_guiAZz0xmVHE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA2/OTEzNzc3NC9waG90/by9jaGVlcmluZy1m/YW5zLWF0LWNvbmNl/cnQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVg0TUZvbjlj/cFROOVVqdHUxckRR/WTFLUk5ZMlU1Y0g3/Wmw0Vk5hQzY2ajA9"
  }

];

export const photos = [
  {
    id: "creative-asset-analysis",
    title: "Creative Asset Analysis",
    tools: ["Event Photography"],
    location: "Karpagam College of Engineering",
    description: "Captured a powerful stage performance at Dhruva 2026, a college cultural event, featuring a traditional dance ensemble. The composition highlights symmetry, expressive poses, and dramatic lighting. Post-processing includes color grading, contrast balancing, and lighting enhancement to emphasize mood and stage presence while preserving natural skin tones and costume details.",
    thumbnail: "/Dhruva2026.webp",
    images: [
      "/Dhruva2026.webp"
    ]
  }, {
    id: "dhruva2026",
    title: "Dhruva 2026",
    tools: ["Event Photography"],
    location: "Karpagam College of Engineering",
    description: "Captured a powerful stage performance at Dhruva 2026, a college cultural event, featuring a traditional dance ensemble. The composition highlights symmetry, expressive poses, and dramatic lighting. Post-processing includes color grading, contrast balancing, and lighting enhancement to emphasize mood and stage presence while preserving natural skin tones and costume details.",
    thumbnail: "/web/dhruva2026raw.webp",
    images: [
      "/web/dhruva2026raw.webp",
      "/web/dhruva2026edited.webp"
    ]
  }
];


export const designProjects = [
  {
    id: "ecommerce-ui",
    title: "E-Commerce UI Kit",
    description: "Clean, accessible component set for online stores with modern aesthetics.",
    category: "UI Designs",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop",
    link: "https://www.figma.com/proto/ecommerce-ui-kit",
    featured: false,
    date: "Oct 12, 2025",
    tools: ["Figma", "Illustrator"],
    tags: ["UI/UX", "E-Commerce", "Web Design"]
  },
  {
    id: "cyberpunk-poster",
    title: "Cyberpunk Event Poster",
    description: "A neon-infused cinematic poster for a futuristic music festival.",
    category: "Posters",
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=1974&auto=format&fit=crop",
    link: "#",
    featured: true,
    date: "Sep 04, 2025",
    tools: ["Photoshop", "Lightroom"],
    tags: ["Cyberpunk", "Neon", "Event"]
  },
  {
    id: "brand-identity",
    title: "Tech Startup Branding",
    description: "Complete visual identity including logo, typography, and color palette.",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    featured: false,
    date: "Aug 22, 2025",
    tools: ["Illustrator", "Photoshop"],
    tags: ["Branding", "Identity", "Logo"]
  },
  {
    id: "youtube-thumbnail",
    title: "Tech Review Thumbnail",
    description: "High click-through-rate YouTube thumbnail for a smartphone review.",
    category: "Thumbnails",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    link: "#",
    featured: false,
    date: "Jul 15, 2025",
    tools: ["Photoshop", "Figma"],
    tags: ["YouTube", "Social Media", "Tech"]
  },
  {
    id: "movie-poster",
    title: "Sci-Fi Short Film Poster",
    description: "Minimalist and cinematic poster design for an indie sci-fi movie.",
    category: "Posters",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
    link: "#",
    featured: true,
    date: "Jun 30, 2025",
    tools: ["Photoshop", "Blender"],
    tags: ["Sci-Fi", "Cinematic", "Minimalist"]
  }
];

export const appProjects = [
  {
    title: "Campus Connect",
    description: "A social networking app for college students to connect, share resources, and collaborate on academic projects.",
    tech: ["Flutter", "Firebase", "Dart", "Cloud Functions"],
    image: "",
    icon: TabletSmartphone,
    link: "",
    platform: "iOS & Android",
  },
  {
    title: "Budget Tracker",
    description: "A personal finance app with expense tracking, budgeting & visual spending analytics. Offline-first with sync.",
    tech: ["FlutterFlow", "Firebase", "Hive"],
    image: "",
    icon: TabletSmartphone,
    link: "",
    platform: "Cross-platform",
  },
  {
    title: "Task Manager Pro",
    description: "A productivity app with task scheduling, priority labels, and a Kanban board view for project management.",
    tech: ["Flutter", "SQLite", "Provider"],
    image: "",
    icon: TabletSmartphone,
    link: "",
    platform: "Android",
  },
  {
    title: "Event Check-in",
    description: "QR-code based event registration and check-in system with real-time attendance tracking dashboard.",
    tech: ["Flutter", "Firebase", "QR Scanner"],
    image: "",
    icon: TabletSmartphone,
    link: "",
    platform: "iOS & Android",
  },
];

export const education = [
  {
    school: "Karpagam College of Engineering",
    degree: "Bachelor of Engineering in Computer Science",
    duration: "2021 — 2025",
    location: "Coimbatore, India",
    description: "Focusing on Software Engineering, Data Structures, and Web Technologies. Member of the Technical Club.",
  },
  {
    school: "Vani Vidyalaya Matric Hr Sec School",
    degree: "Higher Secondary Education",
    duration: "2019 — 2021",
    location: "Tamil Nadu, India",
    description: "Majored in Computer Science and Mathematics.",
  }
];

export const workExperience = [
  {
    id: "freelance-dev",
    company: "Freelance",
    role: "Full Stack Developer",
    duration: "2023 — Present",
    description: "Building custom web solutions for local clients using React and Node.js. Focused on performance and SEO.",
    tech: ["React", "Node.js", "Tailwind CSS", "MongoDB", "SEO"],
    responsibilities: [
      "Architected and deployed responsive web applications for various small business clients.",
      "Implemented SEO best practices, resulting in a 40% increase in organic traffic for client sites.",
      "Managed full project lifecycles from requirement gathering to deployment and maintenance.",
      "Optimized website performance, achieving sub-second load times on mobile devices."
    ],
    link: "https://github.com/Deepak5556"
  }
];
export const internships = [
  {
    id: "transzio-integral-systems-intern",
    company: "Transzio Integral Systems LLP",
    role: "Software Developer - Trainee",
    duration: "Feb 2026 — Mar 2026",
    description: "Completed internship in the IoT Product Development department, contributing to technical tasks and project activities.",
    tech: ["UI/UX", "App Development", "Web Development"],
    responsibilities: [
      "Worked in the IoT Product Development team on real-world technical tasks.",
      "Assisted in developing and improving embedded and automation-based solutions.",
      "Collaborated with team members on project activities and implementation.",
      "Contributed to debugging, testing, and optimizing system performance."
    ]
  }, {
    id: "interface-technologies-intern",
    company: "InterFace Technologies",
    role: "App Development Intern",
    duration: "Aug 2025 — Feb 2026",
    description: "Selected through LinkedIn for a 6-month internship focused on app development at InterFace Technologies, contributing to real-world development projects.",
    tech: ["Flutter", "API Integration", "Mobile App Development", "UI Development"],
    responsibilities: [
      "Worked on mobile application development using modern frameworks and tools.",
      "Collaborated with the development team to build and improve application features.",
      "Integrated APIs and handled real-time data within mobile applications.",
      "Participated in debugging, testing, and optimizing app performance."
    ]
  },


];

export const certifications = [
  {
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Coursera",
    date: "2024",
    link: "#",
  },
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    date: "2023",
    link: "#",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2023",
    link: "#",
  }
];

export const posts: any[] = [];


