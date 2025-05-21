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
        <div className="w-full lg:w-[30%] lg:pl-8 mb-4 lg:mb-0">
          <div className="text-center lg:text-left">
            <h6 className="text-[#6A71A8] text-base tracking-[0.2em] font-medium mb-3">
              ABOUT US
            </h6>
            <div className="w-10 h-[1px] bg-gradient-to-r from-[#0DCFFF] via-[#545c9e] to-[#545c9e] bg-[length:120%] mx-auto lg:mx-0 mb-8 lg:mb-12"></div>
          </div>
        </div>
        <div className="max-w-7xl flex-1 flex flex-col items-left lg:pr-8">
          <div className="max-w-4xl">
            <div className="mb-12 lg:mb-20">
              <h3 className="text-3xl lg:text-6xl font-medium mb-4 lg:mb-6">
                <span className="bg-gradient-to-r from-[#0DCFFF] via-[#545c9e] to-[#545c9e] bg-[length:120%] bg-clip-text text-transparent">
                  Meet
                </span>{" "}
                <span className="text-[#6A71A8]">the Leadership</span>
              </h3>
              <p className="text-[#465478] text-lg max-w-2xl break-keep mb-4 text-left">
                텐소프트웍스는 다양한 산업에 적용 가능한 AI 에이전트를 기획하고 개발하는 전문 기업입니다. 
                비블로(Biblo)를 포함해, 정보 분류, 메타데이터 처리, 추천 시스템 등 도서관 및 지식정보 분야를 위한 솔루션뿐 아니라
                생산성 향상, 자동화, 데이터 기반 의사결정을 지원하는 실용적인 AI 도구들을 제공합니다.
              </p>
              <p className="text-[#465478] text-lg max-w-2xl break-keep text-left">
                기술은 도구일 뿐입니다.  
                텐소프트웍스는 문제 해결을 중심에 두고, 실제 환경에서 작동하는 솔루션을 만듭니다.  
                다양한 기관과의 협업을 통해, 현장의 복잡한 과제를 정확하고 효율적으로 해결합니다.
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
                    Biblo,
                  </span>{" "}
                  <span className="text-[#6A71A8]">Explained —</span>
                </h3>
                <div className="space-y-6 text-[#465478]">
                  <p className="text-[#465478] text-xl max-w-2xl break-keep text-left">
                    연구자와 학습자를 위한 맞춤형 AI 에이전트
                  </p>
                  <p className="text-[#465478] text-lg max-w-2xl break-keep mb-4 text-left">
                    비블로(Biblo)는 텐소프트웍스 AI검색연구소가 개발한, 도서관과 교육기관을 위한 AI 기반 정보 분석 에이전트입니다.
                    단순 검색을 넘어 학습 및 탐색 데이터를 분석하고, 정보 분류, 메타데이터 구축, 추천 시스템 등
                    도서관 핵심 업무를 자동화해 더 효율적이고 전략적인 정보 서비스를 가능하게 합니다.
                  </p>
                  <p className="text-[#465478] text-lg max-w-2xl break-keep mb-10 text-left">
                    실무 현장의 문제를 중심에 두고 설계되었으며,
                    축적된 메타데이터와 AI 분석 역량을 통해 학습과 연구 환경의 질을 높입니다.
                  </p>
                  <p className="text-[#465478] text-xl max-w-2xl break-keep text-left">
                    비블로(Biblo)의 주요 기능
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#465478] text-lg max-w-2xl break-keep text-left">
                    <li className="text-left">정확한 AI 검색 – 신뢰도 높은 학술 정보 탐색</li>
                    <li className="text-left">논문 요약 CMS – 연구성과 요약 및 홍보</li>
                    <li className="text-left">개인화 추천 – 학습 행동 기반 정보 제공</li>
                    <li className="text-left">온프레미스 지원 – 보안 강화 및 독립 운영 가능</li>
                    <li className="text-left">메타데이터 분석 – 커리큘럼 개선 및 연구 지원</li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-[30%]">
                <div className="p-6 lg:p-2 text-center">
                  <div className="relative max-w-[150px] mx-auto">
                    <PhotoStack />
                  </div>
                  <h4 className="text-xl lg:text-2xl font-medium text-[#6A71A8] mb-3 lg:mb-4 break-keep">
                    기록을 넘어, <br className="hidden md:block" />지식의 흐름으로
                  </h4>
                  <p className="text-[#465478] mb-10 break-keep">
                    단순한 데이터 기록에 머물지 않고,  
                    학습과 연구의 맥락을 해석하여  
                    정보 사이의 숨겨진 흐름과 의미를 연결합니다.
                  </p>
                  <AnimatedButton href="/contact#top" variant="secondary" className="w-[160px]">
                    Try Biblo
                  </AnimatedButton>
                </div>
              </div>
            </div>
            {/* CTA */}
{/*           <div className="max-w-7xl flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 py-8 md:p-8 border-t border-[#6A71A8]/20 mt-8 md:my-20">
              <p className="text-[#6A71A8] text-sm md:text-lg text-center md:text-left w-full md:w-[50%]">
              Discover the full story
              </p>
              <div className="w-full md:w-[40%] text-center md:text-right">
                <AnimatedButton href="/contact#top">Read More</AnimatedButton>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;