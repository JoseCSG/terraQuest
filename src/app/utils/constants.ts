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
  score: number;
};

export type questionType = {
  question: string;
  answer: string;
  type: "text" | "number";
};

export const mockData: mockDataType[] = [
  {
    id: 1,
    name: "Ajolote",
    rarity: Rarity.rare,
    cardFront: "Ajolote.png",
    cardBack: "AjoloteBack.png",
    score: 1550,
  },
  {
    id: 2,
    name: "Lobo Mexicano",
    rarity: Rarity.epic,
    cardFront: "Lobo.png",
    cardBack: "LoboBack.png",
    score: 970,
  },
  {
    id: 3,
    name: "Chihuaha",
    rarity: Rarity.common,
    cardFront: "Chihuahua.png",
    cardBack: "ChihuahuaBack.png",
    score: 160,
  },
  {
    id: 4,
    name: "Cactus",
    rarity: Rarity.common,
    cardFront: "Cactus.png",
    cardBack: "CactusBack.png",
    score: 500,
  },

  {
    id: 5,
    name: "Jaguar",
    rarity: Rarity.legendary,
    cardFront: "10.png",
    cardBack: "11.png",
    score: 1400,
  },
  {
    id: 6,
    name: "Águila Real",
    rarity: Rarity.legendary,
    cardFront: "Aguila.png",
    cardBack: "AguilaBack.png",
    score: 0,
  },
  {
    id: 7,
    name: "Cempasúchil",
    rarity: Rarity.rare,
    cardFront: "Cempasuchil.png",
    cardBack: "CempasuchilBack.png",
    score: 880,
  },
  {
    id: 8,
    name: "Nochebuena",
    rarity: Rarity.epic,
    cardFront: "Nochebuena.png",
    cardBack: "NochebuenaBack.png",
    score: 630,
  },
  {
    id: 9,
    name: "Vaquita Marina",
    rarity: Rarity.epic,
    cardFront: "Vaquita.png",
    cardBack: "VaquitaBack.png",
    score: 1000,
  },
  {
    id: 10,
    name: "Xoloitzcuintle",
    rarity: Rarity.rare,
    cardFront: "Xolo.png",
    cardBack: "XoloBack.png",
    score: 330,
  },
];

export const randomQuestions: questionType[] = [
  {
    question: "¿Cuánto es 2 + 2?",
    answer: "4",
    type: "number",
  },
  {
    question: "¿Cuánto es 7 - 3?",
    answer: "4",
    type: "number",
  },
  {
    question: "¿Cuánto es 5 * 6?",
    answer: "30",
    type: "number",
  },
  {
    question: "¿Cuánto es 12 / 4?",
    answer: "3",
    type: "number",
  },
  {
    question: "¿Cuál es la raíz cuadrada de 81?",
    answer: "9",
    type: "number",
  },
  {
    question: "Resuelve para x: x + 5 = 10",
    answer: "5",
    type: "number",
  },
  {
    question: "Resuelve para x: 3x = 12",
    answer: "4",
    type: "number",
  },
  {
    question: "¿Cuál es el 15% de 200?",
    answer: "30",
    type: "number",
  },
  {
    question: "¿Cuál es el área de un triángulo con base 5 y altura 10?",
    answer: "25",
    type: "number",
  },
  {
    question: "¿Cuál es el planeta más cercano al sol?",
    answer: "Mercurio",
    type: "text",
  },
  {
    question: "¿Qué gas es esencial para la respiración humana?",
    answer: "Oxígeno",
    type: "text",
  },
  {
    question: "¿Cuál es el elemento químico con el símbolo H?",
    answer: "Hidrógeno",
    type: "text",
  },
  {
    question: "¿Qué órgano del cuerpo humano bombea sangre?",
    answer: "Corazón",
    type: "text",
  },
  {
    question:
      "¿Cuál es el proceso por el cual las plantas producen su alimento?",
    answer: "Fotosíntesis",
    type: "text",
  },
  {
    question: "¿Qué es HTML?",
    answer: "Lenguaje de marcado para crear páginas web",
    type: "text",
  },
  {
    question: "¿Qué significa CSS?",
    answer: "Hojas de estilo en cascada",
    type: "text",
  },
  {
    question: "¿Qué es JavaScript?",
    answer: "Lenguaje de programación para la web",
    type: "text",
  },
  {
    question: "¿Qué es un navegador web?",
    answer: "Software para acceder a internet",
    type: "text",
  },
  {
    question: "¿Qué es una URL?",
    answer: "Dirección de una página web",
    type: "text",
  },
];
