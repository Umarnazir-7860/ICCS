"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// import ThemeToggle from "@/components/ThemeToggle"; // path to your ThemeProvider
// import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"; // Heroicons

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
 

  const menuItems = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      href: "/about",
      submenu: [
        { name: "Principal Message", href: "/about/principal-message" },
        { name: "About Us", href: "/about" },
        { name: "Our Core Values", href: "/about/core-values" },
        { name: "Policies & Procedures", href: "/about/policies" },
      ],
    },
    {
      name: "Courses",
      href: "/courses",
      submenu: [
        {
          name: "Dept of Aesthetic & Beauty Sciences",
          href: "/courses/aesthetic-beauty",
        },
        { name: "Dept of Management Sciences", href: "/courses/management" },
        {
          name: "Dept of Computer Sciences",
          href: "/courses/computer-sciences",
        },
        { name: "Dept of Security Sciences", href: "/courses/security" },
        { name: "English Language Lab", href: "/courses/english-lab" },
        { name: "Fee Structure", href: "/courses/fees" },
      ],
    },
    {
      name: "Student Services",
      href: "/student-services",
      submenu: [
        { name: "Moodle Sign In", href: "/services/moodle" },
        {
          name: "Digital Learning Resources",
          href: "/student-services/digital-learning-resources",
        },
      ],
    },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  };

  const mobileMenuVariants = {
    hidden: { height: 0, opacity: 0, transition: { duration: 0.3 } },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <nav className="bg-white shadow-md fixed w-[calc(100%-2rem)] md:w-[calc(100%-5rem)] mx-4 md:mx-10 mt-5 md:mt-5  rounded-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/iccs-logo.png"
              alt="ICC Logo"
              width={160}
              height={50}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-black">
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              className="relative"
              onMouseEnter={() => setHoveredMenu(idx)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className="font-medium hover:text-[#997819] transition"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="font-medium hover:text-[#997819] transition cursor-pointer">
                  {item.name}
                </span>
              )}

              {/* Submenu */}
              <AnimatePresence>
                {hoveredMenu === idx && item.submenu && (
                  <motion.ul
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    className="absolute top-10 left-0 mt-2 w-60 bg-white shadow-xl rounded-xl p-3"
                  >
                    {item.submenu.map((sub, i) => (
                      <li key={i}>
                        <Link
                          href={sub.href}
                          className="block px-4 py-2 hover:bg-[#12066a] hover:text-white rounded-lg transition"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/apply"
            className="px-5 py-2 rounded-lg text-white bg-gradient-to-r from-[#12066a] to-[#997819] hover:scale-105 transform transition"
          >
            Apply Now
          </Link>
        </div>

        {/* Theme Toggle
        <div className="flex items-center space-x-4">
          <ThemeToggle/>
        </div> */}
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="lg:hidden bg-white shadow-md overflow-hidden rounded-b-lg"
          >
            <ul className="flex flex-col space-y-1 p-4 text-black">
              {menuItems.map((item, idx) => (
                <li key={idx}>
                  {item.submenu ? (
                    <details className="group">
                      <summary className="cursor-pointer font-medium py-2 px-2 hover:bg-[#12066a] hover:text-white rounded transition">
                        {item.name}
                      </summary>
                      <ul className="pl-4 mt-1 flex flex-col space-y-1">
                        {item.submenu.map((sub, i) => (
                          <li key={i}>
                            <Link
                              href={sub.href}
                              className="block py-1 px-2 hover:bg-[#12066a] hover:text-white rounded transition"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-2 px-2 hover:bg-[#12066a] hover:text-white rounded transition"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link
                  href="/apply"
                  className="block text-center px-5 py-2 rounded-lg text-white bg-gradient-to-r from-[#12066a] to-[#997819] hover:scale-105 transform transition"
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
