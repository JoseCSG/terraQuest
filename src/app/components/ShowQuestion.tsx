"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { mockDataType, randomQuestions } from "../utils/constants";
import FlipCard, { FlipCardRef } from "./FlipCard";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

export default function ShowQuestion({
  card,
  setScore,
}: {
  card: mockDataType;
  setScore: Dispatch<SetStateAction<number>>;
}) {
  const question =
    randomQuestions[Math.floor(Math.random() * randomQuestions.length)];
  const [open, setOpen] = useState<boolean>(false);
  const [alreadyAnswered, setAlreadyAnswered] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const flipCardRef = useRef<FlipCardRef>(null);

  useEffect(() => {
    const cardsInLocalStorage = localStorage.getItem("cardsCollected");
    if (!cardsInLocalStorage) return;
    const cardsCollected = JSON.parse(cardsInLocalStorage);
    if (cardsCollected.includes(card.id)) {
      setAlreadyAnswered(true);
    }
  }, [card]);

  function flipCard() {
    if (flipCardRef.current) flipCardRef.current.flipCard();
    setAlreadyAnswered(true);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const answer = formData.get("answer");
    if (answer === question.answer) {
      const cardsInLocalStorage = localStorage.getItem("cardsCollected");
      if (!cardsInLocalStorage) {
        localStorage.setItem("cardsCollected", JSON.stringify([card.id]));
        setScore((prev) => prev + card.score);
        setOpen(false);
        flipCard();
        return;
      }
      const cardsCollected = JSON.parse(cardsInLocalStorage);
      if (!cardsCollected.includes(card.id)) {
        cardsCollected.push(card.id);
        localStorage.setItem("cardsCollected", JSON.stringify(cardsCollected));
      }
      setScore((prev) => prev + card.score);
      flipCard();
      setOpen(false);
    }
    setError("Respuesta incorrecta");
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger disabled={alreadyAnswered}>
        <FlipCard
          key={card.id}
          ref={flipCardRef}
          className="h-72 md:h-48"
          isAnswered={alreadyAnswered}
          card={card}
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{question.question}</DialogTitle>
          <form
            onSubmit={handleSubmit}
            className="w-full grid mt-4 h-full gap-4"
          >
            <input
              type={question.type}
              name="answer"
              className="w-full rounded-t-md p-2  focus:border-purple-950 border border-purple-500"
              placeholder="Answer"
            />
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-fit px-6 py-3  rounded-md mx-auto bg-purple-500 hover:bg-purple-900 hover:text-white transition-all duration-150"
            >
              Enviar
            </button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
