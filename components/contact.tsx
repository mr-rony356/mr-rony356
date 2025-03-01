"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Get in Touch</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Feel free to reach out at{" "}
        <a
          className="underline decoration-2 underline-offset-2 hover:text-gray-950 dark:hover:text-white transition-colors"
          href="mailto:omorfarukrony2@gmail.com"
        >
          omorfarukrony2@gmail.com
        </a>{" "}
        or send a message below.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-90 
          dark:focus:bg-opacity-100 transition-all dark:outline-none focus:outline-none
          focus:ring-2 focus:ring-gray-600 dark:focus:ring-white/50"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-90
          dark:focus:bg-opacity-100 transition-all dark:outline-none focus:outline-none
          focus:ring-2 focus:ring-gray-600 dark:focus:ring-white/50 resize-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
