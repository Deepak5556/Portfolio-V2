import {
  Mail, Github, Linkedin, Globe, MapPin, ExternalLink, Home, User,
  Code2, Layers, Smartphone, Video, Camera, Figma,
  ArrowRight, Award, Star, GitBranch, CheckCircle2,
  Monitor, Palette, Film, Phone, Send, Calendar,
  ShieldCheck, Layout, TabletSmartphone
} from "lucide-react";

export const profile = {
  name: "Deepakkumar V",
  role: "Developer",
  tagline: "Web · App · UI/UX · Videography · Photography",
  location: "Karpagam College, Coimbatore",
  avatar: "/Deepak.webp",
  initials: "DV",
  email: "deepakv.dev@gmail.com",
  github: "https://github.com/Deepak5556",
  linkedin: "https://linkedin.com/in/deepakkumarv",
  website: "deepakportfolioo.web.app",
};

export const navItems = [
  { id: "/",        label: "Home", icon: Home },
  { id: "/about",   label: "About", icon: User },
  { id: "/webdev",  label: "Web", icon: Code2 },
  { id: "/appdev",  label: "App", icon: Smartphone },
  { id: "/uiux",    label: "UI/UX", icon: Palette },
  { id: "/video",   label: "Videography", icon: Film },
  { id: "/photo",   label: "Photography", icon: Camera },
  { id: "/contact", label: "Contact", icon: Mail },
];

export const techStack = [
  { category: "Frontend",  items: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "FlutterFlow"] },
  { category: "Backend",   items: ["Node.js", "Express.js", "REST APIs"] },
  { category: "Database",  items: ["MongoDB", "Firebase"] },
  { category: "Tools",     items: ["Git & GitHub", "VS Code", "Figma"] },
];

export const projects = [
  {
    title: "React Portfolio",
    description: "Detailed professional and academic journey showcases. Includes projects, internships, and skill demonstrations in Full Stack & App Development.",
    tech: ["React", "Firebase", "JavaScript", "Tailwind"],
    link: "https://deepakportfolioo.web.app",
    image: "/portfolio.png",
    icon: Globe,
  },
  {
    title: "Smart Identity Validator",
    description: "AI-powered identity validation system. Robust backend integration for security and automated verification workflows.",
    tech: ["Python", "Machine Learning", "FastAPI"],
    image: "/val.png",
    icon: ShieldCheck,
  },
  {
    title: "SIV Management UI",
    description: "Modern administrative dashboard for the Smart Identity Validator system. Real-time monitoring and verification management.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS"],
    image: "/ui.png",
    icon: Layout,
  },
];

export const achievements = [
  { id: "hackathon-2024", event: "Hackathon Winner", org: "Karpagam College", desc: "1st place in inter-department web dev hackathon.", year: "2024" },
  { id: "techfest-2023",  event: "Best Project Award",  org: "Tech Fest 2023",  desc: "Recognised for outstanding full-stack project presentation.", year: "2023" },
];

export const videoTools  = ["Premiere Pro", "After Effects", "CapCut", "DaVinci Resolve"];
export const photoTools  = ["Photoshop", "Lightroom", "Canva", "Snapseed"];

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
];

export const photos = [
  { 
    id: "event-poster",
    title: "Event Poster", 
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
    description: "High-end portrait retouching including skin cleanup, color correction, and lighting enhancements.",
    images: [
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=800"
    ]
  },
  { 
    id: "social-banner",
    title: "Social Banner", 
    description: "Custom social media banners for YouTube and LinkedIn that align with personal branding guidelines.",
    images: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800"
    ]
  },
  { 
    id: "before-after",
    title: "Before / After Edit", 
    description: "A comparison showcase of raw footage vs the final color-graded and edited output.",
    images: [
      "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1574717024453-354056afd6fc?auto=format&fit=crop&q=80&w=800"
    ]
  },
];


export const figmaProjects = [
  { name: "E-Commerce UI Kit",    desc: "Clean, accessible component set for online stores." },
  { name: "SaaS Dashboard",       desc: "Analytics dashboard with dark mode and data viz." },
  { name: "Mobile App Design",    desc: "Flutter app screens designed and prototyped in Figma." },
  { name: "Portfolio V2 Concept", desc: "Next iteration of personal portfolio — minimal & bold." },
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
    school: "Simplified High School",
    degree: "Higher Secondary Education",
    duration: "2019 — 2021",
    location: "Tamil Nadu, India",
    description: "Majored in Computer Science and Mathematics.",
  }
];

export const workExperience = [
  {
    company: "Freelance Developer",
    role: "Full Stack Developer",
    duration: "2023 — Present",
    description: "Building custom web solutions for local clients using React and Node.js. Focused on performance and SEO.",
  }
];

export const internships = [
  {
    company: "Tech Solutions Inc.",
    role: "Web Development Intern",
    duration: "Jun 2024 — Aug 2024",
    description: "Assisted in developing a client dashboard using Next.js and Tailwind CSS. Implemented responsive UI components.",
  },
  {
    company: "Creative Digital Agency",
    role: "UI/UX Design Intern",
    duration: "Jan 2024 — Mar 2024",
    description: "Designed mobile app mockups in Figma and learned the basics of user-centered design principles.",
  }
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

