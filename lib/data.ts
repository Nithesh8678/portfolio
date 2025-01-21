import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "University",
    location: "SRM Institue of Science and Technology",
    description:
      "Pursuing a Bachelor's degree in Computer Science and Engineering. Currently studying 2nd year with 9.7 cgpa.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2027",
  },
  {
    title: "Work",
    location: "Ledger, London",
    description:
      "Currently working as a junior web developer at Ledger. Working on the ledger books project.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "Chennai, India",
    description:
      "I'm now a full-stack developer and web3 enthusiast working as a freelancer and a part time developer at Spynad marketing agency. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Find&Earn",
    description:
      "Used the power of web3 to make a platform where users can find lost items and earn money by finding them. A real world playfield for bounty hunters",
    tags: ["React", "Node.js", "Solidity", "Framer", "Hardhat"],
    imageUrl: corpcommentImg,
  },
  {
    title: "AI Chat App",
    description:
      "A chat app that uses OpenAI's GPT-3 to generate responses. It can also generate code snippets.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "LedgerBooks",
    description:
      "A place where all the transactions of major chains are recorded and stored in a secure manner. It is a blockchain based ledger.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: rmtdevImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Firebase",
  "Solidity",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Hardhat",
  "Ethersjs",
  "Cassandra",
  "Docker",
] as const;
