// components/Footer.js

import Link from "next/link";
import Image from "next/image";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  // Define the structure for links for easier mapping
  const importantLinks = [
    {
      name: "Department of Aesthetic And Beauty Sciences",
      href: "/aesthetic-beauty",
    },
    { name: "Department of Management Sciences", href: "/management" },
    { name: "Department of Computer Sciences", href: "/computer" },
    { name: "Principal's Message", href: "/principals-message" },
    { name: "Our Core Values", href: "/core-values" },
    { name: "Digital Learning Resources (DLR)", href: "/dlr" },
    { name: "Policies & Procedures", href: "/policies" },
  ];

  // Define social media icons and links
  const socialMedia = [
    { Icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
    { Icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { Icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { Icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
    { Icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="bg-[#12066a] text-white py-10 mr-[-250px] mt-[35px]  md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 ml-20 gap-8 md:grid-cols-4 lg:grid-cols-5">
        {/* === Column 1: College Info === */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <div className="mb-4">
            {/* Replace with your actual logo image path */}
            <Image
              src="/more-small-logo.png"
              alt="International College of Contemporary Sciences Logo"
              width={200}
              height={60}
              className="mb-2"
            />
          </div>
          <p className="text-sm leading-relaxed mb-4">
            <span className="font-bold">
              International College Of Contemporary Sciences (ICCS)
            </span>{" "}
            is a forward-thinking institution dedicated to excellence in
            education and research. Guided by our vision “Knowledge For A Global
            Future,” we equip students with modern skills, global awareness, and
            innovative thinking to succeed in today’s dynamic world.
          </p>
          <p className="text-base font-extrabold text-[#FEDB01] mt-6">
            INTERNATIONAL COLLEGE OF CONTEMPORARY SCIENCE
          </p>
        </div>

        {/* === Column 2: Important Links === */}
        <div>
          <h3 className="text-xl font-bold mb-4">Important Links:</h3>
          <ul className="space-y-2 text-sm">
            {importantLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-[#FEDB01] transition duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* === Column 3: Registrations/References === */}
        <div className="space-y-6">
          <h3 className="text-sm font-bold mb-4">
            UK Provider Reference Number (UKPRN)
          </h3>
          {/* Replace with your actual QR code image path and UK flag */}
          <div className="flex items-center space-x-2">
            <div className="w-full h-4">
              <Image
                src="/ukcrn-logo-300x96.png"
                alt="UK Flag"
                width={150}
                height={6}
                className="rounded-lg"
              />
            </div>
          </div>

          <h3 className="text-sm font-bold mb-4 pt-6 ">
            UK Company House Registration (UKCRN)
          </h3>
          <div className="flex items-center space-x-2">
            <div className="w-full h-4 relative">
              <Image
                src="/ukprn-logo-300x96.png"
                alt="UK Flag"
                width={150}
                height={6}
                className="rounded-lg"
              />
            </div>
          </div>

          <h3 className="text-sm font-bold mb-4 pt-6">
            UK Information Commissioner's Office Registration
          </h3>
          <div className="flex items-center space-x-2">
            {/* ICO Logo Placeholder (use a real image for production) */}
            <Image
              src="/UKICO-qr-code-1.png"
              alt="UK Flag"
              width={150}
              height={6}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* === Column 4: Contact Us & Map === */}
        <div className="col-span-1">
          <h3 className="text-lg font-bold mb-4">Contact Us:</h3>
          <div className="space-y-3 mb-6 text-sm">
          
            <p className="flex items-center font-bold">
              <FaPhoneAlt className="mr-2 text-2xl text-[#FEDB01] min-w-[1rem]" />
              Mobile: +44 7360 182981
              Office: +44 20 8090 4209
            </p>
            <p className="flex items-center font-bold">
              <FaEnvelope className="mr-2 text-[#FEDB01] min-w-[1rem]" />
              <a href="mailto:info@iccs.uk" className="hover:text-[#FEDB01]">
                info@iccs.uk
              </a>
            </p>
            <p className="flex font-bold">
              <FaMapMarkerAlt className="mr-2 text-[#FEDB01] mt-1 min-w-[1rem]" />
              7 Bernard Road, RM7 0HX Romford, London, United Kingdom
            </p>
          </div>

          {/* Map Section */}
          <div className="bg-gray-100 h-40 w-full rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1269714.4618005787!2d0.16575!3d51.569864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a4c2891fef6f%3A0x39cb5f3b20ab9119!2s7%20Bernard%20Rd%2C%20Romford%20RM7%200JD%2C%20UK!5e0!3m2!1sen!2sus!4v1765374067496!5m2!1sen!2sus"
              width="100%"
              height="100%"
              className="border-0 "
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* === Social Media Icons === */}
          <div className="flex justify-center space-x-2 mt-4 ">
            {socialMedia.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="bg-white text-[#1D2B52] p-3 rounded-full hover:bg-[#FEDB01] hover:text-[#1D2B52] transition duration-300"
              >
                <Icon className="text-sm" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* === Social Media Icons Separator === */}
      <hr className="border-t border-gray-700 my-8 max-w-7xl mx-auto" />
    </footer>
  );
};

export default Footer;
