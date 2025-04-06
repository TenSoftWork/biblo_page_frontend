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
import { useState, useEffect } from "react";

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
    <span className="text-[#848ee1] text-lg whitespace-nowrap">
      {text}
    </span>
  </div>
);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setEmail("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const marqueeItems = [
    "AI 기반 자료 분류",
    "메타데이터 구조화",
    "문맥 기반 탐색",
    "지식 맥락 연결",
    "개인화된 정보 추천",
    "이용 행태 분석",
    "검색 흐름 최적화",
    "도서관 시스템 연동",
    "연구 흐름 지원",
    "차세대 정보 서비스",
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
            <h2 className="text-4xl sm:text-7xl text-white mb-10">
              Ready to Elevate 
              <br />Your Research?
            </h2>
            <p className="text-white/90 text-base sm:text-lg max-w-2xl mb-6 sm:mb-8 break-keep">
              비블로(Biblo)는 도서관, 연구자, 학습자를 위한 AI 에이전트입니다.  
              흩어져 있는 학술 정보와 메타데이터를 정밀하게 구조화하고,  
              개인의 탐색 흐름에 맞춰 의미 있는 지식으로 재구성합니다.  
              단순한 검색을 넘어, 실제 학습과 연구에 바로 적용 가능한 정보로 전환합니다.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap justify-center">
              <AnimatedButton href="/chat" variant="secondary" className="w-[160px]">
                Try Biblo
              </AnimatedButton>
{/*               <button className="border-2 border-white text-white px-4 sm:px-6 py-2 rounded-full font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
                <IoRocketOutline className="text-lg sm:text-xl" />2 university slots available
              </button> */}
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
            <div className="relative w-[385px] sm:w-[990px] h-[165px] sm:h-[330px]">
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
                width={147}
                height={59}
                className="mb-4 sm:mb-6"
              />
              <p className="text-white/90 text-base sm:text-lg">
                도서관 데이터를 넘어,
                <br />
                지식의 흐름까지 탐색합니다.
              </p>
            </div>

            {/* Newsletter Block */}
            <div className="flex flex-col max-w-[300px] p-4 sm:p-6 justify-between mb-8 sm:mb-0">
              <div>
                <h3 className="text-white text-2xl sm:text-3xl">
                  Stay in the Loop
                </h3>
                <p className="text-white/90 text-base sm:text-lg mb-4">
                  최신 소식을 빠르게 전달받으세요.
                </p>
                <p className="text-white/90 text-base sm:text-lg mb-4">
                  contact@biblo.ai
                </p>
                <form onSubmit={handleSubmit} className="flex gap-2 mb-6 sm:mb-8">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="이메일 주소를 입력하세요."
                      className="w-[200px] sm:w-[300px] py-2 bg-[#848ee1] text-white placeholder-white/50 border-b border-white/30 focus:outline-none focus:border-white/30 [&:-webkit-autofill]:bg-[#848ee1] [&:-webkit-autofill]:text-white [&:-webkit-autofill]:border-white/30"
                      required
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="text-white text-xl hover:text-white/80 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "..." : "→"}
                  </button>
                </form>
                {submitStatus === "success" && (
                  <p className="text-white/90 text-sm">비블로 뉴스레터 구독이 완료되었습니다.</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-white/90 text-sm">오류가 발생했습니다. 다시 시도해주세요.</p>
                )}
              </div>
              {/* <div className="flex gap-6 sm:gap-8">
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
              </div> */}
              <p className="text-white/90 text-sm sm:text-md mt-auto pt-9 sm:pt-12">
                Copyright © {new Date().getFullYear()} Biblo AI, Inc.
              </p>
            </div>

            {/* Links Blocks Container - Hidden on all screens */}
            <div className="hidden">
              {/* First Links Block */}
              {/* <div className="flex flex-col max-w-[300px] p-4 sm:p-6">
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
                  Copyright © {new Date().getFullYear()} Biblo AI, Inc.
                </p>
              </div> */}

              {/* Second Links Block */}
              <div className="flex flex-col max-w-[300px] p-4 sm:p-6 md:hidden">
                {/* <div className="grid gap-2">
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
                </div> */}
              </div>
            </div>

            <div className="flex gap-8 sm:gap-0 hidden md:flex">
              {/* Second Links Block */}
              {/* <div className="flex flex-col max-w-[300px] p-4 sm:p-6">
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
              </div> */}
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
