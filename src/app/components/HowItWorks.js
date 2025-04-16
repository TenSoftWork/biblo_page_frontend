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
            Biblo AI Agent
          </span>
        </h3>
        <p className="text-[#465478] max-w-2xl mx-auto text-lg px-3 break-keep">
        도서관 데이터를 구조화하고,  
        사용자의 탐색 흐름을 이해해  
        지식의 맥락까지 연결합니다.
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
            <h6 className="text-[#545C9E] font-normal text-2xl">Point 1</h6>
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
                alt="Lib-BERT"
                fill
                className="object-contain"
              />
            </div>

            <div className="text-center">
              <h6 className="text-[#6A71A8] font-medium text-xl mb-4">
                Lib-BERT
              </h6>
              <p className="text-[#545C9E] text-base text-left">
                학술 정보 검색 및 질의 분석
              </p>
              <ul className="text-[#545C9E] text-base list-disc text-left pl-4 space-y-2 mt-2">
                <li>시맨틱 검색을 통해 연구 및 학습 관련 정보를 정확하게 탐색</li>
                <li>사전 학습된 데이터를 활용하여 사용자의 질문 유형을 분석</li>
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
            <h6 className="text-[#545C9E] font-normal text-2xl">Point 2</h6>
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
                alt="Lib-Career"
                fill
                className="object-contain"
              />
            </div>

            <div className="text-center">
              <h6 className="text-[#6A71A8] font-medium text-xl mb-4">
                Lib-Career
              </h6>
              <p className="text-[#545C9E] text-base text-left">
                맞춤형 진로 및 취업 정보 제공
              </p>
              <ul className="text-[#545C9E] text-base list-disc text-left pl-4 space-y-2 mt-2">
                <li>도서 대출 이력과 취업 데이터를 분석하여 맞춤형 정보 제공</li>
                <li>연구 및 학습 분야별 진로 및 취업 탐색 정보 제공</li>
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
            <h6 className="text-[#545C9E] font-normal text-2xl">Point 3</h6>
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
                alt="Lib-Assist"
                fill
                className="object-contain"
              />
            </div>

            <div className="text-center">
              <h6 className="text-[#6A71A8] font-medium text-xl mb-4">
                Lib-Assist
              </h6>
              <p className="text-[#545C9E] text-base text-left">
                도서관 서비스 자동 응답 시스템
              </p>
              <ul className="text-[#545C9E] text-base list-disc text-left pl-4 space-y-2 mt-2">
                <li>도서 대출 연장, 시설 예약 등 도서관 서비스 관련 질의 자동 응답</li>
                <li>자주 발생하는 반복적인 질문에 AI가 실시간으로 정확히 응답</li>
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
            <h6 className="text-[#545C9E] font-normal text-2xl">Point 4</h6>
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
                alt="Lib-Recommend"
                fill
                className="object-contain"
              />
            </div>

            <div className="text-center">
              <h6 className="text-[#6A71A8] font-medium text-xl mb-4">
                Lib-Recommend
              </h6>
              <p className="text-[#545C9E] text-base text-left">
                 개인 맞춤형 학습 자료 추천
              </p>
              <ul className="text-[#545C9E] text-base list-disc text-left pl-4 space-y-2 mt-2">
                <li>수강 이력 및 도서 대출 데이터를 기반으로 맞춤형 학습 자료 제공</li>
                <li>연구 및 학습 심화를 위한 개인 맞춤형 AI 콘텐츠 추천 제공</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
{/*       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 p-6 md:p-8 border-t border-[#6A71A8]/20 mt-8 md:mt-12">
        <p className="text-[#6A71A8] text-base md:text-lg text-center">
          기존 학술 데이터베이스 및 도서관 시스템과 연동을 지원합니다.{" "}
        </p>
        <AnimatedButton href="/contact#top">Ask Our AI Agent</AnimatedButton>
      </div> */}
    </section>
  );
};

export default HowItWorks;
