"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Features = () => {
  return (
    <section className="pb-16 md:pb-32" id="features">
      {/* Grid Section */}
      <div className="text-center mb-12 md:mb-20 max-w-7xl mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {/* Featured Block - Spans 2 rows */}
          <motion.div
            className="row-span-1 md:row-span-2 bg-white/70 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="h-full flex flex-col">
              <div className="flex flex-col items-center">
                <div className="aspect-12/16 md:aspect-10/16 w-[100%] md:w-[100%] relative">
                  <Image
                    src="/bento_1.png"
                    alt="AI Model 3"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Regular Blocks */}
          <motion.div
            className="bg-[url('/dots_center_bg.png')] bg-center bg-no-repeat bg-contain bg-white/70 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="h-full flex flex-col">
              <div className="flex flex-col items-center">
                <div className="aspect-square w-[50%] relative">
                  <Image
                    src="/features_image_1.png"
                    alt="AI Model 3"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-md md:text-md font-normal text-[#5967B5] text-left">
                  Biblo는 책을 의미 기반 Work 단위로 자료를 묶어 새로운 경험의
                  검색결과를 제공합니다.
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-[url('/dots_center_bg.png')] bg-center bg-no-repeat bg-contain bg-white/70 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="h-full flex flex-col">
              <div className="flex flex-col items-center">
                <div className="aspect-16/9 w-[100%] relative">
                  <Image
                    src="/features_image_2.png"
                    alt="Integration Templates"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-md md:text-md font-normal text-[#5967B5] text-center">
                  검색 → 대출 → 현장 이용까지<br></br>연결되는 오프라인-온라인 융합
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-[url('/dots_center_bg.png')] bg-center bg-no-repeat bg-contain bg-white/70 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="h-full flex flex-col">
              <div className="flex flex-col items-center">
                <div className="aspect-16/9 w-[100%] relative">
                  <Image
                    src="/features_image_3.png"
                    alt="Bars"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-md md:text-md font-normal text-[#5967B5] text-left">
                  RAG 파이프라인 구성(데이터 전처리 → 벡터화 → 문서 스코어링 →
                  LLM 인퍼런스) 및 최적화 기술, 기관별 데이터(학과별 시험자료,
                  취업정보 등)를 연동해 사용자 맞춤 답변을 생성하는 특화
                  알고리즘 적용
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-[url('/dots_center_bg.png')] bg-center bg-no-repeat bg-contain bg-white/70 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="h-full flex flex-col">
              <div className="flex flex-col items-center">
                <div className="aspect-16/9 w-[100%] relative">
                  <Image
                    src="/features_image_4.png"
                    alt="Bars"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-md md:text-md font-normal text-[#5967B5] text-left">
                  간단한 키워드를 넘어 복잡한 문장형 질문까지 처리 가능
                  비블로(Biblo)는  일반적인 AI 검색 엔진이 아니라, 사용자 맥락을
                  분석하고 개인 맞춤형 추천 및 상담까지 수행하는 능동적 AI
                  에이전트{" "}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/70 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="h-full flex flex-col">
              <div className="flex flex-col items-center">
                <div className="aspect-square w-[100%] relative">
                  <Image
                    src="/bento_6.png"
                    alt="Text Box"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/70 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-full flex flex-col">
              <div className="flex flex-col items-center">
                <div className="aspect-square w-[100%] relative">
                  <Image
                    src="/bento_7.png"
                    alt="Text Box"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-[url('/dots_center_bg.png')] bg-center bg-no-repeat bg-contain bg-white/70 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="h-full flex flex-col">
              <div className="flex flex-col items-center">
                <div className="aspect-16/12 w-[100%] relative">
                  <Image
                    src="/features_image_5.png"
                    alt="Text Box"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-md md:text-md font-normal text-[#5967B5] text-center">
                  개인 맞춤형 연구 홍보 동영상/SHORTS<br></br>(Personalized Academic Reports)
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
