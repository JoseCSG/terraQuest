export enum Rarity {
  common = "common",
  rare = "rare",
  epic = "epic",
  legendary = "legendary",
}

export type mockDataType = {
  id: number;
  name: string;
  rarity: Rarity;
  cardFront: string;
  cardBack: string;
};

export type questionType = {
  question: string;
  answer: string;
};

export const mockData: mockDataType[] = [
  {
    id: 1,
    name: "Ajolote",
    rarity: Rarity.rare,
    cardFront: "Ajolote.png",
    cardBack: "AjoloteBack.png",
  },
  {
    id: 2,
    name: "Lobo Mexicano",
    rarity: Rarity.epic,
    cardFront: "Lobo.png",
    cardBack: "LoboBack.png",
  },
  {
    id: 3,
    name: "Chihuaha",
    rarity: Rarity.common,
    cardFront: "Ajolote.png",
    cardBack: "AjoloteBack.png",
  },
  {
    id: 4,
    name: "Cactus",
    rarity: Rarity.common,
    cardFront: "Ajolote.png",
    cardBack: "AjoloteBack.png",
  },
  {
    id: 5,
    name: "Jaguar",
    rarity: Rarity.legendary,
    cardFront: "Ajolote.png",
    cardBack: "AjoloteBack.png",
  },
  {
    id: 6,
    name: "Águila Real",
    rarity: Rarity.legendary,
    cardFront: "Ajolote.png",
    cardBack: "AjoloteBack.png",
  },
  {
    id: 7,
    name: "Cempasúchil",
    rarity: Rarity.rare,
    cardFront: "Ajolote.png",
    cardBack: "AjoloteBack.png",
  },
  {
    id: 8,
    name: "Nochebuena",
    rarity: Rarity.epic,
    cardFront: "Ajolote.png",
    cardBack: "AjoloteBack.png",
  },
  {
    id: 9,
    name: "Vaquiita Marina",
    rarity: Rarity.epic,
    cardFront: "Ajolote.png",
    cardBack: "AjoloteBack.png",
  },
  {
    id: 10,
    name: "Xoloitzcuintle",
    rarity: Rarity.rare,
    cardFront: "Ajolote.png",
    cardBack: "AjoloteBack.png",
  },
];

export const randomQuestions: questionType[] = [
  {
    question: "¿Cuánto es 2 + 2?",
    answer: "4",
  },
  {
    question: "¿Cuánto es 7 - 3?",
    answer: "4",
  },
  {
    question: "¿Cuánto es 5 * 6?",
    answer: "30",
  },
  {
    question: "¿Cuánto es 12 / 4?",
    answer: "3",
  },
  {
    question: "¿Cuál es la raíz cuadrada de 81?",
    answer: "9",
  },
  {
    question: "Resuelve para x: x + 5 = 10",
    answer: "5",
  },
  {
    question: "Resuelve para x: 3x = 12",
    answer: "4",
  },
  {
    question: "¿Cuál es el 15% de 200?",
    answer: "30",
  },
  {
    question: "¿Cuál es el valor de π (pi) con dos decimales?",
    answer: "3.14",
  },
  {
    question: "¿Cuál es el área de un triángulo con base 5 y altura 10?",
    answer: "25",
  },
];
