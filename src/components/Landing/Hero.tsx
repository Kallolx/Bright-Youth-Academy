import { motion } from 'framer-motion';
import { AuroraText } from "@/registry/magicui/aurora-text";
import { ShimmerButton } from "@/registry/magicui/shimmer-button";
import { ShinyButton } from "@/registry/magicui/shiny-button";
import CourseCard from '../ui/CourseCard';
import { CardStack } from '../ui/CardStack';
import MentorAvatar from '../ui/MentorAvatar';
import { Features } from './Features';
import { Courses } from './Courses';
import Testimonials from './Testimonials';

const Hero = () => {
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
    <div className="relative min-h-screen bg-[#0D0C13] overflow-hidden">
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
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white font-dmSans leading-tight">
                Grow Your <AuroraText>Skill</AuroraText>
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
              <ShimmerButton
                className="font-dmSans px-6 py-3 rounded-lg text-white font-medium"
              >
                Explore Our Courses
              </ShimmerButton>
              <ShinyButton
                className="font-dmSans px-6 py-3 rounded-lg border border-gray-700 text-white font-medium"
              >
                Explore Our Courses
              </ShinyButton>
            </div>
          </div>

          {/* Right content - Course Cards Stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[600px] relative pt-8 flex justify-center"
          >
            <div className="w-full">
              <CardStack items={courseCards} interval={6000} />
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <Features />

        {/* Courses Section */}
        <Courses />

        {/* Testimonials Section */}
        <Testimonials />
      </div>
    </div>
  );
};

export default Hero; 