export interface Project {
  id: string;
  title: string;
  category: 'AI & Agents' | 'Full-Stack & SaaS' | 'Automation & Dashboards' | 'Web Apps';
  tagline: string;
  description: string;
  problemSolved: string;
  features: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  metricsBadge?: string;
  gradient: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: { name: string; highlight?: boolean }[];
}

export interface CreativeProject {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  brandTag?: string;
  techniques: string[];
  toolsUsed: string[];
  platforms: string[];
  accentColor: string;
  aspectRatio: string;
  statsLabel?: string;
}

export const PERSONAL_INFO = {
  fullName: 'Syed Abdul Rafay',
  shortName: 'Abdul Rafay',
  preferredNick: 'Rafay',
  location: 'Karachi, Pakistan',
  status: 'Open to Full-Stack & AI Roles / Projects',
  headline: 'Full-Stack Developer • AI Systems Engineer • Agentic Automation Builder',
  tagline: "I don't just build websites. I build intelligent digital products.",
  bioShort:
    "Information Technology student at Virtual University of Pakistan (VU) crafting modern full-stack web applications, autonomous AI agents, intelligent workflows, and creative 3D visual experiences.",
  githubMain: 'https://github.com/Rafay100',
  githubSecondary: 'https://github.com/SRafay',
  email: 'srafay.dev@gmail.com',
  linkedin: 'https://linkedin.com/in/syed-abdul-rafay',
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'kpi-dashboard',
    title: 'KPI & Performance Dashboard',
    category: 'Automation & Dashboards',
    tagline: 'Modern Enterprise KPI & Employee Performance Management System',
    description:
      'A production-grade KPI tracking dashboard built for organization-wide performance oversight, task allocation, and real-time operational analytics.',
    problemSolved:
      'Replaced messy spreadsheets with a consolidated, real-time metrics command center powered by Airtable as a robust structured backend.',
    features: [
      'Real-time KPI scoring and metric aggregation across teams',
      'Employee & Department management with tiered role views',
      'Task tracking, achievements logs, and progress forecasting',
      'Comprehensive performance reports with visual data charts',
      'Direct Airtable schema integration for live data persistence',
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Airtable', 'Recharts'],
    liveUrl: 'https://kpi-dashboard-one-ecru.vercel.app/',
    githubUrl: 'https://github.com/Rafay100/KPI_Dashboard',
    featured: true,
    metricsBadge: 'Live Production',
    gradient: 'from-[#B600A8]/20 via-[#7621B0]/20 to-[#BE4C00]/20',
  },
  {
    id: 'ai-social-saas',
    title: 'AI Social Media Management SaaS',
    category: 'Full-Stack & SaaS',
    tagline: 'Multi-Platform AI Content Generation & Automated Scheduling Suite',
    description:
      'An end-to-end AI-powered SaaS platform engineered to streamline content creation, schedule publishing, and optimize engagement across TikTok, YouTube, Instagram, and Facebook.',
    problemSolved:
      'Eliminates social media burnout by automating high-converting caption generation, hashtag discovery, video hook analysis, and multi-channel publishing calendars.',
    features: [
      'Multi-platform content staging & automated schedule planner',
      'Gemini LLM-driven viral caption, title & hashtag generator',
      'Video hook & script retention analyzer with actionable recommendations',
      'PostgreSQL & Prisma ORM architecture for multi-tenant data storage',
      'Cross-platform post analytics & performance telemetry',
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Google Gemini AI'],
    featured: true,
    metricsBadge: 'AI SaaS',
    gradient: 'from-[#00F0FF]/20 via-[#7000FF]/20 to-[#B600A8]/20',
  },
  {
    id: 'ai-customer-support-agent',
    title: 'Autonomous AI Customer Support Agent',
    category: 'AI & Agents',
    tagline: 'Multi-Turn Conversational Agent with Tool Calling & Knowledge Base Retrieval',
    description:
      'An intelligent customer support agent capable of resolving complex user queries, automating issue escalations, querying APIs dynamically, and learning from organization documentation.',
    problemSolved:
      'Reduces support response times to milliseconds while retaining human-level context, handling order queries, FAQs, and ticket routing autonomously.',
    features: [
      'Context-aware multi-turn dialog memory with LLM tool calling',
      'Automated triage, sentiment tracking, and emergency escalation',
      'Custom API integrations for real-time order/data lookups',
      'Vector search knowledge base retrieval (RAG) for instant factual answers',
      'Embeddable interactive web chat widget with session persistence',
    ],
    techStack: ['Python', 'FastAPI', 'React', 'RAG / Vector DB', 'LLM Tool Calling', 'REST APIs'],
    featured: true,
    metricsBadge: 'Agentic AI',
    gradient: 'from-[#7621B0]/20 via-[#0055FF]/20 to-[#00F0FF]/20',
  },
  {
    id: 'ai-excel-agent',
    title: 'AI Excel & Structured Data Agent',
    category: 'AI & Agents',
    tagline: 'Autonomous Natural Language Spreadsheet Analyst & Automation Runner',
    description:
      'An AI agent built to understand complex Excel/CSV files, run custom calculations, execute natural language formulas, and generate instant executive summaries from raw tabular data.',
    problemSolved:
      'Bridges the gap between non-technical stakeholders and complex financial/operational data by allowing instant querying without writing manual formulas.',
    features: [
      'Natural language question answering on large multi-sheet workbooks',
      'Automated formula generation, anomaly detection, and schema mapping',
      'Instant chart and summary generation via agentic execution loops',
      'Secure local data processing pipelines',
    ],
    techStack: ['Python', 'AI Agents', 'Pandas / Data Analysis', 'Hugging Face', 'LLMs'],
    githubUrl: 'https://github.com/SRafay/Ai_Excel_Agent',
    featured: true,
    metricsBadge: 'Hugging Face / Git',
    gradient: 'from-[#10B981]/20 via-[#059669]/20 to-[#047857]/20',
  },
  {
    id: 'ai-agent-automation-system',
    title: 'Multi-Agent Automation System',
    category: 'AI & Agents',
    tagline: 'Orchestration Engine for Multi-Agent Task Delegation & Workflows',
    description:
      'An experimentation and orchestration system where specialized AI agents collaborate, delegate sub-tasks, call external APIs, and execute automated multi-step operations.',
    problemSolved:
      'Solves multi-step business logic by breaking complex user goals into discrete agent tasks with validation feedback loops.',
    features: [
      'Multi-agent role assignment (Researcher, Analyzer, Dispatcher, Reviewer)',
      'Automated tool execution with retry logic and error recovery',
      'External webhook triggers & automated data pipelines',
      'Persistent execution logging and performance inspection',
    ],
    techStack: ['Python', 'Agentic Workflows', 'API Integrations', 'Task Automation'],
    githubUrl: 'https://github.com/Rafay100/Ai_Agent_Automation_System',
    featured: false,
    metricsBadge: 'Agent Orchestration',
    gradient: 'from-[#F59E0B]/20 via-[#D97706]/20 to-[#B45309]/20',
  },
  {
    id: 'personal-ai-employee',
    title: 'Personal AI Digital Employee',
    category: 'AI & Agents',
    tagline: 'Proactive Autonomous Virtual Assistant & Task Runner',
    description:
      'An autonomous digital assistant prototype designed to handle proactive background monitoring, morning briefings, email triage, and automated calendar/task synchronization.',
    problemSolved:
      'Transitions AI from a passive chatbot into an active, proactive worker that initiates tasks without constant human prompting.',
    features: [
      'Scheduled background cron tasks for daily briefing synthesis',
      'Contextual prioritization of incoming tasks and notifications',
      'Autonomous research and bulleted digest creation',
    ],
    techStack: ['Node.js / Python', 'FastAPI', 'LLM Function Calling', 'Automation Scripts'],
    featured: false,
    metricsBadge: 'Digital Worker',
    gradient: 'from-[#8B5CF6]/20 via-[#6D28D9]/20 to-[#4C1D95]/20',
  },
  {
    id: 'todo-app-fullstack',
    title: 'Full-Stack Task & Workspace App',
    category: 'Full-Stack & SaaS',
    tagline: 'Modern Task Management Platform with FastAPI, Neon & Better Auth',
    description:
      'A responsive full-stack task manager engineered with high-throughput API endpoints, modern session authentication, and instantaneous UI updates.',
    problemSolved:
      'Demonstrates clean separation of concerns, modern authentication patterns, and scalable PostgreSQL database schemas with Neon cloud.',
    features: [
      'Better Auth authentication layer with protected routes and sessions',
      'High-performance FastAPI async endpoints for task CRUD operations',
      'Serverless Neon PostgreSQL database with relational indexing',
      'Optimistic UI state management with Next.js frontend',
    ],
    techStack: ['Next.js', 'FastAPI', 'Neon PostgreSQL', 'Better Auth', 'Tailwind CSS'],
    featured: false,
    metricsBadge: 'Full-Stack Architecture',
    gradient: 'from-[#3B82F6]/20 via-[#1D4ED8]/20 to-[#1E40AF]/20',
  },
  {
    id: 'banas-marine',
    title: 'Banas Marine Web Platform',
    category: 'Web Apps',
    tagline: 'Commercial Marine Services & Equipment Digital Presence',
    description:
      'A fast, responsive web platform designed and built for marine industry operations, service catalog presentation, and client inquiries.',
    problemSolved:
      'Delivered a streamlined, search-engine-optimized industrial website highlighting maritime solutions and direct contact channels.',
    features: [
      'Responsive design adapted for maritime logistics & desktop clients',
      'Dynamic equipment catalog & service showcase pages',
      'Direct client quote inquiry channels',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'SEO Optimization'],
    liveUrl: 'https://bnasmarine.com',
    featured: false,
    metricsBadge: 'Client Work',
    gradient: 'from-[#0EA5E9]/20 via-[#0284C7]/20 to-[#0369A1]/20',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: 'Layout',
    description: 'Modern, reactive interfaces with fluid micro-interactions and bulletproof TypeScript types.',
    skills: [
      { name: 'HTML5 / Modern Semantics', highlight: false },
      { name: 'CSS3 / Vanilla CSS', highlight: false },
      { name: 'JavaScript (ES6+)', highlight: true },
      { name: 'TypeScript', highlight: true },
      { name: 'React', highlight: true },
      { name: 'Next.js (App Router)', highlight: true },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'Framer Motion', highlight: true },
    ],
  },
  {
    title: 'Backend & APIs',
    icon: 'Server',
    description: 'Scalable RESTful microservices, asynchronous request pipelines, and secure authentication.',
    skills: [
      { name: 'Python', highlight: true },
      { name: 'FastAPI', highlight: true },
      { name: 'Node.js', highlight: true },
      { name: 'Express.js', highlight: false },
      { name: 'RESTful API Design', highlight: true },
      { name: 'Better Auth / Session Auth', highlight: false },
      { name: 'JWT & Security Patterns', highlight: false },
    ],
  },
  {
    title: 'Databases & ORMs',
    icon: 'Database',
    description: 'Relational data structures, cloud serverless SQL, schema migrations, and rapid Airtable backends.',
    skills: [
      { name: 'PostgreSQL', highlight: true },
      { name: 'Neon Serverless Postgres', highlight: true },
      { name: 'Prisma ORM', highlight: true },
      { name: 'Airtable Database API', highlight: true },
      { name: 'MongoDB', highlight: false },
      { name: 'Data Modeling & Indexing', highlight: false },
    ],
  },
  {
    title: 'AI, Agents & Automation',
    icon: 'Bot',
    description: 'Autonomous tool-calling agents, LLM pipelines, RAG knowledge retrieval, and workflow orchestration.',
    skills: [
      { name: 'Autonomous AI Agents', highlight: true },
      { name: 'Google Gemini API', highlight: true },
      { name: 'LLM Function & Tool Calling', highlight: true },
      { name: 'RAG Knowledge Systems', highlight: true },
      { name: 'AI Chatbots & Conversational Memory', highlight: true },
      { name: 'Prompt Engineering & Prompt Chains', highlight: true },
      { name: 'AI Automation Workflows (n8n/Make)', highlight: true },
      { name: 'Structured Data Agents', highlight: true },
    ],
  },
  {
    title: 'Developer Tools & Workflows',
    icon: 'Wrench',
    description: 'Modern CLI environments, AI pair-programming utilities, containerization, and cloud deployment.',
    skills: [
      { name: 'Git & GitHub', highlight: true },
      { name: 'Vercel Deployment', highlight: true },
      { name: 'Docker Fundamentals', highlight: false },
      { name: 'n8n Automation Engine', highlight: true },
      { name: 'Claude Code & AI Dev CLI Tools', highlight: true },
      { name: 'Codex & Qwen CLI', highlight: false },
      { name: 'Replit & Cloud IDEs', highlight: false },
    ],
  },
];

export const EXPERIENCE_DATA = [
  {
    role: 'Front-End Developer Intern',
    company: 'Appverse Technology',
    location: 'Karachi, Pakistan',
    duration: '12 June 2025 – 12 August 2025',
    type: 'Internship',
    description:
      'Contributed to core web applications, translating Figma prototypes into pixel-perfect, accessible React components. Optimized frontend rendering performance, collaborated in sprint standups, and integrated dynamic REST endpoints.',
    achievements: [
      'Developed reusable component libraries with modular CSS and React hooks',
      'Enhanced mobile responsiveness and reduced layout shift across main client views',
      'Collaborated closely with senior engineers on code reviews and Git workflows',
    ],
  },
];

export const EDUCATION_DATA = {
  degree: 'Bachelor of Business & Information Technology (BBIT / BS-level IT Studies)',
  institution: 'Virtual University of Pakistan (VU)',
  location: 'Pakistan',
  focusAreas: [
    'Software Engineering & OOP Principles',
    'Database Systems (SQL, Relational Modeling)',
    'Web Technologies & Distributed Computing',
    'Data Structures & Algorithms',
    'Computer Networks & IT Infrastructure',
    'Software Project Management & Agile Methodologies',
  ],
};

export const CREATIVE_STUDIO_PROJECTS: CreativeProject[] = [
  {
    id: 'ai-3d-animation',
    title: 'AI 3D Animation & Stylized Worlds',
    category: '3D Animation',
    subtitle: 'Original stylized world-building and character-driven episodic content',
    brandTag: 'Veggie Village World',
    description:
      'End-to-end production of stylized 3D animated shorts featuring expressive comedic characters, environmental lighting, and dynamic camera choreography generated through coordinated AI pipelines.',
    techniques: [
      'Multi-Angle Stylized 3D Asset Synthesis',
      'Keyframe-Conditioned Camera Motion Paths',
      'Dynamic Cinematic Depth of Field & Shading',
      'Episodic Comedic Timing & Scene Composition',
    ],
    toolsUsed: ['Midjourney v6', 'Runway Gen-3', 'Luma Dream Machine', 'After Effects'],
    platforms: ['Instagram Reels', 'TikTok', 'YouTube Shorts', 'Facebook'],
    accentColor: '#9333EA',
    aspectRatio: '9:16 Vertical Video & 16:9 Cinema',
    statsLabel: 'Short-Form Episodic Brand',
  },
  {
    id: 'generative-video-production',
    title: 'Generative AI Video Production',
    category: 'Video Production',
    subtitle: 'Cinematic scene-based neural video generation and camera trajectory control',
    description:
      'Advanced prompt-to-video and image-to-video workflows utilizing temporal consistency anchors, custom camera tracking parameters, and high-fidelity motion conditioning.',
    techniques: [
      'Temporal Coherence Anchoring',
      'Camera Trajectory & Pan/Zoom Locking',
      'Motion Strength Calibration & Frame Interpolation',
      'Dynamic Audio-Visual Synchronization',
    ],
    toolsUsed: ['Kling AI', 'Runway Gen-3 Alpha', 'ComfyUI', 'Premiere Pro'],
    platforms: ['YouTube', 'Instagram', 'TikTok'],
    accentColor: '#00F0FF',
    aspectRatio: '9:16 / 16:9 Formats',
    statsLabel: 'Neural Video Pipelines',
  },
  {
    id: '3d-character-animation',
    title: '3D Character Animation & Consistency',
    category: 'Character Animation',
    subtitle: 'Preserving facial fidelity, textures, and stylized identity across multi-shot scenes',
    description:
      'Engineered character reference sheets and visual embeddings to maintain 100% character identity across varying lighting conditions, emotional expressions, and multi-scene storylines.',
    techniques: [
      'Character Sheet Reference Modeling',
      'Facial Expression & Lip-Sync Neural Mapping',
      'Multi-Angle Consistency Verification',
      'Expressive Body Motion Synthesis',
    ],
    toolsUsed: ['Stable Diffusion XL', 'ControlNet (OpenPose / Depth)', 'ElevenLabs Voice AI'],
    platforms: ['Instagram', 'TikTok', 'YouTube'],
    accentColor: '#10B981',
    aspectRatio: 'Vertical 9:16',
    statsLabel: 'Character Consistency Architecture',
  },
  {
    id: 'ai-visual-storytelling',
    title: 'AI-Powered Visual Storytelling',
    category: 'Storytelling & Narrative',
    subtitle: 'Culturally rich, family-friendly narrative pacing and high-retention script structures',
    description:
      'Scripting and directing comedic, family-friendly short-form narratives engineered with sharp hooks, comedic tension arcs, and voice actor characterizations that maximize viewer retention.',
    techniques: [
      'Viral Short-Form Script Structuring (3s Hook &rarr; Build &rarr; Punchline)',
      'Neural Voice Acting & Comedic Timing Alignment',
      'Sound FX Layering & Dynamic Captions',
      'Audience Retention Optimization',
    ],
    toolsUsed: ['Claude / Gemini Script Engine', 'ElevenLabs Synthesis', 'CapCut Studio'],
    platforms: ['TikTok', 'Instagram Reels', 'YouTube Shorts', 'Facebook'],
    accentColor: '#F59E0B',
    aspectRatio: 'Vertical Video (1080x1920)',
    statsLabel: 'High-Retention Storytelling',
  },
  {
    id: 'ai-manufacturing-process',
    title: 'AI-Generated Manufacturing & Process Videos',
    category: 'Industrial & Process',
    subtitle: 'Photorealistic procedural product assembly and industrial transformation visuals',
    description:
      'High-precision procedural simulation of manufacturing workflows, industrial machinery, metallic material physics, and satisfying assembly line mechanics generated with generative AI.',
    techniques: [
      'Metallic Material Physics & Specular Lighting',
      'Assembly Line Procedural Sequence Directing',
      'Macro Industrial Camera Focus',
      'Structural Transformation Mechanics',
    ],
    toolsUsed: ['Midjourney Industrial Models', 'Luma Dream Machine', 'Runway AI'],
    platforms: ['YouTube', 'LinkedIn', 'Instagram'],
    accentColor: '#EC4899',
    aspectRatio: '16:9 & 9:16',
    statsLabel: 'Procedural Industrial Visuals',
  },
  {
    id: 'ai-creative-experiments',
    title: 'AI Creative Experiments & Prompt Engineering',
    category: 'R&D & Experiments',
    subtitle: 'Explorations in diffusion models, hybrid rendering, and novel generative media pipelines',
    description:
      'Continuous R&D exploring emerging generative video checkpoints, custom LoRA training concepts, depth-map guidance, and hybrid 2D/3D visual techniques.',
    techniques: [
      'Custom LoRA Concept Prototyping',
      'Depth Map & Edge Guidance Conditioning',
      'Novel Generative Model Benchmark Testing',
      'Hybrid Raster + Neural Post-Processing',
    ],
    toolsUsed: ['ComfyUI Workflows', 'Automatic1111', 'Hugging Face Spaces'],
    platforms: ['R&D Lab / Portfolio Showcase'],
    accentColor: '#EA580C',
    aspectRatio: 'Multi-Format',
    statsLabel: 'Generative Media R&D',
  },
];
