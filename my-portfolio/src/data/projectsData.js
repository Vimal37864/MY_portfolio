// src/data/projectsData.js

const projectsData = [
  {
    title: "AI-Powered Crime Pattern Forecasting and Suspect Prediction System",
    subtitle: "Machine Learning & Geospatial Analytics Dashboard",
    role: "Full Stack & Machine Learning Developer",
    period: "June 2026",
    metrics: [
      { value: "3", label: "ML Models Compared" },
      { value: "Flask", label: "Prediction REST API" },
      { value: "SMOTE", label: "Imbalance Handled" }
    ],
    bullets: [
      "Trained and compared three machine learning models (Random Forest, XGBoost, and Decision Tree) to predict crime risk levels and suspect profiles using a synthetic Chennai crime dataset.",
      "Applied feature engineering, categorical encoding, and SMOTE to address class imbalance in the training data.",
      "Developed a Flask REST API to serve machine learning predictions to a React dashboard featuring zone-wise analytics and geospatial heatmaps across Chennai localities."
    ],
    technologies: [
      "Python",
      "Flask",
      "React.js",
      "TypeScript",
      "MySQL",
      "XGBoost",
      "Random Forest",
      "Decision Tree",
      "SMOTE",
      "REST APIs"
    ]
  },
  {
    title: "Full-Stack CRUD Application",
    subtitle: "Web Application with REST APIs & Responsive UI",
    role: "Full Stack Developer",
    period: "April 2026",
    metrics: [
      { value: "CRUD", label: "Complete Data Lifecycle" },
      { value: "REST", label: "CORS Configured APIs" },
      { value: "React", label: "Dynamic Frontend UI" }
    ],
    bullets: [
      "Developed a full-stack CRUD application with a React.js frontend and MySQL database to support creating, reading, updating, and deleting records.",
      "Built REST API endpoints and configured Cross-Origin Resource Sharing (CORS) for frontend-backend communication.",
      "Implemented dynamic forms, routing, and a responsive user interface using HTML5, CSS3, and JavaScript.",
      "Managed database schema changes using MySQL migrations to maintain reliable data persistence."
    ],
    technologies: [
      "Python",
      "React.js",
      "MySQL",
      "REST APIs",
      "HTML5",
      "CSS3",
      "JavaScript",
      "CORS"
    ]
  }
];

export default projectsData;
