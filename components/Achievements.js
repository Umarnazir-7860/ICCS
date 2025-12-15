"use client";
import { easeIn, easeInOut, motion } from "framer-motion";

const achievementsData = [
  { id: 1, value: "1500+", label: "Students Graduated", delay: 0.2 },
  { id: 2, value: "10+", label: "International Collaborations", delay: 0.4 },
  { id: 3, value: "20+", label: "Courses Offered", delay: 0.6 },
];

const Achievements = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#12066a] mb-10">
          Our Achievements
          {/* Divider  */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "22%" }}
            transition={{ delay: 0.6 ,duration:1}}
            className="h-1.5 bg-[#12066a] mt-3 mx-auto  rounded-full mb-6 "
          ></motion.div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {achievementsData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1}}
             
              transition={{ delay:0.6,duration:1, ease: easeInOut }}
              className="bg-white rounded-xl shadow-lg p-8 transition-transform hover:scale-105 border border-[#997819]"
            >
              <h3 className="text-4xl font-bold text-[#997819] mb-2">
                {item.value}
              </h3>
              <p className="text-gray-700 font-semibold">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
