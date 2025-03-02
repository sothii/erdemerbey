"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroOverlay = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start 0.1", "end end"]
  });

  const rotate = useTransform(scrollYProgress, [0.1, 0.25], [0, -8]);
  const scale = useTransform(scrollYProgress, [0.1, 0.25], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0.15, 0.3], [1, 0]);

  return (
    <div className="relative h-[120vh] mt-[-50vh] z-[1] overflow-hidden perspective-1000">
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
          src="/heroalt.png"
          alt="Modern Buildings"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Dinamik gradient */}
        <motion.div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, transparent 35%, rgba(0,0,0,1))",
            opacity: useTransform(scrollYProgress, [0.15, 0.3], [0.2, 1])
          }}
        />
      </motion.div>
    </div>
  );
};

export default HeroOverlay; 