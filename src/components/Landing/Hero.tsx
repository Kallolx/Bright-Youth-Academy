import { motion } from "framer-motion";
import CourseCard from "../ui/CourseCard";
import { CardStack } from "../ui/CardStack";
import MentorAvatar from "../ui/MentorAvatar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import GradientBorderButton from "../ui/GradientBorderButton";
import { AuroraText } from "@/registry/magicui/aurora-text";
import GradientButton from "../ui/GradientButton";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

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
          scrub: 0.5,
        },
        y: -50,
      });
    });

    return () => ctx.revert();
  }, []);

  const mentors = [
    {
      image: "/images/mentors/1.png",
      name: "Rejown Jisahan",
      role: "Software Engineer",
    },
    {
      image: "/images/mentors/2.png",
      name: "David Mitchell",
      role: "Senior Developer",
    },
    {
      image: "/images/mentors/3.png",
      name: "Sarah Anderson",
      role: "UI/UX Designer",
    },
    {
      image: "/images/mentors/4.png",
      name: "Emma Wilson",
      role: "Product Designer",
    },
    {
      image: "/images/mentors/5.png",
      name: "Michael Brown",
      role: "Full Stack Developer",
    },
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
      mentors={mentors.map((m) => m.image)}
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
      mentors={mentors.map((m) => m.image)}
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
      mentors={mentors.map((m) => m.image)}
    />,
  ];

  return (
    <div className="relative py-12">
      {/* Background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute inset-0 z-[1] h-full overflow-hidden"
      >
        {/* Left circle gradient */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="absolute top-[30%] -left-[20%]  w-[400px] h-[400px]  bg-[#EF0BFD] blur-[100px]"
        />

        {/* Right circle gradient */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute top-[30%] -right-[25%] 2xl:-right-[20%]  w-[400px] h-[400px]  bg-[#B133FF] blur-[110px]"
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-[2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-20 lg:pt-24">
          {/* Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-20 items-center">
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
                <h1 className="text-[3rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-extrabold text-white font-dmSans leading-[1.2] sm:leading-[1.15]">
                  Grow Your a <AuroraText>Skills</AuroraText>{" "}
                  <br className="block sm:hidden my-1" />
                  For a Better Career
                </h1>
                <motion.p
                  variants={item}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 font-dmSans max-w-xl sm:max-w-2xl mx-auto lg:mx-0"
                >
                  Master In-Demand Skills, Unlock Limitless Opportunities
                  <br className="hidden sm:block" />& Create the Career of Your
                  Dreams!
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
                <motion.div variants={item}>
                  <p className="font-dmSans text-white font-bold text-sm sm:text-base md:text-lg">
                    20+
                  </p>
                  <p className="font-dmSans text-gray-400 text-xs sm:text-sm">
                    Expert mentor
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                variants={item}
                className="flex flex-col sm:flex-row items-center justify-center pt-12 lg:pt-0  lg:justify-start gap-3 sm:gap-4 md:gap-6"
              >
                <div className="w-full sm:w-auto">
                  <GradientButton className="w-full sm:w-auto py-[calc(0.5rem+2px)]">
                    Explore Our Courses
                  </GradientButton>
                </div>
                <div className="w-full sm:w-auto">
                  <GradientBorderButton className="w-full sm:w-auto py-2 ">
                    Learn More
                  </GradientBorderButton>
                </div>
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
