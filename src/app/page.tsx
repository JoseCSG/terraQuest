"use client";
import { useEffect, useState } from "react";
import CardsGrid from "./components/CardsGrid";
import Navbar from "./components/Navbar";
import { mockData } from "./utils/constants";
export default function Home() {
  const [score, setScore] = useState<number>(0);
  useEffect(() => {
    const cardsInLocalStorage = localStorage.getItem("cardsCollected");
    if (!cardsInLocalStorage) return;
    const cardsCollected = JSON.parse(cardsInLocalStorage);
    cardsCollected.forEach((cardId: number) => {
      const card = mockData[cardId - 1];
      if (card) setScore((prev) => prev + card.score);
    });
  }, []);
  return (
    <>
      <Navbar score={score} />
      <CardsGrid setScore={setScore} />
    </>
  );
}
