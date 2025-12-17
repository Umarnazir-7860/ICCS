"use client";
import Image from "next/image";
import React from "react";
import { easeInOut, easeOut, motion } from "framer-motion";
import Link from "next/link";
import { LogIn, Search, MousePointer2, MessageSquare } from 'lucide-react';

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
       text-center my-1  md:mt-10 lg:my-3 px-6 md:px-10 py-5"
      >
        <div className="text-black  text-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: easeInOut }}
            className="text-3xl "
          >
            Explore Learning Resources by Category
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: easeInOut }}
            className="text-[#997819] text-2xl lg:text-5xl py-2 md:mx-10 font-semibold"
          >
            The <span className="text-[#12066a] ">Access curated</span> digital
            learning materials <br /> designed to support your studies
            <span className="text-[#12066a]">
              {" "}
              across multiple disciplines.
            </span>
          </motion.h2>
        </div>
        {/* Cards row 1  */}
        <div className="grid grid-cols-1 md:grid-cols-2  space-x-7 lg:grid-cols-3">
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
            <h2 className="text-3xl text-[#12066a]  font-bold ">
              Computer Sciences
            </h2>
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
              src="/english-language.jpg"
              width={500}
              height={300}
              className="rounded-lg h-45 my-5"
            />
            <h2 className="text-3xl text-[#12066a] font-bold ">
              {" "}
              English Language
            </h2>
            <p className="text-black py-5">
              Grammar guides, vocabulary lists, and speaking practice materials
              to improve communication skills. Button text: View Resources
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
              src="/business-management.jpg"
              width={500}
              height={300}
              className="rounded-lg my-5"
            />
            <h2 className="text-3xl text-[#12066a] font-bold ">
              {" "}
              Business & Management
            </h2>
            <p className="text-black py-5">
              Business fundamentals, management strategies, case studies, and
              learning resources to build leadership and decision-making skills.
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
        {/* Cards row 2  */}
        <div className="grid grid-cols-1 md:grid-cols-2 space-x-7 lg:grid-cols-3 ">
          {/* Card 1   */}
          <div
            className=" shadow-xl rounded-xl p-10 my-7 transition-transform hover:scale-105 
          "
          >
            <Image
              src="/aesthetic-sciences.jpg"
              width={500}
              height={300}
              className="rounded-lg h-45 my-5"
            />
            <h2 className="text-3xl text-[#12066a] font-bold ">
              {" "}
              Aesthetic & Beauty Sciences
            </h2>
            <p className="text-black py-5">
              Learning resources, skincare science PDFs, and aesthetic practice
              guides to develop practical and professional beauty skills.
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
              src="/security-sciences.jpg"
              width={500}
              height={300}
              className="rounded-lg h-45 my-5"
            />
            <h2 className="text-3xl text-[#12066a] font-bold ">
              {" "}
              Security Sciences
            </h2>
            <p className="text-black py-5">
              Grammar guides, vocabulary lists, and speaking practice materials
              to improve communication skills. Button text: View Resources
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
      {/* Our Resources importance  */}
      <div className="flex flex-col md:flex-row px-4 md:px-6 md:py-16 ">
        <div className="flex flex-col sm:w-full md:w-1/2 mb-4">
          <h2 className="text-3xl md:text-5xl mx-0 md:mx-10 font-bold text-[#12066a]">
            Why Choose Our Digital Learning Resources?
          </h2>

          <p className="text-gray-700 mt-6 md:mx-10">
            Our digital learning resources are carefully designed to support
            students at every stage of their academic journey, from foundational
            learning to advanced subject understanding. Each resource is
            meticulously curated by subject experts to ensure clarity,
            relevance, and practical value, making it easier for learners to
            grasp complex concepts. These materials not only help students
            strengthen their core knowledge and improve problem-solving skills
            but also foster critical thinking, creativity, and analytical
            abilities. By engaging with these resources, students can gain
            confidence in applying their knowledge in real-world academic and
            professional scenarios. They provide structured guidance,
            step-by-step explanations, illustrative examples, and practical
            exercises that cater to diverse learning styles. Whether preparing
            for exams, tackling challenging projects, or exploring new areas of
            interest, these resources empower learners to achieve academic
            excellence and personal growth. Moreover, the content is
            continuously updated to reflect the latest trends, methodologies,
            and research in various disciplines, ensuring that students stay
            ahead and develop a strong foundation for lifelong learning.
          </p>
        </div>
        <div className="flex mx-auto sm:w-full md:w-1/2">
          <Image
            src="/e-learning.jpg"
            width={400}
            height={300}
            className="w-2xl rounded-2xl"
          />
        </div>
      </div>
     {/* ... Existing Sections ... */}


{/* How to Access Section */}
<div className="px-6 py-20 bg-gray-100 mb-[-30]">
  <h1 className="text-[#12066a] py-20 text-3xl md:text-5xl font-bold text-center">
    How to access DLR (step-by-step)
  </h1>

  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">

      {/* STEP 1 */}
      <motion.div
        whileHover="hover"
        initial="rest"
        animate="rest"
        className="relative group"
      >
        {/* Icon */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#937012] rounded-full flex items-center justify-center border-4 border-white shadow-lg z-20 transition-transform group-hover:scale-110">
          <LogIn className="w-8 h-8 text-white" />
        </div>

        {/* Card */}
        <div className="relative overflow-hidden bg-white pt-16 pb-12 px-6 rounded-tr-[60px] rounded-bl-[60px] rounded-tl-lg rounded-br-lg shadow-lg border border-gray-50">

          {/* Black overlay */}
          <motion.div
            variants={{
              rest: { x: "-100%" },
              hover: { x: "0%" },
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0  bg-gradient-to-r from-[#12066a] to-[#997819] z-0"
          />

          {/* Content */}
          <motion.div
            variants={{
              rest: { color: "#1f2937" },
              hover: { color: "#ffffff" },
            }}
            transition={{ duration: 0.25 }}
            className="relative z-10 text-center"
          >
            <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">
              Step 1
            </h3>
            <p className="text-[15px] leading-relaxed">
              Log in to the ICCS UK portal with your student/staff credentials
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* STEP 2 */}
      <motion.div
        whileHover="hover"
        initial="rest"
        animate="rest"
        className="relative group"
      >
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#12066a] rounded-full flex items-center justify-center border-4 border-white shadow-lg z-20 transition-transform group-hover:scale-110">
          <Search className="w-8 h-8 text-white" />
        </div>

        <div className="relative overflow-hidden bg-white pt-16 pb-12 px-6 rounded-tr-[60px] rounded-bl-[60px] rounded-tl-lg rounded-br-lg shadow-lg border border-gray-50">

          <motion.div
            variants={{
              rest: { x: "-100%" },
              hover: { x: "0%" },
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0  bg-gradient-to-r from-[#12066a] to-[#997819] z-0"
          />

          <motion.div
            variants={{
              rest: { color: "#1f2937" },
              hover: { color: "#ffffff" },
            }}
            transition={{ duration: 0.25 }}
            className="relative z-10 text-center"
          >
            <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">
              Step 2
            </h3>
            <p className="text-[15px] leading-relaxed">
              Use the DLR search to find books, articles, theses & databases.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* STEP 3 */}
      <motion.div
        whileHover="hover"
        initial="rest"
        animate="rest"
        className="relative group"
      >
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#937012] rounded-full flex items-center justify-center border-4 border-white shadow-lg z-20 transition-transform group-hover:scale-110">
          <MousePointer2 className="w-8 h-8 text-white" />
        </div>

        <div className="relative overflow-hidden bg-white pt-16 pb-12 px-6 rounded-tr-[60px] rounded-bl-[60px] rounded-tl-lg rounded-br-lg shadow-lg border border-gray-50">

          <motion.div
            variants={{
              rest: { x: "-100%" },
              hover: { x: "0%" },
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0  bg-gradient-to-r from-[#12066a] to-[#997819] z-0"
          />

          <motion.div
            variants={{
              rest: { color: "#1f2937" },
              hover: { color: "#ffffff" },
            }}
            transition={{ duration: 0.25 }}
            className="relative z-10 text-center"
          >
            <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">
              Step 3
            </h3>
            <p className="text-[15px] leading-relaxed">
              Click “Online access” or save to your reading list.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* STEP 4 */}
      <motion.div
        whileHover="hover"
        initial="rest"
        animate="rest"
        className="relative group"
      >
        <div className="absolute -top-10 left-1/2  -translate-x-1/2 w-20 h-20 bg-[#12066a] rounded-full flex items-center justify-center border-4 border-white shadow-lg z-20 transition-transform group-hover:scale-110">
          <MessageSquare className="w-8 h-8 text-white" />
        </div>

        <div className="relative overflow-hidden bg-white pt-16 pb-12 px-6 rounded-tr-[60px] rounded-bl-[60px] rounded-tl-lg rounded-br-lg shadow-lg border border-gray-50">

          <motion.div
            variants={{
              rest: { x: "-100%" },
              hover: { x: "0%" },
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0  bg-gradient-to-r from-[#12066a] to-[#997819] z-0"
          />

          <motion.div
            variants={{
              rest: { color: "#1f2937" },
              hover: { color: "#ffffff" },
            }}
            transition={{ duration: 0.25 }}
            className="relative z-10 text-center"
          >
            <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">
              Stuck?
            </h3>
            <p className="text-[15px] leading-relaxed ]">
              Open Live Chat or request one-to-one academic assistance.
            </p>
          </motion.div>
        </div>
      </motion.div>

    </div>
  </div>
</div>

    </section>
  );
};

export default page;
