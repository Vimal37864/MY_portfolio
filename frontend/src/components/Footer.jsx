import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaFileAlt } from 'react-icons/fa';
import resumePdf from '../resume/vimalbalaji_resume.pdf';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 pt-8 pb-10 border-t border-gray-800 text-gray-400 text-sm">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-white font-semibold text-base">Vimal Balaji V R</p>
          <p className="text-xs text-gray-500 mt-0.5">
            Full Stack Developer | Python · React.js · Flask · MySQL
          </p>
        </div>

        <div className="flex items-center gap-4 text-gray-400">
          <a
            href="https://linkedin.com/in/vimalbalaji27"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
            title="LinkedIn Profile"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://github.com/Vimal37864"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            title="GitHub Profile"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="mailto:vimalbalajivr@gmail.com"
            className="hover:text-blue-400 transition-colors"
            title="Send Email"
          >
            <FaEnvelope size={18} />
          </a>
          <a
            href="tel:+919025320645"
            className="hover:text-blue-400 transition-colors"
            title="Call"
          >
            <FaPhoneAlt size={16} />
          </a>
          <a
            href={resumePdf}
            download="vimalbalaji_resume.pdf"
            className="hover:text-white transition-colors text-xs font-mono font-medium px-2.5 py-1 rounded bg-gray-800/80 border border-gray-700/80 hover:border-gray-500 flex items-center gap-1.5"
            title="Resume"
          >
            <FaFileAlt size={12} />
            <span>Resume</span>
          </a>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-800/60 text-center text-xs text-gray-500">
        <p>© {year} Vimal Balaji V R. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
