"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Call_to_action = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 , duration:0.6 }}
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
  )
}

export default Call_to_action
