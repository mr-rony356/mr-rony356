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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My passion for{" "}
        <span className="font-medium">programming and website development</span>{" "}
        started when I saw the amazing work of{" "}
        <span className="font-medium">a skilled web developer</span>—a big
        brother from my village who became my inspiration. Inspired by what code
        can do, I started my learning journey in{" "}
        <span className="font-medium">2021</span>, teaching myself the basics
        and building projects from scratch. With hard work and determination, I
        turned my skills into opportunities,{" "}
        <span className="font-medium">freelancing</span> to gain real-world
        experience and to{" "}
        <span className="font-medium">pay for my own education</span>. In{" "}
        <span className="font-medium">2023</span>, I reached an important goal
        by getting into{" "}
        <span className="font-medium">Daffodil International University</span>,
        paid for entirely through my own hard work and dedication.
      </p>

      <p>
        <span className="italic">What I love most about programming</span> is
        the excitement of problem-solving—that moment when everything clicks and
        a solution comes up. My core stack includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        , and I'm also good with TypeScript and Prisma. I'm always learning new
        technologies and trying to improve my skills. Currently, I'm looking for
        a <span className="font-medium">full-time position</span> where I can
        work on great projects and keep growing as a software developer.
      </p>
    </motion.section>
  );
}
