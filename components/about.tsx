"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[53rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      
      <p className="mb-4 text-lg">
        My journey into{" "}
        <span className="font-semibold text-gray-900 dark:text-gray-100">
          programming and web development
        </span>{" "}
        began with a spark of inspiration—watching a skilled developer from my village 
        create digital magic. That moment changed everything.
      </p>

      <div className="mb-6 p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
        <p className="text-base leading-relaxed">
          Starting in <span className="font-semibold text-blue-600 dark:text-blue-400">2021</span>, 
          I taught myself to code from scratch, transforming curiosity into capability. 
          Through <span className="font-semibold">freelancing</span>, I didn't just build websites—I 
          built my future, funding my own education one project at a time. 
          By <span className="font-semibold text-blue-600 dark:text-blue-400">2023</span>, 
          I achieved a milestone that seemed impossible: enrolling at{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-100">
            Daffodil International University
          </span>, paid entirely through my own determination and hard work.
        </p>
      </div>

      <p className="mb-5 text-lg">
        <span className="italic font-medium text-gray-700 dark:text-gray-300">
          What drives me?
        </span>{" "}
        The thrill of solving complex puzzles, that magical moment when 
        everything clicks into place. 
      </p>

      <div className="mb-6 p-5 bg-white dark:bg-gray-800 rounded-xl border-l-4 border-blue-500 shadow-sm">
        <p className="text-base leading-relaxed text-left">
          <span className="block mb-2 text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
            Tech Stack
          </span>
          My core expertise spans{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-100">
            React, Next.js, Node.js, MongoDB, TypeScript, and Prisma
          </span>. 
          But I'm not stopping there—I'm diving deep into the cutting edge of{" "}
          <span className="font-semibold text-purple-600 dark:text-purple-400">
            AI and Large Language Models
          </span>, exploring technologies like{" "}
          <span className="font-semibold text-purple-600 dark:text-purple-400">
            Model Context Protocol (MCP)
          </span>{" "}
          to create smarter, more intuitive applications.
        </p>
      </div>

      <p className="text-lg leading-relaxed">
        I'm constantly evolving, passionate about{" "}
        <span className="font-semibold text-gray-900 dark:text-gray-100">
          AI integration, modern web architecture, and scalable systems
        </span>. 
        Currently seeking a{" "}
        <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Full-time position
        </span>{" "}
        where I can contribute to innovative projects and grow alongside a forward-thinking team.
      </p>
    </motion.section>
  );
}