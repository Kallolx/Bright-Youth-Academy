import { cn } from "@/lib/utils";
import React from "react";

interface BackgroundGradientProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full rounded-xl p-6 border",
        className
      )}
      {...props}
    >
      <div className="absolute -inset-px bg-gradient-to-r from-[#EF0BFD] to-[#B133FF] bg-opacity-70 rounded-xl opacity-0 group-hover/card:opacity-100 blur transition duration-1000 group-hover:duration-200" />
      <div className="relative">{children}</div>
    </div>
  );
};
