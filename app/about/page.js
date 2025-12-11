"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { FaGlobe, FaGraduationCap } from "react-icons/fa";

const page = () => {
  return (
    <section className="w-full h-full">
      <div className="relative w-full h-[300px] md:h-[600px]">
        {/* Hero Section */}
        <Image
          src="/about-hero-3.jpg"
          alt="About Hero"
          fill // full container cover karega
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-white text-3xl md:text-6xl font-serif leading-18 font-bold text-center"
          >
            About International College
            <br />
            of Contemporary Sciences
          </motion.h1>
        </div>
      </div>

      {/* About Section  */}
      <div className="w-full h-[500px] flex leading-relaxed my-10 px-10 py-10 ">
        {/* Left Section  */}
        <div className="flex flex-col text-black">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-2xl font-sm text-[#12066a] font-semibold uppercase"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl font-bold mt-2"
          >
            {" "}
            <span className="text-[#997819] ">We Provide the Best </span>
            <br /> <span className="text-[#12066a]">Quality Online</span> <br />
            <span className="text-[#997819]">Courses</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-4"
          >
            The International College of Contemporary Sciences, ICCS, is the
            United Kingdom based education provider, dedicated to academic
            quality and excellence through research and innovation, inclusive
            practice, and widening participation.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-row font-bold items-center gap-2 flex-nowrap mt-2"
          >
            <span className="text-[#997819] text-xl">
              <IoMdCheckmarkCircleOutline />
            </span>
            <span>Learn at Your Own Pace</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="flex flex-row font-bold items-center gap-2 flex-nowrap mt-2"
          >
            <span className="text-[#997819] text-xl">
              <IoMdCheckmarkCircleOutline />
            </span>
            <span>Hands-On Classroom Experience</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="flex flex-row font-bold items-center gap-2 flex-nowrap mt-2"
          >
            <span className="text-[#997819]  text-xl">
              <IoMdCheckmarkCircleOutline />
            </span>
            <span>Guidance from Expert Educators</span>
          </motion.p>
        </div>
        {/* Image Section  */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="relative h-auto w-full"
        >
          <Image
            src="/high-school.jpg"
            alt="study in uk"
            fill // container ko fully fill karega
            className="object-cover rounded-lg" // image ko crop + adjust karega
          />
        </motion.div>
      </div>

      {/* Why Choose Us  */}
      <div className="width-full bg-gray-100 flex flex-col justify-center text-center my-10 px-10 py-10">
        <div className="text-black  text-5xl">
          <p className="text-3xl">WHY CHOOSE ICCS</p>
          <h1 className="text-[#997819] font-semibold">
            The <span className="text-[#12066a] ">Best</span> Beneficial Side of
            <span className="text-[#12066a]"> ICCS</span>
          </h1>
        </div>
        {/* Cards Sections  */}

        {/* Card 1  */}
        <div className="grid grid-cols-1  md:grid-cols-3 py-10 gap-10">
          {/* Card 1 */}
          <div className="bg-white p-6 border-2 leading-relaxed  border-[#997819] rounded-xl shadow-md hover:shadow-xl transition">
            <span className="text-4xl text-center flex justify-center text-[#997819]">
              <FaUserGroup />
            </span>
            <h1 className="text-2xl font-semibold text-[#12066a] mt-4">
              Who We Are
            </h1>
            <p className="mt-2 text-gray-600">
              International College of Contemporary Sciences (ICCS) is a
              UK-based higher education provider committed to academic
              excellence, innovation, and inclusivity.
            </p>
          </div>

          {/* Card 2  */}
          <div className="bg-white p-6 border-2 leading-relaxed  border-[#997819] rounded-xl shadow-md hover:shadow-xl transition">
            <span className="text-4xl text-center flex justify-center text-[#997819]">
              <FaGlobe />
            </span>
            <h1 className="text-2xl font-semibold text-[#12066a] mt-4">
              Learning Beyond Boundaries
            </h1>
            <p className="mt-2 text-gray-600">
              Education at ICCS goes beyond textbooks — it inspires curiosity,
              fosters collaboration, and prepares students to make meaningful
              contributions to society.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-6 border-2 leading-relaxed  border-[#997819] rounded-xl shadow-md hover:shadow-xl transition">
            <span className="text-4xl text-center flex justify-center text-[#997819]">
          <FaGraduationCap />
            </span>
            <h1 className="text-2xl font-semibold text-[#12066a] mt-4">
              Expert Guidance
            </h1>
            <p className="mt-2 text-gray-600">
              Dedicated educators provide mentorship and support, ensuring every
              student reaches their full potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
