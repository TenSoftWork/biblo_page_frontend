"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  FaXTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa6";

import { LuMessageCircleMore } from "react-icons/lu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const navSlideVariants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVariants = {
    closed: {
      width: "min(320px, 95vw)",
      height: isMobile ? "60px" : "70px",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      width: "min(450px, 95vw)",
      height: "min(250px, 80vh)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.1,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0 },
    open: (i) => ({
      opacity: 1,
      transition: {
        delay: 0.1 + i * 0.05,
        duration: 0.2,
      },
    }),
  };

  const menuItems = [
    { name: "Biblo 소개", href: "#why-different" },
    { name: "핵심 기능", href: "#how-it-works" },
    { name: "기술 아키텍처", href: "#product-spotlight" },
    { name: "활용 사례", href: "#features" },
    { name: "FAQ", href: "#faq" },
    { name: "회사 소개", href: "#about-us" },
  ];

  const socialLinks = [
    { name: "X", icon: FaXTwitter, href: "https://x.com" },
    { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com" },
    { name: "Instagram", icon: FaInstagram, href: "https://instagram.com" },
    { name: "YouTube", icon: FaYoutube, href: "https://youtube.com" },
    { name: "Discord", icon: FaDiscord, href: "https://discord.com" },
  ];

  // Split menu items into two columns
  const column1Items = menuItems.slice(0, Math.ceil(menuItems.length / 2));
  const column2Items = menuItems.slice(Math.ceil(menuItems.length / 2));

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 p-2"
      initial="initial"
      animate="animate"
      variants={navSlideVariants}
    >
      <nav className="relative flex justify-center">
        <motion.div
          ref={navRef}
          className="bg-white/70 backdrop-blur-md rounded-[20px] border border-white/70 shadow-lg overflow-hidden"
          variants={containerVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        >
          {/* Header Section */}
          <div className="flex items-center justify-between p-3 sm:p-4">
            {/* Logo */}
            <Link href="/" className="relative">
              <div className="relative w-[80px] sm:w-[100px]">
                <Image
                  src="/biblo_logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="w-full h-auto"
                />
              </div>
            </Link>

            {/* Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center cursor-pointer"
            >
              <div className="grid grid-cols-3 gap-[3px] sm:gap-1">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-1 bg-[#7584D6] rounded-full"
                    animate={isOpen ? "open" : "closed"}
                    variants={{
                      closed: { scale: 1 },
                      open: { scale: 0 },
                    }}
                    transition={{ duration: 0.2, delay: i * 0.05 }}
                  />
                ))}
              </div>
            </button>

            {/* Contact Button */}
            <motion.div
              initial={false}
              animate={isOpen ? "open" : "closed"}
              variants={{
                closed: { width: "40px", sm: { width: "40px" } },
                open: { width: "auto" },
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <Link
                href="/chat"
                className="flex items-center justify-center px-3 sm:px-4 py-2 bg-gradient-to-r from-[#4251A6] to-[#A6A5FA] text-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow whitespace-nowrap text-sm sm:text-base"
              >
                <motion.div
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <LuMessageCircleMore className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
                <motion.span
                  className="ml-2 text-sm sm:text-base"
                  initial={{ opacity: 0 }}
                  animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  Book a Call
                </motion.span>
              </Link>
            </motion.div>
          </div>

          {/* Menu Items */}
          <motion.div
            className="relative px-3 sm:px-4 pb-4 h-[calc(100%-67px)]"
            variants={menuVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-8">
              {/* Column 1 */}
              <ul className="space-y-3 sm:space-y-4">
                {column1Items.map((item, i) => (
                  <motion.li
                    key={item.name}
                    variants={linkVariants}
                    custom={i}
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                  >
                    <Link
                      href={item.href}
                      className="block text-[#7584D6] hover:text-[#4251A6] transition-colors text-sm sm:text-base"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Column 2 */}
              <ul className="space-y-3 sm:space-y-4">
                {column2Items.map((item, i) => (
                  <motion.li
                    key={item.name}
                    variants={linkVariants}
                    custom={i + column1Items.length}
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                  >
                    <Link
                      href={item.href}
                      className="block text-[#7584D6] hover:text-[#4251A6] transition-colors text-sm sm:text-base"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            {/* <motion.div
              className="absolute bottom-4 right-3 sm:right-4"
              variants={menuVariants}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
            >
              <ul className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#7584D6] hover:text-[#4251A6] transition-colors"
                    >
                      <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div> */}
          </motion.div>
        </motion.div>
      </nav>
    </motion.div>
  );
};

export default Navigation;
