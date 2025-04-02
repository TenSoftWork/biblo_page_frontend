"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    logo: "/hero_section_company_logo_5.png",
    text: "Since implementing this solution, we've seen a dramatic improvement in our analytics efficiency. The AI insights helped us identify opportunities we would have missed.",
    avatar: "/testimonial_1.jpeg",
    name: "Greg Weingartner",
    title: "CEO",
    company: "Nexusgate",
  },
  {
    logo: "/hero_section_company_logo_2.png",
    text: "The platform&apos;s automation has streamlined our workflow, enhancing productivity.",
    avatar: "/testimonial_2.jpeg",
    name: "Jorn Lande",
    title: "Marketing Director",
    company: "Spitfire",
  },
  {
    logo: "/hero_section_company_logo_3.png",
    text: "Since implementing this solution, we've seen a dramatic improvement in our analytics efficiency. The AI insights helped us identify opportunities we would have missed.",
    avatar: "/testimonial_3.jpeg",
    name: "Greg Weingartner",
    title: "CEO",
    company: "Nexusgate",
  },
  {
    logo: "/hero_section_company_logo_4.png",
    text: "The platform&apos;s automation has streamlined our workflow, enhancing productivity.",
    avatar: "/testimonial_4.jpeg",
    name: "Jorn Lande",
    title: "Marketing Director",
    company: "Spitfire",
  },
  {
    logo: "/hero_section_company_logo_5.png",
    text: "Since implementing this solution, we've seen a dramatic improvement in our analytics efficiency. The AI insights helped us identify opportunities we would have missed.",
    avatar: "/testimonial_1.jpeg",
    name: "Greg Weingartner",
    title: "CEO",
    company: "Nexusgate",
  },
  {
    logo: "/hero_section_company_logo_2.png",
    text: "The platform&apos;s automation has streamlined our workflow, enhancing productivity.",
    avatar: "/testimonial_2.jpeg",
    name: "Jorn Lande",
    title: "Marketing Director",
    company: "Spitfire",
  },
];

const TestimonialCard = ({ data, direction = "up", isMobileView = false }) => {
  return (
    <motion.div
      className={`bg-white/50 backdrop-blur-sm p-6 rounded-[20px] ${
        isMobileView ? "w-[85vw] mx-2" : "mb-4"
      } flex-shrink-0`}
      initial={{ opacity: 0, y: direction === "up" ? 20 : -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-start gap-4">
        <img
          src={data.logo}
          alt={data.company}
          className="w-20 h-5 object-contain"
        />
        <div>
          <p className="text-[#6A71A8] mb-4">{data.text}</p>
          <div className="flex flex-col items-left gap-4">
            <img
              src={data.avatar}
              alt={data.name}
              className="w-20 h-32 rounded object-cover shadow-lg"
            />
            <div>
              <p className="text-[#545C9E] text-xl font-normal">{data.name}</p>
              <div className="flex items-center font-light gap-1 text-sm text-[#545C9E]">
                <span>{data.title}</span>
                <span>at</span>
                <span>{data.company}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialSlider = ({ direction = "up" }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollHeight = container.scrollHeight;
    const speed = direction === "up" ? -1 : 1;

    const scroll = () => {
      setScrollPosition((prev) => {
        const newPosition = prev + speed;
        if (direction === "up" && newPosition <= -scrollHeight / 3) {
          return 0;
        }
        if (direction === "down" && newPosition >= 0) {
          return -scrollHeight / 3;
        }
        return newPosition;
      });
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, [direction]);

  const maskStyle = {
    maskImage:
      direction === "up"
        ? "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)"
        : "linear-gradient(to top, transparent 0%, black 20%, black 80%, transparent 100%)",
    WebkitMaskImage:
      direction === "up"
        ? "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)"
        : "linear-gradient(to top, transparent 0%, black 20%, black 80%, transparent 100%)",
  };

  return (
    <div
      className="h-full overflow-hidden relative hidden md:block"
      ref={containerRef}
      style={maskStyle}
    >
      <div
        className="transition-transform duration-[0ms]"
        style={{ transform: `translateY(${scrollPosition}px)` }}
      >
        {[...testimonials, ...testimonials, ...testimonials].map(
          (testimonial, index) => (
            <TestimonialCard
              key={index}
              data={testimonial}
              direction={direction}
            />
          )
        )}
      </div>
    </div>
  );
};

const MobileTestimonialSlider = () => {
  const scrollContainerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const slideWidth = scrollContainerRef.current.offsetWidth;
      const newSlide = Math.round(scrollLeft / slideWidth);
      setCurrentSlide(newSlide);
    }
  };

  return (
    <div className="md:hidden">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide"
        onScroll={handleScroll}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="snap-center">
            <TestimonialCard data={testimonial} isMobileView={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

const ClientInsights = () => {
  return (
    <section className="py-16 md:py-32 px-4" id="client-insights">
      <div className="max-w-[88rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-8">
          {/* First Column (25%) - Video and Header */}
          <div className="md:col-span-2">
            <div className="mb-8">
              <div className="items-center gap-2 mb-4">
                <h6 className="text-[#6A71A8] uppercase tracking-[0.2em] mb-3">
                  Client Insights
                </h6>
                <div className="w-10 h-[1px] bg-gradient-to-r from-[#0DCFFF] via-[#545c9e] to-[#545c9e] bg-[length:120%] mb-8 md:mb-12"></div>
              </div>
              <h2 className="text-3xl md:text-5xl font-medium bg-gradient-to-r from-[#0DCFFF] via-[#545c9e] to-[#545c9e] bg-[length:120%] text-transparent bg-clip-text">
                What Our Clients Say
              </h2>
              <p className="text-[#465478] mt-4">
                How our clients transform growth with advanced solutions. And
                here&apos;s exactly how they did it.
              </p>
            </div>
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden">
              <video
                src="https://framerusercontent.com/assets/mzEJrfIah6lDBrFElC0qZbQTJ2o.mp4"
                className="w-full h-full object-cover"
                controls
                muted
                playsInline
              />
            </div>
          </div>

          {/* Desktop Vertical Sliders */}
          <div className="hidden md:block md:col-span-3 h-[800px] mt-16">
            <TestimonialSlider direction="up" />
          </div>
          <div className="hidden md:block md:col-span-3 h-[800px] mt-16">
            <TestimonialSlider direction="down" />
          </div>
          

          {/* Mobile Slider */}
          <div className="col-span-1 md:col-span-6 ">
            <MobileTestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientInsights;
