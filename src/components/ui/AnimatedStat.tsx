import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { useState } from "react";

interface AnimatedStatProps {
  children: React.ReactNode;
  icon: string;
  iconAlt?: string;
  className?: string;
}

const BorderGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

export const AnimatedStat = ({
  children,
  icon,
  iconAlt,
  className,
}: AnimatedStatProps) => {
  const radius = 100;
  const [visible, setVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className="relative group/btn">
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
              rgba(59, 61, 212, 0.15),
              transparent 80%
            )
          `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-sm transition duration-300"
      >
        <div
          className={cn(
            "relative flex items-center gap-2 text-white bg-[#1D1C29] px-5 py-2 rounded-sm transition duration-300",
            className
          )}
        >
          <img src={icon} alt={iconAlt} className="w-4 h-4" />
          <span className="text-sm font-dmSans">
          {children} 
          </span>
        </div>
      </motion.div>
      <BorderGradient />
    </div>
  );
};

export default AnimatedStat;
