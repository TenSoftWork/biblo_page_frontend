"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedButton from "./AnimatedButton";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div
      className="bg-white/50 rounded-xl border border-[#6A71A8]/20 mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <button
        className="w-full flex justify-between items-center text-left p-3 md:p-4"
        onClick={onClick}
      >
        <span className="text-[#465478] text-base md:text-lg pr-4">{question}</span>
        <motion.div
          className="text-[#6A71A8] ml-2 md:ml-4 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-2xl md:text-4xl font-thin flex-shrink-0"
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          {isOpen ? "−" : "+"}
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: [0.04, 0.62, 0.23, 0.98],
          opacity: { duration: 0.25 },
        }}
        className="overflow-hidden"
      >
        <motion.div
          className="px-4 md:px-6 pb-4 md:pb-6"
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : -10,
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
        >
          <div className="w-full h-[1px] bg-[#6A71A8]/10 mb-3 md:mb-4"></div>
          <p className="text-[#465478]/80 leading-relaxed text-sm md:text-base">{answer}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const faqs = [
    {
      question: "기존 도서관 검색 시스템과 무엇이 다른가요?",
      answer:
        "비블로(Biblo)는 단순 키워드 중심 검색이 아니라, AI 기반 의미 분석을 통해 자료 간 관계를 파악합니다. 특히, 도서 정보를 개별 서적 단위가 아닌 '작품(Work)' 단위로 인식하여, 원문·번역본·해설서 등 다양한 판본을 하나의 흐름으로 연결해 제공합니다. 사용자는 제목만 입력해도 관련 자료를 통합적으로 탐색할 수 있습니다.",
    },
    {
      question: "'Work 단위 검색'이란 무엇인가요?",
      answer:
        "'Work 단위 검색'은 하나의 콘텐츠가 여러 출판 형태(언어, 해설, 요약 등)로 존재하더라도 이를 동일한 지적 결과물로 인식하여 묶어 보여주는 방식입니다. 예를 들어, 원서와 번역서, 주석서, 전자책이 하나의 작품으로 통합되어 검색되며, 사용자는 분산된 정보를 보다 직관적이고 맥락 있게 탐색할 수 있습니다.",
    },
    {
      question: "어떤 데이터를 수집하고 활용하나요?",
      answer:
        "비블로(Biblo)는 검색 이력, 스크랩, 하이라이트, 필기, 열람 패턴 등 다양한 학습 및 연구 활동 데이터를 수집합니다. 이를 바탕으로 개인화된 콘텐츠 추천, 탐색 경로 최적화, 연구 주제 추론 등의 AI 기능을 제공합니다. 모든 데이터는 사용 기관 내의 폐쇄망 또는 보안 서버에 저장되며 외부로 전송되지 않습니다.",
    },
    {
      question: "연구자에게 어떤 도움을 주나요?",
      answer:
        "연구자는 비블로(Biblo)를 통해 주제에 적합한 자료 추천, 논문 요약, 인용 문헌 추적, 유사 연구 연결, 연구 흐름 시각화, 맞춤형 연구 보고서 자동 생성 등의 기능을 이용할 수 있습니다. 비블로는 단순한 검색 도구가 아니라, AI 기반의 지식 네비게이터로서 연구자의 사고 과정을 지원합니다.",
    },
    {
      question: "대학 외 기관에서도 사용할 수 있나요?",
      answer:
        "네, 비블로(Biblo)는 도서관뿐 아니라 연구소, 공공기관, 기업 부설 아카이브 등 다양한 지식 환경에 적용할 수 있습니다. 기관별 요구에 따라 데이터 구조와 기능을 맞춤 구성할 수 있으며, 독립 실행형 또는 기존 시스템과 연동형으로 제공됩니다.",
    },
    {
      question: "어떻게 구축되고 유지되나요?",
      answer:
        "비블로(Biblo)는 기관 내 서버 또는 클라우드 환경에 설치되며, 초기 구축 시 기존 서지 데이터와 메타데이터를 기반으로 AI 모델을 훈련합니다. 이후에는 사용자의 탐색 및 학습 활동을 반영해 지속적으로 성능이 개선되며, 업데이트도 자동으로 이루어집니다. 기술 유지보수는 원격 지원 또는 기관 내 설치 환경에 맞춰 유연하게 운영됩니다.",
    },
    {
      question: "기존 도서관 시스템과 연동할 수 있나요?",
      answer:
        "예. 비블로(Biblo)는 MARC, KORMARC, RDF 등 표준 서지 포맷을 지원하며, OPAC, LMS 등 기존 도서관 시스템과의 연동을 위한 API를 제공합니다. 별도의 전환 없이 기존 시스템은 그대로 유지하면서 비블로의 AI 기능을 추가로 활용할 수 있습니다. 도입은 최소한의 변경으로 가능하며, 단계적 통합도 지원됩니다.",
    },
  ];
 

  return (
    <section className="pb-16 md:pb-32 pt-6 md:pt-8 px-4" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-4 md:mb-6">
          <h6 className="text-[#6A71A8] text-sm md:text-base font-medium uppercase tracking-[0.2em] mb-3">
            FAQ
          </h6>
          <div className="w-10 h-[1px] bg-gradient-to-r from-[#0DCFFF] via-[#545c9e] to-[#545c9e] bg-[length:120%] mx-auto mb-8 md:mb-12"></div>
        </div>

        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-[#0DCFFF] via-[#545c9e] to-[#545c9e] bg-[length:120%] bg-clip-text text-transparent">
              Questions
            </span>{" "}
            <span className="text-[#6A71A8]">about Biblo</span>
          </h2>
          <p className="text-[#465478] text-base md:text-lg">
            자주 묻는 질문에 대한 답변을 찾아보세요.
          </p>
        </div>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 p-6 md:p-8 mt-12 md:mt-20">
          <p className="text-[#6A71A8] text-base md:text-lg text-center">
            비블로(Biblo)에 대해 더 궁금한게 있으신가요?
          </p>

          <AnimatedButton href="/contact#top" className="w-[160px]">Ask Biblo</AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default FAQ;