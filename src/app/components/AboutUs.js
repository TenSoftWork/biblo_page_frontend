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

const AboutUs = () => {
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
                  About
                </span>{" "}
                <span className="text-[#6A71A8]">Biblo</span>
              </h3>
              <p className="text-[#465478] text-lg max-w-2xl break-keep mb-4 text-left">
                비블로(Biblo)는 고객 데이터를 AI가 이해할 수 있도록 구조화하고, 의미 기반 검색이 가능하도록 
                <br className="hidden lg:block"></br>
                자동화된 시맨틱 메타데이터 파이프라인을 제공합니다.
              </p>
              <p className="text-[#465478] text-lg max-w-2xl break-keep text-left">
                단순한 검색 솔루션이 아니라, 도서관·연구기관·교육기관이 보유한 콘텐츠를 
                <br className="hidden lg:block"></br>
                AI-ready 데이터베이스로 전환하고, 이를 기반으로 검색 API와 검색 UI를 서비스 형태로 제공합니다.
              </p>
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
                    자동화된 시맨틱 메타데이터 DB 인프라
                  </p>
                  <p className="text-[#465478] text-lg max-w-2xl break-keep mb-4 text-left">
                    비블로(Biblo)는 고객의 데이터를 시맨틱 DB로 바꿔주고, 그 상태를 자동으로 유지시켜주는 검색 인프라입니다. 
                    단발성 구축이 아닌, 지속 운영되는 AI 검색 기반을 제공합니다.
                  </p>
                  <p className="text-[#465478] text-lg max-w-2xl break-keep mb-10 text-left">
                    고객이 따로 관리하지 않아도 AI 검색 품질이 지속적으로 유지되며, 
                    비블로(Biblo)는 백엔드에서 메타데이터 상태를 항상 최신화합니다.
                  </p>
                  <p className="text-[#465478] text-xl max-w-2xl break-keep text-left">
                    비블로(Biblo)의 핵심 가치
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#465478] text-lg max-w-2xl break-keep text-left">
                    <li className="text-left">시맨틱 메타데이터 생성 - AI가 이해할 수 있도록 요약, 태깅, 주제 분류 등 구조화</li>
                    <li className="text-left">벡터화 및 의미 인덱싱 - 문맥/의도 기반 탐색 가능한 벡터 DB 구축</li>
                    <li className="text-left">자동화된 유지관리 파이프라인 - 새로운 콘텐츠가 등록될 때마다 자동으로 메타데이터 업데이트</li>
                    <li className="text-left">검색 인프라 제공 - API, 웹 UI 형태로 의미 기반 검색 기능을 쉽게 통합</li>
                    <li className="text-left">고객 시스템 연동 최적화 - 도서관 포털, LMS, 리포지터리 등에 붙이기 쉬운 구조</li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-[30%]">
                <div className="p-6 lg:p-2 text-center">
                  <div className="relative max-w-[150px] mx-auto">
                    <PhotoStack />
                  </div>
                  <h4 className="text-xl lg:text-2xl font-medium text-[#6A71A8] mb-3 lg:mb-4 break-keep">
                    데이터를 넘어, <br className="hidden md:block" />의미의 연결로
                  </h4>
                  <p className="text-[#465478] mb-10 break-keep">
                    단순한 데이터 저장에 머물지 않고,  
                    AI가 이해할 수 있는 구조로 변환하여  
                    의미 기반 검색과 지식 발견을 가능하게 합니다.
                  </p>
                  <AnimatedButton href="/contact#top" variant="secondary" className="w-[160px]">
                    Try Biblo
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;