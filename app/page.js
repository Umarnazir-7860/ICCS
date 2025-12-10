"use client";
import Carousel from "@/components/Carousel";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import CoreValues from "@/components/CoreValues";

export default function HomePage() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="bg-gray-50">
      {/* Carousel */}
      <Carousel />

      {/* About Section */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="max-w-7xl mx-auto py-16 px-4 md:px-8 flex flex-col md:flex-row items-center gap-8"
      >
        {/* Text Section */}
        <div className="md:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={
              hovered
                ? { opacity: [0, 1, 1], y: [0, -20, -20] }
                : { opacity: 1, y: -20 }
            }
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-[#12066a] "
          >
            About Us
          </motion.h2>
          {/* Animated Divider Line */}
          <motion.div
            initial={{ width: 0, y: -15 }}
            animate={hovered ? { width: "35%" } : { width: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-1 bg-[#12066a]  rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={
              hovered
                ? { opacity: [0, 1, 1], y: [0, -20, -20] }
                : { opacity: 1, y: -20 }
            }
            transition={{ duration: 1.7 }}
            className="text-black mt-0"
          >
            The International College of Contemporary Sciences (ICCS) is a
            premier education provider based in the United Kingdom, committed to
            delivering high-quality academic programs that foster research,
            innovation, and professional excellence. ICCS emphasizes inclusive
            practices and widening participation to ensure every student has
            access to world-class learning opportunities. Our curriculum
            integrates experiential learning, professional development, and
            strong industry connections to equip students with practical skills
            and knowledge for real-world challenges. Students benefit from
            modern labs, digital learning resources, and personalized support to
            maximize their academic growth. The college promotes a vibrant
            learning environment with interdisciplinary programs, mentorship
            opportunities, and international collaborations, preparing graduates
            to excel in a rapidly evolving global landscape. ICCS is dedicated
            to nurturing critical thinking, creativity, and leadership
            qualities, ensuring our alumni are well-prepared to contribute
            meaningfully to their professions and communities.
          </motion.p>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:w-1/2 relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src="/iccs-home-about.jpg"
            alt="About ICC College"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Core Values Section */}
      <CoreValues />

      {/* Courses Section */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="max-w-7xl mx-auto py-16 px-4 md:px-8 bg-white"
      >
        <h2 className="text-5xl font-bold text-center text-[#12066a] ">
          Our Courses
        </h2>
        {/* Animated Divider Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={hovered ? { width: "14%" } : { width: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="h-1 bg-[#12066a]  mt-2 rounded-full mb-6 mx-auto"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl border-2 border-[#12066a] shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl  text-[#12066a] font-bold mb-3">
              Computer Sciences
            </h3>
            <p className="text-black">
              Modern computer labs, hands-on practical projects, and
              industry-ready training designed to prepare students for
              real-world challenges. Our programs focus on skill development,
              innovation, and professional growth to ensure graduates are
              confident and job-ready.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border-2 border-[#12066a]  shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-bold text-[#12066a] mb-3">
              Management Sciences
            </h3>
            <p className="text-black">
              Develop leadership, analytical, and management skills through
              practical training and real-world projects, equipping you with the
              expertise to excel in your chosen career.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl border-2 border-[#12066a]  shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl text-[#12066a] font-bold mb-3">
              Aesthetic & Beauty Sciences
            </h3>
            <p className="text-black">
              Learn modern techniques with hands-on practical exposure in our
              fully equipped labs, gaining real-world skills to excel in your
              career.
            </p>
          </div>
        </div>
      </div>

 {/* Facility section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-[#12066a]"
          >
            Our Facilities
          </motion.h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Each facility card */}
          
          {/* 1st Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 rounded-xl shadow-lg p-6"
          >
            <Image  src="/lab1.jpg" width={400} height={100} alt="Computer Lab" className="rounded-lg" />
            <h3 className="mt-4 font-bold text-black text-xl">Computer Lab</h3>
            <p className="text-gray-700 mt-1">Modern computers are highly advanced machines capable of performing complex tasks at incredible speeds.</p>
          </motion.div>
           
           {/* 2nd Card */}
           <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 rounded-xl shadow-lg p-6"
          >
            <Image  src="/prc.jpg" width={735} height={490} alt="Computer Lab" className="rounded-lg" />
            <h3 className="mt-4 font-bold text-black text-xl">Aesthetic & Beauty Sciences Lab</h3>
            <p className="text-gray-700 mt-1">Hands-on training lab for beauty, aesthetics, and wellness sciences programs.</p>
          </motion.div>
           
           {/* 3rd Card  */}
           <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 rounded-xl shadow-lg p-6"
          >
            <Image  src="/english-language-lab.jpg" width={500} height={20} alt="Computer Lab" className="rounded-lg" />
            <h3 className="mt-4 font-bold text-black text-xl">English Language Lab</h3>
            <p className="text-gray-700 mt-1">Interactive lab to improve communication, speaking, and writing skills for global readiness.</p>
          </motion.div>
          {/* Repeat for other labs/facilities */}
        </div>
        
      </section>

      {/* Contact / Call-to-action Section */}
      <div className="max-w-7xl py-16 px-4 md:px-8 text-center bg-gradient-to-r from-[#12066a] to-[#997819] text-white rounded-xl mb-16 mx-auto">
        <h2 className="text-4xl font-bold mb-4">Join Our Programs Today</h2>
        <p className="mb-6">
          Apply now and become a part of our growing community of learners.
        </p>
        <Link
          href="/apply"
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:scale-105 transform transition"
        >
          Apply Now
        </Link>
      </div>
 </div>
  );
}
