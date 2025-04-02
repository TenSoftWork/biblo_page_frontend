"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const BackgroundAnimation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Create intersection observers for each section
    const observers = {};
    const sections = [
      "hero",
      "product-spotlight",
      "how-it-works",
      "why-different",
      "performance",
      "about-us",
      "client-insights",
      "pricing",
      "faq",
      "footer",
    ];

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observers[section] = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(section);
              }
            });
          },
          {
            threshold: section === "product-spotlight" ? 0.8 : 0.5,
            rootMargin: "-50px 0px -50px 0px",
          }
        );
        observers[section].observe(element);
      } else {
        console.warn(`Section ${section} not found in DOM`);
      }
    });

    return () => {
      Object.values(observers).forEach((observer) => {
        observer.disconnect();
      });
    };
  }, []);

  // Background configurations for each section
  const backgrounds = {
    hero: {
      type: "video",
      src: "https://framerusercontent.com/assets/9f3YOJWd8t3cibP1iqPDR1mCMro.mp4",
    },
    "product-spotlight": {
      type: "image",
      src: "/bg1.png",
    },
    "how-it-works": {
      type: "image",
      src: "/bg2.png",
    },
    "why-different": {
      type: "image",
      src: "/bg3.png",
    },
    performance: {
      type: "image",
      src: "/bg4.png",
    },
    "about-us": {
      type: "image",
      src: "/bg1.png",
    },
    "client-insights": {
      type: "image",
      src: "/bg3.png",
    },
    pricing: {
      type: "image",
      src: "/bg2.png",
    },
    faq: {
      type: "image",
      src: "/bg3.png",
    },
    footer: {
      type: "image",
      src: "/bg2.png",
    },
  };

  const currentBackground = backgrounds[activeSection];

  return (
    <div
      className="fixed inset-0 -z-10"
      style={{ backgroundColor: "rgb(249, 250, 251)" }}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={`background-${activeSection}`}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.7,
          }}
        >
          {currentBackground.type === "video" ? (
            <video
              src={currentBackground.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{ backgroundColor: "rgb(249, 250, 251)" }}
            />
          ) : (
            <div className="relative w-full h-full">
              <Image
                src={currentBackground.src}
                alt={`Background for ${activeSection}`}
                fill
                priority
                sizes="100vw"
                quality={100}
                className="object-cover"
                onError={(e) => {
                  console.error(
                    `Failed to load image for section ${activeSection}:`,
                    e
                  );
                  setImageError(true);
                }}
                onLoad={() => {
                  console.log(
                    `Successfully loaded image for section ${activeSection}`
                  );
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BackgroundAnimation;
