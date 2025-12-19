"use client";
import Image from "next/image";
import { motion, easeInOut } from "framer-motion";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import ContactForm from "@/components/home-components/ContactForm";


const ContactUs = () => {
  return (
    <section>
      {/* Hero Section */}
      <div className="relative h-screen">
        <Image src="/university-campus.jpg" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: easeInOut }}
            className="text-white text-3xl md:text-6xl mt-10 font-serif md:leading-18  text-center"
          >
            Contact Us <br />
            <p className="text-2xl md:text-3xl mt-5">
              We are here to help and answer any questions
            </p>
          </motion.h1>
        </div>
      </div>

   
{/* Contact Info Section */}
<div className="max-w-7xl mx-auto py-20 px-6">
  <h2 className="text-3xl md:text-5xl font-bold text-[#12066a] text-center mb-10">
    Get in Touch
  </h2>
  <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
    Reach out to our team for inquiries, support, or feedback. We aim to
    respond within 24 hours.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
    {/* Address */}
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-xl rounded-xl border-2 border-[#12066a] p-10 hover:scale-105 transition"
    >
      <HiLocationMarker className="text-5xl text-[#12066a] mx-auto mb-4" />
      <h3 className="text-2xl font-bold text-[#12066a] mb-4">Address</h3>
      <p className="text-gray-700">
        ICCS UK Office <br />
        123 Education Street <br />
        London, UK
      </p>
    </motion.div>

    {/* Email */}
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-white shadow-xl rounded-xl border-2 border-[#12066a] p-10 hover:scale-105 transition"
    >
      <HiMail className="text-5xl text-[#12066a] mx-auto mb-4" />
      <h3 className="text-2xl font-bold text-[#12066a] mb-4">Email</h3>
      <p className="text-gray-700">support@iccsuk.edu</p>
    </motion.div>

    {/* Phone */}
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white shadow-xl rounded-xl border-2 border-[#12066a] p-10 hover:scale-105 transition"
    >
      <HiPhone className="text-5xl text-[#12066a] mx-auto mb-4" />
      <h3 className="text-2xl font-bold text-[#12066a] mb-4">Phone</h3>
      <p className="text-gray-700">+44 1234 567890</p>
    </motion.div>
  </div>
</div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="relative w-full h-96 rounded-xl shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1269714.4618005787!2d0.16575!3d51.569864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a4c2891fef6f%3A0x39cb5f3b20ab9119!2s7%20Bernard%20Rd%2C%20Romford%20RM7%200JD%2C%20UK!5e0!3m2!1sen!2sus!4v1765374067496!5m2!1sen!2sus"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Placeholder for Form Section */}
      <div className="max-w-4xl mx-auto py-10 px-6 text-center ">
        <h2 className="text-3xl md:text-5xl font-bold text-[#12066a] mb-6">
          Send Us a Message
        </h2>
       <ContactForm/>
      </div>
    </section>
  );
};

export default ContactUs;
