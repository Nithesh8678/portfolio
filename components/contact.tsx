"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);

    // Add access key for Web3Forms
    formData.append("access_key", "6062d304-f64b-4098-bbbd-63c7dfc481f7");

    // Sending the form data to Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Email sent successfully!");
      event.target.reset();

      // Hide the success message after 5 seconds
      setTimeout(() => {
        setResult("");
      }, 5000); // 5000ms = 5 seconds
    } else {
      setResult("Error submitting the form");
      toast.error(data.message || "Failed to send email");

      // Hide the error message after 5 seconds (optional)
      setTimeout(() => {
        setResult("");
      }, 5000);
    }
  };

  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:nitheshnithesh56@gmail.com">
          nitheshnithesh56@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col dark:text-black" onSubmit={onSubmit}>
        <input
          className="h-14 px-4 rounded-lg border border-gray-300 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-gray-300 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
      <span className="block text-gray-600 mt-4">{result}</span>
    </motion.section>
  );
}
