import { cn } from "@/lib/utils";

interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
}

export const AuroraText = ({ children, className }: AuroraTextProps) => {
  return (
    <span className={cn("text-transparent bg-clip-text bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF]", className)}>
      {children}
    </span>
  );
}; 