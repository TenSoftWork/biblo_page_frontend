"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const FloatingObject = ({
  src,
  initialY,
  left,
  right,
  delay = 0,
  size = "md",
  blur = 0,
  zIndex = 0,
  rotate = 0,
  speed = 1,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -600 * speed]);

  const sizeClasses = {
    xl: "w-60 h-60 md:w-64 md:h-64",
    lg: "w-40 h-40 md:w-48 md:h-48",
    md: "w-32 h-32 md:w-40 md:h-40",
    sm: "w-24 h-24 md:w-32 md:h-32",
    xs: "w-20 h-20 md:w-24 md:h-24",
  };

  return (
    <motion.div
      ref={ref}
      className={`absolute hidden sm:block ${sizeClasses[size]}`}
      style={{
        y,
        left: left,
        right: right,
        top: initialY,
        filter: `blur(${blur}px)`,
        zIndex: zIndex,
        rotate: rotate,
      }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <Image src={src} alt="Floating object" fill className="object-contain" />
    </motion.div>
  );
};

const ProductSpotlight = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-auto flex items-center justify-center py-20 overflow-hidden -mt-[12%] sm:-mt-[12%] md:-mt-[12%] lg:-mt-[12%]"
      id="spotlight"
    >
      {/* Content Container */}
      <div className="relative w-full max-w-[1400px] mx-auto px-4">
        {/* Floating Objects Container - Hidden on Mobile */}
        <div className="absolute inset-0 pointer-events-none hidden sm:block">
          {/* Left top - largest */}
          <FloatingObject
            src="https://framerusercontent.com/images/RI5vfM6AVmTEZrQ7nwnkkMQuFE.png"
            initialY="45%"
            left="-5%"
            delay={0.2}
            size="xl"
            blur={0}
            zIndex={1}
            rotate={-162.497}
            speed={1.4}
          />
          {/* Left bottom - medium */}
          <FloatingObject
            src="https://framerusercontent.com/images/RI5vfM6AVmTEZrQ7nwnkkMQuFE.png"
            initialY="80%"
            left="-5%"
            delay={0.4}
            size="md"
            blur={2}
            rotate={-23.8212}
            speed={1}
          />
          {/* Right top - extra small */}
          <FloatingObject
            src="https://framerusercontent.com/images/RI5vfM6AVmTEZrQ7nwnkkMQuFE.png"
            initialY="50%"
            right="-4%"
            delay={0.8}
            size="sm"
            blur={4}
            rotate={-344.112}
            speed={1.7}
          />
          {/* Right bottom - small */}
          <FloatingObject
            src="https://framerusercontent.com/images/VvLBKpLpoUFxU4KdomO8oNqVg.png"
            initialY="70%"
            right="0%"
            delay={0.6}
            size="lg"
            blur={3}
            rotate={212.938}
            speed={1.2}
          />
        </div>

        {/* Main Spotlight Image */}
        <motion.div
          className="relative w-full max-w-[1200px] mx-auto"
          style={
            isMobile
              ? {}
              : {
                  scale,
                  y,
                  rotateX,
                  transformPerspective: "1200px",
                }
          }
          initial={isMobile ? { opacity: 0, y: 100 } : { opacity: 1 }}
          animate={isMobile ? { opacity: 1, y: 0 } : {}}
          transition={isMobile ? { duration: 0.8 } : {}}
        >
          <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl bg-[#0f0e65]">
            <Image
              src="/demo_project.png"
              alt="Spotlight Image"
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSpotlight;
