import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import FireCoat from "@/public/FIRECOAT-Australia.png";
import HousePlan from "@/public/House-plan.png";
import wordanalyticsImg from "@/public/First-Day-AI-AI-Powered-Recruitment-Platform.png";

interface NavLink {
  name: string;
  hash: string;
}

interface Experience {
  title: string;
  location: string;
  description: string;
  icon: React.ReactNode;
  date: string;
  company?: string;
  achievements?: string[];
  duration?: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: any;
  href: string;
  githubUrl?: string;
  role?: string;
  duration?: string;
}

interface SkillCategory {
  category: string;
  skills: string[];
}

export const links: NavLink[] = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const experiencesData: Experience[] = [
  {
    title: "Full-Stack Developer",
    company: "FIRECOAT Australia",
    location: "Sydney, Australia",
    description:
      "Led the development of a comprehensive paint company website, implementing a full CMS system for multi-tenant websites. Managed the entire development lifecycle from design to deployment.",
    icon: React.createElement(FaReact),
    date: "March 2024 - January 2025",
    achievements: [
      "Built a scalable CMS system supporting multiple tenants",
      "Implemented responsive design across all device types",
      "Integrated payment processing and inventory management systems",
    ],
  },
  {
    title: "Frontend Web Developer",
    company: "Relevance Studio",
    location: "Canada · Remote",
    description:
      "Specialized in creating immersive web experiences using Next.js for e-commerce stores and job application portals. Focused on user engagement, performance optimization, and developing intuitive candidate application flows. Led the development of several high-profile client projects.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
    achievements: [
      "Developed responsive web applications with modern UI/UX principles",
      "Implemented performance optimizations resulting in 40% faster load times",
      "Collaborated with design teams to create seamless user experiences",
    ],
  },
  {
    title: "Freelance Web Developer",
    location: "Fiverr",
    description:
      "Provided high-quality web development services to various clients, specializing in modern frontend technologies and responsive design.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - Present",
    achievements: [
      "Completed 100+ successful projects with 5-star ratings",
      "Specialized in React and Next.js development",
      "Maintained 98% client satisfaction rate",
    ],
  },
];

export const projectsData: Project[] = [
  {
    title: "AI Interview App",
    description:
      "A sophisticated AI-powered interview platform that revolutionizes the hiring process. The system generates context-aware interview questions and provides real-time analysis of candidate responses.",
    tags: ["Azure Document AI", "Next.js", "SQL", "OpenAI API", "Supabase"],
    imageUrl: wordanalyticsImg,
    href: "https://ai-interview-rosy.vercel.app",
    role: "Full-Stack Developer",
    duration: "6 months",
  },
  {
    title: "FIRECOAT Australia",
    description:
      "A comprehensive e-commerce platform for a leading paint company in Australia. Features include product catalog, color matching tools, and a sophisticated inventory management system.",
    tags: ["React", "Next.js", "Payload CMS", "Tailwind"],
    imageUrl: FireCoat,
    href: "https://firecoat.com.au/",
    role: "Full-Stack Developer",
    duration: "1 year",
  },
  {
    title: "House Plans & Floor Plans",
    description:
      "Browse The Plan Collection&#39;s over 22,000 house plans to help build your dream home! Choose from a wide variety of all architectural styles and designs.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: HousePlan,
    href: "https://www.theplancollection.com/",
    role: "Full-Stack Developer",
    duration: "6 months",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Deep Learning",
  "TensorFlow",
  "PyTorch",
  "OpenAI API",
  "LangChain",
  "AWS",
  "Docker",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redis",
  "Redux",
  "Express",
  "Stripe",
  "Payrexx",
  "PostgreSQL",
] as const;

// Add a separate constant for skill categories if needed for UI organization
export const skillCategories = {
  "Frontend Development": [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind",
    "Redux",
  ],
  "Backend Development": [
    "Node.js",
    "Express",
    "Prisma",
    "PostgreSQL",
    "MongoDB",
    "Redis",
  ],
  "AI & Machine Learning": [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "TensorFlow",
    "PyTorch",
    "OpenAI API",
    "LangChain",
  ],
  "DevOps & Cloud": ["AWS", "Docker", "Git", "CI/CD"],
  "Payment Processing": ["Stripe", "Payrexx"],
} as const;
