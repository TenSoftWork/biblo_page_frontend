"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import AnimatedButton from "./AnimatedButton";

const Beam = ({ delay, duration, distance, initial = "-5%" }) => {
  return (
    <motion.div
      className="absolute h-full w-2 sm:w-4 rounded-full"
      initial={{ x: initial }}
      animate={{ x: `${distance}px` }}
      transition={{
        duration: duration * (window?.innerWidth < 768 ? 0.7 : 1),
        delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
      style={{
        height: "1px",
        background:
          "radial-gradient(50% 50% at 50% 50%, rgb(87, 102, 184) 0%, rgba(88, 102, 184, 0) 100%)",
        opacity: 1,
        willChange: "transform",
      }}
    />
  );
};

const AnimatedLine = ({ className, lineIndex = 0 }) => {
  const lineRef = useRef(null);
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    if (lineRef.current) {
      const updateWidth = () => {
        const width = lineRef.current.offsetWidth;
        setLineWidth(width);
      };

      updateWidth();
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }
  }, []);

  const baseDelay = lineIndex * 1.2;
  const beamConfigs = [
    { delay: baseDelay + 0, duration: 6, initial: "-5%" },
    { delay: baseDelay + 1.5, duration: 6.5, initial: "10%" },
    { delay: baseDelay + 3, duration: 7, initial: "40%" },
  ];

  return (
    <div ref={lineRef} className={`relative h-[1px] ${className}`}>
      <div className="absolute inset-0 bg-[#E3E6FA] opacity-70" />
      {lineWidth > 0 && (
        <>
          {beamConfigs.map((config, index) => (
            <Beam
              key={index}
              delay={config.delay}
              duration={config.duration}
              distance={lineWidth}
              initial={config.initial}
            />
          ))}
        </>
      )}
    </div>
  );
};

const CompanyLogo = ({ src, alt }) => (
  <div className="w-12 h-12 relative bg-white rounded-lg p-0 z-10">
    <Image
      src={src}
      alt={alt}
      height={48}
      width={48}
      className="object-contain"
    />
  </div>
);

const WhyDifferent = () => {
  const companies = [
    { src: "/integration_logo_1.png", alt: "Company 1" },
    { src: "/integration_logo_2.png", alt: "Company 2" },
    { src: "/integration_logo_3.png", alt: "Company 3" },
    { src: "/integration_logo_4.png", alt: "Company 4" },
    { src: "/integration_logo_5.png", alt: "Company 5" },
    { src: "/integration_logo_6.png", alt: "Company 6" },
    { src: "/integration_logo_7.png", alt: "Company 7" },
    { src: "/integration_logo_8.png", alt: "Company 8" },
  ];

  return (
    <section className="pt-16 md:pt-32" id="why-different">
      <div className="flex flex-col md:flex-row items-top">
        <div className="w-full md:w-[30%] px-4 md:pl-8 mb-4 md:mb-0">
          <div className="text-center md:text-left">
            <h6 className="text-[#6A71A8] text-base tracking-[0.2em] font-medium mb-3">
              INTEGRATION
            </h6>
            <div className="w-10 h-[1px] bg-gradient-to-r from-[#0DCFFF] via-[#545c9e] to-[#545c9e] bg-[length:120%] mx-auto md:mx-0 mb-8 md:mb-12"></div>
          </div>
        </div>
        <div className="max-w-7xl flex-1 flex flex-col items-center md:items-start px-4 md:pr-8">
          <div className="max-w-4xl">
            <div className="mb-12 md:mb-20">
              <h3 className="text-3xl md:text-4xl lg:text-6xl font-medium mb-4 md:mb-6 text-center md:text-left">
                <span className="bg-gradient-to-r from-[#0DCFFF] via-[#545c9e] to-[#545c9e] bg-[length:120%] bg-clip-text text-transparent text-center md:text-left w-full block">
                  How Biblo is Different
                </span>
              </h3>
              <p className="text-[#465478] text-lg max-w-2xl break-keep text-left">
                비블로(Biblo)는 검색, 분류, 추천, 분석 등  
                도서관의 다양한 기능을 하나의 AI 에이전트로 통합합니다.  
                여러 솔루션을 따로 조합하지 않아도,  
                연구자와 사서를 위한 핵심 기능이 비블로 하나에 모두 담겨 있습니다.
              </p>
            </div>

            {/* Main Image */}
            <motion.div
              className="max-w-5xl mb-12 md:mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[#02030c] shadow-2xl">
                <Image
                  src="/why_biblo_section_image.png"
                  alt="Biblo AI Architecture"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Integration Logos */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-20">
              <div className="w-full md:w-[30%]">
                <p className="text-[#465478] text-lg max-w-2xl break-keep text-left">
                검색 기능에 그치지 않고,  
                분류, 추천, 분석, 도서관 서비스 자동화까지 포함하여  
                실제 연구자의 탐색 과정과 학술 활동 전반을 유기적으로 지원합니다.
                </p>
              </div>
              <div className="w-full md:w-[70%] relative">
                {/* First Row with Lines */}
                <div className="relative mb-8 md:mb-12 overflow-hidden">
                  {/* First Row Lines */}
                  <div className="absolute inset-x-0 h-full top-1/2 -translate-y-1/2">
                    <AnimatedLine
                      className="absolute top-[5%] left-[10px] right-[10px] md:left-[15px] md:right-[15px]"
                      lineIndex={0}
                    />
                    <AnimatedLine
                      className="absolute top-[50%] left-[10px] right-[10px] md:left-[15px] md:right-[15px]"
                      lineIndex={1}
                    />
                    <AnimatedLine
                      className="absolute top-[90%] left-[10px] right-[10px] md:left-[15px] md:right-[15px]"
                      lineIndex={2}
                    />
                  </div>

                  <div className="flex flex-row justify-between items-center gap-4 md:gap-0 relative z-10">
                    {companies.slice(0, 4).map((company, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CompanyLogo {...company} />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Second Row with Lines */}
                <div className="relative overflow-hidden">
                  {/* Second Row Lines */}
                  <div className="absolute inset-x-0 h-full top-1/2 -translate-y-1/2">
                    <AnimatedLine
                      className="absolute top-[5%] left-[10px] right-[10px] md:left-[15px] md:right-[15px]"
                      lineIndex={3}
                    />
                    <AnimatedLine
                      className="absolute top-[50%] left-[10px] right-[10px] md:left-[15px] md:right-[15px]"
                      lineIndex={4}
                    />
                    <AnimatedLine
                      className="absolute top-[90%] left-[10px] right-[10px] md:left-[15px] md:right-[15px]"
                      lineIndex={5}
                    />
                  </div>

                  <div className="flex flex-row justify-between items-center gap-4 md:gap-0 relative z-10">
                    {companies.slice(4).map((company, index) => (
                      <motion.div
                        key={index + 4}
                        className="flex items-center justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CompanyLogo {...company} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 py-8 md:p-8 border-t border-[#6A71A8]/20 mt-8 md:my-20">
              <p className="text-[#465478] text-lg max-w-2xl break-keep text-center md:text-left w-full md:w-[50%]">
              도서관 데이터를 이해하는 AI, 연구로 곧바로 이어집니다.
              </p>
              <div className="w-full md:w-[40%] text-center md:text-right">
                <AnimatedButton href="/chat" className="w-[160px]">Try Biblo</AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
