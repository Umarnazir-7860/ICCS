"use client";
import Image from "next/image";
import React from "react";
import { easeInOut, motion } from "framer-motion";
const page = () => {
  return (
    <section className="w-full">
      {/* Hero Section  */}
      <div className="relative h-screen w-full flex items-center justify-center font-bold text-4xl">
        {/* Image Section  */}
        <Image
          src="/aesthetic-beauty-sciences3.jpg"
          fill
          priority
          className="object-cover "
        />
        {/* Text  */}
        <div className="absolute inset-0 text-white text-3xl text-center md:text-5xl font-bold  leading-14 font-serif flex justify-center items-center bg-black/40">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: easeInOut }}
            className="mx-22"
          >
            Your Journey to Expertise in Aesthetic Sciences Begins Here
          </motion.h1>
        </div>
      </div>
      {/* About Program  */}
      <div
        className="max-w-7xl mx-auto py-10 px-4 mt-5 flex flex-col md:flex-col md:items-start 
   lg:flex-row md:w-full items-center gap-8"
      >
        {/* Text Section */}
        <div className="w-full lg:w-1/2 ">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-[#12066a]"
          >
            About Program
          </motion.h2>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "50%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="h-1.5 bg-[#12066a] mt-4 rounded-full mb-6 "
          />

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.7 }}
            className="text-black mt-0 mb-4"
          >
            The Diploma / BSc in Aesthetic & Beauty Sciences at ICCS equips
            students with the knowledge, practical skills, and professional
            experience needed to excel in the beauty and wellness industry. This
            program combines scientific principles, hands-on training, and
            industry exposure to prepare graduates for a rewarding career.
          </motion.p>

          {/* Bullet Points */}
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="list-none space-y-3"
          >
            <li className="flex items-start gap-3">
              <span className="text-[#12066a] ">•</span>
              <span className="text-black">
                <b>Comprehensive Curriculum:</b> Covers skin science, cosmetic
                technology, wellness therapies, and advanced aesthetic
                practices.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#12066a] ">•</span>
              <span className="text-black">
                <b>Hands-on Training:</b> Practical experience in modern labs
                and simulation environment
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#12066a] ">•</span>
              <span className="text-black">
                <b>Professional Development:</b> Internships, industry
                workshops, and mentorship opportunities.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#12066a] ">•</span>
              <span className="text-black">
                <b>Career-Ready Skills:</b> Graduates are prepared for
                roles in beauty clinics, spas, wellness centers, and cosmetic
                research.
              </span>
            </li>
          </motion.ul>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:w-full lg:w-1/2 relative rounded-lg overflow-hidden mt-5 shadow-lg"
        >
          <Image
            src="/aesthetic-program.jpg"
            alt="About ICC College"
            width={600}
            height={300}
            className="h-[410px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default page;
