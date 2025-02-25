"use client";

import { useRef, useState } from "react";
import { Review } from "@/components/ui/Review";
import { splitArray } from "@/lib/utils";
import { motion } from "framer-motion";
import { Background } from '../ui/backgrounGrid';

const reviews = [
  {
    title: "It really works",
    body: "I downloaded Pocket today and turned $5000 into $25,000 in half an hour.",
    author: "Sarah Johnson",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&crop=face",
    rating: 5,
  },
  {
    title: "You need this app",
    body: "I didn't understand the stock market at all before Pocket. I still don't, but at least I'm rich now.",
    author: "Michael Chen",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&crop=face",
    rating: 5,
  },
  {
    title: "Life changing app",
    body: "Pocket makes it so easy to win big in the stock market that I can't believe it's actually legal.",
    author: "Emily Rodriguez",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop&crop=face",
    rating: 5,
  },
  {
    title: "Better than expected",
    body: "I barely made any money investing in mutual funds. With Pocket, I'm doubling my net-worth every single month.",
    author: "David Kim",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop&crop=face",
    rating: 5,
  },
  {
    title: "Simply amazing",
    body: "Started using this app last month, and I've already seen incredible results. The interface is intuitive and the features are powerful.",
    author: "Lisa Wang",
    role: "Data Scientist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&auto=format&fit=crop&crop=face",
    rating: 5,
  },
  {
    title: "Game changer",
    body: "This platform has completely transformed how I approach learning. The community support is incredible.",
    author: "James Wilson",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&auto=format&fit=crop&crop=face",
    rating: 5,
  },
  {
    title: "Exceeded expectations",
    body: "The quality of content and the learning experience is unmatched. Highly recommend to anyone serious about their career.",
    author: "Anna Martinez",
    role: "Mobile Developer",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&auto=format&fit=crop&crop=face",
    rating: 5,
  },
  {
    title: "Worth every penny",
    body: "The return on investment has been incredible. Not just in terms of skills, but also career opportunities.",
    author: "Tom Anderson",
    role: "DevOps Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop&crop=face",
    rating: 5,
  },
  {
    title: "Outstanding platform",
    body: "The mentorship and guidance provided here is world-class. It's like having a personal career coach.",
    author: "Rachel Lee",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&auto=format&fit=crop&crop=face",
    rating: 5,
  },
  {
    title: "It really works",
    body: "I downloaded Pocket today and turned $5000 into $25,000 in half an hour.",
    author: "Sarah Johnson",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&crop=face",
    rating: 5,
  },
  {
    title: "You need this app",
    body: "I didn't understand the stock market at all before Pocket. I still don't, but at least I'm rich now.",
    author: "Michael Chen",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&crop=face",
    rating: 5,
  },
  {
    title: "Life changing app",
    body: "Pocket makes it so easy to win big in the stock market that I can't believe it's actually legal.",
    author: "Emily Rodriguez",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop&crop=face",
    rating: 5,
  },
  {
    title: "Better than expected",
    body: "I barely made any money investing in mutual funds. With Pocket, I'm doubling my net-worth every single month.",
    author: "David Kim",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop&crop=face",
    rating: 5,
  },
  {
    title: "Simply amazing",
    body: "Started using this app last month, and I've already seen incredible results. The interface is intuitive and the features are powerful.",
    author: "Lisa Wang",
    role: "Data Scientist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&auto=format&fit=crop&crop=face",
    rating: 5,
  },
  {
    title: "Game changer",
    body: "This platform has completely transformed how I approach learning. The community support is incredible.",
    author: "James Wilson",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&auto=format&fit=crop&crop=face",
    rating: 5,
  },
  {
    title: "Exceeded expectations",
    body: "The quality of content and the learning experience is unmatched. Highly recommend to anyone serious about their career.",
    author: "Anna Martinez",
    role: "Mobile Developer",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&auto=format&fit=crop&crop=face",
    rating: 5,
  },
  {
    title: "Worth every penny",
    body: "The return on investment has been incredible. Not just in terms of skills, but also career opportunities.",
    author: "Tom Anderson",
    role: "DevOps Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop&crop=face",
    rating: 5,
  },
  {
    title: "Outstanding platform",
    body: "The mentorship and guidance provided here is world-class. It's like having a personal career coach.",
    author: "Rachel Lee",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&auto=format&fit=crop&crop=face",
    rating: 5,
  },
];

// Increase the duration significantly for slower animation
const MARQUEE_DURATION = 120; // 120 seconds for a very slow scroll

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [pausedColumns, setPausedColumns] = useState<number[]>([]);

  // Split reviews into 3 columns with different speeds
  const reviewColumns = splitArray(reviews, 3);

  const handlePauseColumn = (columnIndex: number) => {
    if (!pausedColumns.includes(columnIndex)) {
      setPausedColumns([...pausedColumns, columnIndex]);
    }
  };

  const handleResumeColumn = (columnIndex: number) => {
    setPausedColumns(pausedColumns.filter(col => col !== columnIndex));
  };

  // Create a continuous array by repeating reviews 2 times (reduced from 4 for optimization)
  const createContinuousArray = (arr: typeof reviews) => {
    return [...arr, ...arr];
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-[#0D0C13] via-[#0D0C13] to-[#0D0C13]"
    >
      {/* Blending overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D0C13]/80 to-transparent" />

      {/* Background Grid with reduced opacity */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <Background />
      </div>

      {/* Background gradients with adjusted positions and opacity */}
      <div className="absolute inset-0 z-[1]">
        {/* Left circle gradient */}
        <div className="absolute left-0 top-1/4 -translate-y-1/2 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-[radial-gradient(circle_at_center,_#B133FF_0%,_transparent_70%)] opacity-15 blur-[130px]" />
        
        {/* Right circle gradient */}
        <div className="absolute right-0 top-1/3 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-[radial-gradient(circle_at_center,_#EF0BFD_0%,_transparent_70%)] opacity-15 blur-[130px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white  mb-4">
            Students' Feedback 💬
          </h2>
          <p className="text-gray-400 text-base sm:text-lg  max-w-2xl mx-auto">
            We value the opinions of our beloved students. They are our motivation to keep improving and delivering value 🌟
          </p>
        </div>

        {/* Review Grid with Marquee Columns */}
        <div
          ref={containerRef}
          className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 md:grid-cols-3 items-start gap-8 overflow-hidden px-4 sm:mt-20"
        >
          {reviewColumns.map((columnReviews, columnIndex) => (
            <motion.div 
              key={columnIndex}
              initial={{ 
                opacity: 0, 
                x: columnIndex === 1 ? 0 : columnIndex === 0 ? 100 : -100,
                y: columnIndex === 1 ? 50 : 0
              }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: columnIndex === 1 ? 50 : 0
              }}
              transition={{
                duration: 0.8,
                delay: columnIndex * 0.2,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative h-full overflow-hidden"
              style={{ 
                '--duration': `${MARQUEE_DURATION + columnIndex * 20}s`,
                maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
              } as any}
            >
              <div 
                className="flex flex-col gap-6 animate-marquee-vertical"
                style={{
                  animationPlayState: pausedColumns.includes(columnIndex) ? 'paused' : 'running',
                  animationDuration: `${MARQUEE_DURATION + columnIndex * 20}s`,
                  animationDelay: `${columnIndex * 0.5}s`
                }}
              >
                {createContinuousArray(columnReviews).map((review, reviewIndex) => (
                  <Review
                    key={reviewIndex}
                    {...review}
                    className={`transform ${columnIndex === 1 ? 'translate-y-[50%]' : ''}`}
                    onHover={() => handlePauseColumn(columnIndex)}
                    onLeave={() => handleResumeColumn(columnIndex)}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 