"use client";
import Carousel from "@/components/Carousel";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import CoreValues from "@/components/CoreValues";
import { useInView } from "react-intersection-observer";

export default function HomePage() {
  const [hovered, setHovered] = useState(false);

  // useInView hooks for scroll animations (no once:true)
  const [aboutRef, aboutInView] = useInView({ threshold: 0.2 });
  const [coursesRef, coursesInView] = useInView({ threshold: 0.2 });
  const [facilitiesRef, facilitiesInView] = useInView({ threshold: 0.2 });

  const aboutAnimate = hovered || aboutInView;
  const coursesAnimate = hovered || coursesInView;
  const facilitiesAnimate = hovered || facilitiesInView;

  return (
    <div className="bg-gray-50">
      {/* Hero Section Carousel */}
      <Carousel />

      {/* About Section */}
      <div
        ref={aboutRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="max-w-7xl mx-auto py-10 px-4 mt-5 flex flex-col md:flex-col md:items-start 
        lg:flex-row md:w-full items-center gap-8"
      >
        {/* Text Section */}
        <div className="w-full lg:w-1/2 ">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={
              aboutAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
            }
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-[#12066a]"
          >
            About Us
          </motion.h2>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "28%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="h-1.5 bg-[#12066a] mt-2 rounded-full mb-6 "
          />

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={
              aboutAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
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
          animate={aboutAnimate ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:w-full lg:w-1/2 relative rounded-lg overflow-hidden mt-5 shadow-lg"
        >
          <Image
            src="/iccs-home-about.jpg"
            alt="About ICC College"
            width={600}
            height={300}
          />
        </motion.div>
      </div>

      {/* Core Values Section */}
      <CoreValues />

      {/* Courses Section */}
      <div
        ref={coursesRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="max-w-7xl mx-auto py-16 px-4 mb-5 md:px-8 bg-white"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#12066a]">
          Our Courses
        </h2>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "12%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="h-1.5 bg-[#12066a] mt-2 rounded-full mb-10 mx-auto"
        />

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 ">
          {/* Computer Sciences */}
          <div className="bg-white p-6 rounded-xl border-2 border-[#12066a]
           shadow-lg hover:shadow-2xl transition-transform hover:scale-105">
            <h3 className="text-xl text-[#12066a] font-bold mb-3">
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

          {/* Management Sciences */}
          <div className="bg-white p-6 rounded-xl border-2 border-[#12066a] shadow-lg hover:shadow-2xl
           transition-transform hover:scale-105">
            <h3 className="text-xl font-bold text-[#12066a] mb-3">
              Management Sciences
            </h3>
            <p className="text-black">
              Develop leadership, analytical, and management skills through
              practical training and real-world projects, equipping you with the
              expertise to excel in your chosen career.
            </p>
          </div>

          {/* Aesthetic & Beauty Sciences */}
          <div className="bg-white p-6 rounded-xl border-2 border-[#12066a] 
          shadow-lg hover:shadow-2xl transition-transform hover:scale-105">
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

      {/* Facility Section */}
      <section className="bg-white mx-5 mt-0" ref={facilitiesRef}>
        <div className="max-w-7xl mx-auto px-4  text-center mb-5">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={
              facilitiesAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
            }
            transition={{ duration: 1 }}
            className="text-4xl  md:text-5xl font-bold text-[#12066a]"
          >
            Our Facilities
               {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "17%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="h-1.5 bg-[#12066a] mt-2 rounded-full mb-10 mx-auto"
        />

          </motion.h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 ml-2 mr-2 gap-8">
          {/* Computer Lab */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            animate={facilitiesAnimate ? { scale: 1.05 } : { scale: 1 }}
            className="bg-gray-50 rounded-xl shadow-lg p-6 transition-transform hover:scale-105 "
            
          >
            <Image
              src="/lab1.jpg"
              width={400}
              height={100}
              alt="Computer Lab"
              className="rounded-lg"
            />
            <h3 className="mt-4 font-bold text-black text-xl">Computer Lab</h3>
            <p className="text-gray-700 mt-1">
              Modern computers are highly advanced machines capable of
              performing complex tasks at incredible speeds.
            </p>
          </motion.div>

          {/* Aesthetic & Beauty Sciences Lab */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            animate={facilitiesAnimate ? { scale: 1.05 } : { scale: 1 }}
            className="bg-gray-50 rounded-xl shadow-lg p-6 transition-transform hover:scale-105"
          >
            <Image
              src="/prc.jpg"
              width={735}
              height={490}
              alt="Beauty Lab"
              className="rounded-lg"
            />
            <h3 className="mt-4 font-bold text-black text-xl">
              Aesthetic & Beauty Sciences Lab
            </h3>
            <p className="text-gray-700 mt-1">
              Hands-on training lab for beauty, aesthetics, and wellness
              sciences programs.
            </p>
          </motion.div>

          {/* English Language Lab */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            animate={facilitiesAnimate ? { scale: 1.05 } : { scale: 1.05 }}
            className="bg-gray-50 rounded-xl shadow-lg p-6 transition-transform hover:scale-105"
          >
            <Image
              src="/english-language-lab.jpg"
              width={500}
              height={100}
              alt="English Lab"
              className="rounded-lg"
            />
            <h3 className="mt-4 font-bold text-black text-xl">
              English Language Lab
            </h3>
            <p className="text-gray-700 mt-1">
              Interactive lab to improve communication, speaking, and writing
              skills for global readiness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact / Call-to-action */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 , duration:0.6 }}
        className="max-w-7xl py-16 px-4 md:px-8 text-center 
        ml-2 mr-2 sm:mx-7 sm:mt-7 md:my-20 md:mx-20 bg-gradient-to-r from-[#12066a] to-[#997819] 
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
    </div>
  );
}
