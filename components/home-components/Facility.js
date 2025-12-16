"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Facility = () => {
  return (
    <section className="bg-white mx-5 mt-0" >
        <div className="max-w-7xl mx-auto px-4  text-center mb-5">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={
              { opacity: 1, y: 0 }            }
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
            animate={ { scale: 1.05 } }
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
             whileInView={{ scale: 1.05 } } 
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
  )
}

export default Facility
