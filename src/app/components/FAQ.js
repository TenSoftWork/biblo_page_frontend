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
      question: "비블로(Biblo)는 기존 도서관 검색 시스템과 무엇이 다른가요?",
      answer:
        "비블로(Biblo)는 책 단위가 아닌, 작품(Work) 단위로 콘텐츠를 인식합니다. 예를 들어, 원문, 번역본, 해설판 등 다양한 버전이 하나로 통합되어 검색됩니다. 사용자는 단순히 제목만 입력해도 관련 자료를 모두 한 눈에 확인할 수 있습니다.",
    },
    {
      question: "비블로(Biblo)에서 'Work 단위 검색'이란 무엇인가요?",
      answer:
        "하나의 작품이 여러 언어, 형식, 해설 등으로 출판되더라도 Biblo는 이를 의미적으로 같은 콘텐츠로 인식하고 묶어 보여줍니다. 결과적으로 흩어진 자료를 하나의 흐름으로 탐색할 수 있습니다.",
    },
    {
      question: "비블로(Biblo)는 어떤 데이터를 수집하고 활용하나요?",
      answer:
        "사용자의 검색 기록, 하이라이트, 스크랩, 노트 등을 기반으로 개인화된 학습 및 연구 지원 데이터를 생성합니다. 수집된 데이터는 대학 내 서버에 저장되며 외부로 유출되지 않습니다.",
    },
    {
      question: "비블로(Biblo)는 연구자에게 어떤 도움을 주나요?",
      answer:
        "연구 주제에 맞는 자료 추천, 논문 요약, 유사 연구 연결, 맞춤형 연구 보고서 생성 등 다양한 AI 기반 기능을 제공합니다. 또한 연구 흐름을 분석하여 개인 맞춤 연구 전략을 제안합니다.",
    },
    {
      question: "비블로(Biblo)는 대학 외 기관에서도 사용할 수 있나요?",
      answer:
        "예, 가능합니다. 연구소, 공공기관, 아카이브 등 다양한 지식기관에서 기관 맞춤형 AI 검색 시스템으로 활용될 수 있습니다.",
    },
    {
      question: "비블로(Biblo)는 어떻게 구축되고 유지되나요?",
      answer:
        "비블로(Biblo)는 기관 서버 또는 클라우드에 설치됩니다. 기존 도서관 데이터와 연동하여 검색 AI가 훈련되며 지속적으로 자동 업데이트 및 검색 품질 향상이 이루어집니다.",
    },
    {
      question: "기존 도서관 시스템과 비블로(Biblo)를 연동할 수 있나요?",
      answer:
        "예, 가능합니다. MARC, KORMARC, RDF 등 서지포맷을 지원하며 OPAC 또는 LMS 시스템과 API 방식으로 쉽게 연동할 수 있습니다. 기존 시스템을 그대로 유지하면서 비블로(Biblo)를 추가로 사용할 수 있습니다.",
    },
  ];

  return (
    <section className="pb-16 md:pb-32 pt-6 md:pt-8 px-4" id="faq">
      <div className="max-w-4xl mx-auto">
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
            <span className="text-[#6A71A8]">About Biblo</span>
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
            질문이 더 있으신가요?
          </p>

          <AnimatedButton href="/contact#top">Ask Biblo</AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
