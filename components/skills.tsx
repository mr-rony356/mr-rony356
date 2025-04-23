"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { skillCategories } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 10,
    scale: 0.9,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.05 * index,
      duration: 0.4,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.5 },
      scale: { duration: 0.35 },
    },
  }),
};

const categoryVariants = {
  initial: { opacity: 0, y: -10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

type CategoryKey = keyof typeof skillCategories;

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const [hoveredCategory, setHoveredCategory] = useState<CategoryKey | null>(
    null
  );

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>

      {/* Category Navigation */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={categoryVariants}
        className="flex flex-wrap justify-center gap-3 mb-8"
      >
        {(Object.keys(skillCategories) as CategoryKey[]).map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={() => setHoveredCategory(category)}
            onMouseLeave={() => setHoveredCategory(null)}
            className={`text-[16px] px-6 py-2 rounded-full border border-gray-500 transition-all duration-300 ${
              hoveredCategory === category
                ? "bg-gray-800/80 text-white shadow-lg shadow-gray-500/20 dark:shadow-white/20 border border-gray-700/50"
                : "bg-gray-900/50 text-gray-300 hover:bg-gray-800/80 hover:text-white hover:shadow-lg hover:shadow-gray-500/10 dark:hover:shadow-white/10 border border-gray-800/50"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <React.Fragment key={category}>
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
                custom={index}
                className={`text-lg border cursor-pointer rounded-full px-4 py-2 transition-all duration-300 backdrop-blur-sm ${
                  hoveredCategory === category
                    ? "border-gray-700 bg-gray-800/80 text-white shadow-lg shadow-gray-500/20 dark:shadow-white/20"
                    : "border-gray-800/50 bg-gray-900/50 text-gray-300 hover:bg-gray-800/80 hover:text-white hover:border-gray-700/50 hover:shadow-lg hover:shadow-gray-500/10 dark:hover:shadow-white/10"
                }`}
                onMouseEnter={() => setHoveredCategory(category as CategoryKey)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {skill}
              </motion.div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
