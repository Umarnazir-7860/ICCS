"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";

import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";
const page = () => {
  const faqItems = [
    {
      question: "What is the duration of the program?",
      answer:
        "The Diploma/BSc program runs for 12 months, including both theory and hands-on practical training.",
    },
    {
      question: "Are internships included?",
      answer:
        "Yes, all students undergo hands-on internships at partner clinics, spas, and wellness centers.",
    },
    {
      question: "Do I need prior experience in beauty or aesthetics?",
      answer:
        "No prior experience is required. The program is designed for beginners and professionals looking to upskill.",
    },
    {
      question: "What are the career opportunities after graduation?",
      answer:
        "Graduates can work in beauty clinics, spas, wellness centers, cosmetic labs, or even start their own business.",
    },
    {
      question: "Is there any certification provided?",
      answer:
        "Yes, students receive a Diploma or BSc in Aesthetic & Beauty Sciences upon successful completion of the program.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
                <b>Career-Ready Skills:</b> Graduates are prepared for roles in
                beauty clinics, spas, wellness centers, and cosmetic research.
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

      {/* What You Will Learn Section */}
      <div className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center text-[#12066a]"
          >
            What You Will Learn
          </motion.h2>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "25%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="h-1.5 bg-[#12066a] mx-auto mt-4 mb-12 rounded-full"
          />

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Skin Anatomy & Physiology",
                desc: "Understand skin structure, functions, aging process, and common skin conditions.",
              },
              {
                title: "Cosmetic Science",
                desc: "Learn formulation basics, cosmetic ingredients, product safety, and regulations.",
              },
              {
                title: "Advanced Aesthetic Treatments",
                desc: "Hands-on training in facials, peels, anti-aging and non-invasive procedures.",
              },
              {
                title: "Laser & Modern Technologies",
                desc: "Introduction to laser therapies, body contouring, and advanced beauty equipment.",
              },
              {
                title: "Health, Safety & Ethics",
                desc: "Professional hygiene standards, client safety, and ethical practices in aesthetics.",
              },
              {
                title: "Client Consultation & Practice",
                desc: "Real-world client handling, assessment, treatment planning, and aftercare.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#997819]"
              >
                <h3 className="text-xl font-bold text-[#12066a] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* -------------------- Program Modules / Schedule -------------------- */}
      <div className="max-w-7xl mx-auto py-20 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#12066a]"
        >
          Program Modules
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "25%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="h-1.5 bg-[#12066a] mx-auto mt-4 mb-12 rounded-full"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: "Module 1: Skin Anatomy & Physiology",
              desc: "Understand skin structure, functions, aging process, and common skin conditions.",
            },
            {
              title: "Module 2: Cosmetic Science",
              desc: "Learn formulation basics, cosmetic ingredients, product safety, and regulations.",
            },
            {
              title: "Module 3: Advanced Aesthetic Treatments",
              desc: "Hands-on training in facials, peels, anti-aging and non-invasive procedures.",
            },
            {
              title: "Module 4: Laser & Modern Technologies",
              desc: "Introduction to laser therapies, body contouring, and advanced beauty equipment.",
            },
          ].map((mod, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#997819]"
            >
              <h3 className="text-xl font-bold text-[#12066a] mb-4">
                {mod.title}
              </h3>
              <p className="text-gray-700">{mod.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* -------------------- Faculty / Trainers -------------------- */}
      <div className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center text-[#12066a]"
          >
            Meet Our Trainers
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "25%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="h-1.5 bg-[#12066a] mx-auto mt-4 mb-12 rounded-full"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Emily Clarke",
                role: "Lead Aesthetic Trainer",
                img: "/faculty1.jpg",
              },
              {
                name: "Mr. Oliver Bennett",
                role: "Cosmetic Scientist",
                img: "/faculty2.jpg",
              },
              {
                name: "Ms. Amelia Foster",
                role: "Hands-on Lab Instructor",
                img: "/faculty3.jpg",
              },
              {
                name: "Dr. Henry Walker",
                role: "Laser Therapy Specialist",
                img: "/faculty4.jpg",
              },
              {
                name: "Ms. Sophie Harrison",
                role: "Skin Care & Wellness Trainer",
                img: "/faculty5.jpg",
              },
            ].map((f, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.05 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="relative w-full h-56 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={f.img}
                    alt={f.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#12066a]">{f.name}</h3>
                <p className="text-gray-700">{f.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* -------------------- Gallery / Hands-on Training -------------------- */}
      <div className="max-w-7xl mx-auto py-20 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#12066a]"
        >
          Hands-on Training Gallery
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "25%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="h-1.5 bg-[#12066a] mx-auto mt-4 mb-12 rounded-full"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            "/gallery2.jpg",
            "/gallery3.jpg",
            "/gallery1.jpg",
            "/gallery4.jpg",
          ].map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative w-full h-56 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={img}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* -------------------- Fee / Admission CTA -------------------- */}
         <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 , duration:0.6 }}
        className="max-w-7xl py-16 px-4 md:px-8 text-center 
        ml-2 mr-2 sm:mx-7 sm:mt-7 md:my-10 md:mx-20 bg-gradient-to-r from-[#12066a] to-[#997819] 
       text-white rounded-xl mb-10 mx-auto"
      >
        <h2 className="text-4xl font-bold mb-4">Join Our Programs Today</h2>
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

      {/* -------------------- FAQ Section -------------------- */}

      <div className="max-w-7xl mx-auto mt-18 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#12066a]">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 font-serif text-lg mt-4 max-w-2xl mx-auto">
          Answers to common questions about our Aesthetic & Beauty Sciences
          program.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-18 space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border-2 border-[#12066a] rounded-xl shadow-sm p-6 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            {/* Question Row */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-semibold text-[#12066a]">
                {item.question}
              </h3>
              {openIndex === index ? (
                <FaChevronUp className="text-[#997819]" />
              ) : (
                <FaChevronDown className="text-[#997819]" />
              )}
            </div>

            {/* Answer with smooth open/close */}
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 text-gray-700">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
