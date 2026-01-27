"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { BsGithub } from "react-icons/bs";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Some Things I’ve Built</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <p className="text-center mt-10 text-gray-500 flex justify-center items-center gap-2">
        You can find more on my GitHub profile.
        <a
          href="https://github.com/mr-rony356"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
      </p>
    </section>
  );
}
