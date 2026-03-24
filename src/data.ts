import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Cpu, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Layers,
  Terminal,
  Globe,
  Smartphone,
  Layout,
  FileJson,
  GitBranch,
  Cloud,
  BrainCircuit
} from 'lucide-react';

export const TECH_STACK = [
  {
    category: "Frontend",
    icon: Layout,
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Framer Motion"]
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js"]
  },
  {
    category: "Database",
    icon: Database,
    skills: ["MongoDB", "Google Sheets (as lightweight DB)"]
  },
  {
    category: "Other Tools",
    icon: Wrench,
    skills: ["Git & GitHub", "Render (Deployment)", "TensorFlow / Keras"]
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "Tesla Stock Prediction System",
    description: "A machine learning-based web application that predicts Tesla stock prices using historical data.",
    features: [
      "Built using TensorFlow/Keras",
      "Data normalization using StandardScaler",
      "REST API using Flask",
      "Predicts stock prices on custom datasets"
    ],
    tech: ["Python", "TensorFlow", "Flask", "API Integration"],
    image: "https://images.unsplash.com/photo-1649003515353-c58a239cf662?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    title: "ScriptMint (AI Content Generator SaaS)",
    description: "An AI-powered content generation platform that creates structured content like YouTube scripts, stories, dialogue scenes, and blog articles.",
    features: [
      "Multiple content formats",
      "Structured output generation",
      "SaaS-style product design",
      "Focus on automation and productivity"
    ],
    tech: ["React", "Node.js", "Express", "AI APIs"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Contact Form to Google Sheets System",
    description: "A full-stack system where form data is directly stored in Google Sheets using Google Apps Script.",
    features: [
      "Frontend form submission",
      "Backend integration using Apps Script",
      "Handles CORS issues using proxy server",
      "Real-time data storage"
    ],
    tech: ["React", "Node.js", "Google Apps Script"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Skyler (Experimental Hardware Project)",
    description: "A conceptual hardware project that explores separating CO₂ into carbon and oxygen using electrolysis within a limited budget.",
    features: [
      "Budget-constrained innovation",
      "Environmental focus",
      "Experimental design"
    ],
    tech: ["Electrolysis", "Hardware Design", "Sustainability"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  }
];

export const SOCIAL_LINKS = [
  {
    name: "Email",
    url: "mailto:elitewarrior694@gmail.com",
    icon: Mail
  }
];
