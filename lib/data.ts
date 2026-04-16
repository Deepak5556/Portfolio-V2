import {
  Mail, Github, Linkedin, Globe, MapPin, ExternalLink, Home, User,
  Code2, Layers, Smartphone, Video, Camera, Figma,
  ArrowRight, Award, Star, GitBranch, CheckCircle2,
  Monitor, Palette, Film, Phone, Send, Calendar,
  ShieldCheck, Layout, TabletSmartphone, History
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
    id: "event-highlights",
    title: "Cinematic Event Highlights",
    tools: ["Premiere Pro", "After Effects"],
    description: "A high-impact event recap focused on cinematic aesthetics, featuring advanced color grading, synchronized audio-to-visual editing, and dynamic motion graphics overlays.",
    videoSrc: "https://web.pdx.edu/~pconway/sample_video/sample-mp4-file-small.mp4",
    poster: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "social-media",
    title: "Viral Social Media Sequences",
    tools: ["CapCut", "After Effects"],
    description: "Fast-paced, high-retention short-form content optimized for modern social platforms. Includes motion tracking, creative text animations, and trend-specific editing styles.",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "college-fest",
    title: "Annual Fest Promotional Trailer",
    tools: ["DaVinci Resolve", "Premiere Pro"],
    description: "An energetic promotional campaign video utilizing 3D motion graphics, complex masking techniques, and custom sound design to build hype and brand awareness.",
    videoSrc: "https://www.w3schools.com/html/movie.mp4",
    poster: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "brand-reel",
    title: "COMMERCIAL BRAND REEL",
    tools: ["Premiere Pro", "After Effects"],
    description: "Short promotional video showcasing product storytelling and brand visuals with high-end color grading and sound design.",
    videoSrc: "https://web.pdx.edu/~pconway/sample_video/sample-mp4-file-small.mp4",
    poster: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800"
  },
];

export const photos = [
  {
    id: "event-poster",
    title: "Event Poster",
    tools: ["Photoshop", "Lightroom", "Canva"],
    location: "Coimbatore, TN",
    description: "A professional event poster designed for a technical symposium, focusing on typography and minimalist layout.",
    images: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1542744173-8e7e5381bb04?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "photo-retouch",
    title: "Photo Retouch",
    tools: ["Photoshop", "Snapseed"],
    location: "Creative Studio",
    description: "High-end portrait retouching including skin cleanup, color correction, and lighting enhancements.",
    images: [
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "social-banner",
    title: "Social Banner",
    tools: ["Canva", "Photoshop"],
    location: "Digital Lab",
    description: "Custom social media banners for YouTube and LinkedIn that align with personal branding guidelines.",
    images: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "before-after",
    title: "Before / After Edit",
    tools: ["Lightroom", "Photoshop"],
    location: "Karpagam Campus",
    description: "A comparison showcase of raw footage vs the final color-graded and edited output.",
    images: [
      "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1574717024453-354056afd6fc?auto=format&fit=crop&q=80&w=800"
    ]
  },
];


export const figmaProjects = [
  {
    name: "E-Commerce UI Kit",
    desc: "Clean, accessible component set for online stores.",
    figmaLink: "https://www.figma.com/proto/ecommerce-ui-kit"
  },
  {
    name: "SaaS Dashboard",
    desc: "Analytics dashboard with dark mode and data viz.",
    figmaLink: "https://www.figma.com/proto/saas-dashboard"
  },
  {
    name: "Mobile App Design",
    desc: "Flutter app screens designed and prototyped in Figma.",
    figmaLink: "https://www.figma.com/proto/mobile-app-design"
  },
  {
    name: "Portfolio V2 Concept",
    desc: "Next iteration of personal portfolio — minimal & bold.",
    figmaLink: "https://www.figma.com/proto/portfolio-v2"
  },
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


