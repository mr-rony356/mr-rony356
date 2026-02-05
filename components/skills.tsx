"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { skillCategories } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaBrain,
  FaDatabase,
  FaServer,
  FaCloud,
  FaCreditCard,
  FaCode,
  FaLaptopCode,
  FaRobot,
  FaCog,
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiRedux, SiExpress, SiPrisma, SiPostgresql, SiMongodb, SiRedis, SiTensorflow, SiPytorch, SiOpenai, SiStripe, SiAmazonaws } from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const categoryCardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: {
      duration: 0.3,
    },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Icon mapping for skills
const skillIcons: Record<string, React.ReactNode> = {
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  JavaScript: <FaJs className="text-yellow-500" />,
  TypeScript: <SiTypescript className="text-blue-600" />,
  React: <FaReact className="text-cyan-500" />,
  "Next.js": <SiNextdotjs className="text-gray-900 dark:text-white" />,
  Tailwind: <SiTailwindcss className="text-cyan-500" />,
  Redux: <SiRedux className="text-purple-600" />,
  "Node.js": <FaNode className="text-green-600" />,
  Express: <SiExpress className="text-gray-900 dark:text-white" />,
  Prisma: <SiPrisma className="text-teal-600" />,
  PostgreSQL: <SiPostgresql className="text-blue-700" />,
  MongoDB: <SiMongodb className="text-green-600" />,
  Redis: <SiRedis className="text-red-600" />,
  "Machine Learning": <FaBrain className="text-purple-500" />,
  "Deep Learning": <FaBrain className="text-purple-600" />,
  "Computer Vision": <FaRobot className="text-blue-500" />,
  TensorFlow: <SiTensorflow className="text-orange-600" />,
  PyTorch: <SiPytorch className="text-red-600" />,
  "OpenAI API": <SiOpenai className="text-gray-900 dark:text-white" />,
  LangChain: <FaBrain className="text-red-500" />,
  AWS: <SiAmazonaws className="text-orange-500" />,
  Docker: <FaDocker className="text-blue-500" />,
  Git: <FaGitAlt className="text-orange-600" />,
  "CI/CD": <FaCog className="text-gray-600 dark:text-gray-400" />,
  Stripe: <SiStripe className="text-indigo-600" />,
  Payrexx: <FaCreditCard className="text-blue-600" />,
};

// Icon mapping for categories
const categoryIcons: Record<string, React.ReactNode> = {
  "Frontend Development": <FaLaptopCode className="text-blue-500" />,
  "Backend Development": <FaServer className="text-green-500" />,
  "AI & Machine Learning": <FaBrain className="text-purple-500" />,
  "DevOps & Cloud": <FaCloud className="text-orange-500" />,
  "Payment Processing": <FaCreditCard className="text-indigo-500" />,
};

type CategoryKey = keyof typeof skillCategories;

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | null>(
    null
  );

  const categories = Object.keys(skillCategories) as CategoryKey[];

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[65rem] scroll-mt-28 sm:mb-40"
    >
      <div className="text-center mb-12">
        <SectionHeading>My Technical Expertise</SectionHeading>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          A comprehensive overview of the technologies and tools I use to build
          modern, scalable applications
        </p>
      </div>

      {/* Category Filter Buttons */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        <motion.button
          variants={skillItemVariants}
          onClick={() => setSelectedCategory(null)}
          className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === null
            ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 dark:shadow-blue-500/20 dark:bg-blue-500"
            : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
            }`}
        >
          <FaCode className="text-sm" />
          All Skills
        </motion.button>
        {categories.map((category) => (
          <motion.button
            key={category}
            variants={skillItemVariants}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category
              ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 dark:shadow-blue-500/20 dark:bg-blue-500"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
              }`}
          >
            <span className="text-base">
              {categoryIcons[category]}
            </span>
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Skills by Category */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory || "all"}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
          className="space-y-8"
        >
          {Object.entries(skillCategories).map(([category, skills]) => {
            // Filter categories if one is selected
            if (selectedCategory && selectedCategory !== category) {
              return null;
            }

            return (
              <motion.div
                key={category}
                variants={categoryCardVariants}
                className="bg-white dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-3">
                  <span className="text-2xl">
                    {categoryIcons[category]}
                  </span>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      variants={skillItemVariants}
                      custom={index}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-lg text-sm font-medium text-gray-800 dark:text-gray-200 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all duration-200 cursor-default flex items-center gap-2"
                    >
                      <span className="text-lg flex-shrink-0">
                        {skillIcons[skill] || <FaCode className="text-gray-500" />}
                      </span>
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
