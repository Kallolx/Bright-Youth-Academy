"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface TooltipProps {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}

export const AnimatedTooltip = ({ items }: TooltipProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-row items-center justify-center gap-2">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <img
              src={item.image}
              className="object-cover w-10 h-10 rounded-full border-2 border-white group-hover:border-white/75 transition-all duration-300"
              alt={item.name}
            />

            {hoveredIndex === idx && (
              <motion.div
                className="absolute -top-16 -translate-y-1 z-50 min-w-max"
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <div className="relative flex flex-col items-center justify-center">
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[20px] h-[20px] rotate-45 bg-white" />
                  <div className="relative z-10 bg-white backdrop-blur-sm px-4 py-2 rounded-md">
                    <p className="font-dmSans text-sm text-black font-semibold whitespace-nowrap">
                      {item.name}
                    </p>
                    <p className="font-dmSans text-xs text-black/60 whitespace-nowrap">
                      {item.designation}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      ))}
    </div>
  );
};