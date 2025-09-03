export const personalInfo = {
  name: "Ahmed Saeed",
  title: "Full-Stack Developer | Computer Science Student",
  email: "ahmedsaeed2515l@gmail.com",
  phone: "+201128968983",
  location: "Cairo, Egypt",
  bio: "I am currently studying at the Faculty of Science, Cairo University, majoring in Computer Science. Over the years, I have gained strong experience in Full-Stack Development, working with technologies like React, Next.js, Node.js, Express, and MongoDB. I have built several large-scale projects that demonstrate my ability to design, develop, and deploy complete applications. My passion lies in solving real-world problems through clean and efficient code.",
  avatar: "/images/ahmed.jpg",
  resume: "/files/Ahmed_Saeed_Resume.pdf",
  education: {
    institution: "Faculty of Science, Cairo University",
    major: "Computer Science",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/ahmed-saeed-a46466251?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    github: "https://github.com/ahmedsaeed2515",
    twitter: "https://x.com/ahmedsaeed2515?t=tmGa_PQw6PdKFFDk36JyKA&s=08",
    instagram: "https://www.instagram.com/ahmed_saeed2515?igsh=MXN3NGp6am13MzNy",
    facebook: "https://www.facebook.com/profile.php?id=100069829448156",
  },
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 80 },
      { name: "Next.js", level: 95 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 92 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "Redis", level: 75 },
    ],
  },
  {
    category: "Tools & Cloud",
    items: [
      { name: "AWS", level: 80 },
      { name: "Docker", level: 78 },
      { name: "Git", level: 92 },
      { name: "Vercel", level: 85 },
      { name: "Firebase", level: 80 },
      { name: "GraphQL", level: 75 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js, TypeScript, and Stripe integration.",
    image: "/images/project1.jpg",
    category: "web",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "Prisma"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/ahmed-saeed/ecommerce-platform",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/images/project2.jpg",
    category: "web",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    liveUrl: "https://example-taskmanager.com",
    githubUrl: "https://github.com/ahmed-saeed/task-manager",
    featured: true,
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "A responsive weather application with location-based forecasts and beautiful animations.",
    image: "/images/project3.jpg",
    category: "mobile",
    technologies: ["React Native", "OpenWeather API", "Expo", "Redux"],
    liveUrl: "https://example-weather.com",
    githubUrl: "https://github.com/ahmed-saeed/weather-app",
    featured: false,
  },
  {
    id: 4,
    title: "REST API Service",
    description:
      "A scalable REST API service with authentication, rate limiting, and comprehensive documentation.",
    image: "/images/project4.jpg",
    category: "backend",
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Swagger"],
    liveUrl: "https://api-example.com/docs",
    githubUrl: "https://github.com/ahmed-saeed/rest-api-service",
    featured: false,
  },
  {
    id: 5,
    title: "Blog Platform",
    description:
      "A modern blog platform with CMS capabilities, SEO optimization, and multi-author support.",
    image: "/images/project5.jpg",
    category: "web",
    technologies: ["Next.js", "Sanity CMS", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example-blog.com",
    githubUrl: "https://github.com/ahmed-saeed/blog-platform",
    featured: true,
  },
  {
    id: 6,
    title: "Chat Application",
    description:
      "Real-time chat application with group messaging, file sharing, and emoji reactions.",
    image: "/images/project6.jpg",
    category: "web",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Cloudinary"],
    liveUrl: "https://example-chat.com",
    githubUrl: "https://github.com/ahmed-saeed/chat-app",
    featured: false,
  },
];

export const stats = [
  {
    key: "experience",
    value: 5,
    suffix: "+",
    duration: 2000,
  },
  {
    key: "projects",
    value: 50,
    suffix: "+",
    duration: 2500,
  },
  {
    key: "clients",
    value: 25,
    suffix: "+",
    duration: 3000,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    avatar: "/images/testimonial1.jpg",
    content:
      "Ahmed delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise are outstanding.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager, StartupXYZ",
    avatar: "/images/testimonial2.jpg",
    content:
      "Working with Ahmed was a pleasure. He transformed our ideas into a beautiful, functional application with great user experience.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Marketing Director, GrowthCo",
    avatar: "/images/testimonial3.jpg",
    content:
      "Ahmed's work on our blog platform helped us increase our organic traffic by 200%. Highly recommended for any web development project.",
    rating: 5,
  },
];
