"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const AnimatedButton = ({ children, href, className = "", variant = "primary" }) => {
  const ButtonContent = () => (
    <motion.span
      className={`relative z-10 block py-3 px-6 md:px-8 ${
        variant === "primary" 
          ? "text-white" 
          : "bg-gradient-to-r from-[#5967B5] to-[#908EED] bg-clip-text text-transparent"
      }`}
      initial={{ rotateX: 0 }}
      whileHover={{
        rotateX: -20,
        transformOrigin: "bottom",
        y: -4,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.span>
  );

  const buttonStyles = `relative rounded-full font-medium overflow-hidden ${
    variant === "primary"
      ? "bg-gradient-to-r from-[#5967B5] to-[#908EED] shadow-lg"
      : "bg-white border border-[#6A71A8]/20 shadow-lg"
  } ${className}`;

  const hoverAnimation = {
    boxShadow: variant === "primary"
      ? "0px -8px 0px inset rgba(0, 0, 0, 0.2)"
      : "0px -8px 0px inset rgba(169, 169, 169, 0.4)",
    transition: { duration: 0.4 },
  };

  return href ? (
    // <Link href={href}>
    <Link href="/chat">
      <motion.button className={buttonStyles} whileHover={hoverAnimation}>
        <ButtonContent />
      </motion.button>
    </Link>
  ) : (
    <motion.button className={buttonStyles} whileHover={hoverAnimation}>
      <ButtonContent />
    </motion.button>
  );
};

export default AnimatedButton;
