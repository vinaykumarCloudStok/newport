// All site content lives here — edit this file to update the portfolio.
// Replace placeholder links (GitHub, demo URLs) with your real ones.

export const profile = {
  name: "Vinay Kumar",
  title: "Frontend Lead Developer",
  role: "React.js · Socket.io · Real-Time Casino & Game Systems",
  subtitle:
    "Building high-performance real-time casino game platforms, crash games, and scalable React frontends for high-concurrency environments.",
  location: "Noida, India",
  email: "vinayakkumar388@gmail.com",
  phone: "+91-7007083150",
  linkedin: "https://www.linkedin.com/in/vinaykumar-4215561a2",
  github: "https://github.com/vinaykumar", // replace with your real GitHub
  whatsapp: "https://wa.me/917007083150",
};

export const stats = [
  { num: 4.6, suffix: "+", label: "YEARS EXPERIENCE" },
  { num: 90, suffix: "+", label: "CASINO GAMES BUILT" },
  { num: 26, suffix: "+", label: "CRASH GAMES" },
  { num: 4000, suffix: "", label: "CONCURRENT USERS" },
];

export const about = [
  "Frontend Lead Developer with 4.6+ years of experience building React-based UIs for real-time casino game platforms. I specialize in React.js, Redux, and WebSockets (Socket.io), with deep expertise in game state management for high-concurrency environments.",
  "I've developed React frontends for 90+ casino games — including 26+ crash games (Aviator-style), 20+ card games, and mini-games — all with real-time synchronization, backend integration, and WebSocket-driven live state updates. I build scalable casino lobby systems, admin dashboards, Unity WebGL integrations, and email marketing platforms, with a strong focus on performance and production-grade frontend architecture.",
];

export type SkillGroup = { title: string; accent: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "Languages",
    accent: "cyan",
    items: ["JavaScript (ES6+)", "TypeScript"],
  },
  {
    title: "Core Frameworks",
    accent: "violet",
    items: ["React.js", "Redux", "Socket.io", "WebSockets"],
  },
  {
    title: "Frontend",
    accent: "cyan",
    items: ["HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Game Development",
    accent: "lime",
    items: [
      "Crash Games (26+)",
      "Card Games (20+)",
      "Slot & Dice Games",
      "Mini Games",
      "Real-Time Game State",
      "Video & GIF Integration",
    ],
  },
  {
    title: "Real-Time Tech",
    accent: "pink",
    items: [
      "Socket.io",
      "WebSockets",
      "Data Sync & State Handling",
      "High-Concurrency Systems",
    ],
  },
  {
    title: "Integration",
    accent: "violet",
    items: [
      "Unity WebGL",
      "Casino Lobby Systems",
      "Bet Panel Logic",
      "REST APIs",
    ],
  },
  {
    title: "Admin & Platform",
    accent: "cyan",
    items: [
      "Game Admin Dashboards",
      "Multi-Game Config Panels",
      "Reporting Tools",
      "Email Marketing Platforms",
    ],
  },
  {
    title: "Tools & Deployment",
    accent: "lime",
    items: ["Git", "Vercel", "AWS S3"],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Frontend Lead Developer – Casino Games",
    company: "Cloudstok · Noida, India",
    period: "2025 – Present",
    points: [
      "Continuing React-based game UI development for the casino platform — building and maintaining crash, card, slot and other game types.",
      "Building new game frontends with React.js, Redux and Socket.io for real-time state management and live gameplay updates.",
      "Collaborating with backend teams on WebSocket integration, game round lifecycle, and production deployments on AWS S3 and Vercel.",
    ],
  },
  {
    role: "Frontend Lead Developer – Casino Games & Email Marketing",
    company: "Cloudstok · Bangalore, India",
    period: "Apr 2023 – 2025",
    points: [
      "Built React frontends for 90+ casino games including 26+ crash games (Aviator-style), 20+ card games, slots, dice and mini-games.",
      "Designed complete game UIs with round timers, auto-bet, auto-cashout, live multiplier animations and real-time result handling.",
      "Implemented real-time game state sync using Socket.io with event-driven architecture across the full round lifecycle.",
      "Built scalable bet panel systems and high-concurrency admin UI supporting 2,000–4,000 simultaneous users.",
      "Integrated Unity WebGL games and video/GIF-based games into the React casino platform.",
    ],
  },
  {
    role: "Frontend Web Developer",
    company: "Cloudstok · Noida, India",
    period: "Oct 2021 – Apr 2023",
    points: [
      "Built and maintained React-based admin panels and dashboards for real-time systems.",
      "Developed reusable UI components and managed complex UI state across game rounds and platform modules.",
      "Spent ~40% of time building dashboards, configuration panels and reporting tools.",
      "Collaborated with backend and cloud teams for feature delivery and production deployment.",
    ],
  },
];

export type Project = {
  name: string;
  icon: string;
  gradient: string;
  desc: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "Real-Time Casino Platform",
    icon: "🎰",
    gradient: "linear-gradient(120deg,#2a0a0a,#ff8a3a)",
    desc: "React UI architecture for 90+ games supporting 2,000–4,000 simultaneous users with dynamic lobbies and live switching.",
    tags: ["React", "Redux", "Socket.io", "REST"],
  },
  {
    name: "Aviator-Style Crash Games (26+)",
    icon: "✈️",
    gradient: "linear-gradient(120deg,#3a0d2a,#ff3ea5)",
    desc: "Live multiplier graphs, cashout logic, auto-bet/auto-cashout and real-time round management driven by Socket.io.",
    tags: ["React", "Socket.io", "Redux", "Canvas"],
  },
  {
    name: "Card Games Suite (20+)",
    icon: "🃏",
    gradient: "linear-gradient(120deg,#1a0a3a,#7b5cff)",
    desc: "Animated card-game UIs with full game-logic integration and WebSocket-driven live state synchronization.",
    tags: ["React", "Redux", "WebSockets"],
  },
  {
    name: "Slot, Dice & Mini Games",
    icon: "🎲",
    gradient: "linear-gradient(120deg,#0a1f3a,#27e6ff)",
    desc: "Responsive game layouts with live bet panels, plus integrated video and GIF-based games for rich media play.",
    tags: ["React", "Socket.io", "Tailwind"],
  },
  {
    name: "Game Admin Dashboards",
    icon: "📊",
    gradient: "linear-gradient(120deg,#0a3a24,#b4ff3a)",
    desc: "Centralized admin covering all 90+ games — config panels, reporting and operational tools with optimized rendering.",
    tags: ["React", "Redux", "Charts"],
  },
  {
    name: "Email Marketing Platform",
    icon: "✉️",
    gradient: "linear-gradient(120deg,#0a2342,#1f6feb)",
    desc: "Full-featured email marketing website with campaign management, template creation and audience targeting in React.",
    tags: ["React", "REST APIs"],
  },
];

export type Service = { icon: string; title: string; desc: string };

export const services: Service[] = [
  { icon: "🎰", title: "Casino Game Frontends", desc: "Crash, card, slot, dice & mini-game UIs built in React." },
  { icon: "🔌", title: "Real-Time Socket Systems", desc: "Low-latency Socket.io & WebSocket state sync." },
  { icon: "⚛️", title: "React Frontend Development", desc: "Scalable React + TypeScript + Redux interfaces." },
  { icon: "🕹️", title: "Multiplayer & Game State", desc: "Event-driven round lifecycle & live game state." },
  { icon: "📊", title: "Admin Dashboards", desc: "Config panels, reporting & operational tools." },
  { icon: "🎮", title: "Unity WebGL Integration", desc: "Embedding Unity & media games into React." },
  { icon: "🔗", title: "API & Backend Integration", desc: "Clean REST and socket integrations." },
  { icon: "⚡", title: "Performance Optimization", desc: "Optimized rendering for high-concurrency apps." },
  { icon: "✉️", title: "Email Marketing Platforms", desc: "Campaign management & template systems." },
];

export type Testimonial = { quote: string; name: string; role: string; avatar: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "Vinay led our crash-game frontend work and the real-time sync was rock solid even under heavy load. Reliable and a pleasure to work with.",
    name: "Daniel R.",
    role: "Product Owner, iGaming Studio",
    avatar: "D",
  },
  {
    quote:
      "He shipped dozens of game UIs with consistent quality and clean architecture. Earned the lead role for good reason.",
    name: "Aisha K.",
    role: "Engineering Manager, Cloudstok",
    avatar: "A",
  },
  {
    quote:
      "Our admin dashboards handle thousands of concurrent users smoothly thanks to his rendering optimizations. Excellent work.",
    name: "Marco L.",
    role: "Platform Lead, Casino Operator",
    avatar: "M",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];
