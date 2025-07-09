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
                BIBLO
              </span>
              <span className="font-medium text-[#7584D6]">
                SEMANTIC METADATA SOLUTION
              </span>
            </motion.div>

            {/* Title */}
            <div className="space-y-1 sm:space-y-2 md:space-y-4">
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-1 sm:gap-3 md:gap-6 px-2 sm:px-4">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="heading text-[#465478] text-[38px] sm:text-4xl md:text-5xl lg:text-[80px] leading-tight text-center"
                >
                  Transform Your Data
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="heading text-[#465478] text-[38px] sm:text-4xl md:text-5xl lg:text-[80px] leading-tight text-center"
                >
                  into{" "}
                  <span className="text-[#7584D6]">AI-Ready</span>
                </motion.h1>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="heading text-[#446080] text-[38px] sm:text-4xl md:text-5xl lg:text-[80px] leading-tight text-center"
                >
                  <span className="block sm:inline">Semantic Metadata</span>
                  <span className="block sm:inline"> through </span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="relative rounded-[56px] backdrop-blur-[5px] inline-block"
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
                      <span
                        className="font-medium bg-gradient-to-r from-[#80E5FF] to-[#7584D6] bg-clip-text text-transparent"
                        style={{
                          transform: "translateZ(20px)",
                          paddingRight: "2px",
                        }}
                      >
                        Biblo
                      </span>
                      <div className="absolute inset-0 bg-white/30 rounded-[56px] -z-10" />
                    </motion.div>
                  </motion.span>
                </motion.h1>
              </div>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-[#465478] text-lg max-w-2xl break-keep my-8 mx-auto px-16 sm:px-4"
            >
              비블로(Biblo)는 AI가 이해할 수 있는 형태로 고객의 데이터를 구조화하고,{" "}<br className="hidden sm:block"></br>
              이를 바탕으로 고품질 의미 기반 검색 환경을 구축하는 솔루션입니다.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex  sm:flex-row items-center justify-center gap-2.5 sm:gap-3 md:gap-4 px-3 sm:px-4"
            >
              <AnimatedButton href="/contact#top" className="w-[160px]">
                Try Biblo
              </AnimatedButton>
              <motion.button
                className={`relative rounded-full font-medium overflow-hidden bg-white border border-[#6A71A8]/20 shadow-lg w-[160px]`}
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
                  PDF 소개자료
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
              ✦ 신뢰받는 기관들과 함께하고 있습니다 ✦
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
