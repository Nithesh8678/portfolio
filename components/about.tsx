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
        Hi, I’m <span className="font-bold">Nithesh</span>, a passionate web
        developer with expertise in{" "}
        <span className="font-bold">
          HTML, CSS, JavaScript, React, Next.js, MongoDB, Firebase, Generative
          AI,
        </span>{" "}
        and <span className="font-bold">UI/UX design</span>. I’m currently
        studying at{" "}
        <span className="font-bold">
          SRM Institute of Science and Technology, Ramapuram
        </span>
        , and working on a Web3 project called{" "}
        <span className="font-bold">Untron</span> in collaboration with
        international peers. I thrive on learning new technologies and am
        excited about the future of{" "}
        <span className="font-bold">Web3 and blockchain development</span>. With
        a strong foundation in full-stack development, I’m eager to contribute
        to innovative projects that push the boundaries of what’s possible on
        the web. When I’m not immersed in code, you can find me{" "}
        <span className="italic">
          playing video games, watching movies and series,
        </span>{" "}
        or <span className="italic">exploring new hobbies</span>. As a{" "}
        <span className="font-bold">fast learner</span>, I’m always on the
        lookout for new challenges and opportunities to grow. Looking forward to
        connecting and working on exciting projects in{" "}
        <span className="font-bold">Web3 and blockchain technology</span>!
      </p>
    </motion.section>
  );
}
