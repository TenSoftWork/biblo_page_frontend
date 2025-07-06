"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Features = () => {
  return (
    <section className="pb-16 md:pb-32" id="features">
      {/* Header */}
      <div className="text-center mb-12 md:mb-20 max-w-7xl mx-auto px-4">
        <h6 className="text-[#6A71A8] text-base tracking-[0.2em] font-medium mb-3">
          CORE FEATURES
        </h6>
        <div className="w-10 h-[1px] bg-gradient-to-r from-[#0DCFFF] via-[#545c9e] to-[#545c9e] bg-[length:120%] mx-auto mb-8 sm:mb-12"></div>
        <h3 className="text-4xl md:text-6xl font-medium mb-6 px-3">
          <span className="bg-gradient-to-r from-[#0DCFFF] via-[#545c9e] to-[#545c9e] bg-[length:120%] bg-clip-text text-transparent">
            비블로(Biblo)의 핵심 가치
          </span>
        </h3>
        <p className="text-[#465478] max-w-2xl mx-auto text-lg px-3 break-keep">
          고객 데이터를 시맨틱 DB로 바꿔주고, 그 상태를 자동으로 유지시켜주는 검색 인프라
        </p>
      </div>

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
                    alt="Semantic Metadata Generation"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold text-[#5967B5] mt-4 mb-2">시맨틱 메타데이터 생성</h4>
                <span className="text-md md:text-md font-normal text-[#5967B5] text-left">
                  AI가 이해할 수 있도록 요약, 태깅, 주제 분류 등 구조화된 메타데이터를 자동으로 생성합니다.
                </span>
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
                    alt="Vectorization"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold text-[#5967B5] mt-4 mb-2">벡터화 및 의미 인덱싱</h4>
                <span className="text-md md:text-md font-normal text-[#5967B5] text-left">
                  문맥/의도 기반 탐색이 가능한 벡터 DB를 구축합니다.
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
                    alt="Automated Pipeline"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold text-[#5967B5] mt-4 mb-2">자동화된 유지관리 파이프라인</h4>
                <span className="text-md md:text-md font-normal text-[#5967B5] text-center">
                  새로운 콘텐츠가 등록될 때마다 자동으로 메타데이터를 업데이트하고 벡터화합니다.
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
                    alt="Search Infrastructure"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold text-[#5967B5] mt-4 mb-2">검색 인프라 제공</h4>
                <span className="text-md md:text-md font-normal text-[#5967B5] text-left">
                  API, 웹 UI 형태로 의미 기반 검색 기능을 쉽게 통합할 수 있도록 제공합니다.
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
                    alt="System Integration"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold text-[#5967B5] mt-4 mb-2">고객 시스템 연동 최적화</h4>
                <span className="text-md md:text-md font-normal text-[#5967B5] text-left">
                  도서관 포털, LMS, 리포지터리 등에 붙이기 쉬운 구조로 JSON 기반 응답을 제공합니다.
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
                    alt="Data Ownership"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold text-[#5967B5] mt-4 mb-2">데이터 소유권 보장</h4>
                <span className="text-md md:text-md font-normal text-[#5967B5] text-center">
                  원본 콘텐츠 및 소유권은 전적으로 고객에게 있으며, Biblo는 메타데이터 처리와 검색 인프라만 제공합니다.
                </span>
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
                    alt="Continuous Operation"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold text-[#5967B5] mt-4 mb-2">지속 운영 지원</h4>
                <span className="text-md md:text-md font-normal text-[#5967B5] text-center">
                  단발성 구축이 아닌, 지속 운영되는 AI 검색 기반을 제공하여 고객이 따로 관리하지 않아도 AI 검색 품질이 지속적으로 유지됩니다.
                </span>
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
                    alt="SaaS Platform"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold text-[#5967B5] mt-4 mb-2">SaaS 형태 제공</h4>
                <span className="text-md md:text-md font-normal text-[#5967B5] text-center">
                  SaaS 형태로 제공되며, 전용 인스턴스 및 온프레미스 옵션도 협의 가능합니다.
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
