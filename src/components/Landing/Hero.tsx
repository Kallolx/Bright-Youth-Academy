import { motion } from 'framer-motion';
import { WordRotate } from "@/registry/magicui/word-rotate";
import CourseCard from '../ui/CourseCard';
import { CardStack } from '../ui/CardStack';
import MentorAvatar from '../ui/MentorAvatar';
import { Background } from '../ui/backgrounGrid';
import { cn } from '@/lib/utils';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const GradientButton: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "h-10 md:h-12 px-6 py-3 inline-flex items-center justify-center bg-gradient-to-r from-[#A656F7] to-[#3C81F6] font-medium text-white rounded-lg text-sm md:text-base",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const slideFromRight = {
  hidden: { x: 50, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Hero = () => {
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect for hero content
    const ctx = gsap.context(() => {
      gsap.to(heroContentRef.current, {
        scrollTrigger: {
          trigger: heroContentRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5
        },
        y: -50
      });
    });

    return () => ctx.revert();
  }, []);

  const mentors = [
    {
      image: "/images/mentors/1.png",
      name: "Rejown Jisahan",
      role: "Software Engineer"
    },
    {
      image: "/images/mentors/2.png",
      name: "David Mitchell",
      role: "Senior Developer"
    },
    {
      image: "/images/mentors/3.png",
      name: "Sarah Anderson",
      role: "UI/UX Designer"
    },
    {
      image: "/images/mentors/4.png",
      name: "Emma Wilson",
      role: "Product Designer"
    },
    {
      image: "/images/mentors/5.png",
      name: "Michael Brown",
      role: "Full Stack Developer"
    }
  ];

  const rotatingWords = [
    { text: "Skills", gradient: "from-[#FF3BFF] to-[#5C24FF]" },
    { text: "Future", gradient: "from-[#A656F7] to-[#3C81F6]" },
    { text: "Career", gradient: "from-[#FC00FF] to-[#00DBDE]" },
    { text: "Dreams", gradient: "from-[#FF3CAC] to-[#784BA0]" },
  ];

  const courseCards = [
    <CourseCard
      key="1"
      image="/images/card1.png"
      title="The Ultimate Front End Development Career - Batch 01"
      lessons={32}
      projects={10}
      students={150}
      rating="4.8"
      ratingCount="1.2k"
      mentors={mentors.map(m => m.image)}
    />,
    <CourseCard
      key="2"
      image="/images/card2.png"
      title="Advanced React & Node.js Full Stack Development"
      lessons={45}
      projects={15}
      students={200}
      rating="4.9"
      ratingCount="2.1k"
      mentors={mentors.map(m => m.image)}
    />,
    <CourseCard
      key="3"
      image="/images/card3.png"
      title="UI/UX Design Mastery: From Beginner to Professional"
      lessons={28}
      projects={12}
      students={180}
      rating="4.7"
      ratingCount="980"
      mentors={mentors.map(m => m.image)}
    />
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background Grid - Limited to hero height */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute inset-0 h-screen overflow-hidden"
      >
        <Background />
      </motion.div>
      
      {/* Background gradient */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute inset-0 z-[1] h-screen overflow-hidden"
      >
        {/* Left circle gradient */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="absolute -left-[50%] sm:-left-[30%] top-1/20 -translate-y-1/2 w-[600px] sm:w-[1000px] h-[600px] sm:h-[1000px] bg-[radial-gradient(circle_at_center,_#B133FF_0%,_transparent_70%)] blur-[80px]" 
        />
        
        {/* Right circle gradient */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute -right-[50%] sm:-right-[30%] top-1/20 -translate-y-1/2 w-[600px] sm:w-[1000px] h-[600px] sm:h-[1000px] bg-[radial-gradient(circle_at_center,_#EF0BFD_0%,_transparent_70%)] blur-[80px]" 
        />
      </motion.div>
      
      {/* Content Container */}
      <div className="relative z-[2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-20 lg:pt-24">
          {/* Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-20 items-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)]">
            {/* Left content */}
            <motion.div
              ref={heroContentRef}
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 text-center lg:text-left"
            >
              <motion.div
                variants={item}
                className="space-y-2 sm:space-y-3 md:space-y-4"
              >
                <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold text-white font-dmSans leading-[1.2] sm:leading-[1.15]">
                  <motion.span
                    variants={item}
                    className="inline-block"
                  >
                    Grow Your
                  </motion.span>
                  {" "}
                  <WordRotate
                    words={rotatingWords.map(w => w.text)}
                    gradients={rotatingWords.map(w => w.gradient)}
                    duration={3000}
                    className="text-transparent bg-clip-text bg-gradient-to-r font-bold inline-block min-h-[1.2em] sm:min-h-0"
                    motionProps={{
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -20 },
                      transition: { duration: 0.5, ease: "easeOut" },
                    }}
                  />
                  {" "}
                  <br className="block sm:hidden my-1" />
                  <motion.span
                    variants={item}
                    className="block sm:inline"
                  >
                    For a Better Career
                  </motion.span>
                </h1>
                <motion.p
                  variants={item}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 font-dmSans max-w-xl sm:max-w-2xl mx-auto lg:mx-0"
                >
                  Master In-Demand Skills, Unlock Limitless Opportunities
                  <br className="hidden sm:block" />& Create the Career of Your Dreams!
                </motion.p>
              </motion.div>

              <motion.div
                variants={item}
                className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4"
              >
                <div className="flex -space-x-2">
                  {mentors.map((mentor, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                    >
                      <MentorAvatar
                        src={mentor.image}
                        name={mentor.name}
                        role={mentor.role}
                      />
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  variants={item}
                >
                  <p className="font-dmSans text-white font-bold text-sm sm:text-base md:text-lg">20+</p>
                  <p className="font-dmSans text-gray-400 text-xs sm:text-sm">Expert mentor</p>
                </motion.div>
              </motion.div>

              <motion.div
                variants={item}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6"
              >
                <GradientButton className="w-full sm:w-auto h-11 sm:h-12">
                  Explore Our Courses
                </GradientButton>
                <button
                  className="relative inline-flex h-11 sm:h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full sm:w-auto"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#0D0C13] px-6 py-3 text-sm sm:text-base font-medium text-white backdrop-blur-3xl">
                    Explore Our Courses
                  </span>
                </button>
              </motion.div>
            </motion.div>

            {/* Right content - Course Cards Stack */}
            <motion.div
              variants={slideFromRight}
              initial="hidden"
              animate="show"
              className="hidden md:flex h-[450px] lg:h-[500px] xl:h-[600px] relative pt-4 sm:pt-6 lg:pt-8 justify-center"
            >
              <div className="w-full">
                <CardStack items={courseCards} interval={6000} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 