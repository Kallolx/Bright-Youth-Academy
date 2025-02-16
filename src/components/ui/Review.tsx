import { StarIcon } from "@heroicons/react/20/solid";
import { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";


interface ReviewProps {
  title: string;
  body: string;
  author: string;
  role?: string;
  image?: string;
  rating: number;
  style?: CSSProperties;
  className?: string;
  onHover?: () => void;
  onLeave?: () => void;
}

export const Review = ({ 
  title, 
  body, 
  author, 
  role = "Student", 
  image = "/images/avatar-placeholder.png",
  rating, 
  style, 
  className,
}: ReviewProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className={cn(
        "relative flex flex-col gap-2 rounded-2xl border border-white/30 p-6 bg-[#1D1C29]/50 backdrop-blur-sm w-full group/card overflow-hidden",
        className
      )}
      style={style}
      onMouseMove={handleMouseMove}

    >
      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover/card:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(40, 22, 57, 0.15),
              transparent 80%
            )
          `
        }}
      />

      {/* Card content */}
      <div className="relative z-10">
        {/* Rating Stars */}
        <div className="flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <StarIcon key={i} className="h-5 w-5 text-[#A656F7]" />
          ))}
        </div>

        {/* Title with emoji */}
        <h3 className="text-lg font-medium text-white font-dmSans mt-2">
          {title} ✨
        </h3>

        {/* Review body with emoji */}
        <p className="text-sm text-gray-400 font-dmSans mt-2">
          {body} 🚀
        </p>

        {/* Author info with image */}
        <div className="mt-4 flex items-center gap-3">
          <img 
            src={image} 
            alt={author}
            className="w-10 h-10 rounded-full object-cover border-2 border-[#A656F7]/50 hover:border-[#A656F7] transition-colors"
          />
          <div>
            <p className="text-sm font-medium text-[#A656F7] font-dmSans">
              {author} 👋
            </p>
            <p className="text-xs text-gray-500 font-dmSans">
              {role} 💫
            </p>
          </div>
        </div>
      </div>

      {/* Border gradient effect */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(45deg, rgba(168, 85, 247, 0.15), rgba(60, 129, 246, 0.15))",
          maskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          maskComposite: "exclude",
          WebkitMaskComposite: "destination-out",
          padding: "1px",
          pointerEvents: "none"
        }}
      />
    </motion.div>
  );
}; 