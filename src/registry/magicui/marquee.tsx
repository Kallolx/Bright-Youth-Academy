import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  fade?: boolean;
  children?: React.ReactNode;
}

export const Marquee = ({
  className,
  reverse,
  pauseOnHover = false,
  vertical = false,
  fade = false,
  children,
}: MarqueeProps) => {
  const [start, setStart] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && containerRef.current) {
      const containerHeight = containerRef.current.offsetHeight;
      const contentHeight = contentRef.current.offsetHeight;
      setShouldAnimate(contentHeight > containerHeight);
    }
    setStart(true);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      {fade && (
        <>
          <div className={cn(
            "pointer-events-none absolute z-10",
            vertical 
              ? "inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0D0C13] via-[#0D0C13]/80 to-transparent" 
              : "inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0D0C13]"
          )} />
          <div className={cn(
            "pointer-events-none absolute z-10",
            vertical 
              ? "inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0D0C13] via-[#0D0C13]/80 to-transparent" 
              : "inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0D0C13]"
          )} />
        </>
      )}
      <div
        className={cn(
          "group flex h-full overflow-hidden [--gap:1rem]",
          vertical ? "flex-col" : "flex-row",
          className
        )}
        style={{
          maskImage: fade
            ? vertical
              ? "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)"
              : "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
            : undefined,
        }}
      >
        <div
          ref={contentRef}
          className={cn(
            "flex shrink-0 gap-[--gap]",
            vertical ? "flex-col" : "flex-row",
            shouldAnimate && start && vertical && "animate-[marquee-vertical_var(--duration)_linear_infinite]",
            shouldAnimate && start && !vertical && "animate-[marquee_var(--duration)_linear_infinite]",
            reverse && "[animation-direction:reverse]",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
        >
          {children}
        </div>
        <div
          aria-hidden="true"
          className={cn(
            "flex shrink-0 gap-[--gap]",
            vertical ? "flex-col" : "flex-row",
            shouldAnimate && start && vertical && "animate-[marquee-vertical_var(--duration)_linear_infinite]",
            shouldAnimate && start && !vertical && "animate-[marquee_var(--duration)_linear_infinite]",
            reverse && "[animation-direction:reverse]",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
