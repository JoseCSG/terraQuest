"use client";
import React, { useEffect, useState } from "react";
import FlipCard from "./FlipCard";
import { mockData } from "../utils/constants";

const CardsGrid = () => {
  const [cardsCollected, setCardsCollected] = useState<number[]>([]);
  console.log(cardsCollected);
  useEffect(() => {
    const cardsInLocalStorage = localStorage.getItem("cardsCollected");
    if (cardsInLocalStorage) {
      setCardsCollected(JSON.parse(cardsInLocalStorage));
    }
  }, []);

  return (
    <div className="grid md:grid-cols-4 grid-cols-2 justify-around w-full gap-2 px-4 py-4 overflow-auto">
      {mockData.map((card) => (
        <FlipCard key={card.id} className="h-72 md:h-48" card={card} />
      ))}
    </div>
  );
};

export default CardsGrid;
