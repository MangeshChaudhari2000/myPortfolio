import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
  FaMicrosoft,
  FaAws
} from "react-icons/fa6";

import { SiNextdotjs } from "react-icons/si";

import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiCsharp } from "react-icons/si";

import PerformYard from "../assets/performYard.PNG";
import MangeshEstate from "../assets/mangeshEstate.PNG";
import EduForge from "../assets/EduForge.PNG";

import busybuyContext from "../assets/busybuyContext.PNG";
import { TbBrandFramerMotion } from "react-icons/tb";

import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
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
    name: "Eduforge",
    description:
      "Built a scalable Learning Management System using Next.js, Node.js, AWS, Stripe, and Docker, with authentication via Clerk and responsive design powered by Tailwind CSS.",
    image: EduForge,
    githubLink: "https://github.com/MangeshChaudhari2000/EduForge",
    demoLink: "https://edu-forge-rouge.vercel.app/",
  },
  {
    id: 2,
    name: "MangeshEstate",
    description:
      "A modern real estate application where users can add properties for sale or rent and view other properties with great filters for convenience. The app is built using React, Redux, MongoDB, Node.js, JWT, Google authentication, and Tailwind CSS",
    image: MangeshEstate,
    githubLink: "https://github.com/MangeshChaudhari2000/MangeshEstate",
    demoLink: "https://mangeshestate.onrender.com/",
  },

  {
    id: 3,
    name: "BusyBuy",
    description:
      "A E-commerce application that fetches data from fakestoreapi, where User can  logi, add item to there cart & place there order",
    image: busybuyContext,
    githubLink: "https://github.com/MangeshChaudhari2000/busybuyContext",
    demoLink: "https://busybuycontext.onrender.com/",
  },
];

export const BIO = [
  "Full-Stack Development: Proficient in developing scalable web applications using React.js, Next.js, Node.js, Redux Toolkit, and AWS services, with hands-on experience in backend development (Node.js/Express) and frontend technologies (React, Tailwind CSS).",
  "Database Management: Skilled in working with SQL and NoSQL databases, including MySQL, MongoDB, Google Firestore, and AWS DynamoDB, ensuring optimal data storage, retrieval, and performance for dynamic applications.",
  "Cloud and DevOps: Experienced in deploying serverless architectures on AWS (Lambda, DynamoDB, API Gateway) and containerizing applications with Docker, while utilizing DevOps tools like Jenkins, VMware, and IBM UrbanCode for efficient CI/CD pipelines.",
  "Security & Testing Focus: Implemented proactive security measures with Snyk for vulnerability management and automated testing using Jest for Node.js and React applications, ensuring high code quality and reliable functionality.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "3+ years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "3+ years",
  },
  {
    icon: <SiNextdotjs className="text-4xl text-white lg:text-5xl" />,
    name: "NextJs",
    experience: "1+ years",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
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
    icon: <FaAws className="text-4xl text-white lg:text-5xl" />,
    name: "AWS",
    experience: "1 year",
  },
  {
    icon: <RiTailwindCssFill className="text-4xl text-sky-600 lg:text-5xl" />,
    name: "Tailwind CSS",
    experience: "3+ years",
  },

  {
    icon: (
      <TbBrandFramerMotion className="text-4xl text-pink-600 lg:text-5xl" />
    ),
    name: "Framer motion",
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
