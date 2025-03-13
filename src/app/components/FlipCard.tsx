"use client";
import React, { useEffect, useImperativeHandle, useState } from "react";
import { mockDataType } from "../utils/constants";

export interface FlipCardProps {
  className?: string;
  card: mockDataType;
  isAnswered?: boolean;
}

// Define the ref type
export interface FlipCardRef {
  flipCard: () => void;
}

const FlipCard = React.forwardRef<FlipCardRef, FlipCardProps>(
  ({ className = "", card, isAnswered }, ref) => {
    const [isFlipped, setIsFlipped] = useState<boolean>(false);

    useEffect(() => {
      const cardsInLocalStorage = localStorage.getItem("cardsCollected");
      if (!cardsInLocalStorage) return;
      const cardsCollected = JSON.parse(cardsInLocalStorage);
      if (cardsCollected.includes(card.id)) setIsFlipped(true);
    }, [card]);

    useImperativeHandle(ref, () => ({
      flipCard: () => setIsFlipped(true),
    }));

    useEffect(() => {
      if (isAnswered) {
        setIsFlipped(true);
      }
    }, [isAnswered]);

    return (
      <div
        className={`flex-col perspective-[1000px] hover:cursor-pointer rounded-md w-full ${className}`}
      >
        <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
          <div
            className="flip-card-front bg-no-repeat bg-contain bg-center"
            style={{
              backgroundImage: `url(/${card.cardBack})`,
            }}
          />
          <div
            className={`flip-card-back bg-no-repeat bg-contain bg-center`}
            style={{
              backgroundImage: `url(/${card.cardFront})`,
            }}
          />
        </div>
      </div>
    );
  }
);

// Add display name for development purposes
FlipCard.displayName = "FlipCard";

export default FlipCard;
