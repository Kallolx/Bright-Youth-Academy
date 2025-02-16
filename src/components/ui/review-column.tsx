import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface ReviewColumnProps {
  reviews: string[];
  msPerPixel?: number;
  className?: string;
  reviewClassName?: (index: number) => string;
}

export const ReviewColumn = ({
  reviews,
  className = "",
  reviewClassName = () => "",
  msPerPixel = 10,
}: ReviewColumnProps) => {
  const columnRef = useRef<HTMLDivElement>(null);
  const columnHeight = useRef(0);
  const resetTransform = useRef(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (columnRef.current) {
        columnHeight.current = columnRef.current.offsetHeight;
      }
    });

    if (columnRef.current) {
      resizeObserver.observe(columnRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className={`relative h-full ${className}`}>
      <motion.div
        ref={columnRef}
        className="relative h-full"
        initial={{ y: 0 }}
        animate={{ y: [0, -columnHeight.current] }}
        transition={{
          duration: msPerPixel * 1000,
          repeat: Infinity,
          ease: "linear",
        }}
        onAnimationComplete={() => {
          resetTransform.current += 1;
          if (resetTransform.current >= 2) {
            resetTransform.current = 0;
          }
        }}
      >
        {reviews.map((review, reviewIndex) => (
          <div
            key={reviewIndex}
            className={`relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 ${reviewClassName(
              reviewIndex
            )}`}
          >
            <img
              src={review}
              alt={`Review ${reviewIndex + 1}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}; 