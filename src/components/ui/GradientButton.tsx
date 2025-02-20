"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shineColor?: string;
}

export const GradientButton = React.forwardRef<
  HTMLButtonElement,
  GradientButtonProps
>(
  (
    {
      className,
      children,
      shineColor = "rgba(255, 255, 255, 0.10)",
      onClick,
      ...props
    },
    ref
  ) => {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsAnimating(true);
      onClick?.(e);
      // Reset animation after it completes
      setTimeout(() => setIsAnimating(false), 1000);
    };

    return (
      <button
        ref={ref}
        onClick={handleClick}
        className={cn(
          "group relative overflow-hidden font-dmSans font-medium text-white rounded-md px-6 py-2",
          "transform transition-all duration-200",
          "active:scale-[0.98]",
          className
        )}
        {...props}
      >
        {/* Gradient Background */}
        <span className="absolute inset-0 bg-gradient-to-r from-[#A656F7] to-[#3C81F6]" />
        
        {/* Shine Effect */}
        <span 
          className={cn(
            "absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white to-transparent opacity-30",
            "transition-transform duration-1000 ease-out",
            isAnimating && "translate-x-[100%]"
          )}
        />

        {/* Button Content */}
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

GradientButton.displayName = "GradientButton";

export default GradientButton;

