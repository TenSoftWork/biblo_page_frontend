"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "./AnimatedButton";

const clientLogos = [
  "/hero_section_company_logo_1.png",
  "/hero_section_company_logo_2.png",
  "/hero_section_company_logo_3.png",
  "/hero_section_company_logo_4.png",
  "/hero_section_company_logo_5.png",
];
const ToggleSwitch = ({ isAnnual, setIsAnnual }) => (
  <div className="flex justify-center w-full px-4 md:px-0">
    <div className="inline-flex items-center justify-center gap-3 sm:gap-6 bg-white rounded-full px-4 sm:px-10 py-2 sm:py-4 shadow-lg">
      <span
        className={`text-base sm:text-lg md:text-2xl ${
          !isAnnual ? "text-[#6A71A8]" : "text-[#465478]/60"
        }`}
      >
        Monthly
      </span>

      <div
        className="relative w-10 sm:w-12 md:w-16 h-5 sm:h-6 md:h-9 cursor-pointer"
        onClick={() => setIsAnnual(!isAnnual)}
      >
        <div className="absolute w-full h-full rounded-full border border-[#6A71A8]/20" />
        <motion.div
          className="absolute w-4 sm:w-5 md:w-8 h-4 sm:h-5 md:h-8 bg-gradient-to-r from-[#5967B5] to-[#908EED] rounded-full top-0.5 left-0.5 shadow-[0_0.48px_0.68px_-0.5px_rgba(136,138,227,0.23),0_4px_5.6px_-1px_rgba(136,138,227,0.66),inset_0_0.64px_0.64px_-0.94px_rgba(255,255,255,0.36),inset_0_1.93px_1.93px_-1.88px_rgba(255,255,255,0.34),inset_0_5.1px_5.1px_-2.81px_rgba(255,255,255,0.29),inset_0_16px_16px_-3.75px_rgba(255,255,255,0.12),inset_0_0_2px_0_rgba(30,33,115,0.5)]"
          animate={{
            x: isAnnual ? "calc(100% + 4px)" : "0",
          }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
            scale: {
              type: "spring", 
              stiffness: 300,
              damping: 20,
            },
          }}
        />
      </div>

      <span
        className={`text-base sm:text-lg md:text-2xl relative ${
          isAnnual ? "text-[#6A71A8]" : "text-[#465478]/60"
        }`}
      >
        Annual
        <motion.div
          className="absolute -top-6 sm:-top-8 md:-top-10 right-[-50px] sm:right-[-70px] md:right-[-90px] bg-[#80e5ff] text-black/60 text-sm sm:text-base md:text-xl px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-full whitespace-nowrap shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.06)]"
          initial={{ scale: 0, rotate: -10 }}
          animate={{
            scale: isAnnual ? [0.8, 1.2, 1] : [1],
            rotate: [18],
          }}
          transition={{
            duration: 0.6,
            times: [0, 0.6, 1],
            bounce: 0.5,
          }}
        >
          Save 20%
        </motion.div>
      </span>
    </div>
  </div>
);

const PricingCard = ({ title, price, features, isPopular }) => (
  <motion.div
    className="bg-white/50 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col h-full relative"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h3 className="text-2xl md:text-3xl text-[#6A71A8] mb-6 md:mb-8">{title}</h3>
    <div className="space-y-3 md:space-y-4 mb-6 flex-grow">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2 md:gap-3">
          <svg
            className="w-4 h-4 md:w-5 md:h-5 text-[#6A71A8]"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-[#465478] text-base md:text-lg">{feature}</span>
        </div>
      ))}
    </div>
    <div className="mt-auto">
      <div className="flex items-baseline mb-4 md:mb-6">
        <span className="text-4xl md:text-5xl font-bold text-[#6A71A8]">${price}</span>
        <span className="text-[#465478] ml-2">/month</span>
      </div>
      <AnimatedButton href="/checkout">Purchase</AnimatedButton>
    </div>
  </motion.div>
);

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      title: "Essential",
      price: isAnnual ? "23" : "29",
      features: [
        "Core Analytics",
        "Limited Campaigns",
        "Community Access",
        "Standard Support",
      ],
      isPopular: false,
    },
    {
      title: "Advanced",
      price: isAnnual ? "63" : "79",
      features: [
        "All Essential Features",
        "Unlimited Campaigns",
        "Advanced AI predictions",
        "Priority support",
        "Team collaboration tools",
      ],
      isPopular: true,
    },
    {
      title: "Enterprise",
      price: isAnnual ? "159" : "199",
      features: [
        "All Advanced Features",
        "Custom AI models",
        "API access",
        "Advanced Integrations",
        "24/7 priority support",
        "Training Sessions",
      ],
      isPopular: false,
    },
  ];

  const trustedCompanies = [
    "/company1.svg",
    "/company2.svg",
    "/company3.svg",
    "/company4.svg",
    "/company5.svg",
  ];

  return (
    <section className="pt-6 md:pt-8 pb-16 md:pb-32 px-4" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4 md:mb-6">
          <h6 className="text-[#6A71A8] text-sm md:text-base font-medium uppercase tracking-[0.2em] mb-3">
            PRICING
          </h6>
          <div className="w-10 h-[1px] bg-gradient-to-r from-[#0DCFFF] via-[#545c9e] to-[#545c9e] bg-[length:120%] mx-auto mb-8 md:mb-12"></div>
        </div>

        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-[#0DCFFF] via-[#545c9e] to-[#545c9e] bg-[length:120%] bg-clip-text text-transparent">
              Explore
            </span>{" "}
            <span className="text-[#6A71A8]">Our Plans</span>
          </h2>
          <p className="text-[#465478] text-base md:text-lg max-w-2xl mx-auto">
            Super flexible monthly plans and cost-effective annual
            subscriptions.
          </p>
        </div>

        <ToggleSwitch isAnnual={isAnnual} setIsAnnual={setIsAnnual} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full mt-8 md:mt-12 mb-12 md:mb-20">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <div className="w-full">
          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-8 sm:mt-10 md:mt-14"
          >
            <h6 className="text-center text-[#465478] text-[10px] sm:text-xs md:text-[14px] font-medium mb-6 sm:mb-8 md:mb-10">
              ✦ AI-POWERED ✦ RESEARCHER NETWORK
            </h6>
            <div className="relative mx-auto w-full max-w-[800px]">
              <div
                className="relative overflow-hidden"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent 5%, black 23%, black 77%, transparent 95%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 5%, black 23%, black 77%, transparent 95%)",
                }}
              >
                <div className="flex gap-[30px] sm:gap-[40px] md:gap-[60px] lg:gap-[90px] animate-scroll">
                  {[...clientLogos, ...clientLogos].map((logo, index) => (
                    <div
                      key={index}
                      className="w-[80px] sm:w-[100px] lg:w-[120px] h-[16px] sm:h-[20px] lg:h-[27px] flex-shrink-0"
                    >
                      <Image
                        src={logo}
                        alt={`Client Logo ${index + 1}`}
                        width={120}
                        height={27}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 p-6 md:p-8 border-t border-[#6A71A8]/20 mt-8 md:mt-12">
          <p className="text-[#6A71A8] text-base md:text-lg text-center">
            Seamless integration with expert guidance
          </p>
          <AnimatedButton href="/contact#top">Ask Our Expert</AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
