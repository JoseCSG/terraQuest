"use client";
import { Dispatch, SetStateAction } from "react";
import { mockData } from "../utils/constants";
import ShowQuestion from "./ShowQuestion";

const CardsGrid = ({
  setScore,
}: {
  setScore: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="grid md:grid-cols-5 grid-cols-2 w-full gap-y-2 px-4 py-4 overflow-auto">
      {mockData.map((card) => (
        <ShowQuestion key={card.id} card={card} setScore={setScore} />
      ))}
    </div>
  );
};

export default CardsGrid;
