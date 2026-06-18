import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import type { IconType } from "react-icons";
import { PROJECT, SERVICE } from "@/types/ProfileTypes";

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
      "Engineering scalable web applications from scratch using MongoDB, Express.js, React, and Node.js with secure, role-based JWT authentication models[cite: 4, 17, 18].",
    href: "",
  },
  {
    num: "02",
    title: "Next.js & React Engineering",
    description:
      "Developing high-performance, SEO-friendly web solutions utilizing modern frameworks, optimized image/media handling, and advanced state management[cite: 5, 6, 31].",
    href: "",
  },
  {
    num: "03",
    title: "Real-Time Application Architecture",
    description:
      "Implementing bidirectional, low-latency communication channels like live chat, instant messaging, and typing status indicators using Socket.io[cite: 25, 27, 28].",
    href: "",
  },
  {
    num: "04",
    title: "Global State & API Integration",
    description:
      "Architecting predictable data flows with Redux Toolkit, Zustand, or Context API, seamlessly integrated with reliable RESTful APIs via Axios[cite: 30, 40, 41].",
    href: "",
  },
  {
    num: "05",
    title: "Interactive UI/UX & Motion Design",
    description:
      "Translating complex layout designs into fluid, responsive interfaces using Tailwind CSS, Material UI, and micro-interactions powered by Framer Motion[cite: 29, 42].",
    href: "",
  },
  {
    num: "06",
    title: "E-Commerce & Platform Operations",
    description:
      "Building complete commercial logic patterns including dynamic shopping carts, persistent wishlists, search filters, and checkout flows[cite: 39].",
    href: "",
  },
];

const projects: PROJECT[] = [
  {
    num: "01",
    category: "Full-Stack MERN",
    title: "Job Portal Website",
    description:
      "A scalable, role-based job portal web application featuring a multi-role ecosystem (Employer, Job Seeker, Admin). It includes secure authentication, an application tracking system for candidate review, user profile management with secure file handling, and integrated notification/OTP systems[cite: 16, 17, 18, 20, 21, 22].",
    stack: [
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "React" },
      { name: "Node.js" },
      { name: "JWT" },
    ],
    image: "/assets/projects/job-portal.png", // Replace with your actual image asset path
    live: "", // Add live link when available
    github: "", // Add GitHub repo link when available
  },
  {
    num: "02",
    category: "Real-Time Web Application",
    title: "Real-Time Chat Application",
    description:
      "A full-featured instant messaging platform supporting real-time text and image messages via Socket.io without page reloads. Built with secure password hashing, online/offline status indicators, typing animations, global state management, and optimized asset handling[cite: 24, 25, 26, 27, 28, 30, 31].",
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
    image: "/assets/projects/chat-app.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "E-Commerce",
    title: "E-Commerce Skincare Application",
    description:
      "A comprehensive full-stack commercial platform focusing on a seamless shopping experience. Implements complete product search systems, user wishlists, interactive shopping carts, structured checkout flows, dynamic product sliders, and integrated location-based features[cite: 35, 36, 39, 43, 45].",
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
    image: "/assets/projects/skincare-ecommerce.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Frontend Web Application",
    title: "Weather Application",
    description:
      "A modern, highly responsive weather platform utilizing custom React Hooks for maintenance and local storage to persist temperature units and location history across sessions. Features an interactive map selection tool alongside automatic location detection[cite: 47, 48, 49, 51, 52, 54].",
    stack: [
      { name: "React" },
      { name: "React Router" },
      { name: "Material UI" },
      { name: "Context API" },
      { name: "RESTful API" },
      { name: "Local Storage" },
    ],
    image: "/assets/projects/weather-app.png",
    live: "",
    github: "",
  },
];

export { socials, services, projects };
