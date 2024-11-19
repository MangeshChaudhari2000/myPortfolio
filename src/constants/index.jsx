import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
  FaMicrosoft,
} from "react-icons/fa6";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { SiFlutter } from "react-icons/si";

import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";
import PerformYard from "../assets/performYard.PNG";
import MangeshEstate from "../assets/mangeshEstate.PNG";
import calculator from "../assets/calculator.PNG";
import busybuyContext from "../assets/busybuyContext.PNG";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Mangesh Chaudhari",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate Full Stack developer with a knack for creating beautiful and functional user interfaces.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "MangeshEstate",
    description:
      "A modern real estate application where users can add properties for sale or rent and view other properties with great filters for convenience. The app is built using React, Redux, MongoDB, Node.js, JWT, Google authentication, and Tailwind CSS",
    image: MangeshEstate,
    githubLink: "https://github.com/MangeshChaudhari2000/personal-portfolio",
    demoLink:"https://mangeshestate.onrender.com/"
  },
  {
    id: 2,
    name: "Perform Yard",
    description:
      "PerformYard is a performance management application that helps organizations streamline goal tracking, performance reviews, and employee feedback. It enables businesses to efficiently manage goals, conduct evaluations, and foster ongoing communication between managers and teams",
    image: PerformYard,
    githubLink: "https://github.com/MangeshChaudhari2000/PerformYardApp",
    demoLink:"https://performyardapp.onrender.com/"
  },

  {
    id: 3,
    name: "BusyBuy",
    description:
      "A E-commerce application that fetches data from fakestoreapi, where User can  logi, add item to there cart & place there order",
    image: busybuyContext,
    githubLink: "https://github.com/MangeshChaudhari2000/busybuyContext",
    demoLink:'https://busybuycontext.onrender.com/'
  },
  
];

export const BIO = [
  "Full-Stack Development: Proficient in Node.js and C#, utilizing Express and React.js to design and implement responsive web applications.",
  "Database Management: Skilled in MySQL, MongoDB, Mongoose, and Google Firebase Firestore for efficient data storage and retrieval, ensuring optimal performance and scalability.",
  "DevOps Practices: Developed and maintained CI/CD pipelines to automate deployment processes, enhancing code quality and reducing time-to-market.",
  "Collaboration: Effectively communicated with cross-functional teams to gather requirements, share progress, and ensure alignment on project objectives",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "1+ years",
  },
  {
    icon: <RiTailwindCssFill className="text-4xl text-sky-600 lg:text-5xl" />,
    name: "Tailwind CSS",
    experience: "1+ years",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1+ years",
  },

  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: (
      <SiMicrosoftsqlserver className="text-4xl text-sky-700 lg:text-5xl" />
    ),
    name: "Microsoft SQL server",
    experience: "3+ year",
  },
  {
    icon: <SiFlutter className="text-4xl text-sky-400 lg:text-5xl" />,
    name: "Flutter",
    experience: "6+ month",
  },
  {
    icon: <FaMicrosoft className="text-4xl text-sky-700 lg:text-5xl" />,
    name: ".Net Technologies",
    experience: "3+ year",
  },
  {
    icon: <SiCsharp className="text-4xl text-purple-600 lg:text-5xl" />,
    name: "C sharp",
    experience: "3+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Senior System Engineer",
    company: "Infosys Limited",
    duration: "October 2021 - Present",
    description:
      "I am a software developer with 3 years of experience at Infosys Limited, proficient in backend technologies like Node.js, Express, and .NET, and skilled in frontend development using React.js, Bootstrap, and Tailwind. I have expertise in SQL, MongoDB, and Google Firestore for database management. Additionally, I am familiar with DevOps tools such as Jenkins and Git. Proficient in JavaScript and C#, I am dedicated to delivering high-quality software solutions.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering",
    institution: "Pune University",
    duration: "June 2017 - September 2021",
    description:
      "I pursued a specialization in Mechanical Engineering, focusing on the fundamental principles and applications within the field. I graduated with a Cumulative Grade Point Average (CGPA) of 8.68, which reflects my commitment to academic excellence and dedication to my studies",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
