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
    <div className="h-[320px] w-[400px]">
      <CardSpotlight className="h-full w-full">
        <div
          className={cn(
            "relative h-full w-full rounded-xl p-8",
            "flex flex-col items-center justify-center text-center",
            "transition-all group ",
            isHovered && ""
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >        
          {/* Centered Icon */}
          <div className="w-full flex justify-center mb-4">
            <img src={icon} alt={title} className="w-20 h-20 object-contain" />
          </div>
          {/* Centered Title */}
          <h3 className="font-dmSans text-2xl font-bold text-white mb-3">{title}</h3>
          {/* Centered Description */}
          <p className="font-dmSans text-md text-gray-400">{description}</p>
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
            className="opacity-100"
          />
      </CardSpotlight>
      
    </div>
  );
};

export const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20 place-items-center">
      {features.map((feature, i) => (
        <Card key={i} {...feature} />
      ))}
    </div>
  );
};
