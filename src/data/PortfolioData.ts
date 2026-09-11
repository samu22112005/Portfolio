export interface Metric {
  label: string;
  value: string;
  description: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend & Cloud' | 'AI & Core CS' | 'Tools & Frameworks';
  proficiency: number; // 0 to 100
  iconName: string;
  featured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDetails?: string;
  image: string;
  category: '3D Web' | 'Fullstack' | 'Creative Tech' | 'Mobile App';
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  metrics?: string;
  status?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score: string;
  details?: string;
}

export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  period?: string;
  description: string[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  email: string;
  resume: string;
}

export interface SkillCategoryGroup {
  id: string;
  title: string;
  description: string;
  iconName: string;
  items: { name: string; iconName?: string; imageIcon?: string }[];
  colSpanDesktop: string;
  isPillsOnly?: boolean;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    tagline: string;
    location: string;
    availability: string;
    bio: string[];
    shortIntro: string;
    avatarUrl: string;
  };
  social: SocialLinks;
  metrics: Metric[];
  skills: Skill[];
  skillCategories: SkillCategoryGroup[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  leadership: LeadershipItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Samrudhi Sachin Khopade",
    title: "AI Enthusiast & Creative Developer",
    tagline: "Building practical software experiences with code, AI, and creative problem-solving.",
    location: "Pune, India",
    availability: "Open to opportunities",
    avatarUrl: "/samrudhi.jpg",
    shortIntro: "Computer Science Engineering student exploring software development, AI-powered tools, and interactive web experiences.",
    bio: [
      "Computer Science Engineering student with a strong foundation in Python, Java, Object-Oriented Programming, Data Structures and Algorithms, SQL, and software development.",
      "Experienced in building web and application-based projects using Flask, React, Next.js, JavaScript, and databases, while exploring AI-powered tools and practical ways to solve complex technical problems.",
      "Interested in software testing, test development, AI-powered tools, and continuous learning by building real-world software applications."
    ]
  },

  social: {
    github: "https://github.com/samu22112005",
    linkedin: "https://linkedin.com/in/samrudhi-khopade-3060932b7",
    twitter: "",
    email: "Samu.khopade0522@gmail.com",
    resume: ""
  },

  metrics: [
    { label: "Engineering Degree", value: "2023 - 2027", description: "B.E. CSE @ Sinhgad Academy" },
    { label: "Current CGPA", value: "7.50 / 10", description: "Sinhgad Academy of Engineering" },
    { label: "10th MSBSHSE", value: "88.40%", description: "H.E.T Gurukul Academy School" },
    { label: "Internships & Projects", value: "6+", description: "Real-world Apps & AI Solutions" }
  ],

  skillCategories: [
    {
      id: "frontend",
      title: "FRONTEND DEVELOPMENT",
      description: "Building responsive and interactive interfaces.",
      iconName: "Layout",
      colSpanDesktop: "lg:col-span-4",
      items: [
        { name: "React.js", imageIcon: "/skills/react.png" },
        { name: "JavaScript", imageIcon: "/skills/javascript.png" },
        { name: "TypeScript", imageIcon: "/skills/typescript.png" },
        { name: "HTML", imageIcon: "/skills/html.png" },
        { name: "CSS", imageIcon: "/skills/css.png" },
        { name: "Tailwind CSS", imageIcon: "/skills/tailwind.png" }
      ]
    },
    {
      id: "backend",
      title: "BACKEND & APIs",
      description: "Building practical backend systems and integrations.",
      iconName: "Server",
      colSpanDesktop: "lg:col-span-4",
      items: [
        { name: "Python", imageIcon: "/skills/python.png" },
        { name: "Flask", imageIcon: "/skills/flask.png" },
        { name: "REST APIs", imageIcon: "/skills/rest_apis.png" },
        { name: "Firebase", imageIcon: "/skills/firebase.png" }
      ]
    },
    {
      id: "tools",
      title: "TOOLS",
      description: "Tools I use to design, build and collaborate.",
      iconName: "Wrench",
      colSpanDesktop: "lg:col-span-4",
      items: [
        { name: "Git", imageIcon: "/skills/git.png" },
        { name: "GitHub", imageIcon: "/skills/github.png" },
        { name: "VS Code", imageIcon: "/skills/vscode.png" },
        { name: "Figma", imageIcon: "/skills/figma.png" }
      ]
    },
    {
      id: "ai",
      title: "AI & EMERGING TECH",
      description: "Exploring AI-powered tools and intelligent experiences.",
      iconName: "Sparkles",
      colSpanDesktop: "lg:col-span-5",
      items: [
        { name: "Generative AI", imageIcon: "/skills/generative_ai.png" },
        { name: "Prompt Engineering", imageIcon: "/skills/prompt_engineering.png" },
        { name: "AI/ML Basics", imageIcon: "/skills/aiml_basics.png" }
      ]
    },
    {
      id: "strengths",
      title: "CORE STRENGTHS",
      description: "Mindset & core engineering competencies.",
      iconName: "Brain",
      colSpanDesktop: "lg:col-span-7",
      isPillsOnly: true,
      items: [
        { name: "Problem Solving" },
        { name: "Data Structures & Algorithms", imageIcon: "/skills/dsa.png" },
        { name: "Object-Oriented Programming", imageIcon: "/skills/oop.png" },
        { name: "Creativity" },
        { name: "Quick Learning" },
        { name: "Team Collaboration" },
        { name: "Communication" }
      ]
    }
  ],

  skills: [
    { name: "React.js", category: "Frontend", proficiency: 65, iconName: "Code2" },
    { name: "JavaScript", category: "Frontend", proficiency: 70, iconName: "FileCode" },
    { name: "TypeScript", category: "Frontend", proficiency: 60, iconName: "FileCode" },
    { name: "HTML", category: "Frontend", proficiency: 80, iconName: "Code2" },
    { name: "CSS", category: "Frontend", proficiency: 75, iconName: "Palette" },
    { name: "Tailwind CSS", category: "Frontend", proficiency: 65, iconName: "Sparkles" },
    { name: "Python", category: "Backend & Cloud", proficiency: 65, iconName: "Cpu" },
    { name: "Flask", category: "Backend & Cloud", proficiency: 55, iconName: "Server" },
    { name: "REST APIs", category: "Backend & Cloud", proficiency: 55, iconName: "Zap" },
    { name: "Firebase", category: "Backend & Cloud", proficiency: 40, iconName: "Cloud" },
    { name: "Git", category: "Tools & Frameworks", proficiency: 70, iconName: "GitBranch" },
    { name: "GitHub", category: "Tools & Frameworks", proficiency: 75, iconName: "GitBranch" },
    { name: "VS Code", category: "Tools & Frameworks", proficiency: 80, iconName: "FileCode" },
    { name: "Figma", category: "Tools & Frameworks", proficiency: 65, iconName: "Palette" },
    { name: "Generative AI", category: "AI & Core CS", proficiency: 65, iconName: "Sparkles" },
    { name: "Prompt Engineering", category: "AI & Core CS", proficiency: 70, iconName: "Zap" },
    { name: "AI/ML Basics", category: "AI & Core CS", proficiency: 45, iconName: "Cpu" }
  ],

  projects: [
    {
      id: "project-1",
      title: "Fitness Tracker App",
      tagline: "Modern Android Health & Workout Companion",
      description: "A modern Fitness Tracker Android application built in Java. It tracks daily steps, calculates calories, provides yoga exercises with guided instructions, and includes breathing meditation. The application focuses on a clean UI and smooth navigation.",
      fullDetails: "Engineered natively using Java, XML layouts, and Android SDK in Android Studio. Features customized step counting algorithms, calorie expenditure calculations, interactive yoga workout modules, and guided breathing exercises.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80",
      category: "Mobile App",
      technologies: ["Java", "XML", "Android Studio", "Android SDK"],
      githubUrl: "https://github.com/samu22112005/FitnessTrackerApp",
      liveUrl: "https://github.com/samu22112005/FitnessTrackerApp",
      featured: true,
      metrics: "Java Native Android | Calorie & Step Tracking"
    },
    {
      id: "project-2",
      title: "Time Table Generating Software",
      tagline: "Interactive Drag & Drop Academic Scheduler",
      description: "An interactive academic scheduling system that manages teachers, classes, classrooms, and lecture information. It automatically generates optimized timetables and provides a Today View dashboard along with customized timetables for students, teachers, and classrooms.",
      fullDetails: "Developed with HTML, CSS, JavaScript, and Python backend algorithms. Solves complex timetable scheduling constraints without lecture conflicts, offering real-time drag-and-drop timetable modifications.",
      image: "/projects/timetable.png",
      category: "Fullstack",
      technologies: ["Python", "JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/samu22112005/TimeTable-Generator-Web-Application.git",
      liveUrl: "https://samrudhikhopade.pythonanywhere.com/login",
      featured: true,
      metrics: "Automated Constraint Solver | Drag & Drop UI"
    },
    {
      id: "project-3",
      title: "JanSetu AI",
      tagline: "AI-Powered Digital Governance Platform",
      status: "Currently Building",
      description: "An AI-powered digital governance platform I am currently building to explore how AI can make government-related information and services more accessible and easier to navigate.",
      fullDetails: "JanSetu AI is an ongoing project currently in active development, exploring how AI models and accessible interface design can simplify citizen discovery of government schemes and public administration resources.",
      image: "/projects/jansetu.jpg",
      category: "Creative Tech",
      technologies: ["Python", "Generative AI", "Web Technologies", "APIs"],
      githubUrl: "",
      liveUrl: "",
      featured: true
    },
    {
      id: "project-4",
      title: "Hacker House Goa 2026 / Builder Studio",
      tagline: "Modern Web & AI Hackathon Showcase Project",
      description: "A project developed during Hacker House Goa 2026 / Builder Studio, focused on building with modern web technologies and AI.",
      fullDetails: "Prototyped during the high-energy Builder Studio hackathon in Goa, demonstrating rapid web engineering, AI API integrations, and intuitive frontend component architectures.",
      image: "/projects/hhgoa.png",
      category: "Creative Tech",
      technologies: ["React", "Next.js", "AI Tools", "Tailwind CSS"],
      githubUrl: "https://github.com/samu22112005",
      liveUrl: "https://hh-goabuilderstudio.vercel.app/",
      featured: true,
      metrics: "Hacker House Goa 2026 Hackathon"
    }
  ],

  experience: [
    {
      id: "exp-1",
      role: "Android App Development Intern",
      company: "ShadowFox",
      period: "April 2026 – Present",
      location: "Remote / India",
      current: true,
      description: [
        "Worked on Android development, UI design, activity lifecycle, app architecture, and Java/Android SDK.",
        "Created responsive XML layouts and integrated clean mobile UI interfaces under mentor guidance.",
        "Utilized Firebase for basic cloud data management and backend storage integration."
      ],
      technologies: ["Java", "XML Layouts", "Android SDK", "Firebase (Basic)", "UI Design"]
    },
    {
      id: "exp-2",
      role: "Java Developer Intern",
      company: "CodEc Technologies",
      period: "June 2025 – September 2025",
      location: "Pune, India",
      current: false,
      description: [
        "Worked on real-world applications, backend development, debugging, and software problem solving.",
        "Engineered backend REST endpoints and data services using Java and MySQL.",
        "Participated in code reviews, bug fixes, and testing database transactions."
      ],
      technologies: ["Java", "MySQL", "REST APIs", "Debugging"]
    }
  ],

  education: [
    {
      id: "edu-1",
      degree: "B.E. Computer Science & Engineering",
      institution: "Sinhgad Academy of Engineering",
      period: "2023 – 2027",
      score: "CGPA: 7.50 / 10",
      details: "Pursuing Bachelor of Engineering with focus on Java, Data Structures, Algorithms, SQL, and Software Development."
    },
    {
      id: "edu-2",
      degree: "12th Standard – Maharashtra Board",
      institution: "Namo International School, Pune",
      period: "2023",
      score: "72.83%",
      details: "HSC Science Stream"
    },
    {
      id: "edu-3",
      degree: "10th Standard – MSBSHSE",
      institution: "H.E.T Gurukul Academy School, Mahad",
      period: "2021",
      score: "88.40%",
      details: "SSC Secondary School Certificate with High Distinction"
    }
  ],

  leadership: [
    {
      id: "lead-1",
      role: "Social Media Head",
      organization: "National Service Scheme (NSS)",
      description: [
        "Managed NSS social media content for campus events, social awareness campaigns, and community initiatives.",
        "Worked on branding, digital communication, content creation, and team coordination.",
        "Coordinated timely updates across channels to amplify social impact."
      ]
    },
    {
      id: "lead-2",
      role: "Female Representative",
      organization: "First Year Students Association (FESA)",
      description: [
        "Represented first-year engineering students and acted as a communication bridge between students and the committee.",
        "Communicated student concerns and feedback to faculty leads.",
        "Assisted with event planning, student coordination, and fostering an inclusive environment."
      ]
    }
  ]
};
