"use client";

import { motion } from "framer-motion";
import CourseCard from "../ui/CourseCard";
import { Background } from "../ui/backgrounGrid";
import GradientBorderButton from "../ui/GradientBorderButton";
import { MoveRight } from "lucide-react";

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

const courses = [
  {
    image: "/images/card1.png",
    title: "The Ultimate Front End Development Career - Batch 01",
    lessons: 32,
    projects: 10,
    students: 150,
    rating: "4.8",
    ratingCount: "1.2k",
  },
  {
    image: "/images/card2.png",
    title: "Advanced React & Node.js Full Stack Development",
    lessons: 45,
    projects: 15,
    students: 200,
    rating: "4.9",
    ratingCount: "2.1k",
  },
  {
    image: "/images/card3.png",
    title: "UI/UX Design Mastery: From Beginner to Professional",
    lessons: 28,
    projects: 12,
    students: 180,
    rating: "4.7",
    ratingCount: "980",
  },
  {
    image: "/images/card4.png",
    title: "Mobile App Development with React Native",
    lessons: 36,
    projects: 8,
    students: 120,
    rating: "4.6",
    ratingCount: "850",
  },
  {
    image: "/images/card5.png",
    title: "Backend Development with Node.js & Express",
    lessons: 40,
    projects: 14,
    students: 160,
    rating: "4.8",
    ratingCount: "1.5k",
  },
  {
    image: "/images/card2.png",
    title: "Full Stack Web Development Bootcamp",
    lessons: 50,
    projects: 20,
    students: 250,
    rating: "4.9",
    ratingCount: "2.5k",
  },
];

export const Courses = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Content */}
      <section className="relative py-12 sm:py-20">
        {/* Full width gradient background */}
        <div className="absolute inset-0 w-full h-full">
          {/* Main background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0C13] via-[#1D1C29] to-[#0D0C13]" />

          {/* Background grid with reduced opacity */}
          <div className="absolute inset-0 opacity-30">
            <Background />
          </div>

          {/* Circle gradients - Positioned relative to the cards section */}
          <div className="absolute inset-0 z-[1]">
            {/* Left circle gradient */}
            <div className="absolute left-0 top-[30%] sm:top-[60%] -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-[radial-gradient(circle_at_center,_#B133FF_0%,_transparent_70%)] opacity-50 blur-[50px] -translate-x-1/2" />

            {/* Right circle gradient */}
            <div className="absolute right-0 top-[75%] sm:top-[60%] -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-[radial-gradient(circle_at_center,_#EF0BFD_0%,_transparent_70%)] opacity-50 blur-[50px] translate-x-1/2" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white  mb-2 sm:mb-3">
              Join Our Courses 🎓
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 ">
              Choose from our wide range of courses and start your journey today
              ✨
            </p>
          </motion.div>

          {/* Course Grid with gradient backgrounds */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {courses.map((course, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex justify-center"
              >
                <CourseCard
                  image={course.image}
                  title={course.title}
                  lessons={course.lessons}
                  projects={course.projects}
                  students={course.students}
                  rating={course.rating}
                  ratingCount={course.ratingCount}
                  mentors={mentors.map((m) => m.image)}
                />
              </motion.div>
            ))}
          </div>
          <div className="flex pt-10  justify-center">
            <GradientBorderButton className="inline-flex items-center gap-2 px-10">
              View all
              <MoveRight className="w-4 h-4" />
            </GradientBorderButton>
          </div>
        </div>
      </section>
    </div>
  );
};
