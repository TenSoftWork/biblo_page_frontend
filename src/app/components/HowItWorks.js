"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedButton from "./AnimatedButton";

const HowItWorks = () => {
  return (
    <section
      className="pt-4 pb-16 sm:py-24 md:py-32 px-3 sm:px-4"
      id="how-it-works"
    >
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16 md:mb-20">
        <h6 className="text-[#6A71A8] text-base tracking-[0.2em] font-medium mb-3">
          HOW IT WORKS
        </h6>
        <div className="w-10 h-[1px] bg-gradient-to-r from-[#0DCFFF] via-[#545c9e] to-[#545c9e] bg-[length:120%] mx-auto mb-8 sm:mb-12"></div>
        <h3 className="text-4xl md:text-6xl font-medium mb-6 px-3">
          <span className="bg-gradient-to-r from-[#0DCFFF] via-[#545c9e] to-[#545c9e] bg-[length:120%] bg-clip-text text-transparent">
            자동화된 파이프라인
          </span>
        </h3>
        <p className="text-[#465478] max-w-2xl mx-auto text-lg px-3 break-keep">
          고객 데이터를 AI가 이해할 수 있도록 구조화하고, 
          <br className="hidden sm:block"></br>
          의미 기반 검색이 가능하도록 자동으로 유지·관리합니다.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto mb-8 sm:mb-12 px-6">
        {/* Step 1 */}
        <motion.div
          className="relative rounded-lg overflow-hidden bg-white/50 backdrop-blur-sm flex flex-col items-center justify-start py-8 sm:py-12 px-4 sm:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="w-28 sm:w-32 h-12 rounded-full bg-[#f1f2f9] flex items-center justify-center">
            <h6 className="text-[#545C9E] font-normal text-2xl">Step 1</h6>
          </div>

          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://framerusercontent.com/images/fa2BjoosTIAuwJyzlCHuEDhaqYw.svg"
              alt="Pattern"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative pt-8 sm:pt-12">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8 relative">
              <Image
                src="https://framerusercontent.com/images/T4WPBy86OK9JDni3k91xLjIeM.svg"
                alt="Data Collection"
                fill
                className="object-contain"
              />
            </div>

            <div className="text-center">
              <h6 className="text-[#6A71A8] font-medium text-xl mb-4">
                데이터 수집 및 전처리
              </h6>
              <p className="text-[#545C9E] text-base text-left">
                고객의 기존 콘텐츠를 자동으로 수집하고 정제합니다
              </p>
              <ul className="text-[#545C9E] text-base list-disc text-left pl-4 space-y-2 mt-2">
                <li>도서관 포털, LMS, 리포지터리 등 다양한 소스에서 데이터 수집</li>
                <li>중복 제거, 형식 통일 등 전처리 작업 자동화</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          className="relative rounded-lg overflow-hidden bg-white/50 backdrop-blur-sm flex flex-col items-center justify-start py-8 sm:py-12 px-4 sm:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-28 sm:w-32 h-12 rounded-full bg-[#f1f2f9] flex items-center justify-center">
            <h6 className="text-[#545C9E] font-normal text-2xl">Step 2</h6>
          </div>

          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://framerusercontent.com/images/fa2BjoosTIAuwJyzlCHuEDhaqYw.svg"
              alt="Pattern"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative pt-8 sm:pt-12">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8 relative">
              <Image
                src="https://framerusercontent.com/images/nELWKm9Mmf4Dtirj6HehxfPoDBU.svg"
                alt="Metadata Generation"
                fill
                className="object-contain"
              />
            </div>

            <div className="text-center">
              <h6 className="text-[#6A71A8] font-medium text-xl mb-4">
                시맨틱 메타데이터 생성
              </h6>
              <p className="text-[#545C9E] text-base text-left">
                AI가 이해할 수 있도록 요약, 태깅, 주제 분류 등 구조화
              </p>
              <ul className="text-[#545C9E] text-base list-disc text-left pl-4 space-y-2 mt-2">
                <li>콘텐츠 요약 및 핵심 키워드 추출</li>
                <li>주제 분류 및 관련성 태깅 자동 생성</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          className="relative rounded-lg overflow-hidden bg-white/50 backdrop-blur-sm flex flex-col items-center justify-start py-8 sm:py-12 px-4 sm:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="w-28 sm:w-32 h-12 rounded-full bg-[#f1f2f9] flex items-center justify-center">
            <h6 className="text-[#545C9E] font-normal text-2xl">Step 3</h6>
          </div>

          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://framerusercontent.com/images/fa2BjoosTIAuwJyzlCHuEDhaqYw.svg"
              alt="Pattern"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative pt-8 sm:pt-12">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8 relative">
              <Image
                src="https://framerusercontent.com/images/7rrCaekOoILCIdaxzb5TqlARuE.svg"
                alt="Vectorization"
                fill
                className="object-contain"
              />
            </div>

            <div className="text-center">
              <h6 className="text-[#6A71A8] font-medium text-xl mb-4">
                벡터화 및 인덱싱
              </h6>
              <p className="text-[#545C9E] text-base text-left">
                문맥/의도 기반 탐색 가능한 벡터 DB 구축
              </p>
              <ul className="text-[#545C9E] text-base list-disc text-left pl-4 space-y-2 mt-2">
                <li>고성능 벡터 데이터베이스에 시맨틱 인덱스 구축</li>
                <li>의미 기반 유사도 검색을 위한 임베딩 생성</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Step 4 */}
        <motion.div
          className="relative rounded-lg overflow-hidden bg-white/50 backdrop-blur-sm flex flex-col items-center justify-start py-8 sm:py-12 px-4 sm:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="w-28 sm:w-32 h-12 rounded-full bg-[#f1f2f9] flex items-center justify-center">
            <h6 className="text-[#545C9E] font-normal text-2xl">Step 4</h6>
          </div>

          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://framerusercontent.com/images/fa2BjoosTIAuwJyzlCHuEDhaqYw.svg"
              alt="Pattern"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative pt-8 sm:pt-12">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8 relative">
              <Image
                src="https://framerusercontent.com/images/vfCWe8jjf75uvUu7vyzDzC4JLU.svg"
                alt="Search Infrastructure"
                fill
                className="object-contain"
              />
            </div>

            <div className="text-center">
              <h6 className="text-[#6A71A8] font-medium text-xl mb-4">
                검색 인프라 제공
              </h6>
              <p className="text-[#545C9E] text-base text-left">
                API, 웹 UI 형태로 의미 기반 검색 기능을 쉽게 통합
              </p>
              <ul className="text-[#545C9E] text-base list-disc text-left pl-4 space-y-2 mt-2">
                <li>RESTful API를 통한 검색 기능 제공</li>
                <li>웹 인터페이스 및 기존 시스템 연동 지원</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 p-6 md:p-8 border-t border-[#6A71A8]/20 mt-8 md:mt-12">
        <p className="text-[#6A71A8] text-base md:text-lg text-center">
          새로운 콘텐츠가 등록될 때마다 자동으로 메타데이터를 업데이트하고 벡터화합니다.{" "}
        </p>
        <AnimatedButton href="/contact#top">Try Biblo</AnimatedButton>
      </div>
    </section>
  );
};

export default HowItWorks;
