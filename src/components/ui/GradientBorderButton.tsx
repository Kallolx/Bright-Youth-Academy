import { cn } from "@/lib/utils";

interface GradientBorderButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  btnClassName?: string;
}

export const GradientBorderButton = ({ children, className, btnClassName, ...props }: GradientBorderButtonProps) => {
  return (
    <button
      className={cn(
        "font-dmSans font-medium text-white p-[1px] relative rounded-md from-[#A656F7] to-[#3C81F6] bg-gradient-to-r",
        btnClassName
      )}
      {...props}
    >
      <span className={cn(
        "inline-block bg-[#0D0C13] px-6 py-2 rounded-md",
        className 
      )}>
      {children}
      </span>     
    </button>
  );
};

export default GradientBorderButton;
