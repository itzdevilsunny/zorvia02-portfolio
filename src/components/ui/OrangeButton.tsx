"use client"; // if you're using Next.js

import React from "react";

interface OrangeButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const OrangeButton: React.FC<OrangeButtonProps> = ({
  title,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`min-w-[200px] h-[66px] px-8 py-5 rounded-[60px] bg-[#FD853A] font-bold text-[20px] text-white cursor-pointer flex items-center justify-center transition-all hover:bg-[#e46e24] active:translate-y-[2px] shadow-[0_4px_0_rgb(228,110,36)] hover:shadow-[0_2px_0_rgb(228,110,36)] whitespace-nowrap ${className}`}
    >
      {title}
    </button>
  );
};

export default OrangeButton;
