import { cn } from "@/lib/utils";

interface GradientBorderButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const GradientBorderButton = ({ children, className, ...props }: GradientBorderButtonProps) => {
  return (
    <button
      className={cn(
        "font-dmSans font-medium bg-[#0D0C13] rounded-md text-white px-6 py-2 relative",
        "before:w-full before:h-full before:scale-x-[1.02] before:scale-y-[1.05]  before:absolute before:top-[50%] before:left-[50%]",
        "before:-z-10 before:translate-x-[-50%] before:translate-y-[-50%] ",
        "before:from-[#A656F7] before:to-[#3C81F6] before:bg-gradient-to-r",
        "before:rounded-md",
        "transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default GradientBorderButton;
