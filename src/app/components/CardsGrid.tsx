"use client";
import { mockData } from "../utils/constants";
import ShowQuestion from "./ShowQuestion";

const CardsGrid = () => {
  return (
    <div className="grid md:grid-cols-5 grid-cols-2 w-full gap-y-2 px-4 py-4 overflow-auto">
      {mockData.map((card) => (
        <ShowQuestion key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardsGrid;
