"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useId } from "react";

export const Background = () => {
  return (
    <div className="absolute inset-0 h-screen w-full pointer-events-none opacity-50">
      <div className="absolute inset-0 h-full w-full bg-transparent pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="absolute inset-0 h-full w-full">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="flex" key={"grid-column" + index}>
            {Array.from({ length: 8 }).map((_, index) => (
              <GridBlock key={`grid-row` + index} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const GridBlock = () => {
  return (
    <div className="flex flex-col items-start justify-center w-32 sm:w-56">
      <div className="flex items-center justify-center">
        <Dot />
        <SVG />
      </div>
      <SVGVertical className="ml-2" />
    </div>
  );
};

const Dot = () => {
  return (
    <div className="-mr-2 h-4 w-4 border border-gray-800 border-opacity-95 flex items-center justify-center rounded-full">
      <div className="h-1 w-1 bg-purple-500/30 dark:bg-purple-400/30 rounded-full" />
    </div>
  );
};

const SVGVertical = ({ className }: { className?: string }) => {
  const width = 1;
  const height = 100;

  const id = useId();
  return (
    <motion.svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-purple-500/10 dark:text-purple-400/10", className)}
    >
      <path d="M0.5 0.5V479" stroke="currentColor" strokeWidth={1} />
      <motion.path
        d="M0.5 0.5V479"
        stroke={`url(#gradient-${id})`}
        strokeWidth={1}
      />

      <defs>
        <motion.linearGradient
          id={`gradient-${id}`}
          initial={{ x1: 2, y1: -200, x2: 2, y2: -100 }}
          animate={{ x1: 2, y1: 400, x2: 2, y2: 600 }}
          transition={{
            repeat: Infinity,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2,
          }}
          gradientUnits="userSpaceOnUse"
        >
          <motion.stop offset="0%" stopColor="transparent" />
          <motion.stop offset="50%" stopColor="rgba(168, 85, 247, 0.4)" />
          <motion.stop offset="100%" stopColor="transparent" />
        </motion.linearGradient>
      </defs>
    </motion.svg>
  );
};

const SVG = ({ className }: { className?: string }) => {
  const width = 200;
  const height = 1;

  const id = useId();
  return (
    <motion.svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-purple-500/10 dark:text-purple-400/10", className)}
    >
      <path d="M0.5 0.5H479" stroke="currentColor" strokeWidth={1} />
      <motion.path
        d="M0.5 0.5H479"
        stroke={`url(#gradient-${id})`}
        strokeWidth={1}
      />

      <defs>
        <motion.linearGradient
          id={`gradient-${id}`}
          initial={{ x1: -200, y1: 0, x2: -100, y2: 0 }}
          animate={{ x1: 400, y1: 0, x2: 600, y2: 0 }}
          transition={{
            repeat: Infinity,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2,
          }}
          gradientUnits="userSpaceOnUse"
        >
          <motion.stop offset="0%" stopColor="transparent" />
          <motion.stop offset="50%" stopColor="rgba(168, 85, 247, 0.4)" />
          <motion.stop offset="100%" stopColor="transparent" />
        </motion.linearGradient>
      </defs>
    </motion.svg>
  );
};
