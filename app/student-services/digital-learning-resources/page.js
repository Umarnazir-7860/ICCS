"use client";
import Image from "next/image";
import React from "react";
import { easeInOut, easeOut, motion } from "framer-motion";
import Link from "next/link";

const page = () => {
  return (
    <section className="">
      {/* Hero Section  */}
      <div className="relative h-screen">
        <Image src="/Library.jpg" alt="library" fill className="object-cover" />

        {/* Text  */}
        <h1 className="absolute inset-0 flex justify-center items-center text-center text-3xl md:text-6xl font-bold font-serif bg-black/40">
          Digital Learning Resources <br />
          (DLR)
        </h1>
      </div>

      {/* Resources Section  */}
      <div
        className="width-full bg-gray-100 flex flex-col justify-center
       text-center my-18  md:mt-10 lg:my-3 px-6 md:px-10 py-10"
      >
        <div className="text-black  text-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: easeInOut }}
            className="text-3xl "
          >
            Explore Learning Resources by Category
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: easeInOut }}
            className="text-[#997819] text-3xl lg:text-5xl py-2 mx-10 font-semibold"
          >
            The <span className="text-[#12066a] ">Access curated</span> digital
            learning materials <br /> designed to support your studies
            <span className="text-[#12066a]">
              {" "}
              across multiple disciplines.
            </span>
          </motion.h1>
        </div>
        {/* Cards  */}
        <div className="grid grid-cols-1 md:grid-cols-2 space-x-7 lg:grid-cols-3">
          {/* Card 1   */}
          <div
            className=" shadow-xl rounded-xl p-10 my-7 transition-transform hover:scale-105 
          "
          >
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
              Programming guides, coding practice PDFs, and beginner-friendly
              tutorials to build strong technical skills. Button text: View
              Resources
            </p>
            <Link href="/cources/computer-sciences">
              <button
                className="px-6 py-3 bg-[#12006a] text-white cursor-pointer font-semibold rounded-lg hover:scale-105 
          transform transition"
              >
               View Resources
              </button>
            </Link>
          </div>

              {/* Card 2   */}
          <div
            className=" shadow-xl rounded-xl p-10 my-7 transition-transform hover:scale-105 
          "
          >
            <Image
              src="/computer-lab.jpg"
              width={500}
              height={300}
              className="rounded-lg my-5"
            />
            <h1 className="text-3xl text-[#12066a] font-bold md:text-4xl">
              {" "}
              English Language
            </h1>
            <p className="text-black py-5">
             Grammar guides, vocabulary lists, and speaking practice materials to improve communication skills.
Button text: View Resources
            </p>
            <Link href="/cources/computer-sciences">
              <button
                className="px-6 py-3 bg-[#12006a] text-white cursor-pointer font-semibold rounded-lg hover:scale-105 
          transform transition"
              >
               View Resources
              </button>
            </Link>
          </div>

             {/* Card 3  */}
          <div
            className=" shadow-xl rounded-xl p-10 my-7 transition-transform hover:scale-105 
          "
          >
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
              Programming guides, coding practice PDFs, and beginner-friendly
              tutorials to build strong technical skills. Button text: View
              Resources
            </p>
            <Link href="/cources/computer-sciences">
              <button
                className="px-6 py-3 bg-[#12006a] text-white cursor-pointer font-semibold rounded-lg hover:scale-105 
          transform transition"
              >
               View Resources
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
