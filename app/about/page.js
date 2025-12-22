"use client";
import {easeInOut, easeOut, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { FaGlobe, FaGraduationCap } from "react-icons/fa";
import Achievements from "@/components/Achievements";

const page = () => {
  return (
    <section className="w-full h-full space-x-2">
      <div className="relative w-full h-[400px] md:h-screen">
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
            transition={{ delay: 0.5, duration: 0.7, ease:easeInOut }}
            className="text-white text-3xl md:text-6xl mt-10 font-serif md:leading-18 font-bold text-center"
          >
            About International College
            <br />
            of Contemporary Sciences
          </motion.h1>
        </div>
      </div>
      {/* About Section  */}
      <div className="w-full flex flex-col lg:flex-row items-center gap-8 my-6 mb-10 px-4 sm:px-6 md:px-10 py-6">
        {/* Left Section  */}
        <div className="w-full lg:w-[70%] flex flex-col lg:mt-[-100px] text-black">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-2xl font-sm text-[#12066a]  font-semibold uppercase"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration:0.7 }}
            className="text-3xl md:text-4xl lg:text-4xl font-bold"
          >
            <span className="text-[#997819] ">We Provide the Best </span>
            <br /> <span className="text-[#12066a]">Quality Online</span> <br />
            <span className="text-[#997819]">Courses</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration:0.7 }}
            className="mt-4"
          >
            The International College of Contemporary Sciences, ICCS, is the
            United Kingdom based education provider, dedicated to academic
            quality and excellence through research and innovation, inclusive
            practice, and widening participation.
          </motion.p>
          {/* Checkmarks */}
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-row font-bold items-center gap-2 flex-nowrap mt-2"
          >
            <span className="text-[#997819] text-xl">
              <IoMdCheckmarkCircleOutline />
            </span>
            <span>Learn at Your Own Pace</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
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
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay:0.6 , duration:0.7 ,ease:easeOut}}
          className="relative h-[500px] w-full md:mt-8 lg:ml-15"
        >
          <Image
            src="/high-school.jpg"
            alt="study in uk"
            width={650}
            height={300}
            className="object-cover rounded-lg w-full"
          />
        </motion.div>
      </div>
      {/* Why Choose Us  */}
      <div
        className="width-full bg-gray-100 flex flex-col justify-center
       text-center my-18  md:mt-10 lg:my-3 px-6 md:px-10 py-10"
      >
        <div className="text-black  text-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3,duration:1, ease: easeInOut }}
            className="text-3xl "
          >
            WHY CHOOSE ICCS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5,duration:1, ease: easeInOut }}
            className="text-[#997819] text-3xl lg:text-5xl py-2 font-semibold"
          >
            The <span className="text-[#12066a] ">Best</span> Beneficial Side of
            <span className="text-[#12066a]"> ICCS</span>
          </motion.h1>
        </div>
        {/* Cards Sections  */}

        {/* Card 1  */}
        <motion.div
         initial={{ opacity: 0,y:20 }}
          whileInView={{ opacity: 1,y:0}}
          transition={{ delay: 0.6, ease: easeOut }}
           
          className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3 py-10 gap-10  "
        >
          {/* Card 1 */}
          <div className="bg-white p-6 border-2 leading-relaxed  border-[#997819] rounded-xl
           transition-transform hover:scale-105 shadow-md hover:shadow-xl transition">
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
          <div  className="bg-white p-6 border-2 leading-relaxed  border-[#997819] 
          rounded-xl shadow-md hover:shadow-xl transition-transform hover:scale-105">
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
          <div className="bg-white p-6 border-2 leading-relaxed  border-[#997819] 
          rounded-xl shadow-md hover:shadow-xl transition-transform hover:scale-105">
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
        </motion.div>
      </div>
      {/* Achievements  */}
      <Achievements />
      {/*  Vision  Section */}
      <div className="flex flex-col bg-gray-100 md:flex-col lg:flex-row px-4 md:px-6 lg:px-10 w-full gap-5 py-20">
        {/* Left Info Section  */}
        <div className="space-y-5 w-full lg:w-1/2">
          <h1 className="text-2xl md:text-5xl  text-[#12066a] font-bold">
            Our Vision
            {/* Divider  */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "32%" }}
              transition={{ delay: 0.6 ,duration:0.7}}
              className="h-1.5 bg-[#12066a] mt-2 mx-1 rounded-full mb-6 "
            ></motion.div>
          </h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5,duration:0.8 }}
            className="text-black"
          >
            The International College of Contemporary Sciences (ICCS) aspires to
            be a leading academic institution both in the UK and
            internationally, recognized for its commitment to academic
            excellence, groundbreaking research, and global impact. We aim to
            set new benchmarks in teaching quality, research advancement, and
            the professional success of our graduates, establishing ICCS as a
            trusted name in education, industry, and society. Our vision is to
            create a globally connected learning community where innovation,
            inclusion, and integrity guide the development of tomorrow’s
            leaders. By fostering a culture of creativity, critical thinking,
            and collaboration, ICCS bridges education, research, and industry to
            address real-world challenges and deliver solutions with lasting
            societal benefits. We are committed to equipping students with the
            knowledge, skills, and ethical framework necessary to thrive in a
            rapidly evolving global landscape, encouraging lifelong learning,
            social responsibility, and impactful contributions to communities
            worldwide.
          </motion.p>
        </div>

        {/* Image Section  */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration:1, ease: easeInOut }}
          className="w-full lg:w-1/2 h-auto"
        >
          <Image
            src="/PennWest.jpg"
            layout="responsive"
            alt="PennWest campus"
            width={500}
            height={300}
            className="object-cover relative rounded-xl"
          />
        </motion.div>
      </div>
      {/* Our Mission Section  */}
      <motion.div 
      initial={{opacity:0,y:40}}
      whileInView={{opacity:1,y:0}}
      transition={{delay:0.5, duration:1}}
      
      className="max-w-7xl py-16 px-4 md:px-8 text-center ml-2 mr-2 sm:m-7 bg-gradient-to-r from-[#12066a] to-[#997819] text-white rounded-xl mb-10 mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Mission</h2>
        <p className="mb-6">
          The International College of Contemporary Sciences (ICCS) is dedicated
          to advancing modern education through innovation, applied research,
          and meaningful real-world engagement. Our mission is to empower
          learners to shape the future with confidence, creativity, and purpose.
          Guided by our enduring motto, “Knowledge for a Global Future,” ICCS is
          committed to delivering transformative, future-driven education that
          integrates academic excellence, technological progress, and global
          opportunity. Through strong industry collaboration, impactful applied
          research, and a culture of continuous innovation, ICCS equips learners
          to think critically, lead with integrity, and contribute meaningfully
          to an increasingly interconnected and rapidly evolving world.
        </p>
      </motion.div>
    </section>
  );
};

export default page;
