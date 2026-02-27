import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data/portfolioData';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Web Dev');
  
  const filteredSkills = skills.filter(skill => skill.type === activeTab);
  const categories = [...new Set(filteredSkills.map(skill => skill.category))];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            My Skills
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-white max-w-2xl mx-auto">
            These are the technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-inner">
            <button
              onClick={() => setActiveTab('Web Dev')}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === 'Web Dev'
                  ? 'gradient-bg-primary text-white shadow-lg scale-105'
                  : 'text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Web Dev
            </button>
            <button
              onClick={() => setActiveTab('AI')}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === 'AI'
                  ? 'gradient-bg-secondary text-white shadow-lg scale-105'
                  : 'text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Artificial Intelligence
            </button>
          </div>
        </div>

        {activeTab !== 'Web Dev' && <motion.p initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }} className="mt-3 text-md text-center text-gray-600 dark:text-purple-300 max-w-2xl mx-auto">
            Currently diving deep into mastering this — one step closer to leveling up.
        </motion.p>}

        <div className="mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {categories.map((category, idx) => (
                <motion.div
                  key={`${activeTab}-${category}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 bg-gray-100 dark:bg-gray-200 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow"
                >
                  <h3 className={`text-xl font-bold mb-6 border-b pb-2 ${
                    activeTab === 'Web Dev' 
                      ? 'gradient-text-primary border-blue-100 dark:border-blue-900/30' 
                      : 'gradient-text-secondary border-purple-100 dark:border-purple-900/30'
                  }`}>
                    {category}
                  </h3>
                  <div className="space-y-6">
                    {filteredSkills
                      .filter(skill => skill.category === category)
                      .map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-1.5">
                            <span className="text-sm font-semibold text-gray-700 dark:text-white/80">{skill.name}</span>
                            <span className={`text-sm font-bold ${
                              activeTab === 'Web Dev' ? 'text-blue-600 dark:text-blue-400' : 'text-purple-600 dark:text-purple-400'
                            }`}>{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2.5 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.2, ease: "circOut" }}
                              className={`h-full rounded-full ${
                                activeTab === 'Web Dev' ? 'gradient-bg-primary' : 'gradient-bg-secondary'
                              }`}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
