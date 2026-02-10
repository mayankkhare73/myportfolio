export const portfolioData = {
  about: {
    title: "About Me",
    tagline: "4+ years building scalable web apps, APIs & AI-driven platforms",
    description: "Software Engineer with proven expertise across AI solutions, fintech integrations, SaaS platforms, and e-commerce ecosystems. Recognized for backend optimization, API integrations, and leading small teams—from development to deployment. Passionate about solving real-world problems with AI and automation.",
    highlights: [
      "Scalable web applications & APIs",
      "AI-driven platforms & GenAI systems",
      "Backend optimization & API integrations",
      "Leading small teams & code reviews",
    ],
    skillsByCategory: [
      {
        label: "Languages & Frameworks",
        skills: ["JavaScript (ES6+)", "TypeScript", "Node.js", "Express.js", "PHP", "React.js", "Next.js", "React Native", "Python", "Java (Basic)"],
      },
      {
        label: "Databases",
        skills: ["MySQL", "MongoDB", "Firebase Realtime DB"],
      },
      {
        label: "Cloud & Tools",
        skills: ["AWS (S3, Lambda, SQS)", "Google App Engine", "Git/GitHub/GitLab", "CI/CD"],
      },
      {
        label: "GenAI & Agent Systems",
        skills: ["LLMs", "Prompt Engineering", "Tool Calling", "Embeddings", "Vector Search", "RAG", "Agent Orchestration", "Conversation State Management"],
      },
      {
        label: "ML Infrastructure",
        skills: ["Model Integration", "Inference Optimization", "Latency & Quality Evaluation", "Prompt Versioning", "Data Preprocessing Pipelines"],
      },
      {
        label: "Foundations & Quality",
        skills: ["Data Structures & Algorithms", "Time & Space Complexity", "Code Reviews", "Distributed Debugging", "Logging & Observability", "API Documentation"],
      },
      {
        label: "Web & Accessibility",
        skills: ["Semantic HTML", "ARIA Basics", "Performance Optimization", "Accessible UI"],
      },
      {
        label: "Collaboration",
        skills: ["Open-source Contributions", "Mentoring", "Cross-team Collaboration"],
      },
    ],
    // Flat list for any component that needs all skills in one array
    skills: [
      "JavaScript (ES6+)", "TypeScript", "Node.js", "Express.js", "PHP", "React.js", "Next.js", "React Native", "Python", "Java (Basic)",
      "MySQL", "MongoDB", "Firebase Realtime DB",
      "AWS (S3, Lambda, SQS)", "Google App Engine", "Git/GitHub/GitLab", "CI/CD",
      "LLMs", "Prompt Engineering", "Tool Calling", "Embeddings", "Vector Search", "RAG", "Agent Orchestration", "Conversation State Management",
      "Model Integration", "Inference Optimization", "Prompt Versioning", "Data Preprocessing Pipelines",
      "Data Structures & Algorithms", "Code Reviews", "Logging & Observability", "API Documentation",
      "Semantic HTML", "ARIA Basics", "Performance Optimization", "Accessible UI",
      "Open-source Contributions", "Mentoring", "Cross-team Collaboration",
    ],
  },
  projects: [
    {
      title: "AI-Powered Career Navigator",
      description: "Self-built career matching platform providing a 360° view of professional possibilities. Intelligent assessment on skills, interests, work style, and values with ML-based pattern recognition and personalized career recommendations.",
      technologies: ["Node.js", "Next.js", "Gemini API", "ML algorithms"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "ChatBot Builder (AppyPie)",
      description: "Modular AI-powered bots: Inquiry, Feedback, Appointment, Agent Transfer, GPT/Voice Bots. Backend services and APIs enabling users to create bots from scratch with Firebase, MongoDB, and AI SDKs.",
      technologies: ["Node.js", "React.js", "Firebase", "MongoDB", "AI SDKs"],
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "HelpDesk Platform (AppyPie)",
      description: "Maintained and enhanced microservices: Ticketing, Knowledgebase, Community, User Management. Node.js, Next.js, Firebase APIs, AWS S3. Cloud deployments on Google App Engine for scalability and uptime.",
      technologies: ["Node.js", "Next.js", "Firebase", "AWS S3", "Google App Engine"],
      imageUrl: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?q=80&w=2070&auto=format&fit=crop",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "QuikBook (Smile IT Solutions)",
      description: "Backend and APIs for multi-role transport app: passenger rides, goods transport, packers & movers. Multi-role user system (drivers ↔ passengers). Led backend team, task distribution, and code reviews.",
      technologies: ["Node.js", "Express.js", "MySQL", "MongoDB", "React Native"],
      imageUrl: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2070&auto=format&fit=crop",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "CedCommerce Importer & Migrator",
      description: "Shopify importer from Amazon, eBay, Etsy; store migration from WooCommerce, BigCommerce, Magento 1/2. Async queues, RabbitMQ, AWS SQS, query optimization for millions of product imports. 99.9% migration reliability.",
      technologies: ["PHP", "Phalcon", "Node.js", "React.js", "MySQL", "MongoDB", "RabbitMQ", "AWS SQS"],
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
      githubUrl: "#",
      liveUrl: "#",
    },
  ],
  contact: {
    email: "khare.mayank09@gmail.com",
    phone: "+91 9451183969",
    whatsapp: "+91 9451183969",
    address: "Noida",
    social: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/mayank-khare-535145177",
      twitter: "#",
    },
  },
  experience: [
    {
      company: "AppyPie LLP – Noida",
      position: "Software Engineer",
      period: "Oct 2024 – Present",
      description:
        "AI-powered ChatBot Builder (Inquiry, Feedback, Appointment, Agent Transfer, Voice/GPT Bots). LiveChat with Twilio (voice & SMS) and RAG for AI-assisted support. HelpDesk microservices (Ticketing, Knowledgebase, Community, User Management) on Node.js, Next.js, Firebase, AWS S3, Google App Engine.",
    },
    {
      company: "JoomDev Pvt. Ltd. – Delhi (Remote)",
      position: "PHP / Node.js Developer",
      period: "Apr 2024 – Oct 2024",
      description:
        "Klyrepay Integrations (Fintech) on PHP (Joomla), Node.js, MySQL. Secure APIs for payment/card services. End-to-end deployment on cPanel, Git version control. Feature enhancements and bug fixes for production.",
    },
    {
      company: "Smile IT Solutions – Noida (Remote)",
      position: "Software Developer (Lead Role)",
      period: "Sep 2023 – Apr 2024",
      description:
        "QuikBook ride-hailing backend (passenger, goods, packers & movers); multi-role user system; led backend team. BooksBea eBook/audiobook APIs and subscription workflows. E-commerce inventory (Dubai) with Core PHP, Kafka, React Native.",
    },
    {
      company: "Cedcoss Technologies Pvt. Ltd. – Lucknow",
      position: "Junior Software Developer → Software Developer",
      period: "Feb 2022 – Sep 2023",
      description:
        "Shopify integration: import from Amazon, eBay, Etsy; migrate from WooCommerce, BigCommerce, Magento 1/2. PHP (Phalcon), Node.js, React.js, MySQL, MongoDB. RabbitMQ & AWS SQS for large-scale processing. API versioning, 99.9% migration reliability. Promoted to Software Developer within 6 months.",
    },
  ],
  education: [
    {
      degree: "Bachelor in Computer Application (BCA)",
      institution: "Swami Vivekanand Subharti University",
      year: "2020",
    },
  ],
  certifications: [
    "React.js Certification (Udemy)",
    "DOEACC 'O' Level",
    "DOEACC CCC",
  ],
  achievements: [
    "Employee of the Month – AppyPie (Sep 2025)",
    "Code Guru (III) – Sunbeam College Coding Competition",
    "Promoted from Junior → Software Developer at Cedcoss within 6 months",
    "Recognized for team leadership at Smile IT Solutions (led backend development & team distribution)",
  ],
  strengths: [
    "Backend optimization & API integrations",
    "Problem solving with AI and automation",
    "Leading small teams & code reviews",
    "Cross-team collaboration & mentoring",
    "Quick learner & goal-oriented",
  ],
};
