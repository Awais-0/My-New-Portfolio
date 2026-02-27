import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 py-12 transition-colors duration-300 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold bg-linear-to-r dark:from-blue-400 dark:to-purple-400 from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </a>
            <p className="mt-2 text-gray-500 dark:text-white/80 max-w-xs">
              Building modern web experiences with passion and precision.
            </p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={personalInfo.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-white">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center mt-4 md:mt-0">
            Made with <Heart size={14} className="mx-1 text-red-500 dark:text-red-400 fill-current" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
