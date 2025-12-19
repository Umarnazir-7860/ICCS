"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

import {
  FaBookOpen,
  FaBriefcase,
  FaChalkboardTeacher,
  FaChevronDown,
  FaChevronUp,
  FaGraduationCap,
  FaHeart,
  FaLaptopCode,
  FaUniversity,
  FaUserCheck,
  FaUserShield,
} from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

const studnents_services = () => {
  const ukStudents = [
    {
      name: "Oliver Smith",
      program: "Engineering",
      photo: "/students-1.jpg",
      quote:
        "Studying in the UK was made so much easier with ICCS support. The team helped me settle in quickly!",
    },
    {
      name: "Emma Johnson",
      program: "Business Analytics",
      photo: "/students-2.jpg",
      quote:
        "The career guidance and workshops gave me the confidence to apply for internships in the UK.",
    },
    {
      name: "Liam Brown",
      program: "Computer Science",
      photo: "/students-3.jpg",
      quote:
        "IT support and digital resources made online learning smooth and effective during my course.",
    },
  ];
  const faqItems = [
    {
      question: "How do I book academic support?",
      answer:
        "You can book academic support sessions through our student portal. Simply log in, select your course, and choose a suitable time slot.",
    },
    {
      question: "What are the library opening hours?",
      answer:
        "The library is open Monday to Friday from 8 AM to 10 PM and Saturday to Sunday from 9 AM to 6 PM.",
    },
    {
      question: "Is counseling confidential?",
      answer:
        "Yes! All counseling sessions are strictly confidential. Our counselors adhere to professional ethics and privacy policies.",
    },
    {
      question: "How do I access digital learning resources?",
      answer:
        "All digital learning resources, including e-books and journals, are available through the student portal under the 'Digital Resources' section.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" ">
      {/* Hero Section  */}
      <div className="relative h-screen">
        <Image src="/student-services.jpg" fill className="object-cover" />
        {/* Text  */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: easeInOut }}
            className="text-white text-3xl md:text-6xl mt-10 font-serif md:leading-18  text-center"
        >
          Student Services <br />
          <p className="text-3xl my-5">
            Supporting your academic journey at every step
          </p>
        </motion.h1>
        </div>
     
      </div>
      {/* Services Heading */}
      <h1 className="text-3xl md:text-6xl font-bold text-[#12066a]  text-center mt-16">
        Services Overview
      </h1>

      {/* Cards Row 1 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 px-6">
        {/* Card 1 */}
        <motion.div
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="bg-white shadow-xl rounded-xl border-2 border-[#12066a] p-10 text-center"
        >
          <span className="text-5xl flex justify-center text-[#997819] mb-6">
            <FaGraduationCap />
          </span>

          <h2 className="text-2xl text-[#12066a] font-bold mb-4">
            Academic Support
          </h2>

          <p className="text-gray-700 mb-6">
            One-to-one academic guidance, assignment help, and study support to
            help students achieve their goals.
          </p>

          <Link href="/courses/academic-support">
            <button className="px-6 py-3 bg-[#12066a] text-white font-semibold rounded-lg hover:bg-[#0e0555] transition">
              View Resources
            </button>
          </Link>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="bg-white shadow-xl rounded-xl border-2 border-[#12066a] p-10 text-center"
        >
          <span className="text-5xl flex justify-center text-[#997819] mb-6">
            <FaBookOpen />
          </span>

          <h2 className="text-2xl text-[#12066a] font-bold mb-4">
            Digital Learning Resources
          </h2>

          <p className="text-gray-700 mb-6">
            Access e-books, journals, databases, and online learning materials
            anytime, anywhere.
          </p>

          <Link href="/student-services/digital-learning-resources">
            <button className="px-6 py-3 bg-[#12066a] text-white font-semibold rounded-lg hover:bg-[#0e0555] transition">
              View Resources
            </button>
          </Link>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="bg-white shadow-xl rounded-xl border-2 border-[#12066a] p-10 text-center"
        >
          <span className="text-5xl flex justify-center text-[#997819] mb-6">
            <FaUserShield />
          </span>

          <h2 className="text-2xl text-[#12066a] font-bold mb-4">
            Student Counselling
          </h2>

          <p className="text-gray-700 mb-6">
            Confidential counselling services to support student wellbeing,
            mental health, and personal development.
          </p>

          <Link href="/student-services/counselling">
            <button className="px-6 py-3 bg-[#12066a] text-white font-semibold rounded-lg hover:bg-[#0e0555] transition">
              View Resources
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Cards Row 2 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 px-6">
        {/* IT Support */}
        <motion.div
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="bg-white shadow-xl rounded-xl border-2 border-[#12066a] p-10 text-center"
        >
          <span className="text-5xl flex justify-center text-[#997819] mb-6">
            <FaLaptopCode />
          </span>

          <h2 className="text-2xl text-[#12066a] font-bold mb-4">IT Support</h2>

          <p className="text-gray-700 mb-6">
            Technical assistance for student portals, emails, online classes,
            and digital tools.
          </p>

          <Link href="/student-services/it-support">
            <button className="px-6 py-3 bg-[#12066a] text-white font-semibold rounded-lg hover:bg-[#0e0555] transition">
              Get Help
            </button>
          </Link>
        </motion.div>

        {/* Career Guidance */}
        <motion.div
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="bg-white shadow-xl rounded-xl border-2 border-[#12066a] p-10 text-center"
        >
          <span className="text-5xl flex justify-center text-[#997819] mb-6">
            <FaBriefcase />
          </span>

          <h2 className="text-2xl text-[#12066a] font-bold mb-4">
            Career Guidance
          </h2>

          <p className="text-gray-700 mb-6">
            Career planning, CV writing, interview preparation, and professional
            development support.
          </p>

          <Link href="/student-services/career-guidance">
            <button className="px-6 py-3 bg-[#12066a] text-white font-semibold rounded-lg hover:bg-[#0e0555] transition">
              Explore Careers
            </button>
          </Link>
        </motion.div>

        {/* Library */}
        <motion.div
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="bg-white shadow-xl rounded-xl border-2 border-[#12066a] p-10 text-center"
        >
          <span className="text-5xl flex justify-center text-[#997819] mb-6">
            <FaUniversity />
          </span>

          <h2 className="text-2xl text-[#12066a] font-bold mb-4">
            Library & Study Spaces
          </h2>

          <p className="text-gray-700 mb-6">
            Quiet study areas, digital libraries, and academic resources to
            support learning.
          </p>

          <Link href="/student-services/library">
            <button className="px-6 py-3 bg-[#12066a] text-white font-semibold rounded-lg hover:bg-[#0e0555] transition">
              Learn More
            </button>
          </Link>
        </motion.div>
      </div>

      {/* How We Support Students Section */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#12066a] mb-4">
            How We Support Our Students
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            From enrollment to graduation, ICCS provides continuous academic,
            technical, and personal support to help every student succeed.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Card 1 */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6 }}
              className="bg-white shadow-xl rounded-xl border-2 border-[#12066a] p-8 text-center hover:scale-105 transition"
            >
              <div className="text-5xl text-[#997819] flex justify-center mb-6">
                <FaUserCheck />
              </div>
              <h3 className="text-xl font-bold text-[#12066a] mb-3">
                Enrollment Support
              </h3>
              <p className="text-gray-700 text-sm">
                Guidance from day one to help students smoothly begin their
                academic journey.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white shadow-xl rounded-xl border-2 border-[#12066a] p-8 text-center hover:scale-105 transition"
            >
              <div className="text-5xl text-[#997819] flex justify-center mb-6">
                <FaChalkboardTeacher />
              </div>
              <h3 className="text-xl font-bold text-[#12066a] mb-3">
                Academic Guidance
              </h3>
              <p className="text-gray-700 text-sm">
                One-to-one academic help, workshops, and study support
                throughout your course.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white shadow-xl rounded-xl border-2 border-[#12066a] p-8 text-center hover:scale-105 transition"
            >
              <div className="text-5xl text-[#997819] flex justify-center mb-6">
                <FaHeart />
              </div>
              <h3 className="text-xl font-bold text-[#12066a] mb-3">
                Wellbeing & Counselling
              </h3>
              <p className="text-gray-700 text-sm">
                Confidential counselling services supporting mental health and
                wellbeing.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white shadow-xl rounded-xl p-8 border-2 border-[#12066a] text-center hover:scale-105 transition"
            >
              <div className="text-5xl text-[#997819] flex justify-center mb-6">
                <FaBriefcase />
              </div>
              <h3 className="text-xl font-bold text-[#12066a] mb-3">
                Career Development
              </h3>
              <p className="text-gray-700 text-sm">
                CV support, career guidance, and employability skills for future
                success.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Students testimonials  */}
      <div className="bg-[#f5f5f5] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#12066a]">
            Our UK Students
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Highlighting the experiences of our students studying in the UK.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {ukStudents.map((student, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white shadow-xl rounded-xl border-2 border-[#12066a] p-8 text-center hover:scale-105 transition"
            >
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden relative">
                <Image
                  src={student.photo}
                  alt={student.name}
                  fill
                  className="min-w-full min-h-full object-cover"
                />
              </div>
              <p className="text-gray-700 italic mb-4">"{student.quote}"</p>
              <h3 className="text-xl font-bold text-[#12066a]">
                {student.name}
              </h3>
              <span className="text-gray-500 text-sm">{student.program}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQs Section  */}

      <div className="max-w-7xl mx-auto mt-18 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#12066a]">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 font-serif text-lg mt-4 max-w-2xl mx-auto">
          Answers to common questions about our student services.
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
                  key="content" // must be unique per AnimatePresence
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

export default studnents_services;
