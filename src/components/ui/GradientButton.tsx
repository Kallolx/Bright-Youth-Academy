import { cn } from "@/lib/utils";
import React from "react";

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export const GradientButton = React.forwardRef<
  HTMLButtonElement,
  GradientButtonProps
>(
  (
    {
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative overflow-hidden font-dmSans font-medium text-white rounded-md px-6 py-2",
          "transform transition-all duration-200",
          "bg-gradient-to-r from-[#A656F7] to-[#3C81F6]",
          "active:scale-[0.98]",
          className
        )}
        {...props}
      >
        {/* Button Content */}
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

GradientButton.displayName = "GradientButton";

export default GradientButton;

