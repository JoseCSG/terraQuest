"use client";
import React, { useEffect, useState } from "react";
import { mockDataType } from "../utils/constants";

interface FlipCardProps {
  className?: string;
  card: mockDataType;
}

const FlipCard: React.FC<FlipCardProps> = ({ className = "", card }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  useEffect(() => {
    const cardsInLocalStorage = localStorage.getItem("cardsCollected");
    if (!cardsInLocalStorage) return;
    const cardsCollected = JSON.parse(cardsInLocalStorage);
    if (cardsCollected.includes(card.id)) setIsFlipped(true);
  }, [card]);

  const handleClick = (): void => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={` flex-col perspective-[1000px] rounded-md w-full ${className}`}
      onClick={handleClick}
    >
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-front bg-no-repeat md:bg-cover bg-contain bg-center bg-[url(/CardBack.png)]" />
        <div
          className={`flip-card-back bg-no-repeat bg-contain bg-center`}
          style={{
            backgroundImage: `url(/${card.image})`,
          }}
        />
      </div>
    </div>
  );
};

export default FlipCard;
