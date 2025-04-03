"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "./AnimatedButton";
import { useState } from "react";
import {
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";

const FounderCard = ({ image, name, role, socials }) => (
  <motion.div
    className="relative flex flex-col items-center text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="relative w-64 h-80 rounded-3xl overflow-hidden mb-4">
      <Image src={image} alt={name} fill className="object-cover" />
    </div>
    <h4 className="text-xl font-normal text-[#6A71A8] mb-1">{name}</h4>
    <p className="text-[#465478] mb-4">{role}</p>
    <div className="flex justify-center gap-4">
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-[#6A71A8] hover:text-[#0DCFFF] transition-colors"
          >
            {social.icon}
          </motion.div>
        </Link>
      ))}
    </div>
  </motion.div>
);

const PhotoStack = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const photos = [
    {
      src: "/about_us_1.png",
      alt: "Team outdoor activity",
    },
    {
      src: "/about_us_2.png",
      alt: "Team celebration",
    },
    {
      src: "/about_us_3.png",
      alt: "Team building",
    },
    {
      src: "/about_us_4.png",
      alt: "Team building",
    },
  ];

  return (
    <motion.div
      className="relative h-[280px] w-full cursor-pointer"
      whileHover="hover"
      animate={isExpanded ? "hover" : "rest"}
      initial="rest"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {photos.map((photo, index) => (
        <motion.div
          key={index}
          className="absolute w-full h-[200px] border-1 shadow-sm border-white rounded-xl overflow-hidden"
          initial={{
            y: index * 15,
            rotate: index % 4 === 0 ? -4 : 4,
            scale: 1,
          }}
          variants={{
            rest: {
              y: index * 15,
              rotate: index % 4 === 0 ? -4 : 4,
              scale: 1,
              transition: { duration: 0.3, ease: "easeOut" },
            },
            hover: {
              y: index * -200,
              rotate: index % 2 === 0 ? 20 : -20,
              scale: 1 + (photos.length - index) * 0.02,
              transition: { duration: 0.3, ease: "easeOut" },
            },
          }}
          style={{
            zIndex: index,
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

const MobileFounderSlider = ({ founders }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStart, setDragStart] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % founders.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + founders.length) % founders.length);
  };

  const handleDragStart = (event) => {
    const touch = event.touches[0];
    setDragStart(touch.clientX);
  };

  const handleDragEnd = (event) => {
    const touch = event.changedTouches[0];
    const dragEnd = touch.clientX;
    const dragDiff = dragEnd - dragStart;

    if (Math.abs(dragDiff) > 50) {
      // minimum drag distance to trigger slide
      if (dragDiff > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
  };

  return (
    <div className="relative w-full">
      <div
        className="overflow-hidden"
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        <motion.div
          className="flex"
          initial={false}
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {founders.map((founder, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <FounderCard {...founder} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Arrows - Now at bottom */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-[#0DCFFF] flex items-center justify-center hover:bg-[#0DCFFF]/90 transition-colors shadow-lg"
          aria-label="Previous founder"
        >
          <FaChevronLeft className="text-white text-xl" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-[#0DCFFF] flex items-center justify-center hover:bg-[#0DCFFF]/90 transition-colors shadow-lg"
          aria-label="Next founder"
        >
          <FaChevronRight className="text-white text-xl" />
        </button>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const founders = [
    {
      name: "김철형 대표",
      role: "CEO",
      image: "/founder_1.png",
      socials: [{ icon: <FaLinkedin size={20} />, url: "#" }],
    },
    {
      name: "김동욱 이사",
      role: "CFO",
      image: "/founder_2.png",
      socials: [{ icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/in/dwkim82/" }],
    },
    {
      name: "김성훈 교수",
      role: "AI검색연구소장",
      image: "/founder_3.png",
      socials: [],
    },
  ];

  return (
    <section className="py-16 lg:py-32" id="about-us">
      <div className="flex flex-col lg:flex-row items-top px-4">
        <div className="w-full lg:w-[30%] lg:pl-8 mb-8 lg:mb-0">
          <h6 className="text-[#6A71A8] text-base tracking-[0.2em] font-medium mb-3">
            ABOUT US
          </h6>
          <div className="w-10 h-[1px] bg-gradient-to-r from-[#0DCFFF] via-[#545c9e] to-[#545c9e] bg-[length:120%] mb-8 lg:mb-12"></div>
        </div>
        <div className="max-w-7xl flex-1 flex flex-col items-left lg:pr-8">
          <div className="max-w-4xl">
            <div className="mb-12 lg:mb-20">
              <h3 className="text-3xl lg:text-6xl font-medium mb-4 lg:mb-6">
                <span className="bg-gradient-to-r from-[#0DCFFF] via-[#545c9e] to-[#545c9e] bg-[length:120%] bg-clip-text text-transparent">
                  Meet
                </span>{" "}
                <span className="text-[#6A71A8]">the Leaders</span>
              </h3>
              <p className="text-[#465478] text-lg max-w-2xl break-keep">
                비블로는 기술과 데이터를 깊이 있게 이해하고 설계하는
                실무형 전문가들의 리더십 아래,
                복잡한 현실 문제를 단순하고 실용적인 해법으로 풀어냅니다.
              </p>
            </div>

            {/* Founders Grid/Slider */}
            <div className="mb-12 lg:mb-20">
              <div className="block md:hidden">
                <MobileFounderSlider founders={founders} />
              </div>
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {founders.map((founder, index) => (
                  <FounderCard key={index} {...founder} />
                ))}
              </div>
            </div>

            {/* Story Section */}
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-20">
              <div className="w-full lg:w-[70%]">
                <h3 className="text-4xl lg:text-6xl font-medium mb-8 lg:mb-12">
                  <span className="bg-gradient-to-r from-[#0DCFFF] via-[#545c9e] to-[#545c9e] bg-[length:120%] bg-clip-text text-transparent">
                    The
                  </span>{" "}
                  <span className="text-[#6A71A8]">Story So Far —</span>
                </h3>
                <div className="space-y-6 text-[#465478]">
                  <p className="text-lg lg:text-xl">
                    연구자와 학습자만을 위한 맞춤형 AI 에이전트
                  </p>
                  <p className="text-base lg:text-lg">
                    비블로는 단순한 도서 검색 도구가 아닙니다. 학생이 무엇을
                    찾는지, 어떤 정보를 중요하게 생각하는지를 메타데이터로
                    분석하고, 대학과 연구기관이 필요한 인사이트를 얻을 수
                    있도록 설계된 지능형 학술 에이전트입니다.
                  </p>
                  <p className="text-base lg:text-lg">
                    비블로는 다음과 같은 핵심 가치로 설계되었습니다:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-base lg:text-lg text-[#465478]">
                    <li>정확하고 신뢰할 수 있는 AI 검색 (Biblo Search)</li>
                    <li>논문 요약 및 연구 홍보 CMS (Biblo Scholar)</li>
                    <li>학습 행동 기반 개인화 추천 시스템</li>
                    <li>
                      대학별 서버에 설치 가능한 On-Premise 모델로 보안과 독립성
                      확보
                    </li>
                    <li>
                      사용자 메타데이터 분석을 통한 커리큘럼 개선 및 연구 지원
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-[30%]">
                <div className="p-6 lg:p-2 text-center">
                  <div className="relative max-w-[150px] mx-auto">
                    <PhotoStack />
                  </div>
                  <h4 className="text-xl lg:text-2xl font-medium text-[#6A71A8] mb-3 lg:mb-4">
                    Biblo&apos;s Vision
                  </h4>
                  <p className="text-[#465478] mb-6">
                    기록을 지식으로 연결합니다.
                  </p>
                  <AnimatedButton href="/contact#top" variant="secondary">
                    Join Us
                  </AnimatedButton>
                </div>
              </div>
            </div>
            {/* CTA */}
          <div className="max-w-7xl flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 py-8 md:p-8 border-t border-[#6A71A8]/20 mt-8 md:my-20">
              <p className="text-[#6A71A8] text-sm md:text-lg text-center md:text-left w-full md:w-[50%]">
              Discover the full story
              </p>
              <div className="w-full md:w-[40%] text-center md:text-right">
                <AnimatedButton href="/contact#top">Read More</AnimatedButton>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
