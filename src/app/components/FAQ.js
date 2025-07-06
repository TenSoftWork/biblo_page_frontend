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
      question: "비블로(Biblo)는 기존 검색 시스템과 무엇이 다른가요?",
      answer:
        "비블로(Biblo)는 단순한 검색 솔루션이 아니라, 고객 데이터를 AI가 이해할 수 있도록 구조화하고 의미 기반 검색이 가능하도록 자동화된 시맨틱 메타데이터 파이프라인을 제공합니다. 단발성 구축이 아닌, 지속 운영되는 AI 검색 기반을 제공하여 고객이 따로 관리하지 않아도 AI 검색 품질이 지속적으로 유지됩니다.",
    },
    {
      question: "시맨틱 메타데이터 생성이란 무엇인가요?",
      answer:
        "시맨틱 메타데이터 생성은 AI가 이해할 수 있도록 콘텐츠를 요약, 태깅, 주제 분류 등으로 구조화하는 과정입니다. 이를 통해 단순한 키워드 검색을 넘어 문맥과 의미를 이해하는 검색이 가능해집니다. Biblo는 이 과정을 자동화하여 새로운 콘텐츠가 등록될 때마다 메타데이터를 자동으로 업데이트합니다.",
    },
    {
      question: "벡터화 및 의미 인덱싱은 어떻게 작동하나요?",
      answer:
        "콘텐츠를 벡터로 변환하고, 고성능 벡터 데이터베이스에 시맨틱 인덱스를 구축합니다. 이를 통해 문맥/의도 기반 탐색이 가능한 벡터 DB를 구축하여 의미 기반 유사도 검색을 제공합니다. 사용자의 질문도 같은 방식으로 벡터화하여 가장 관련성 높은 콘텐츠를 찾아줍니다.",
    },
    {
      question: "자동화된 유지관리 파이프라인은 무엇인가요?",
      answer:
        "새로운 콘텐츠가 등록될 때마다 자동으로 메타데이터를 업데이트하고 벡터화하는 시스템입니다. 고객이 따로 관리하지 않아도 AI 검색 품질이 지속적으로 유지되며, Biblo는 백엔드에서 메타데이터 상태를 항상 최신화합니다. 이를 통해 지속 운영되는 AI 검색 기반을 제공합니다.",
    },
    {
      question: "검색 인프라는 어떻게 제공되나요?",
      answer:
        "API, 웹 UI 형태로 의미 기반 검색 기능을 쉽게 통합할 수 있도록 제공합니다. RESTful API를 통한 검색 기능과 웹 인터페이스를 제공하며, 도서관 포털, LMS, 리포지터리 등 기존 시스템과의 연동을 지원합니다. JSON 기반 응답으로 기존 시스템에 쉽게 통합할 수 있습니다.",
    },
    {
      question: "데이터 소유권은 어떻게 보장되나요?",
      answer:
        "원본 콘텐츠 및 소유권은 전적으로 고객에게 있으며, 비블로(Biblo)는 메타데이터 처리와 검색 인프라만 제공합니다. 고객의 데이터는 고객이 소유하고 관리하며, 비블로(Biblo)는 단지 AI가 이해할 수 있는 형태로 변환하고 검색 기능을 제공할 뿐입니다.",
    },
    {
      question: "어떤 형태로 서비스가 제공되나요?",
      answer:
        "SaaS 형태로 제공되며, 전용 인스턴스 및 온프레미스 옵션도 협의 가능합니다. 클라우드 기반 서비스로 시작하여 필요에 따라 전용 서버나 온프레미스 환경으로 확장할 수 있습니다. 기관의 보안 요구사항과 규정에 맞춰 유연하게 구성 가능합니다.",
    },
  ];
 

  return (
    <section className="pb-16 md:pb-32 pt-6 md:pt-8 px-4" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-4 md:mb-6">
          <h6 className="text-[#6A71A8] text-base tracking-[0.2em] font-medium mb-3">
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