export const personalInfo = {
  name: "Muhammad Awais Raza",
  role: "Full Stack Developer",
  email: "ar1428391@gmail.com",
  phone: "+92 332 4440930",
  address: "Sector 2 Township, Lahore",
  about: "I am a passionate Full Stack Developer with 1+ years of experience in building modern web applications. I love turning complex problems into simple, beautiful, and intuitive designs.",
  socials: {
    github: "https://github.com/Awais-0",
    linkedin: "https://www.linkedin.com/in/muhammad-awais-raza-88262022a/",
    twitter: "https://twitter.com"
  }
};

export const skills = [
  // Web Development Skills
  { name: "React / Next.js", level: 90, category: "Frontend", type: "Web Dev" },
  { name: "JavaScript (ES6+)", level: 95, category: "Frontend", type: "Web Dev" },
  { name: "Tailwind CSS", level: 85, category: "Frontend", type: "Web Dev" },
  { name: "TypeScript", level: 60, category: "Frontend", type: "Web Dev" },
  { name: "Node.js / Express", level: 80, category: "Backend", type: "Web Dev" },
  { name: "MySQL", level: 70, category: "Backend", type: "Web Dev" },
  { name: "FastAPI", level: 85, category: "Backend", type: "Web Dev" },
  { name: "Django", level: 65, category: "Backend", type: "Web Dev" },
  { name: "Git / GitHub", level: 85, category: "Tools", type: "Web Dev" },
  { name: "Trae", level: 95, category: "Tools", type: "Web Dev" },

  // Artificial Intelligence Skills
  { name: "Python", level: 90, category: "Languages", type: "AI" },
  { name: "Machine Learning", level: 50, category: "Core AI", type: "AI" },
  { name: "Deep Learning", level: 20, category: "Core AI", type: "AI" },
  { name: "TensorFlow / PyTorch", level: 35, category: "Frameworks", type: "AI" },
  { name: "Natural Language Processing", level: 15, category: "Core AI", type: "AI" },
  { name: "Computer Vision", level: 10, category: "Core AI", type: "AI" },
  { name: "Data Analysis (Pandas/NumPy)", level: 70, category: "Data Science", type: "AI" },
  { name: "Scikit-Learn", level: 50, category: "Frameworks", type: "AI" },
  { name: "Generative AI (LLMs)", level: 10, category: "Core AI", type: "AI" }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with cart functionality, payment integration, and user authentication.",
    image: "/Ecommerce.png",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/Awais-0/Ecommerce-MERN",
    // live: "https://ecommerce-demo.com"
  },
  {
    id: 2,
    title: "Jobsite Sentry",
    description: "A Big complex Sites management tool with real-time camera managements and team workspace features.",
    image: "/Jobsite.png",
    tags: ["React", "Bootstrap", "Vite"],
    // github: "https://github.com/johndoe/task-app",
    live: "https://cmd.jobsitesentry.com/login"
  },
  {
    id: 3,
    title: "VirtuComm",
    description: "An emersive realtime scenario generation and simultion platform using LLM and 3D models.",
    // image: "https://images.unsplash.com/photo-1504608510435-c69591d2b8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    tags: ["React", "Django", "Hugging face"],
    github: "https://github.com/Abd-ur-Raffae/VirtuComm-Fyp-SS1",
    // live: "https://weather-demo.com"
  }
];

export const experiences = [
  {
    id: 1,
    company: "AppliconSoft",
    role: "Associate React Developer",
    period: "2025 - Present",
    description: "Leading the frontend team in developing scalable web applications using React and Next.js."
  },
  {
    id: 2,
    company: "Univeristy of Sargodha",
    role: "Student",
    period: "2021 - 2025",
    description: "Starting with Final year project, focusing on learning new about web."
  }
];

export const journey = [
  {
    id: 1,
    title: "The Quest for Knowledge",
    location: "University of Sargodha",
    period: "2021 - 2025",
    description: "Pursued B.S. in Computer Science, diving deep into AI and Software Engineering.",
    icon: "map"
  },
  {
    id: 2,
    title: "The Treasure Found",
    location: "AppliconSoft",
    period: "2025 - Present",
    description: "Became an Associate React Developer, building high-impact web solutions.",
    icon: "treasure"
  }
];

export const education = [
  {
    id: 1,
    institution: "University of Sargodha",
    degree: "B.S. in Computer Science",
    period: "2021 - 2025",
    description: "Focused on Software Engineering and Artificial Intelligence."
  }
];
