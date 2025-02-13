"use client";

import { AnimatedTooltip } from "./animated-tooltip";

interface MentorAvatarProps {
  src: string;
  name: string;
  role: string;
}

const MentorAvatar = ({ src, name, role }: MentorAvatarProps) => {
  const item = {
    id: Math.random(),
    name: name,
    designation: role,
    image: src,
  };

  return (
    <div className="relative z-[9999]">
      <AnimatedTooltip items={[item]} />
    </div>
  );
};

export default MentorAvatar;
