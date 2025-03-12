"use client";
import React, { useState } from "react";
import { mockData } from "../utils/constants";

interface FlipCardProps {
  className?: string;
  card: (typeof mockData)[0];
}

const FlipCard: React.FC<FlipCardProps> = ({ className = "", card }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsFlipped(!isFlipped);
  };

  function frontContent() {
    return <div className="" />;
  }

  function backContent() {
    return <div className="" />;
  }

  return (
    <div
      className={` flex-col perspective-[1000px] rounded-md w-full ${className}`}
      onClick={handleClick}
    >
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-front bg-gradient-to-br from-[#FFF7AD] to-[#FFa9f9]">
          {frontContent()}
        </div>
        <div
          className={`flip-card-back bg-no-repeat bg-contain`}
          style={{
            backgroundImage: `url(/${card.image})`,
          }}
        >
          {backContent()}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
