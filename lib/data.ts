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
  tagline: "Software Development • UI/UX Design • Visual Arts",
  location: "Karpagam College of Engineering, Coimbatore",
  avatar: "/Deepak.webp",
  avatarPassPort:"/Deepak Passport.png",
  initials: "DV",
  username: "deepak",
  email: "deepakviji5556@gmail.com",
  github: "https://github.com/Deepak5556",
  linkedin: "https://www.linkedin.com/in/deepak5556",
  twitter: "https://x.com/deepakviji5556",
  instagram: "https://www.instagram.com/insta_boy_deepak__/",
  linktree: "https://linktr.ee/deepakkumar007",
  website: "deepakportfolioo.web.app",
  currentWork: "Actively Learning & Building",
};

export const aboutDetails = {
  paragraphs: [
    "I am Deepakkumar V, a Full Stack Developer, Mobile Application Developer, and UI/UX Designer with a strong foundation in building scalable, performant, and user-centric digital products. I specialise in developing responsive web and mobile applications with an emphasis on clean architecture, performance optimisation, and intuitive interface design.",

    "In addition to software development, I bring professional experience in visual content creation — including videography, video editing, photography, and photo retouching. This cross-disciplinary background enables me to approach every project with both technical precision and a refined design sensibility, resulting in products that are as visually compelling as they are functionally robust.",

    "I have hands-on experience with technologies including React, Flutter, Node.js, Firebase, and industry-standard UI/UX tools. Through internships, national-level hackathons, and independent projects, I have developed strong competencies in problem-solving, cross-functional collaboration, and end-to-end product development."
  ]
};

export const skillDetails = [
  {
    icon: Code2,
    title: "Software Development",
    desc: "Designing and developing scalable web applications and cross-platform mobile solutions using modern technology stacks.",
    tools: ["React", "Next.js", "Flutter", "Node.js", "Dart"],
    href: "/software"
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    desc: "Creating pixel-perfect, accessible, and user-centred interface designs with a focus on usability and brand consistency.",
    tools: ["Figma", "Adobe XD", "UI/UX", "Branding"],
    href: "/designs"
  },
  {
    icon: Sparkles,
    title: "Visual Arts",
    desc: "Producing cinematic video content and professional photography with advanced post-production and colour grading.",
    tools: ["Premiere Pro", "After Effects", "Photoshop", "Lightroom"],
    href: "/media"
  },
];

export const homeAboutDetails = {
  paragraphs: [
    "I am Deepakkumar V, a Full Stack Developer, Mobile Application Developer, and UI/UX Designer with a passion for building seamless, high-quality digital experiences. I specialise in developing modern web and mobile applications that balance functionality, performance, and intuitive design.",

    "Beyond engineering, I bring professional expertise in visual content creation — videography, video editing, photography, and photo editing. This creative foundation allows me to approach projects with a strong sense of visual storytelling, aesthetics, and user engagement.",

    "I am committed to delivering clean, polished, and technically sound work, with close attention to both engineering quality and visual detail. Whether architecting applications, designing interfaces, or producing visual content, I build experiences that are impactful, accessible, and production-ready."
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
    title: "Dhruva — Official Event Website",
    description: "Developed kcedhruva.in, the official website for Karpagam College of Engineering's annual cultural event Dhruva, as part of the CATOM team. The platform delivers event information, schedules, and online registration, significantly improving accessibility and user engagement for attendees.",
    tech: ["React", "Tailwind CSS", "SEO"],
    image: "https://deepakportfolioo.web.app/assets/dhruva-BYimjnIf.webp",
    icon: ShieldCheck,
  },
  {
    title: "Blood Donation App",
    description: "A Flutter-based mobile application designed to streamline blood donor discovery and donation requests. The app supports donor registration, geolocation-based donor search, request submission, and emergency contact access — facilitating faster and more reliable connections between donors and recipients.",
    tech: ["Flutter", "Firebase", "Dart"],
    link: "https://deepakportfolioo.web.app",
    image: "https://deepakportfolioo.web.app/assets/bloodDonationApp-B9GIfnV1.webp",
    icon: Globe,
  },
  {
    title: "SnapLearn",
    description: "A Flutter-based mobile application that leverages image recognition to generate contextual descriptions of captured or uploaded photos. Built for accessibility and interactive learning, the app integrates the Claude API to deliver instant, easy-to-understand visual explanations.",
    tech: ["Flutter", "Firebase", "Dart", "Claude API"],
    link: "https://deepakportfolioo.web.app",
    image: "https://deepakportfolioo.web.app/assets/snaplearn-ZHnt1vW8.webp",
    icon: Layout,
  },
];

export const achievements = [
  {
    id: "hackfest-2k24",
    event: "Second Prize — National Level Hackathon",
    org: "Erode Sengunthar Engineering College",
    desc: "Secured 2nd place at HACKFEST 2k24, a National Level Hackathon conducted by the Department of Computer Science and Engineering, competing against teams from institutions across the country.",
    year: "2024",
    details: [
      "Served as Team Leader, coordinating task distribution and ensuring effective cross-team collaboration under strict time constraints.",
      "Designed, developed, and deployed a fully functional application within the hackathon timeline.",
      "Gained practical experience in rapid prototyping, agile decision-making, and live product presentation.",
      "Strengthened problem-solving, communication, and technical leadership competencies.",
      "Demonstrated the ability to translate ideas into production-ready solutions under competitive conditions.",
      "Presented the project to an industry panel, receiving feedback on architecture, scalability, and usability."
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
    description: "Produced a highlight reel for a college trip, capturing the energy and shared experiences of the event. The edit features rhythmic cut synchronisation, smooth transitions, cinematic colour grading, and motion typography to maintain engagement and visual continuity throughout.",
    videoSrc: "/web/trip.webm",
    poster: "/web/trip.webp"
  },
  {
    id: "dhruva-2025",
    title: "Dhruva 2025",
    tools: ["After Effects"],
    description: "Edited a highlights package for Dhruva 2025, documenting key performances and crowd moments from the annual college cultural event. The production incorporates beat-synchronised cuts, motion graphics, dynamic transitions, and cinematic colour grading to deliver a high-energy, visually polished final cut.",
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
    description: "Stage photography captured during Dhruva 2026, a college cultural event, documenting a traditional dance ensemble performance. The composition emphasises symmetry, expressive movement, and dramatic stage lighting. Post-production includes targeted colour grading, contrast calibration, and lighting enhancement to reinforce mood and visual impact while preserving costume and skin tone accuracy.",
    thumbnail: "/Dhruva2026.webp",
    images: [
      "/Dhruva2026.webp"
    ]
  },
  {
    id: "dhruva2026",
    title: "Dhruva 2026",
    tools: ["Event Photography"],
    location: "Karpagam College of Engineering",
    description: "Event photography from Dhruva 2026 capturing a classical dance performance on the main stage. Includes both raw and edited versions to demonstrate the full post-production workflow — encompassing colour grading, exposure correction, and contrast enhancement to achieve a professional, publication-ready result.",
    thumbnail: "/web/dhruva2026raw.webp",
    images: [
      "/web/dhruva2026raw.webp",
      "/web/dhruva2026edited.webp"
    ]
  }
];

export interface DesignProject {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
  featured: boolean;
  date: string;
  tools: string[];
  tags: string[];
}

export const designProjects: DesignProject[] = [
 {
  id: "Cognito",
  title: "Cognito E-Learning Platform",
  description:
    "A modern e-learning dashboard UI crafted to enhance online learning experiences with an intuitive and clean interface. Features course progress tracking, interactive learning modules, student management sections, and a seamless user journey designed for both learners and educators.",
  category: "Dashboard Design",
  image: "/Cognito.webp",
  link: "",
  featured: false,
  date: "2025-03-01",
  tools: ["Figma", "Auto Layout", "Variables"],
  tags: ["E-Learning", "Dashboard", "UI/UX", "Education Platform"],
},{
  id: "personalportfolio",
  title: "Personal Portfolio Website",
  description:
    "A modern and responsive personal portfolio website designed to showcase skills, projects, experience, and creative work in a clean and professional layout. Features smooth navigation, project highlights, interactive UI sections, and a visually balanced design focused on personal branding and user engagement.",
  category: "Web Design",
  image: "/PersonalPortfolio.webp",
  link: "https://deepakportfolioo.web.app/",
  featured: true,
  date: "2026-05-25",
  tools: ["Figma", "FigJam", "Prototyping"],
  tags: ["Portfolio", "Personal Website", "UI/UX", "Responsive Design"],
},
 {
  id: "Sign2Sense",
  title: "Sign2Sense — Sign Lang Learning App",
  description:
    "A modern mobile learning application designed to help deaf and mute individuals learn sign language through interactive lessons, visual guidance, and daily practice exercises. Features progress tracking, beginner-friendly learning modules, and an accessible user experience focused on inclusive communication and education.",
  category: "Mobile App Design",
  image: "/SignTwoSense.webp",
  link: "",
  featured: true,
  date: "2025-01-15",
  tools: ["Figma", "Prototyping", "Component Library"],
  tags: ["Sign Language", "Mobile App", "Accessibility", "Education"],
},
  // {
  //   id: "shopify-redesign",
  //   title: "Velora — E-Commerce Redesign",
  //   description:
  //     "A full UX audit and redesign of a fashion e-commerce platform. Focused on reducing checkout friction, improving product discovery, and establishing a cohesive visual identity across web and mobile breakpoints.",
  //   category: "Web Design",
  //   image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
  //   link: "https://www.figma.com/",
  //   featured: true,
  //   date: "2024-11-20",
  //   tools: ["Figma", "Adobe XD", "Illustrator"],
  //   tags: ["E-Commerce", "Redesign", "UX Audit", "Responsive"],
  // },
  
  
  // {
  //   id: "brand-identity-nexgen",
  //   title: "NexGen — Brand Identity System",
  //   description:
  //     "Complete brand identity design for a technology startup including logo design, colour palette, typography system, iconography, and a full component-level UI kit aligned with the brand guidelines.",
  //   category: "Branding",
  //   image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  //   link: "https://www.figma.com/",
  //   featured: false,
  //   date: "2024-05-18",
  //   tools: ["Figma", "Illustrator", "Canva"],
  //   tags: ["Branding", "Logo Design", "UI Kit", "Startup"],
  // },
];

export const appProjects = [
  {
    title: "Campus Connect",
    description: "A social networking platform for college students enabling resource sharing, peer collaboration, and academic community engagement.",
    tech: ["Flutter", "Firebase", "Dart", "Cloud Functions"],
    image: "",
    icon: TabletSmartphone,
    link: "",
    platform: "iOS & Android",
  },
  {
    title: "Budget Tracker",
    description: "A personal finance application featuring expense tracking, budget management, and visual spending analytics. Built with an offline-first architecture and cloud synchronisation.",
    tech: ["FlutterFlow", "Firebase", "Hive"],
    image: "",
    icon: TabletSmartphone,
    link: "",
    platform: "Cross-platform",
  },
  {
    title: "Task Manager Pro",
    description: "A productivity application with task scheduling, priority management, and a Kanban board view for structured project organisation.",
    tech: ["Flutter", "SQLite", "Provider"],
    image: "",
    icon: TabletSmartphone,
    link: "",
    platform: "Android",
  },
  {
    title: "Event Check-in",
    description: "A QR code-based event registration and check-in system with a real-time attendance tracking dashboard for event administrators.",
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
    location: "Coimbatore, Tamil Nadu, India",
    description: "Coursework focused on Software Engineering, Data Structures, Algorithms, and Web Technologies. Active member of the college Technical Club.",
  },
  {
    school: "Vani Vidyalaya Matric Hr Sec School",
    degree: "Higher Secondary Education (HSC)",
    duration: "2019 — 2021",
    location: "Tamil Nadu, India",
    description: "Completed Higher Secondary education with a specialisation in Computer Science and Mathematics.",
  }
];

export interface WorkExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  tech: string[];
  responsibilities: string[];
  link?: string;
}

export const workExperience: WorkExperienceItem[] = [
  // {
  //   id: "freelance-dev",
  //   company: "Freelance",
  //   role: "Full Stack Developer",
  //   duration: "2023 — Present",
  //   description: "Building custom web solutions for local clients using React and Node.js. Focused on performance and SEO.",
  //   tech: ["React", "Node.js", "Tailwind CSS", "MongoDB", "SEO"],
  //   responsibilities: [
  //     "Architected and deployed responsive web applications for various small business clients.",
  //     "Implemented SEO best practices, resulting in a 40% increase in organic traffic for client sites.",
  //     "Managed full project lifecycles from requirement gathering to deployment and maintenance.",
  //     "Optimised website performance, achieving sub-second load times on mobile devices."
  //   ],
  //   link: "https://github.com/Deepak5556"
  // }
];

export const internships = [
  {
    id: "transzio-integral-systems-intern",
    company: "Transzio Integral Systems LLP",
    role: "Software Developer — Trainee",
    duration: "Feb 2026 — Mar 2026",
    description: "Completed a trainee internship within the IoT Product Development department, contributing to technical development tasks and collaborative project activities.",
    tech: ["UI/UX", "App Development", "Web Development"],
    responsibilities: [
      "Contributed to the IoT Product Development team on real-world technical implementation tasks.",
      "Assisted in the development and enhancement of embedded and automation-based system solutions.",
      "Collaborated with team members across project phases including design, development, and testing.",
      "Participated in debugging, quality assurance, and performance optimisation of system components."
    ]
  },
  {
    id: "interface-technologies-intern",
    company: "InterFace Technologies",
    role: "App Development Intern",
    duration: "Aug 2025 — Feb 2026",
    description: "Selected via LinkedIn for a 6-month internship focused on mobile application development, contributing to production-grade projects within a professional development environment.",
    tech: ["Flutter", "API Integration", "Mobile App Development", "UI Development"],
    responsibilities: [
      "Developed and maintained mobile application features using Flutter and modern mobile development frameworks.",
      "Collaborated with the engineering team to implement, refine, and ship application functionality.",
      "Integrated RESTful APIs and managed real-time data flows within mobile applications.",
      "Participated in code reviews, debugging sessions, and performance testing to ensure application quality."
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