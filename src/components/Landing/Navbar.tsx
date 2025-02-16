import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import GradientBorderButton from "../ui/GradientBorderButton";
import GradientButton from "../ui/GradientButton";
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
        <div className="text-[18px] hidden md:flex items-center space-x-8">
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
          <GradientBorderButton>
            Login
          </GradientBorderButton>
          <GradientButton>
            Signup
          </GradientButton>
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
            <div className="flex flex-row justify-center gap-3 pt-3 border-t border-white/10">
              <button className="flex-1 bg-white text-black rounded-md px-4 py-2">
                Login
              </button>
              <button className="flex-1 bg-gradient-to-r from-[#A656F7] to-[#3C81F6] text-white rounded-md px-4 py-2">
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
