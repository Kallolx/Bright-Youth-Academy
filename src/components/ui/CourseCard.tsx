import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import MentorAvatar from "./MentorAvatar";
import AnimatedStat from "./AnimatedStat";

interface CourseCardProps {
  image: string;
  title: string;
  lessons: number;
  projects: number;
  students: number;
  rating: string;
  ratingCount: string;
  mentors: string[];
  onLearnMore?: () => void;
  className?: string;
}

const mentorData = [
  { name: "Rejown Jisahan", role: "Software Engineer" },
  { name: "David Mitchell", role: "Senior Developer" },
  { name: "Sarah Anderson", role: "UI/UX Designer" },
  { name: "Emma Wilson", role: "Product Designer" },
  { name: "Michael Brown", role: "Full Stack Developer" },
];

const CourseCard = ({
  image,
  title,
  lessons,
  projects,
  students,
  rating,
  ratingCount,
  mentors,
  onLearnMore,
  className,
}: CourseCardProps) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      className={cn(
        "bg-[#0D0C13] border-[1px] border-white/50 w-full max-w-sm rounded-xl",
        "transition-all duration-200 cursor-pointer",
        className
      )}
    >
      {/* Image Section */}
      <div className="p-3">
        <div className="w-full h-[200px] overflow-hidden rounded-lg group">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-out group-hover:scale-110"
          />
        </div>

        {/* Tags Section */}
        <div className="flex justify-between items-center mt-4 mb-6">
          <span className="bg-[#393939] text-white px-4 py-1.5 text-xs font-dmSans flex items-center gap-1.5 rounded-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
            Live Class
          </span>
          <span className="inline-flex items-center gap-1 border border-[#393939] text-white px-4 py-1.5 text-xs font-dmSans rounded-sm">
            {rating} <img src="/icons/star.svg" alt="star" className="w-3 h-3" />{" "}
            ({ratingCount})
          </span>
        </div>

        {/* Content Section */}
        <div className="space-y-4">
          <h3 className="text-white font-medium text-base line-clamp-2 font-dmSans leading-snug min-h-[40px]">
            {title}
          </h3>
          {/* Stats */}
          <div>
            <div className="grid grid-cols-2 gap-2">
              <AnimatedStat
                icon="/icons/book.svg"
                label="Lessons"
                value={lessons}
                className="rounded-lg !px-2 sm:!px-4 whitespace-nowrap"
              />
              <AnimatedStat
                icon="/icons/doc.svg"
                label="Projects"
                value={projects}
                className="rounded-lg !px-2 sm:!px-4 whitespace-nowrap"
              />
              <AnimatedStat
                icon="/icons/user.svg"
                label="Students"
                value={students}
                className="rounded-lg !px-2 sm:!px-4 whitespace-nowrap"
              />
              <div className="py-3"></div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex -space-x-2 relative">
              {mentors.slice(0, 3).map((src, i) => (
                <MentorAvatar
                  key={i}
                  src={src}
                  name={mentorData[i].name}
                  role={mentorData[i].role}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={onLearnMore}
              className="h-[38px] bg-gradient-to-r from-[#FC00FF] to-[#00DBDE] hover:opacity-90 transition-opacity text-white px-4 py-1.5 font-dmSans text-sm rounded-sm"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
