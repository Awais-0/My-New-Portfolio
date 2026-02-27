import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">Welcome to my portfolio</h2>
          <h1 className="mt-4 text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Hi, I'm <span className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">{personalInfo.name}</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-600 dark:text-white   max-w-2xl mx-auto">
            {personalInfo.role}. {personalInfo.about}
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 dark:bg-white hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors dark:text-blue-600"
            >
              View Projects <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="#contact"
              className="flex items-center px-8 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 md:py-4 md:text-lg md:px-10 transition-colors"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex justify-center space-x-6">
            <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors">
              <Github size={28} />
            </a>
            <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors">
              <Linkedin size={28} />
            </a>
            <a href={personalInfo.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors">
              <Twitter size={28} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
