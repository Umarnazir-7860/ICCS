"use client";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    
    <motion.form
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-6 p-10 rounded-2xl bg-[#0d0b3a] max-w-4xl shadow-2xl"
      method="POST"
      action="" // 🔴 later: Formspree / Getform URL
    >
      {/* Name */}
      <div className="neon-field">
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="relative z-10 w-full rounded-[14px] bg-white  hover:border-0 hover:bg-transparent hover:placeholder-white px-5 py-4 text-white placeholder-gray-400 outline-none"
        />
      </div>

      {/* Email */}
      <div className="neon-field">
        <input
          type="email"
          name="email"
          required
          placeholder="Email Address"
           className="relative z-10 w-full rounded-[14px] bg-white  hover:border-0 hover:bg-transparent hover:placeholder-white px-5 py-4 text-white placeholder-gray-400 outline-none"
        />
      </div>

      {/* Subject */}
      <div className="neon-field">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="relative z-10 w-full rounded-[14px] bg-white  hover:border-0 hover:bg-transparent hover:placeholder-white px-5 py-4 text-white placeholder-gray-400 outline-none"
        />
      </div>

      {/* Message */}
      <div className="neon-field">
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Your Message"
          className="relative z-10 w-full rounded-[14px] bg-white  hover:border-0 hover:bg-transparent hover:placeholder-white px-5 py-4 text-white placeholder-gray-400 outline-none"
        />
      </div>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full rounded-xl bg-white py-4 text-lg font-semibold text-black transition "
      >
        Send Message
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
