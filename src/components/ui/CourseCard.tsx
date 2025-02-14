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
    <div
      className={cn(
        "bg-[#0D0C13] border-[1px] border-white/50 overflow-hidden w-full max-w-sm p-3 rounded-xl",
        className
      )}
    >
      {/* Image Section */}
      <div className="w-full h-[200px] overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Tags Section */}
      <div className="flex justify-between items-center mt-4 mb-6">
        <span className="bg-[#393939] text-white px-4 py-1.5 text-xs font-dmSans flex items-center gap-1.5 rounded-sm">
          <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
          Live Class
        </span>
        <span className=" inline-flex items-center gap-1 border border-[#393939] text-white px-4 py-1.5 text-xs font-dmSans rounded-sm">
          {rating} <img src="/icons/star.svg" alt="star" className="w-3 h-3" />{" "}
          ({ratingCount})
        </span>
      </div>

      {/* Content Section */}
      <div className="space-y-4 px-2">
        <h3 className="text-white font-medium text-base line-clamp-2 font-dmSans leading-snug min-h-[40px]">
          {title}
        </h3>
        {/* Stats */}
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <AnimatedStat
              icon="/icons/book.svg"
              label="Lessons"
              value={lessons}
              className="rounded-lg"
            />
            <AnimatedStat
              icon="/icons/doc.svg"
              label="Projects"
              value={projects}
              className="rounded-lg"
            />
            <AnimatedStat
              icon="/icons/user.svg"
              label="Students"
              value={students}
              className="rounded-lg"
            />
            <div className="py-3 px-4"></div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex -space-x-2">
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
            className=" h-[38px] bg-gradient-to-r from-[#FC00FF] to-[#00DBDE] hover:opacity-90 transition-opacity text-white px-4 py-1.5 font-dmSans text-sm rounded-sm"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
