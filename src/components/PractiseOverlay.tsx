"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const PractiseOverlay = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start 0.6", "end 0.95"]
  });

  const rotate = useTransform(scrollYProgress, [0.6, 0.75], [0, -8]);
  const scale = useTransform(scrollYProgress, [0.6, 0.75], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0.7, 0.85], [1, 0]);

  return (
    <div className="relative h-[120vh] mt-[-60vh] z-[1] overflow-hidden perspective-1000">
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
          src="/practisealt.png"
          alt="City Lights"
          fill
          className="object-cover"
          priority
        />
        <motion.div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, transparent 35%, rgba(0,0,0,1))",
            opacity: useTransform(scrollYProgress, [0.7, 0.85], [0.2, 1])
          }}
        />
      </motion.div>
    </div>
  );
};

export default PractiseOverlay; 