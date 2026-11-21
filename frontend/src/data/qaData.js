import React from 'react';
import {
  FaReact,
  FaPython,
  FaGithub,
  FaGitAlt,
  FaCode,
  FaProjectDiagram,
  FaBug,
  FaLayerGroup,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiPostman,
  SiFlask,
  SiFastapi,
} from 'react-icons/si';
import { BsStars } from 'react-icons/bs';
import { TbSql } from 'react-icons/tb';

const qaData = [
  {
    category: "Languages",
    title: "Programming Languages",
    description: "Strong proficiency in core programming languages for building robust web backends, APIs, and interactive client applications.",
    skills: ["Python", "SQL", "JavaScript (ES6)", "TypeScript"],
    icons: [
      { icon: FaPython, color: '#3776AB', title: 'Python' },
      { icon: SiJavascript, color: '#F7DF1E', title: 'JavaScript (ES6)' },
      { icon: SiTypescript, color: '#3178C6', title: 'TypeScript' },
      { icon: TbSql, color: '#00758F', title: 'SQL' },
    ],
  },
  {
    category: "Backend",
    title: "Backend & RESTful APIs",
    description: "Developing performant RESTful APIs, routing, request validation, and application business logic.",
    skills: ["Flask", "FastAPI", "RESTful APIs", "CORS Configuration"],
    icons: [
      { icon: SiFlask, color: '#FFFFFF', title: 'Flask' },
      { icon: SiFastapi, color: '#05998B', title: 'FastAPI' },
      {
        icon: () => (
          <span className="text-[10px] font-bold px-1.5 py-0.5 bg-gray-700 rounded text-gray-200 border border-gray-600">
            REST API
          </span>
        ),
        color: '',
        title: 'RESTful APIs'
      },
      {
        icon: () => (
          <span className="text-[10px] font-bold px-1.5 py-0.5 bg-gray-700 rounded text-gray-200 border border-gray-600">
            CORS
          </span>
        ),
        color: '',
        title: 'CORS'
      }
    ],
  },
  {
    category: "Frontend",
    title: "Frontend & Responsive Design",
    description: "Building dynamic, responsive single-page applications and clean, accessible user interfaces.",
    skills: ["React.js", "HTML5", "CSS3", "Responsive Web Design"],
    icons: [
      { icon: FaReact, color: '#61DBFB', title: 'React.js' },
      { icon: SiHtml5, color: '#E34F26', title: 'HTML5' },
      { icon: SiCss3, color: '#1572B6', title: 'CSS3' },
      { icon: SiTailwindcss, color: '#38BDF8', title: 'Responsive Design' },
    ],
  },
  {
    category: "Databases",
    title: "Databases & Data Management",
    description: "Relational schema design, querying, data persistence, and database migrations.",
    skills: ["MySQL", "CRUD Operations", "Schema Migrations", "Data Persistence"],
    icons: [
      { icon: SiMysql, color: '#00758F', title: 'MySQL' },
      {
        icon: () => (
          <span className="text-[10px] font-semibold px-1.5 py-0.5 bg-gray-800 border border-gray-600 rounded text-gray-300 font-mono">
            CRUD
          </span>
        ),
        color: '',
        title: 'CRUD Operations'
      },
      {
        icon: () => (
          <span className="text-[10px] font-semibold px-1.5 py-0.5 bg-gray-800 border border-gray-600 rounded text-gray-300 font-mono">
            MIGRATIONS
          </span>
        ),
        color: '',
        title: 'Schema Migrations'
      }
    ],
  },
  {
    category: "Machine Learning",
    title: "Machine Learning & Analytics",
    description: "Training classification models, feature engineering, class imbalance treatment, and geospatial analytics.",
    skills: ["Random Forest", "XGBoost", "Decision Tree", "SMOTE", "Feature Engineering"],
    icons: [
      { icon: BsStars, color: '#F59E0B', title: 'Machine Learning' },
      {
        icon: () => (
          <span className="text-[10px] font-semibold px-1.5 py-0.5 bg-gray-800 border border-gray-600 rounded text-gray-300 font-mono">
            XGBoost
          </span>
        ),
        color: '',
        title: 'XGBoost'
      },
      {
        icon: () => (
          <span className="text-[10px] font-semibold px-1.5 py-0.5 bg-gray-800 border border-gray-600 rounded text-gray-300 font-mono">
            Random Forest
          </span>
        ),
        color: '',
        title: 'Random Forest'
      },
      {
        icon: () => (
          <span className="text-[10px] font-semibold px-1.5 py-0.5 bg-gray-800 border border-gray-600 rounded text-gray-300 font-mono">
            SMOTE
          </span>
        ),
        color: '',
        title: 'SMOTE'
      }
    ],
  },
  {
    category: "Tools & Practices",
    title: "Tools, DevOps & Practices",
    description: "Version control, API testing, continuous integration fundamentals, and standard engineering practices.",
    skills: ["Git", "GitHub", "Postman", "CI/CD (Basic)", "Unit Testing", "Debugging", "Documentation"],
    icons: [
      { icon: FaGitAlt, color: '#F05032', title: 'Git' },
      { icon: FaGithub, color: '#F1F5F9', title: 'GitHub' },
      { icon: SiPostman, color: '#FF6C37', title: 'Postman' },
      { icon: FaBug, color: '#EF4444', title: 'Debugging' },
    ],
  },
  {
    category: "Fundamentals",
    title: "Computer Science Fundamentals",
    description: "Foundational computer science principles applied to write clean, optimized, and maintainable software.",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "System Design (Fundamentals)"],
    icons: [
      { icon: FaCode, color: '#A78BFA', title: 'Data Structures & Algorithms' },
      { icon: FaLayerGroup, color: '#38BDF8', title: 'OOP' },
      { icon: FaProjectDiagram, color: '#34D399', title: 'System Design Fundamentals' },
    ],
  }
];

export default qaData;
