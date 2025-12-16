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
            transition={{ delay: 0.3, duration: 0.6, ease: easeInOut }}
            className="text-3xl "
          >
            Explore Learning Resources by Category
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: easeInOut }}
            className="text-[#997819] text-3xl lg:text-5xl py-2 mx-10 font-semibold"
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
      <div className="flex  px-6 py-16 ">
        <div className="flex flex-col sm:w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl mx-10 font-bold text-[#12066a]">
            Why Choose Our Digital Learning Resources?
          </h2>

          <p className="text-gray-700 mt-6 mx-10">
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
    </section>
  );
};

export default page;
