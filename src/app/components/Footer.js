"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IoRocketOutline } from "react-icons/io5";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";
import Link from "next/link";
import AnimatedButton from "./AnimatedButton";

const MarqueeItem = ({ text }) => (
  <div className="flex items-center gap-6 sm:gap-12 mr-6 sm:mr-12">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear",
      }}
      className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center"
    >
      <Image
        src="/flower_line_icon.png"
        alt="Icon"
        width={20}
        height={20}
        className="w-5 h-5 sm:w-[30px] sm:h-[30px] object-contain"
        priority
      />
    </motion.div>
    <span className="text-[#848ee1] text-xl sm:text-3xl whitespace-nowrap">
      {text}
    </span>
  </div>
);

const Footer = () => {
  const marqueeItems = [
    "Predictive Analysis",
    "Business Growth",
    "Smart Automation",
    "Strategic Planning",
    "AI Intelligence",
    "Performance Optimization",
    "Seamless Integration",
    "Future-Proof Innovation",
    "Advanced Analytics",
    "98% Success Rate",
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-url-bg3.png">
      {/* CTA Section */}
      <section className="bg-[#848ee1] py-20 sm:py-40 min-h-[60vh] sm:min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="mb-6 sm:mb-8 aspect-16/9 w-[280px] sm:w-[400px] relative">
              <Image
                src="/chat_illustration.png"
                alt="CTA Illustration"
                fill
                className="object-contain"
              />
            </div>

            {/* Text Content */}
            <h2 className="text-4xl sm:text-7xl text-white mb-4">
              Ready to Elevate Your Research?
            </h2>
            <p className="text-white/90 text-base sm:text-lg max-w-2xl mb-6 sm:mb-8">
              Discover AI-powered insights for libraries, <br /> researchers, and students. Biblo transforms
              academic information into actionable knowledge.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap justify-center">
              <AnimatedButton href="/contact#top" variant="secondary">
                Book a Demo
              </AnimatedButton>
              <button className="border-2 border-white text-white px-4 sm:px-6 py-2 rounded-full font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
                <IoRocketOutline className="text-lg sm:text-xl" />2 university slots available
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <motion.section
        className="bg-white py-4 sm:py-6 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-[1800px] mx-auto">
          <div
            className="relative overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <div className="flex animate-scroll">
              {[
                ...marqueeItems,
                ...marqueeItems,
                ...marqueeItems,
                ...marqueeItems,
              ].map((item, index) => (
                <MarqueeItem key={index} text={item} />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Logo Section */}
      <section className="relative overflow-hidden h-[150px] sm:h-[300px]">
        <div className="max-w-7xl mx-auto h-full relative">
          <motion.div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 50,
              damping: 15,
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative w-[350px] sm:w-[900px] h-[150px] sm:h-[300px]">
              <Image
                src="/biblo_big_logo_blue.png"
                alt="Biblo Logo"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Footer Section */}
      <section className="bg-[#848ee1] pt-[100px] sm:pt-[200px] pb-2 relative overflow-hidden">
        {/* Translucent Element */}
        <motion.div
          className="absolute bottom-[-10%] md:bottom-[-40%] left-[-5%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] pointer-events-none"
          initial={{ opacity: 0, scale: 0.8, rotate: 20 }}
          whileInView={{ opacity: 1, scale: 1.5, rotate: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/element_translucent.png"
            alt="Background Element"
            fill
            className="object-contain opacity-80"
          />
        </motion.div>

        <div className="mx-auto px-4 relative">
          <div className="flex flex-col sm:flex-row justify-between pb-8 sm:pb-12">
            {/* Logo Block */}
            <div className="flex flex-col max-w-[300px] p-4 sm:p-6 mb-8 sm:mb-0">
              <Image
                src="/biblo_logo_white_big.png"
                alt="Biblo"
                width={300}
                height={120}
                className="mb-4 sm:mb-6"
              />
              <p className="text-white/90 text-lg sm:text-xl">
                Advanced strategies with
                <br />
                Smart AI insights.
              </p>
            </div>

            {/* Newsletter Block */}
            <div className="flex flex-col max-w-[300px] p-4 sm:p-6 justify-between mb-8 sm:mb-0">
              <div>
                <h3 className="text-white text-2xl sm:text-3xl">
                  Stay in the Loop
                </h3>
                <p className="text-white/90 text-base sm:text-lg mb-4">
                  Be first to know what&apos;s next
                </p>
                <div className="flex gap-2 mb-6 sm:mb-8">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="bg-transparent border-b border-white/30 text-white placeholder-white/50 py-2 flex-grow focus:outline-none focus:border-white"
                  />
                  <button className="text-white text-xl">→</button>
                </div>
              </div>
              <div className="flex gap-6 sm:gap-8">
                <Link href="#" className="text-white hover:text-white/80">
                  <FaTwitter size={18} className="sm:w-5 sm:h-5" />
                </Link>
                <Link href="#" className="text-white hover:text-white/80">
                  <FaLinkedinIn size={18} className="sm:w-5 sm:h-5" />
                </Link>
                <Link href="#" className="text-white hover:text-white/80">
                  <FaInstagram size={18} className="sm:w-5 sm:h-5" />
                </Link>
                <Link href="#" className="text-white hover:text-white/80">
                  <FaYoutube size={18} className="sm:w-5 sm:h-5" />
                </Link>
                <Link href="#" className="text-white hover:text-white/80">
                  <FaDiscord size={18} className="sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>

            {/* Links Blocks Container */}
            <div className="flex gap-8 sm:gap-0">
              {/* First Links Block */}
              <div className="flex flex-col max-w-[300px] p-4 sm:p-6">
                <div className="grid gap-2">
                  <Link
                    href="/"
                    className="text-white text-base sm:text-lg hover:text-white/80"
                  >
                    Home
                  </Link>
                  <Link
                    href="/features"
                    className="text-white text-base sm:text-lg hover:text-white/80"
                  >
                    Features
                  </Link>
                  <Link
                    href="/how-it-works"
                    className="text-white text-base sm:text-lg hover:text-white/80"
                  >
                    How It Works
                  </Link>
                  <Link
                    href="/integration"
                    className="text-white text-base sm:text-lg hover:text-white/80"
                  >
                    Integration
                  </Link>
                  <Link
                    href="/performance"
                    className="text-white text-base sm:text-lg hover:text-white/80"
                  >
                    Performance
                  </Link>
                  <Link
                    href="/pricing"
                    className="text-white text-base sm:text-lg hover:text-white/80"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/faq"
                    className="text-white text-base sm:text-lg hover:text-white/80"
                  >
                    FAQ
                  </Link>
                </div>
                <p className="text-white/90 text-sm sm:text-md mt-auto pt-6 sm:pt-8">
                  Copyright © Rescale 2025
                </p>
              </div>

              {/* Second Links Block */}
              <div className="flex flex-col max-w-[300px] p-4 sm:p-6 md:hidden">
                <div className="grid gap-2">
                  <Link
                    href="/about"
                    className="text-white text-base sm:text-lg hover:text-white/80"
                  >
                    About us
                  </Link>
                  <Link
                    href="/client-insights"
                    className="text-white text-base sm:text-lg hover:text-white/80"
                  >
                    Client Insights
                  </Link>
                  <Link
                    href="/book-call"
                    className="text-white text-base sm:text-lg hover:text-white/80"
                  >
                    Book a Call
                  </Link>
                  <Link
                    href="/journal"
                    className="text-white text-base sm:text-lg hover:text-white/80"
                  >
                    Journal
                  </Link>
                  <Link
                    href="/contact"
                    className="text-white text-base sm:text-lg hover:text-white/80"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/404"
                    className="text-white text-base sm:text-lg hover:text-white/80"
                  >
                    404
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex gap-8 sm:gap-0 hidden md:flex">

              {/* Second Links Block */}
              <div className="flex flex-col max-w-[300px] p-4 sm:p-6">
                <div className="grid gap-2">
                  <Link
                    href="/about"
                    className="text-white text-base sm:text-lg hover:text-white/80"
                  >
                    About us
                  </Link>
                  <Link
                    href="/client-insights"
                    className="text-white text-base sm:text-lg hover:text-white/80"
                  >
                    Client Insights
                  </Link>
                  <Link
                    href="/book-call"
                    className="text-white text-base sm:text-lg hover:text-white/80"
                  >
                    Book a Call
                  </Link>
                  <Link
                    href="/journal"
                    className="text-white text-base sm:text-lg hover:text-white/80"
                  >
                    Journal
                  </Link>
                  <Link
                    href="/contact"
                    className="text-white text-base sm:text-lg hover:text-white/80"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/404"
                    className="text-white text-base sm:text-lg hover:text-white/80"
                  >
                    404
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 transition-colors z-50 group overflow-hidden"
        >
          <div className="relative">
            <Image
              src="/long_arrow.svg"
              alt="Scroll to top"
              width={24}
              height={62}
              className="w-6 h-[62px] sm:w-8 sm:h-[82px] object-contain transition-transform duration-300 group-hover:-translate-y-full"
            />
            <Image
              src="/long_arrow_with_top_bar.svg"
              alt="Scroll to top"
              width={24}
              height={62}
              className="w-6 h-[62px] sm:w-8 sm:h-[82px] object-contain absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full"
            />
          </div>
        </button>
      </section>
    </footer>
  );
};

export default Footer;
