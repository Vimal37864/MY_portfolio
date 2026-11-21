import React from 'react';
import { FaCertificate, FaPython, FaReact } from 'react-icons/fa';

const Certifications = () => {
  const certs = [
    {
      title: "Python Development Certification",
      issuer: "Besant Technologies",
      topics: "Core Python, object-oriented programming, data structures, and file handling.",
      icon: FaPython,
      color: "#3776AB"
    },
    {
      title: "React.js Development Certification",
      issuer: "Besant Technologies",
      topics: "JSX, props, state management, and responsive user interface development.",
      icon: FaReact,
      color: "#61DBFB"
    }
  ];

  return (
    <div className="certifications-section mt-12">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <FaCertificate className="text-blue-400" />
        Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {certs.map((cert, index) => {
          const Icon = cert.icon;
          return (
            <div
              key={index}
              className="bg-gray-800/90 border border-gray-700/80 rounded-xl p-6 shadow-md hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <Icon size={24} style={{ color: cert.color }} />
                <h3 className="text-lg font-bold text-white">{cert.title}</h3>
              </div>
              <p className="text-blue-400 text-sm font-medium mb-2">
                {cert.issuer}
              </p>
              <p className="text-xs text-gray-300 leading-relaxed">
                {cert.topics}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;
