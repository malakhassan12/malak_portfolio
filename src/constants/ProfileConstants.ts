import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaJs,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import {
  About,
  PROJECT,
  SERVICE,
  SkillsSection,
  TimelineSection,
} from "@/types/ProfileTypes";

import {
  SiTailwindcss,
  SiRedux,
  SiGraphql,
  SiMongodb,
  SiRedis,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { MdSpeed, MdAccessibility } from "react-icons/md";

const socials: {
  icon: IconType;
  path: string;
  desc: string;
}[] = [
  {
    icon: FaGithub,
    path: "https://github.com/malakhassan12",
    desc: "Visit Malak's GitHub profile",
  },
  {
    icon: FaLinkedinIn,
    path: "https://www.linkedin.com/in/malak-hassan-9819562b3",
    desc: "Connect with Malak on LinkedIn",
  },
  // { icon: FaYoutube, path: "", desc: "Subscribe to Malak's YouTube" },
  // { icon: FaTwitter, path: "", desc: "Follow Malak on Twitter" },
];

const services: SERVICE[] = [
  {
    num: "01",
    title: "Full-Stack MERN Development",
    description:
      "Engineering scalable web applications from scratch using MongoDB, Express.js, React, and Node.js with secure, role-based JWT authentication models.",
    href: "",
  },
  {
    num: "02",
    title: "Next.js & React Engineering",
    description:
      "Developing high-performance, SEO-friendly web solutions utilizing modern frameworks, optimized image/media handling, and advanced state management.",
    href: "",
  },
  {
    num: "03",
    title: "Real-Time Application Architecture",
    description:
      "Implementing bidirectional, low-latency communication channels like live chat, instant messaging, and typing status indicators using Socket.io.",
    href: "",
  },
  {
    num: "04",
    title: "Global State & API Integration",
    description:
      "Architecting predictable data flows with Redux Toolkit, Zustand, or Context API, seamlessly integrated with reliable RESTful APIs via Axios.",
    href: "",
  },
  {
    num: "05",
    title: "Interactive UI/UX & Motion Design",
    description:
      "Translating complex layout designs into fluid, responsive interfaces using Tailwind CSS, Material UI, and micro-interactions powered by Framer Motion.",
    href: "",
  },
  {
    num: "06",
    title: "E-Commerce & Platform Operations",
    description:
      "Building complete commercial logic patterns including dynamic shopping carts, persistent wishlists, search filters, and checkout flows.",
    href: "",
  },
];

const projects: PROJECT[] = [
  {
    num: "01",
    category: "Full-Stack MERN",
    title: "Job Portal Website",
    description:
      "A scalable, role-based job portal web application featuring a multi-role ecosystem (Employer, Job Seeker, Admin). It includes secure authentication, an application tracking system for candidate review, user profile management with secure file handling, and integrated notification/OTP systems.",
    stack: [
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "React" },
      { name: "Node.js" },
      { name: "JWT" },
    ],
    image: "/job-portal.webp", // Replace with your actual image asset path
    live: "", // Add live link when available
    github: "", // Add GitHub repo link when available
  },
  {
    num: "02",
    category: "Real-Time Web Application",
    title: "Real-Time Chat Application",
    description:
      "A full-featured instant messaging platform supporting real-time text and image messages via Socket.io without page reloads. Built with secure password hashing, online/offline status indicators, typing animations, global state management, and optimized asset handling.",
    stack: [
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "React" },
      { name: "Node.js" },
      { name: "Socket.io" },
      { name: "Zustand" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
    image: "/chat-app.webp",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "E-Commerce",
    title: "E-Commerce Skincare Application",
    description:
      "A comprehensive full-stack commercial platform focusing on a seamless shopping experience. Implements complete product search systems, user wishlists, interactive shopping carts, structured checkout flows, dynamic product sliders, and integrated location-based features.",
    stack: [
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "React" },
      { name: "Node.js" },
      { name: "Redux Toolkit" },
      { name: "Material UI" },
      { name: "Framer Motion" },
      { name: "Google Maps API" },
    ],
    image: "/skincare-ecommerce.webp",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Frontend Web Application",
    title: "Weather Application",
    description:
      "A modern, highly responsive weather platform utilizing custom React Hooks for maintenance and local storage to persist temperature units and location history across sessions. Features an interactive map selection tool alongside automatic location detection.",
    stack: [
      { name: "React" },
      { name: "React Router" },
      { name: "Material UI" },
      { name: "Context API" },
      { name: "RESTful API" },
      { name: "Local Storage" },
    ],
    image: "/weather-app.webp",
    live: "",
    github: "",
  },
];

const experience: TimelineSection = {
  title: "My Experience",
  desc: "A timeline of my professional training and full-stack MERN development projects.",
  details: [
    {
      from: "Jun 2025",
      to: "Present",
      title: "MERN Stack Development Intern",
      desc: "Enrolled in the DEPI Internship at YAT Learning Solutions Company, specializing in the React Track as part of the MERN Stack Development. Crafting production-ready applications while focusing on UI performance, security, and modern web accessibility guidelines.",
    },
    {
      from: "2024",
      to: "2025",
      title: "Full-Stack MERN Developer (Projects)",
      desc: "Built scalable applications using MongoDB, Express.js, React, and Node.js. Engineered key features including real-time communication channels via Socket.io, role-based access control with secure JWT authentication, and optimized data flows with state management systems.",
    },
  ],
};

const education: TimelineSection = {
  title: "My Education",
  desc: "My academic background and software engineering foundations.",
  details: [
    {
      from: "2023",
      to: "2027 (Expected)",
      title: "B.Sc. in Computer Science and Artificial Intelligence",
      desc: "Helwan University - Majoring in Information Systems (IS). Strengthening core foundations in data structures, algorithms, object-oriented programming (OOP), database management, and robust web application testing.",
    },
    {
      from: "2020",
      to: "2023",
      title: "High School Certificate",
      desc: "Al-Haram Secondary School - Graduated with a focus on the general scientific curriculum.",
    },
  ],
};

// Icon mapping
const iconMap: Record<string, IconType> = {
  FaJs: FaJs,
  FaHtml5: FaHtml5,
  FaReact: FaReact,
  FaNodeJs: FaNodeJs,
  FaDocker: FaDocker,
  FaGithub: FaGithub,
  SiTailwindcss: SiTailwindcss,
  SiRedux: SiRedux,
  SiGraphql: SiGraphql,
  SiMongodb: SiMongodb,
  SiRedis: SiRedis,
  DiMysql: DiMysql,
  MdSpeed: MdSpeed,
  MdAccessibility: MdAccessibility,
};

const skills: SkillsSection = {
  title: "My Skills",
  desc: "The technologies, frameworks, and tools I use...",
  details: [
    {
      name: "JavaScript (ES6+) & TypeScript",
      icon: "FaJs",
    },
    {
      name: "HTML5 & CSS3",
      icon: "FaHtml5",
    },
    {
      name: "React & Next.js Frameworks",
      icon: "FaReact",
    },
    {
      name: "Tailwind CSS",
      icon: "SiTailwindcss",
    },
    {
      name: "Redux Toolkit",
      icon: "SiRedux",
    },
    {
      name: "Node.js & Express.js",
      icon: "FaNodeJs",
    },
    {
      name: "GraphQL",
      icon: "SiGraphql",
    },
    {
      name: "MongoDB",
      icon: "SiMongodb",
    },
    {
      name: "SQL",
      icon: "DiMysql",
    },
    {
      name: "Redis",
      icon: "SiRedis",
    },
    {
      name: "Docker",
      icon: "FaDocker",
    },
    {
      name: "Git & GitHub",
      icon: "FaGithub",
    },
    {
      name: "Performance Optimization",
      icon: "MdSpeed",
    },
    {
      name: "Accessibility",
      icon: "MdAccessibility",
    },
  ],
};

const about: About = {
  title: "About Me",
  desc: "I am a dedicated MERN Stack Developer specializing in building high-performance web solutions using MongoDB, Express, React, and Node.js.",
  name: "Malak Hassan Hashem",
  phone: "11 11 111 111",
  freelance: "Available",
  nationality: "Egyptian",
  city: "Giza",
  experience: "1+ Years (Academic Projects & Internship)",
  email: "malak444hassan@gmail.com",
  languages: "Arabic (Native), English (B2)",
};

type ProfileInfo = {
  experience: TimelineSection;
  education: TimelineSection;
  skills: SkillsSection;
  about: About;
};

const collectInfo: ProfileInfo = {
  experience,
  education,
  skills,
  about,
};
const contactDetails = [
  {
    icon: FaPhone,
    label: "Phone",
    value: "(+20) 11 11 111 111",
    href: "tel:+20 11 11 111 111",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "malak444hassan@gmail.com",
    href: "mailto:malak444hassan@gmail.com",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Address",
    value: "El Jizah",
    href: null,
  },
];

export { socials, services, projects, collectInfo, iconMap, contactDetails, about };
