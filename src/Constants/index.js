import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  jasper,
  versity,
  wordpress
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "WordPress Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "WordPress",
    icon: wordpress,
  },
];

const experiences = [
  {
    title: "Frontend / Wordpress Theme Developer",
    company_name: "Jasper IT",
    icon: jasper,
    iconBg: "#383E56",
    date: "Sep 2018 - Feb 2023",
    points: [
      "Developed attractive and easy-to-use websites using tools like HTML, CSS, and JavaScript.",
      "Created custom WordPress themes and content management systems (CMS) to fit clients' needs.",
      "Regularly updated and maintained websites using tools like WordPress, ensuring they ran smoothly.",
      "Helped teammates with coding questions, using tools like Stack Overflow and online forums.",
      "Fixed any tricky problems that came up in projects, using debugging tools and techniques.",
      "Mentored junior developers and interns, sharing tips on using tools like Visual Studio Code.",
      "Shared ideas and tricks with the team to make work more efficient, using tools like Slack for communication.",
      "Introduced the team to new technologies, such as React.js and Gatsby, to improve our projects."
    ],
  },
  {
    title: "Full Stack Wordpress Developer",
    company_name: "Versity Tech Pvt. Ltd.",
    icon: versity,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Sep 2023",
    points: [
      "Developed custom WordPress themes and plugins to meet client specifications.",
      "Implemented front-end designs using HTML5, CSS3, and JavaScript/jQuery.",
      "Ensured responsiveness and cross-browser compatibility for all web projects.",
      "Collaborated closely with designers and back-end developers to create seamless user experiences.",
      "Conducted WordPress site maintenance, updates, and troubleshooting for optimal performance."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ecommerce",
    description:
      "Web-based platform that allows users to search, buy Products from various providers, providing a convenient and efficient solution for Ecommerce needs.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "Frontend",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/saurav-ghimire/Myntra-Clone",
    project_link: "https://simple-myntra-ecommerce-clone.netlify.app/",
  },
  {
    name: "Todo App",
    description:
      "Web application that enables users to add todo list, view all created list and delete it.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Context API",
        color: "green-text-gradient",
      },
      {
        name: "Frontend",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/saurav-ghimire/React-Todo-App.git",
    project_link: "https://custom1-todo-app.netlify.app/",
  }
];

export { services, technologies, experiences, testimonials, projects };