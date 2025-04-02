"use client";

import { motion, useAnimation, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedButton from "./AnimatedButton";

const AnimatedNumber = ({ value, secondary }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    const node = ref.current;
    if (!node || !isInView) return;

    const animation = animate(0, parseInt(value), {
      duration: 2,
      ease: [0.43, 0.13, 0.23, 0.96], // Custom easing for smooth animation
      onUpdate: (latest) => {
        node.textContent = Math.floor(latest);
        if (secondary) {
          node.innerHTML = `${Math.floor(
            latest
          )}<span class="bg-gradient-to-r from-[#0DCFFF] via-[#545c9e] to-[#545c9e] bg-[length:120%]  bg-clip-text text-transparent">${secondary}</span>`;
        }
      },
    });

    return () => animation.stop();
  }, [value, secondary, isInView]);

  return (
    <span ref={ref} className="inline-block">
      {0}
    </span>
  );
};

const StatCard = ({ title, value, subtitle, secondary }) => (
  <motion.div
    className="relative bg-white/60 backdrop-blur-lg rounded-xl md:rounded-2xl p-6 md:p-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h4 className="text-[#6A71A8] text-base md:text-lg mb-3 md:mb-4">{title}</h4>
    <div className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-[#465478] to-[#2A3365] bg-clip-text text-transparent mb-2">
      <AnimatedNumber value={value} secondary={secondary} />
    </div>
    {subtitle && <p className="text-[#465478] text-base md:text-lg">{subtitle}</p>}
  </motion.div>
);

const Performance = () => {
  const stats = [
    {
      title: "Campaigns Launched",
      value: "6",
      secondary: "K+",
      subtitle: null,
    },
    {
      title: "Active Platform Users",
      value: "34",
      secondary: "K",
      subtitle: null,
    },
    {
      title: "AI Insights Generated",
      value: "200",
      secondary: "K",
      subtitle: null,
    },
    {
      title: "Global Engagement",
      value: "180",
      secondary: "K",
      subtitle: null,
    },
    {
      title: "Customer Satisfaction",
      value: "92",
      secondary: "%",
      subtitle: null,
    },
    {
      title: "Strategic Solutions",
      value: "36",
      secondary: "K",
      subtitle: null,
    },
  ];

  return (
    <section className="py-16 md:py-32" id="performance">
      <div className="flex flex-col md:flex-row items-top">
        <div className="w-full md:w-[30%] px-4 md:px-8 mb-8 md:mb-0">
          <h6 className="text-[#6A71A8] text-sm md:text-base tracking-[0.2em] font-medium mb-3">
            PERFORMANCE
          </h6>
          <div className="w-10 h-[1px] bg-gradient-to-r from-[#0DCFFF] via-[#545c9e] to-[#545c9e] bg-[length:120%] mb-8 md:mb-12"></div>
        </div>
        <div className="max-w-7xl flex-1 flex flex-col items-left px-4 md:px-8">
          <div className="max-w-4xl">
            <div className="mb-12 md:mb-20">
              <h3 className="text-3xl md:text-4xl lg:text-6xl font-medium mb-4 md:mb-6">
                <span className="bg-gradient-to-r from-[#0DCFFF] via-[#545c9e] to-[#545c9e] bg-[length:120%] bg-clip-text text-transparent">
                  Our Milestones,
                </span>
                <br />
                <span className="text-[#6A71A8]">your Advantage</span>
              </h3>
              <p className="text-[#465478] text-base md:text-lg max-w-2xl">
                Driving measurable growth worldwide with every campaign
                launched, user supported, and AI-driven solution delivered.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-20">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>

            {/* Bottom Content */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-20">
              <div className="w-full md:w-[60%]">
                <p className="text-[#465478] text-base md:text-lg mb-6 md:mb-0">
                  Experience our analytics engine that push boundaries and
                  reshape businesses worldwide.
                </p>
              </div>
              <div className="w-full md:w-[60%] flex justify-start">
                <AnimatedButton href="/contact#top">
                  Analytics Demo
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
