import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const features = [
  {
    title: "Holistic Curriculum",
    description: "Learn everything from HTML & CSS to React & Node.js",
    icon: "/icons/holi.svg"
  },
  {
    title: "Expert Mentorship",
    description: "Get guidance from industry professionals",
    icon: "/icons/expert.svg"
  },
  {
    title: "Project-Based Learning",
    description: "Build real-world projects for your portfolio",
    icon: "/icons/project.svg"
  }
];

interface CardProps {
  title: string;
  description: string;
  icon: string;
}

const Card = ({ title, description, icon }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full max-w-[350px] xs:max-w-[320px] sm:max-w-[350px] lg:max-w-[400px] h-[280px] xs:h-[300px] sm:h-[320px] lg:h-[350px]">

      <CardSpotlight className="h-full w-full rounded-2xl">
        <div
          className={cn(
            "relative h-full w-full rounded-xl p-4 xs:p-5 sm:p-6 lg:p-8",
            "flex flex-col items-center justify-center text-center",
            "transition-all group cursor-pointer",
            isHovered && ""
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >        
          {/* Centered Icon */}
          <div className="w-full flex justify-center mb-3 sm:mb-4">
            <img src={icon} alt={title} className="w-12 xs:w-14 sm:w-16 lg:w-20 h-12 xs:h-14 sm:h-16 lg:h-20 object-contain" />
          </div>
          {/* Centered Title */}
          <h3 className="font-geist text-lg xs:text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{title}</h3>
          {/* Centered Description */}
          <p className="font-dmSans text-xs xs:text-sm sm:text-base text-gray-400 max-w-[90%]">{description}</p>
        </div>
        <GlowingEffect
          blur={0}
          inactiveZone={0.5}
          proximity={0}
          spread={80}
          variant="default"
          glow={true}
          disabled={false}
          movementDuration={0.5}
          borderWidth={1}
          className="opacity-100 rounded-2xl"
          
        />
      </CardSpotlight>
    </div>
  );
};

export const Features = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 py-8 sm:py-12 lg:py-16 place-items-center max-w-[1200px] mx-auto">
      {features.map((feature, i) => (
        <Card key={i} {...feature} />
      ))}
    </div>
  );
};
