import { motion } from 'framer-motion';
import { WordRotate } from "@/registry/magicui/word-rotate";
import CourseCard from '../ui/CourseCard';
import { CardStack } from '../ui/CardStack';
import MentorAvatar from '../ui/MentorAvatar';
import { Features } from './Features';
import { Courses } from './Courses';
import Testimonials from './Testimonials';
import { cn } from '@/lib/utils';
import { HoverBorderGradient } from '../ui/hover-border-gradient';
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

const Hero = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const coursesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create scroll-triggered animations
    const ctx = gsap.context(() => {
      // Animate features section
      gsap.from(featuresRef.current, {
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top bottom-=100",
          end: "top center",
          scrub: 0.5,
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0.3,
        duration: 1
      });

      // Animate courses section
      gsap.from(coursesRef.current, {
        scrollTrigger: {
          trigger: coursesRef.current,
          start: "top bottom-=100",
          end: "top center",
          scrub: 0.5,
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0.3,
        duration: 1
      });

      // Animate testimonials section
      gsap.from(testimonialsRef.current, {
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top bottom-=100",
          end: "top center",
          scrub: 0.5,
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0.3,
        duration: 1
      });

      // Parallax effect for hero content
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
    { text: "Skill", gradient: "from-[#FF3BFF] to-[#5C24FF]" },
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
    <div className="relative min-h-screen bg-[#0D0C13] overflow-x-hidden">
      <div className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0">
          {/* Left circle gradient */}
          <div className="absolute left-0 top-[15%] -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_#B133FF_0%,_transparent_70%)] opacity-30 blur-[100px]" />
          
          {/* Right circle gradient */}
          <div className="absolute right-0 top-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_#EF0BFD_0%,_transparent_70%)] opacity-30 blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left content */}
            <div ref={heroContentRef} className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold text-white font-dmSans leading-tight">
                  Grow Your{" "}
                  <WordRotate
                    words={rotatingWords.map(w => w.text)}
                    gradients={rotatingWords.map(w => w.gradient)}
                    duration={3000}
                    className="text-transparent bg-clip-text bg-gradient-to-r font-bold"
                    motionProps={{
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -20 },
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                  />
                  <br />
                  For a Better Career
                </h1>
                <p className="text-gray-400 mt-6 text-lg font-dmSans">
                  Master In-Demand Skills, Unlock Limitless Opportunities
                  <br />& Create the Career of Your Dreams!
                </p>
              </motion.div>

              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {mentors.map((mentor, i) => (
                    <MentorAvatar
                      key={i}
                      src={mentor.image}
                      name={mentor.name}
                      role={mentor.role}
                    />
                  ))}
                </div>
                <div>
                  <p className="font-dmSans text-white font-bold">20+</p>
                  <p className="font-dmSans text-gray-400 text-sm">Expert mentor</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <GradientButton>
                  Explore Our Courses
                </GradientButton>
                <HoverBorderGradient 
                  className="px-6 py-3 text-sm md:text-base font-medium font-dmSans"
                  containerClassName="!rounded-lg border-0 bg-[#0D0C13] hover:!bg-[#0D0C13] dark:bg-[#0D0C13] [&>div:last-child]:!rounded-lg"
                  duration={1.5}
                  clockwise={false}
                  style={{ borderRadius: '8px' }}
                >
                  Explore Our Courses
                </HoverBorderGradient>
              </div>
            </div>

            {/* Right content - Course Cards Stack */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:flex h-[600px] relative pt-8 justify-center"
            >
              <div className="w-full">
                <CardStack items={courseCards} interval={6000} />
              </div>
            </motion.div>
          </div>

          {/* Features Section */}
          <div ref={featuresRef}>
            <Features />
          </div>

          {/* Courses Section */}
          <div ref={coursesRef}>
            <Courses />
          </div>

          {/* Testimonials Section */}
          <div ref={testimonialsRef}>
            <Testimonials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 