"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const rotationValues = useMemo(() => {
    return testimonials.map(() => Math.floor(Math.random() * 21) - 10);
  }, [testimonials]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const timer = setInterval(() => {
        handleNext();
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [autoplay, handleNext]);

  return (
    <div className="max-w-sm md:max-w-7xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20">
      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-20">
        <div className="relative -ml-[50%] w-[600px] md:col-span-5">
          <div className="relative h-[400px]">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: rotationValues[index],
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : rotationValues[index],
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: rotationValues[index],
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom flex items-center justify-center"
                >
                  <div className="relative w-[500px] h-[500px]">
                    <Image
                      src={testimonial.src}
                      alt={testimonial.name}
                      fill
                      draggable={false}
                      className="rounded-3xl object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4 md:col-span-7 max-w-[1000px] h-[500px]">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="pr-12 flex flex-col h-full"
          >
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-[#003A70]">
                {testimonials[active].name}
              </h3>
              <p className="text-base text-gray-500 italic font-light mt-2">
                {testimonials[active].designation}
              </p>
              <motion.p className="text-lg text-gray-700 mt-8 leading-relaxed max-w-prose">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * index }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </div>
            <div className="flex gap-4 pt-8">
              <button
                onClick={handlePrev}
                className="h-7 w-7 rounded-full bg-gray-100 flex items-center justify-center group/button"
              >
                <IconArrowLeft className="h-5 w-5 text-black group-hover/button:rotate-12 transition-transform duration-300" />
              </button>
              <button
                onClick={handleNext}
                className="h-7 w-7 rounded-full bg-gray-100 flex items-center justify-center group/button"
              >
                <IconArrowRight className="h-5 w-5 text-black group-hover/button:-rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTestimonials;
export { AnimatedTestimonials };
