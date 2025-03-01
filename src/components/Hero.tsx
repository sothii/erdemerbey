"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./TextGenerate";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Video yüklendiğinde otomatik oynatmayı başlat
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video otomatik oynatma hatası:", error);
      });
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden z-[2]">
      {/* Video Arka Plan */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover"
        style={{ filter: "brightness(0.7)" }}
      >
        <source src="background-video.mp4" type="video/mp4" />
        {/* Alternatif video formatı desteği */}
        <source src="background-video.webm" type="video/webm" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>

      {/* Siyah Overlay */}
      <div className="absolute inset-0 bg-black/10" />
      
      {/* Sağdan Gelen Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/1 to-transparent z-[5]" />

      {/* Hero İçerik */}
      <div className="relative h-full flex items-center justify-end text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-60 px-4"
        >
          <TextGenerateEffect
            words={`GÜVEN
DENEYİM
ADALET`}
            className="drop-shadow-lg text-left"
            duration={1.5}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 