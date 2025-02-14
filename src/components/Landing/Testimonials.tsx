"use client";
import { motion } from "framer-motion";
import { Marquee } from "../../registry/magicui/marquee";
import { useMemo } from "react";
import React from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

// Helper function to get a random social media icon
const getRandomSocialIcon = () => {
  const allIcons = [
    { icon: "/icons/facebook.png", alt: "Facebook" },
    { icon: "/icons/twitter.png", alt: "Twitter" },
    { icon: "/icons/instagram.png", alt: "Instagram" },
    { icon: "/icons/linkedin.png", alt: "LinkedIn" }
  ];
  
  const randomIndex = Math.floor(Math.random() * allIcons.length);
  return allIcons[randomIndex];
};

const testimonials: Testimonial[][] = [
  [
    {
      id: 1,
      name: "Jane Cooper ✨",
      role: "Product Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      content:
        "🚀 The AI revolution is here, and I'm all for it!\n\nThis tool has transformed my design workflow completely. What used to take hours now takes minutes.\n\nIt's like having a brilliant assistant who never sleeps! 💡",
    },
    {
      id: 2,
      name: "Wade Warren",
      role: "UX Researcher 🔍",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      content:
        "🎯 As a researcher, data analysis was always time-consuming.\n\nNow, with this AI, I can process user feedback in seconds! My team's productivity has increased by 300% since we started using it.\n\nThe results speak for themselves! 📊",
    },
    {
      id: 3,
      name: "Esther Howard 🌟",
      role: "Senior Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      content:
        "💫 Whether I'm brainstorming new concepts or refining existing designs, this AI tool has become my go-to companion.\n\nIt's like having a creative partner who's always ready to collaborate!\n\nThe possibilities are truly endless with this technology. ✨",
    },
  ],
  [
    {
      id: 4,
      name: "Theresa Webb",
      role: "Design Lead 👑",
      image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f",
      content:
        "🎨 Leading a design team requires constant innovation and efficiency.\n\nThis AI tool has revolutionized our entire design process!\n\n✨ Team collaboration has improved significantly, and our design iterations are faster than ever. The best part? Everyone on the team loves using it! 🚀",
    },
    {
      id: 5,
      name: "Darrell Steward 🔥",
      role: "Product Designer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      content:
        "💪 Game-changer alert!\n\nThis AI doesn't just save time; it pushes my creative boundaries.\n\nEvery day, I discover new ways to leverage its capabilities. It's become an essential part of my design toolkit! 🛠️",
    },
    {
      id: 6,
      name: "Jacob Jones",
      role: "UI Engineer 💻",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      content:
        "🌈 The intersection of design and engineering has never been smoother!\n\nThis AI helps me translate design concepts into code with unprecedented accuracy.\n\n🎉 The best investment our team has made this year, hands down!",
    },
  ],
  [
    {
      id: 7,
      name: "Dianne Russell ⭐",
      role: "Product Designer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      content:
        "✨ From wireframes to high-fidelity prototypes, this AI has transformed every aspect of my design process.\n\nThe way it understands context and provides relevant suggestions is mind-blowing!\n\n💫 It's like having a design mentor available 24/7!",
    },
    {
      id: 8,
      name: "Jerome Bell",
      role: "Design System Lead 🎨",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
      content:
        "🏗️ Managing a design system used to be overwhelming.\n\nNow, with this AI, maintaining consistency across hundreds of components is a breeze!\n\n🌟 The automation capabilities have saved our team countless hours of manual work. Simply incredible! ✨",
    },
    {
      id: 9,
      name: "Annette Black 💫",
      role: "Product Designer",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      content:
        "🎉 This AI tool is a game-changer!\n\nIt's not just about speed – it's about the quality of work it enables me to produce.\n\n✨ I feel like I'm designing at the speed of thought!",
    },
  ],
];

const TestimonialCard = React.memo(({ name, role, content, image }: Testimonial) => {
  const socialIcon = useMemo(() => getRandomSocialIcon(), []);
  const contentLines = content.split('\n\n');
  const mobileContent = contentLines[0] + (contentLines[1] ? '\n\n' + contentLines[1] : '');

  return (
    <figure className="relative w-full shrink-0 overflow-hidden rounded-lg border border-white/5 bg-[#303640]/50 p-3 sm:p-4 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src={image}
            alt={name}
            className="h-7 w-7 sm:h-8 sm:w-8 rounded-full object-cover border border-white/5"
            loading="lazy"
          />
          <div className="flex flex-col">
            <figcaption className="text-xs sm:text-sm font-medium text-white/90 font-dmSans">
              {name}
            </figcaption>
            <p className="text-[10px] sm:text-xs text-white font-dmSans">{role}</p>
          </div>
        </div>
        <img
          src={socialIcon.icon}
          alt={socialIcon.alt}
          className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:opacity-75 transition-opacity"
        />
      </div>
      <blockquote className="text-xs sm:text-sm text-white/80 font-dmSans leading-relaxed">
        <span className="sm:hidden">{mobileContent}</span>
        <span className="hidden sm:block">{content}</span>
      </blockquote>
    </figure>
  );
});

TestimonialCard.displayName = "TestimonialCard";

export default function Testimonials() {
  const testimonialColumns = useMemo(() => [
    [...testimonials[0], ...testimonials[0]],
    [...testimonials[1], ...testimonials[1]],
    [...testimonials[2], ...testimonials[2]]
  ], []);

  return (
    <section className="min-h-screen bg-[#0D0C13] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        {/* Left circle gradient */}
        <div className="fixed left-0 top-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[radial-gradient(circle_at_center,_#B133FF_0%,_transparent_70%)] opacity-30 blur-[100px]" />
        
        {/* Right circle gradient */}
        <div className="fixed right-0 top-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[radial-gradient(circle_at_center,_#EF0BFD_0%,_transparent_70%)] opacity-30 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-dmSans mb-3 sm:mb-4 px-4">
            Loved by people all over the universe
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg font-dmSans px-4">
            Every AI is used by millions of people around the globe.
            <br className="hidden sm:block" />
            Our APIs have fan bases and people fight for us over twitter.
          </p>
        </motion.div>

        {/* Testimonials Marquee */}
        <div className="relative flex flex-col sm:flex-row h-[500px] sm:h-[500px] lg:h-[640px] items-center justify-center gap-4 sm:gap-4 lg:gap-6">
          {/* First Column */}
          <div className="w-[300px] sm:w-[320px] lg:w-[350px] h-full">
            <Marquee 
              vertical 
              pauseOnHover 
              className="[--duration:40s] h-full will-change-transform" 
              fade
            >
              {testimonialColumns[0].map((testimonial, idx) => (
                <div key={`${testimonial.id}-${idx}`} className="mb-8 will-change-transform">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </Marquee>
          </div>

          {/* Middle Column - Slower Speed */}
          <div className="hidden sm:block w-[300px] sm:w-[320px] lg:w-[350px] h-full">
            <Marquee 
              vertical 
              pauseOnHover 
              className="[--duration:60s] h-full will-change-transform" 
              fade
            >
              {testimonialColumns[1].map((testimonial, idx) => (
                <div key={`${testimonial.id}-${idx}`} className="mb-8 will-change-transform">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </Marquee>
          </div>

          {/* Last Column */}
          <div className="hidden sm:block w-[300px] sm:w-[320px] lg:w-[350px] h-full">
            <Marquee 
              vertical 
              pauseOnHover 
              className="[--duration:45s] h-full will-change-transform" 
              fade
            >
              {testimonialColumns[2].map((testimonial, idx) => (
                <div key={`${testimonial.id}-${idx}`} className="mb-8 will-change-transform">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
