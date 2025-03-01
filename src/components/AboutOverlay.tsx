"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutOverlay = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start 0.4", "end end"]
  });

  // 3D efektler için scroll değerleri - daha geç başlasın
  const rotate = useTransform(scrollYProgress, [0.4, 0.55], [0, -8]);
  const scale = useTransform(scrollYProgress, [0.4, 0.55], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0.45, 0.6], [1, 0]); // Daha geç solma

  return (
    <div className="relative h-[120vh] mt-[-20vh] z-[1] overflow-hidden perspective-1000">
      <motion.div 
        className="relative w-full h-full origin-bottom"
        style={{ 
          rotateX: rotate,
          scale,
          opacity,
          transformStyle: "preserve-3d"
        }}
      >
        <Image
          src="/aboutalt.png"
          alt="Law Books"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Dinamik gradient - Çok daha geç başlayan geçiş */}
        <motion.div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, transparent 35%, rgba(255,255,255,1))", // Gradient başlangıcını daha yukarı çektik
            opacity: useTransform(scrollYProgress, [0.45, 0.6], [0.2, 1]) // Gradient geçişini daha da geciktirdik
          }}
        />
      </motion.div>
    </div>
  );
};

export default AboutOverlay; 