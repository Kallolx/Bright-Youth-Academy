import { cn } from "@/lib/utils";

interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
}

export const AuroraText = ({ children, className }: AuroraTextProps) => {
  return (
    <span className={cn(" text-transparent bg-clip-text bg-gradient-to-r from-[#A656F7] to-[#3C81F6]", className)}>
      {children}
    </span>
  );
}; 
