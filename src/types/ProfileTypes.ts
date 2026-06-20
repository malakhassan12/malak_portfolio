// =======================
// Projects
// =======================

type PROJECT = {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: { name: string }[];
  image: string;
  live: string;
  github: string;
};

// =======================
// Service
// =======================

type SERVICE = {
  num: string;
  title: string;
  description: string;
  href: string;
};

// =======================
// Experience & Education
// =======================

type TimelineDetail = {
  from: string;
  to: string;
  title: string;
  desc: string;
};

type TimelineSection = {
  title: string;
  desc: string;
  details: TimelineDetail[];
};

// =======================
// Skills
// =======================

type Skill = {
  name: string;
  icon: string;
};

type SkillsSection = {
  title: string;
  desc: string;
  details: Skill[];
};

// =======================
// About
// =======================

type About = {
  title: string;
  desc: string;
  name: string;
  phone: string;
  freelance: string;
  nationality: string;
  city: string;
  experience: string;
  email: string;
  languages: string;
};



export type {
  PROJECT,
  SERVICE,
  TimelineDetail,
  TimelineSection,
  Skill,
  SkillsSection,
  About,
};
