'use client';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { FaStar, FaLightbulb, FaUsers } from "react-icons/fa";

const CoreValueCard = ({ icon, title, value }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (inView) {
      controls.start({
        num: value, // number animation ke liye
        transition: { duration: 1.5, ease: "easeOut" },
      });
    }
  }, [controls, inView, value]);

  return (
    <div
      ref={ref}
      className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center text-center transition-transform hover:scale-105"
    >
      <div className="text-5xl text-[#12066a] mb-4">{icon}</div>
      <h3 className="font-bold text-black text-xl mb-2">{title}</h3> {/* Title hamesha show */}
      <motion.div
        animate={controls}
        onUpdate={(latest) => {
          if (latest.num !== undefined) setCount(Math.floor(latest.num));
        }}
        className="text-3xl font-bold text-[#997819]"
      >
        {count}
      </motion.div>
    </div>
  );
};

const CoreValuesSection = () => {
  const coreValues = [
    { icon: <FaStar />, title: "Excellence", value: 95 },
    { icon: <FaLightbulb />, title: "Innovation", value: 85 },
    { icon: <FaUsers />, title: "Community", value: 75 },
  ];
  const [hovered, setHovered] = useState(false);

  return (
    <section className="bg-gray-50 py-20">
      <div  
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      className="max-w-7xl flex flex-col mx-auto px-4 md:px-8 text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-[#12066a]"
        >
          Our Core Values
        </motion.h2>
          {/* Animated Divider Line */}
        <motion.div
            initial={{ width: 0, }}
            animate={hovered ? { width: "17%" } : { width: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-1 bg-[#12066a]  mt-2 rounded-full mb-6 mx-auto"
          />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mt-4 text-gray-700 max-w-2xl mx-auto"
        >
          At ICC College, our core values define everything we do. We strive for
          excellence, foster innovation, and build a strong, supportive
          community.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {coreValues.map((item, idx) => (
          <CoreValueCard
            key={idx}
            icon={item.icon}
            title={item.title}
            value={item.value}
          />
        ))}
      </div>
    </section>
  );
};

export default CoreValuesSection;
