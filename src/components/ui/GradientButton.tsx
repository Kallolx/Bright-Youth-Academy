import { cn } from "@/lib/utils";

interface GradientBorderButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const GradientBorderButton = ({ children, className, ...props }: GradientBorderButtonProps) => {
  return (
    <button
      className={cn(
        "font-dmSans font-medium flex-1 bg-gradient-to-r from-[#A656F7] to-[#3C81F6] text-white rounded-md px-6 py-2",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default GradientBorderButton;