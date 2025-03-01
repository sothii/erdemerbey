"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./lamp";
import { FaPhone } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section>
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center"
        >
          <h1 className="bg-gradient-to-b from-white via-white/80 to-white/30 py-4 bg-clip-text text-center text-6xl md:text-8xl font-bold tracking-tight text-transparent">
            ERDEM ERBEY
          </h1>
          <p className="text-2xl md:text-3xl text-slate-400 font-light tracking-wide mt-2">
            Hukuk & Danışmanlık
          </p>
        </motion.div>
      </LampContainer>

      {/* Alt kısımdaki randevu çağrısı */}
      <div className="bg-slate-950 h-[20vh] pt-4">
        <div className="flex flex-col items-center space-y-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl text-white uppercase tracking-[0.15em] font-light"
            whileHover={{
              textShadow: "0 0 8px rgb(255,255,255,0.5)",
              transition: { duration: 0.2 }
            }}
          >
            Hukuki Destek İçin Hemen Randevu Alın!
          </motion.h2>
          
          <motion.a
            href="tel:02244523225"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 text-4xl md:text-5xl text-cyan-400 font-light tracking-wider group"
          >
            <motion.div
              animate={{
                rotate: [-5, 5, -5],
                transition: {
                  repeat: Infinity,
                  duration: 0.5,
                  ease: "linear"
                }
              }}
              className="relative"
            >
              <FaPhone className="h-6 w-6" />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md -z-10"
              />
            </motion.div>
            
            <span className="relative">
              0224 452 32 25
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 