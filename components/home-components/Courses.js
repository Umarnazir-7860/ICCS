"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Courses = () => {
  return (
    <div

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
  )
}

export default Courses
