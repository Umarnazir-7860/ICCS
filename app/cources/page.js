"use client";
import Image from "next/image";
import React from "react";
import { easeInOut, motion } from "framer-motion";
import Link from "next/link";

const page = () => {
  return (
    <section className="w-full h-full">
      {/* Hero Section  */}
      <div className="relative h-screen w-full flex items-center justify-center font-bold text-4xl">
        {/* Image Section  */}
        <Image
          src="/courses-hero-3.jpg"
          alt="Our Courses"
          fill // full container cover karega
          className="object-cover"
        />
        {/* Text  */}
        <div className="absolute inset-0 text-white text-3xl text-center md:text-6xl font-bold  font-serif flex justify-center items-center bg-black/40">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration:0.6 , ease: easeInOut }}
          >
            Study in the UK <br /> Learn, Grow & Succeed
          </motion.h1>
        </div>
      </div>
      {/* Departments Overview  */}
      <div className="py-14 px-7 bg-gray-100">
        <div className="flex justify-center">
          <h1 className="text-3xl md:text-5xl font-bold font-serif  text-[#12066a]">
            Our Academic Departments
            {/* Divider  */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "52%" }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="h-1.5 bg-[#12066a] mt-5 text-center mx-auto rounded-full mb-6 "
            ></motion.div>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 space-x-8 lg:grid-cols-3">
          {/* Card 1   */}
          <div className=" shadow-xl rounded-xl p-10 my-10  transition-transform hover:scale-105 border border-[#997819]">
            <h1 className="text-3xl text-[#12066a] font-bold md:text-4xl">
              {" "}
              Aesthetic & Beauty Sciences
            </h1>
            <p className="text-black py-5">
              Professional training in aesthetic, beauty, and skincare practices
              aligned with international standards.
            </p>
          </div>
          {/* Card 2  */}
          <div className=" shadow-2xl rounded-xl p-10 my-10  transition-transform hover:scale-105 border border-[#997819]">
            <h1 className="text-3xl text-[#12066a] font-bold md:text-4xl">
              {" "}
              Management Sciences
            </h1>
            <p className="text-black py-5">
              Business-focused programs designed to develop leadership,
              analytical, and managerial skills.
            </p>
          </div>
          {/* Card 3 */}
          <div className=" shadow-2xl rounded-xl p-10 my-10  transition-transform hover:scale-105 border border-[#997819]">
            <h1 className="text-3xl text-[#12066a] font-bold md:text-4xl">
              {" "}
              Computer Sciences
            </h1>
            <p className="text-black py-5">
              Industry-ready computing and IT programs with practical lab
              exposure.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 space-x-8 lg:grid-cols-3">
          {/* Card 1   */}
          <div className=" shadow-xl rounded-xl p-10 my-10  transition-transform hover:scale-105 border border-[#997819]">
            <h1 className="text-3xl text-[#12066a] font-bold md:text-4xl">
              {" "}
              Security Sciences
            </h1>
            <p className="text-black py-5">
              Specialised programs in security management and risk assessment.
            </p>
          </div>
          {/* Card 2  */}
          <div className=" shadow-2xl rounded-xl p-10 my-10  transition-transform hover:scale-105 border border-[#997819]">
            <h1 className="text-3xl text-[#12066a] font-bold md:text-4xl">
              {" "}
              English Language Lab
            </h1>
            <p className="text-black py-5">
              Improve communication, academic, and professional English skills.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Courses  */}
      <div className="py-14 px-7">
      
        <div className="flex justify-center">
          <h1 className="text-[#12066a] font-bold text-3xl md:text-6xl">Trending Courses
             {/* Divider  */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "62%" }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="h-1.5 bg-[#12066a] mt-5 text-center mx-auto rounded-full mb-6 "
            ></motion.div>

          </h1>
          
        </div>
        {/* Cards Section  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1   */}
          <div className=" shadow-xl rounded-xl p-10 my-7 transition-transform hover:scale-105 
          ">
            <Image
            src="/computer-lab.jpg"
            width={500}
            height={300} 
            className="rounded-lg my-5"
            
            />
            <h1 className="text-3xl text-[#12066a] font-bold md:text-4xl">
              {" "}
              Computer Sciences
            </h1>
            <p className="text-black py-5">
             Always in high demand, especially for tech careers.
            </p>
            <Link 
            href="/cources/computer-sciences">
            <button className="px-6 py-3 bg-[#12006a] text-white cursor-pointer font-semibold rounded-lg hover:scale-105 
          transform transition"
        >
          Enroll Now</button>
            </Link>
            
          </div>
           {/* Card 2  */}
          <div className=" shadow-xl rounded-xl p-10 my-7 ml-5 transition-transform hover:scale-105 
          ">
            <Image
            src="/management-sciences2.jpg"
            width={600}
            height={100} 
            className="rounded-lg h-[200px] my-5"
            
            />
            <h1 className="text-3xl text-[#12066a] font-bold md:text-4xl">
              {" "}
              Management Sciences
            </h1>
            <p className="text-black py-5">
             Appeals to students and professionals aiming for leadership or business skills.
            </p>
            <button className="px-6 py-3 bg-[#12006a] text-white cursor-pointer font-semibold rounded-lg hover:scale-105 
          transform transition"
        >
          Enroll Now</button>
          </div>
             {/* Card 3  */}
          <div className=" shadow-xl rounded-xl p-10 my-7 ml-5 transition-transform hover:scale-105 
          ">
            <Image
            src="/cyber-security.jpg"
            width={600}
            height={100} 
            className="rounded-lg h-[200px] my-5"
            
            />
            <h1 className="text-3xl text-[#12066a] font-bold md:text-4xl">
              {" "}
              Security Sciences
            </h1>
            <p className="text-black py-5">
           Cybersecurity is very hot right now, lots of career opportunities.
            </p>
            <button className="px-6 py-3 bg-[#12006a] text-white cursor-pointer font-semibold rounded-lg hover:scale-105 
          transform transition"
        >
          Enroll Now</button>
          </div>

        </div>
      </div>

        {/* Contact / Call-to-action */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-7xl py-16 px-4 md:px-8 text-center 
        ml-2 mr-2 sm:mx-7 sm:mt-7 md:my-15 md:mx-20 bg-gradient-to-r from-[#12066a] to-[#997819] 
       text-white rounded-xl mb-10 mx-auto"
      >
        <h2 className="text-4xl font-bold mb-4">Start Learning Today</h2>
        <p className="mb-6">
          Apply now and become a part of our growing community of learners.
        </p>
        <Link
          href="/apply"
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:scale-105 
          transform transition"
        >
          Apply Now
        </Link>
      </motion.div>
    </section>
  );
};

export default page;
