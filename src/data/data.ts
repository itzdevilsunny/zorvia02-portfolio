import { LucideIcon, Rocket, Brain, Globe, ChartLine } from 'lucide-react';

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  projects?: string[];
  achievements?: string[];
  image: string;
  type: 'founder' | 'core';
}

export interface Service {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  problem: string;
  solution: string;
  stack: string[];
  impact: string;
  image: string;
  link?: string;
}

export interface TimelineItem {
  year: string;
  event: string;
}

export interface Blog {
  image: string;
  button: string;
  name: string;
  date: string;
  title: string;
}

export interface Review {
  name: string;
  role: string;
  rating: number;
  text: string;
}

export interface PortfolioItem {
  image: string;
  title: string;
  href: string;
  desc: string;
}

export interface CardData {
  title: string;
  imageSrc: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Sunny Prasad",
    role: "Founder & CEO",
    bio: "Founder of zorvia.digital and full-stack developer passionate about scalable software, smart-city systems and AI-driven products. Led multiple hackathon innovations and digital solution prototypes.",
    specialties: ["React", "FastAPI", "AWS", "Docker", "Smart Governance", "SaaS Architecture"],
    projects: ["Smart Campus Attendance Tracker", "Urban Pulse AI Dashboard", "Enterprise Modernization Platform"],
    achievements: ["Smart India Hackathon Shortlisted", "20+ National Hackathons", "NCC Leadership (Corporal)"],
    image: "/team/sunny.jpg", // Placeholder path
    type: 'founder'
  },
  {
    name: "Yash Raj Kushwaha",
    role: "Co-Founder & CTO",
    bio: "Co-founder focused on full-stack systems, applied AI and digital governance innovation. Brings strong technical depth in React ecosystems and problem-driven product engineering.",
    specialties: ["React / React Native", "Node.js & REST APIs", "AI/ML Concepts", "Government-Tech Solutions"],
    projects: ["Optical Character Recognition", "Smart Attendance Solutions", "Labour Welfare Disbursement"],
    achievements: ["Smart India Hackathon Winner (Internal)", "Multiple National Hackathons", "Code Slayer/HackCreate/Unstoppable"],
    image: "/team/yash.jpg",
    type: 'founder'
  },
  {
    name: "Sumit Kumar",
    role: "Co-Founder & Engineering Lead",
    bio: "Co-founder focused on clean scalable web engineering and product implementation with strong foundations in DSA and modern frameworks.",
    specialties: ["React", "Next.js", "Django", "Software Architecture"],
    projects: ["React-Django Applications", "Data Structures Implementations"],
    image: "/team/sumit.jpg",
    type: 'founder'
  },
  {
    name: "Sudeep Shah",
    role: "AI Systems Engineer",
    bio: "Focuses on Computer Vision, Edge AI, and System Design.",
    specialties: ["Computer Vision", "Edge AI", "System Design"],
    projects: ["Autonomous Shield Surveillance", "Construction AI Management"],
    image: "/team/rahish.jpg",
    type: 'core'
  },
  {
    name: "Nidhi Chaurasiya",
    role: "Backend & Data Systems Associate",
    bio: "Expertise in Database Systems, Backend Logic, and Analytics Workflows.",
    specialties: ["Database Systems", "Backend Logic", "Analytics"],
    projects: ["BoothIQ", "Library Management System"],
    image: "/team/nidhi.png",
    type: 'core'
  },
  {
    name: "Ritika Ranjan",
    role: "Frontend & Data Associate",
    bio: "Focuses on Web Development, Data Analysis, and Product Support.",
    specialties: ["Web Development", "Data Analysis", "Product Support"],
    image: "/team/ritika.jpg",
    type: 'core'
  },
  {
    name: "Rahish Kumar",
    role: "Software Associate",
    bio: "Specializes in C++ Foundations, Algorithms, and Web Fundamentals.",
    specialties: ["C++ Foundations", "Algorithms", "Web Fundamentals"],
    image: "/team/sudeep.jpg",
    type: 'core'
  }
];

export const services: Service[] = [
  {
    title: "Web Products",
    desc: "Custom websites, dashboards, and enterprise portals built for performance.",
    icon: Globe
  },
  {
    title: "SaaS Solutions",
    desc: "Scalable software products tailored to your business needs.",
    icon: Rocket
  },
  {
    title: "AI Solutions",
    desc: "Automation, ML integrations, and intelligent systems for the modern era.",
    icon: Brain
  },
  {
    title: "Growth Solutions",
    desc: "Brand websites, conversion funnels, and digital scaling strategies.",
    icon: ChartLine
  }
];

export const featuredProjects: Project[] = [
  {
    title: "Zorvia Digital Official",
    problem: "Need for a high-impact digital presence for a fast-growing startup studio.",
    solution: "Premium Next.js 15 site with glassmorphism, fluid animations, and dark mode aesthetics.",
    stack: ["Next.js 15", "Tailwind CSS", "Framer Motion"],
    impact: "Established digital authority and unified company branding.",
    image: "/projects/zorvia.png",
    link: "https://zorvia.digital"
  },
  {
    title: "Sync Skills (DBMS)",
    problem: "Inconsistent career paths and skill gaps in professional development.",
    solution: "AI-driven skill synchronization platform that maps user capabilities to real-world roles.",
    stack: ["React", "Supabase", "AI", "PostgreSQL"],
    impact: "Streamlined recruitment and personalized career growth paths.",
    image: "/projects/dbms.png",
    link: "https://dbms-kappa-ten.vercel.app/"
  },
  {
    title: "BoothIQ Insights Portal",
    problem: "Lack of transparency and real-time data in local governance and grievance management.",
    solution: "A data-driven portal for representatives to monitor sector health and resolve citizen issues.",
    stack: ["Next.js", "Data Viz", "Automated Workflows"],
    impact: "Improved responsiveness in public sector management and data-driven governance.",
    image: "/projects/booth-iq.png",
    link: "https://26th-may-booth-iq.vercel.app/"
  },
  {
    title: "Smart Parking Enforcement",
    problem: "Manual parking monitoring is inefficient and hard to scale in urban environments.",
    solution: "AI-powered dashboard for real-time parking violations and control.",
    stack: ["React", "AI/CV", "Node.js", "PostgreSQL"],
    impact: "70% faster violation processing and improved city revenue flow.",
    image: "/projects/parking.png",
    link: "https://smart-parking-enforcement-system-ij.vercel.app"
  },
  {
    title: "OMGL - Live Video Connect",
    problem: "Lack of instant, secure human connection in digital spaces.",
    solution: "High-performance WebRTC video streaming platform for instant peer-to-peer connection.",
    stack: ["WebRTC", "Socket.io", "Next.js", "Tailwind"],
    impact: "Scaled to thousands of concurrent users with sub-100ms latency.",
    image: "/projects/omgl.png",
    link: "https://omgl-live.vercel.app"
  },
  {
    title: "Rockfall AI - Predictive Safety",
    problem: "Mining disasters caused by unpredictable rockfalls costing lives and equipment.",
    solution: "Predictive AI monitoring system that identifies structural risks before failures occur.",
    stack: ["Predictive AI", "Sensor Fusion", "Real-time Dashboards"],
    impact: "95%+ predictive accuracy for high-risk mining zones.",
    image: "/projects/rockfall.png",
    link: "https://rockfall-ai-eight.vercel.app/#"
  },
  {
    title: "Urban Pulse - Infrastructure AI",
    problem: "Urban decay and infrastructure failures go unnoticed until they become emergencies.",
    solution: "Real-time AI vision analysis to monitor and predict infrastructure maintenance needs.",
    stack: ["Computer Vision", "Infrastructure AI", "Geo-mapping"],
    impact: "Proactive maintenance saving millions in emergency repair costs.",
    image: "/projects/urban-pulse.png",
    link: "https://ai-smart-city-tau.vercel.app/"
  },
  {
    title: "Adventure Mania",
    problem: "Booking adventure tours and travel packages can be fragmented and lacks a unified interface for exploration.",
    solution: "A comprehensive travel and adventure booking platform featuring curated packages across India.",
    stack: ["Web Development", "Travel Tech", "UI/UX"],
    impact: "Streamlined booking process for diverse adventure activities in regions like Uttarakhand and Himachal.",
    image: "/projects/adventure-mania.png",
    link: "https://www.adventuremania.com/"
  },
  {
    title: "Loft Hills - Luxury Resorts",
    problem: "High-end resorts need a digital presence that reflects their luxury and hospitality standards.",
    solution: "A premium resort management and booking showcase for boutique hotel properties.",
    stack: ["Hospitality Tech", "Next.js", "Premium UI"],
    impact: "Enhanced digital footprint for luxury resorts, driving direct bookings and guest engagement.",
    image: "/projects/loft-hills.png",
    link: "https://share.google/JK4pyEMPvA3RHutma"
  }
];

export const techStack = {
  frontend: ["React", "Next.js", "Tailwind CSS"],
  backend: ["Node.js", "FastAPI", "Django"],
  cloud: ["AWS", "Docker", "Kubernetes"],
  aiData: ["Python", "OpenCV", "YOLO", "PostgreSQL"]
};

export const whyChooseUs = [
  { metric: "20+", label: "Hackathons Won" },
  { metric: "10+", label: "Prototype Solutions" },
  { metric: "7", label: "Multi-domain Experts" },
  { metric: "AI+Web", label: "Full Stack Growth" }
];

export const timeline: TimelineItem[] = [
  { year: "2024", event: "Zorvia Digital Founded" },
  { year: "2025", event: "Hackathon Expansion & R&D" },
  { year: "2026", event: "Product Studio Launch" }
];

// Re-exporting some original interfaces for compatibility if needed
export const skills: string[] = [
  "JavaScript", "TypeScript", "Next.js", "React", "Node.js", "Tailwind CSS", "Python", "FastAPI", "AWS"
];

export const buttons: string[] = ["SaaS", "AI", "Web", "Growth"];
