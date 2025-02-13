"use client";

import { motion } from "framer-motion";
import CourseCard from "../ui/CourseCard";

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

const courses = [
  {
    image: "/images/card1.png",
    title: "The Ultimate Front End Development Career - Batch 01",
    lessons: 32,
    projects: 10,
    students: 150,
    rating: "4.8",
    ratingCount: "1.2k"
  },
  {
    image: "/images/card2.png",
    title: "Advanced React & Node.js Full Stack Development",
    lessons: 45,
    projects: 15,
    students: 200,
    rating: "4.9",
    ratingCount: "2.1k"
  },
  {
    image: "/images/card3.png",
    title: "UI/UX Design Mastery: From Beginner to Professional",
    lessons: 28,
    projects: 12,
    students: 180,
    rating: "4.7",
    ratingCount: "980"
  },
  {
    image: "/images/card4.png",
    title: "Mobile App Development with React Native",
    lessons: 36,
    projects: 8,
    students: 120,
    rating: "4.6",
    ratingCount: "850"
  },
  {
    image: "/images/card5.png",
    title: "Backend Development with Node.js & Express",
    lessons: 40,
    projects: 14,
    students: 160,
    rating: "4.8",
    ratingCount: "1.5k"
  },
  {
    image: "/images/card2.png",
    title: "Full Stack Web Development Bootcamp",
    lessons: 50,
    projects: 20,
    students: 250,
    rating: "4.9",
    ratingCount: "2.5k"
  }
];

export const Courses = () => {
  return (
    <section className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-dmSans mb-3 sm:mb-4">
            Join Our Courses
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-dmSans">
            Choose from our wide range of courses and start your journey today
          </p>
        </motion.div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                mentors={mentors.map(m => m.image)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 