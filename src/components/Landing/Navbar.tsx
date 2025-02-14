import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const BorderButton: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "relative inline-flex h-8 md:h-10 w-20 md:w-24 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        className
      )}
      {...props}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black px-4 md:px-8 py-2 text-sm md:text-base font-medium text-white backdrop-blur-3xl">
        {children}
      </span>
    </button>
  );
};

const GradientButton: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "h-8 md:h-10 w-20 md:w-24 inline-flex items-center justify-center bg-gradient-to-r from-[#A656F7] to-[#3C81F6] px-4 md:px-6 py-2 font-medium text-white rounded-lg text-sm md:text-base",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 px-4 md:px-6 py-3 md:py-4",
        scrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Title Section */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <img
            src="/images/logo.svg"
            alt="Logo"
            className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover"
          />
          <div>
            <h1 className="text-white font-bold text-lg md:text-xl font-dmSans">
              Bright Youth Academy
            </h1>
            <p className="text-gray-300 text-xs md:text-sm font-dmSans">
              Be Yourself & Find Peace
            </p>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-white hover:text-purple-400 transition-colors font-dmSans"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-purple-400 transition-colors font-dmSans"
          >
            About
          </a>
          <a
            href="#"
            className="text-white hover:text-purple-400 transition-colors font-dmSans"
          >
            Course
          </a>
          <a
            href="#"
            className="text-white hover:text-purple-400 transition-colors font-dmSans"
          >
            Testimonials
          </a>
        </div>

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <BorderButton>Login</BorderButton>
          <GradientButton>Signup</GradientButton>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm transition-all duration-300 md:hidden",
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <div className="px-4 py-4 space-y-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#"
                className="text-white hover:text-purple-400 transition-colors font-dmSans"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover:text-purple-400 transition-colors font-dmSans"
              >
                About
              </a>
              <a
                href="#"
                className="text-white hover:text-purple-400 transition-colors font-dmSans"
              >
                Course
              </a>
              <a
                href="#"
                className="text-white hover:text-purple-400 transition-colors font-dmSans"
              >
                Testimonials
              </a>
            </div>
            <div className="flex flex-col space-y-3 pt-3 border-t border-white/10">
              <BorderButton className="w-full">Login</BorderButton>
              <GradientButton className="w-full">Signup</GradientButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
