"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  return (
    <div
       
        className="max-w-7xl mx-auto py-10 px-4 mt-5 flex flex-col md:flex-col md:items-start 
        lg:flex-row md:w-full items-center gap-8"
      >
        {/* Text Section */}
        <div className="w-full lg:w-1/2 ">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={
               { opacity: 1, y: 0 } 
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
             { opacity: 1, y: 0 }
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
          whileInView={ { x: 0, opacity: 1 } }
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
  )
}

export default About
