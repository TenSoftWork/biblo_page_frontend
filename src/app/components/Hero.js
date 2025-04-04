"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { IoSparklesOutline } from "react-icons/io5";
import BackgroundAnimation from "./BackgroundAnimation";
import AnimatedButton from "./AnimatedButton";

const Hero = () => {
  const clientLogos = [
    "/hero_section_company_logo_1.png",
    "/hero_section_company_logo_2.png",
    "/hero_section_company_logo_3.png",
    "/hero_section_company_logo_4.png",
    "/hero_section_company_logo_5.png",
  ];

  return (
    <>
      <section
        className="relative flex items-center justify-center pt-20 pb-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4"
        id="hero"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Hero Content */}
          <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 pt-12 sm:pt-16 md:pt-18">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center text-white pr-3 sm:pr-4 rounded-full border border-[#7584D6] gap-1.5 sm:gap-2 text-xs sm:text-sm"
            >
              <span className="font-medium bg-[#7584D6] text-white px-2.5 sm:px-3 md:px-4 py-1.5 rounded-full flex items-center gap-1">
                <IoSparklesOutline className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                12K+
              </span>
              <span className="font-medium text-[#7584D6]">
                ASK AI ANYTHING
              </span>
            </motion.div>

            {/* Title */}
            <div className="space-y-1 sm:space-y-2 md:space-y-4">
              <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-3 md:gap-6 px-2 sm:px-4">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="heading text-[#465478] text-[38px] sm:text-4xl md:text-5xl lg:text-[80px] leading-tight"
                >
                  Enhance
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="heading text-[#7584D6] text-[38px] sm:text-4xl md:text-5xl lg:text-[80px] leading-tight"
                >
                  search & learning
                </motion.h1>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="heading text-[#446080] text-[38px] sm:text-4xl md:text-5xl lg:text-[80px] leading-tight"
                >
                  with
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="relative rounded-[56px] backdrop-blur-[5px]"
                  style={{ perspective: "1200px" }}
                >
                  <motion.div
                    animate={{
                      rotateY: [0, 15, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="relative border-2 border-[#7584D6]/80 rounded-[56px] px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2"
                  >
                    <h1
                      className="font-medium bg-gradient-to-r from-[#80E5FF] to-[#7584D6] bg-clip-text text-transparent text-[38px] sm:text-4xl md:text-5xl lg:text-[80px] leading-tight"
                      style={{
                        transform: "translateZ(20px)",
                        paddingRight: "2px",
                      }}
                    >
                      Biblo
                    </h1>
                    <div className="absolute inset-0 bg-white/30 rounded-[56px] -z-10" />
                  </motion.div>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="heading text-[#4D6B8D] text-[38px] sm:text-4xl md:text-5xl lg:text-[80px] leading-tight"
                >
                  AI Agent
                </motion.h1>
              </div>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-[#465478] my-8 mx-auto px-16 sm:px-4"
            >
              비블로는 도서관·학술 정보 특화 AI 에이전트입니다.
              <br className="hidden sm:block"></br>
              검색부터 연구·진로 추천, 서비스 운영까지 한 번에 연결하고
              자동화합니다.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex  sm:flex-row items-center justify-center gap-2.5 sm:gap-3 md:gap-4 px-3 sm:px-4"
            >
              <AnimatedButton href="/contact#top">
                Preview Experience
              </AnimatedButton>
              <motion.button
                className={`relative rounded-full font-medium overflow-hidden bg-white border border-[#6A71A8]/20 shadow-lg`}
                whileHover={{
                  boxShadow: "0px -8px 0px inset rgba(169, 169, 169, 0.4)",
                  transition: { duration: 0.4 },
                }}
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Biblo_Service_Introduction.pdf';
                  link.download = 'Biblo_Service_Introduction.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <motion.span
                  className="relative z-10 block py-3 px-6 md:px-8 bg-gradient-to-r from-[#5967B5] to-[#908EED] bg-clip-text text-transparent"
                  initial={{ rotateX: 0 }}
                  whileHover={{
                    rotateX: -20,
                    transformOrigin: "bottom", 
                    y: -4,
                    transition: {
                      duration: 0.3,
                      ease: "easeOut",
                    },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  Download
                </motion.span>
              </motion.button>
            </motion.div>
          </div>

          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-10 sm:mt-12 md:mt-14"
          >
            <h6 className="text-center text-[#465478] text-xs sm:text-sm md:text-[14px] font-medium mb-10 sm:mb-6 md:mb-8">
              ✦ AI-POWERED ✦ RESEARCHER NETWORK
            </h6>
            <div className="relative mx-auto w-full max-w-[800px]">
              <div
                className="relative overflow-hidden"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent 5%, black 23%, black 77%, transparent 95%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 5%, black 23%, black 77%, transparent 95%)",
                }}
              >
                <div className="flex gap-[40px] sm:gap-[60px] lg:gap-[90px] animate-scroll">
                  {[...clientLogos, ...clientLogos].map((logo, index) => (
                    <div
                      key={index}
                      className="w-[100px] lg:w-[120px] h-[20px] lg:h-[27px] flex-shrink-0"
                    >
                      <Image
                        src={logo}
                        alt={`Client Logo ${index + 1}`}
                        width={120}
                        height={27}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
