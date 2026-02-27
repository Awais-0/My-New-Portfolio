import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div
                className="relative rounded-2xl p-10 h-full overflow-hidden border border-gray-200 dark:border-white/10
    bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10
    dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10"
              >
                {/* Decorative glow */}
                <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl" />

                {/* Content */}
                <div className="relative z-10 space-y-8">
                  <div>
                    <h3 className="text-4xl font-extrabold text-gray-900 dark:text-white">
                      {personalInfo.name}
                    </h3>
                    <p className="mt-2 text-lg text-gray-600 dark:text-white/70">
                      {personalInfo.role || "Full-Stack Developer"}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 dark:text-blue-400">
                        ▹
                      </span>
                      <p className="text-gray-700 dark:text-white/80">
                        Building clean, scalable, and human-centered web
                        experiences.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-purple-600 dark:text-purple-400">
                        ▹
                      </span>
                      <p className="text-gray-700 dark:text-white/80">
                        Focused on performance, accessibility, and thoughtful
                        UI.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-pink-600 dark:text-pink-400">
                        ▹
                      </span>
                      <p className="text-gray-700 dark:text-white/80">
                        Always learning, always refining.
                      </p>
                    </div>
                  </div>

                  {/* Mini stats */}
                  <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200 dark:border-white/10">
                    <div>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        3+
                      </p>
                      <p className="text-sm text-gray-600 dark:text-white/60">
                        Years
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        20+
                      </p>
                      <p className="text-sm text-gray-600 dark:text-white/60">
                        Projects
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        ∞
                      </p>
                      <p className="text-sm text-gray-600 dark:text-white/60">
                        Curiosity
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 lg:mt-0"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-white/80">
              {personalInfo.about}
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center  ">
                <span className="font-bold text-gray-600 dark:text-white w-24">
                  Location:
                </span>
                <span className="dark:text-white/80">
                  {personalInfo.address}
                </span>
              </div>
              <div className="flex items-center">
                <span className="font-bold text-gray-600 dark:text-white w-24">
                  Email:
                </span>
                <span className="dark:text-white/80">{personalInfo.email}</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold text-gray-600 dark:text-white w-24">
                  Phone:
                </span>
                <span className="dark:text-white/80">{personalInfo.phone}</span>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 transition-colors shadow-md"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
