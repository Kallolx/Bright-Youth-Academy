import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CardStackProps {
  items: React.ReactNode[];
  interval?: number;
}

export const CardStack = ({ items, interval = 6000 }: CardStackProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  return (
    <div className="relative h-full w-full">
      {/* Stacked Cards */}
      <div className="relative h-full w-full flex justify-center">
        {items.map((item, idx) => {
          const isActive = idx === currentIndex;
          const position = (idx - currentIndex + items.length) % items.length;

          return (
            <motion.div
              key={idx}
              animate={{
                scale: isActive ? 1 : 0.92,
                y: position * -25,
                x: position * 25,
                zIndex: items.length - position,
                opacity: isActive ? 1 : 0.7,
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
              className="absolute origin-top-right"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {item}
            </motion.div>
          );
        })}
      </div>
      {/* Dots Indicator */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-3">
        {items.map((_, idx) => (
          <motion.button
            key={idx}
            className="relative flex items-center justify-center"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          >
            {/* Outer Circle (Border Effect) */}
            <motion.div
              className={`w-3 h-3 rounded-full border ${
                idx === currentIndex ? "border-gray-400" : "border-gray-600/50"
              }`}
              animate={{
                scale: idx === currentIndex ? 1.2 : 1,
                opacity: idx === currentIndex ? 1 : 0.7,
              }}
              transition={{ duration: 0.3 }}
              style={{ willChange: "scale, opacity" }}
            />

            {/* Inner Dot (Only Active One Has It) */}
            {idx === currentIndex && (
              <motion.div
                className="absolute w-2 h-2 rounded-full bg-gray-400"
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};
