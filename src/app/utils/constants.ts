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
  image: string;
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
    image: "Ajolote.png",
  },
  {
    id: 2,
    name: "Lobo Mexicano",
    rarity: Rarity.epic,
    image: "Ajolote.png",
  },
  {
    id: 3,
    name: "Chihuaha",
    rarity: Rarity.common,
    image: "Ajolote.png",
  },
  {
    id: 4,
    name: "Cactus",
    rarity: Rarity.common,
    image: "Ajolote.png",
  },
  {
    id: 5,
    name: "Jaguar",
    rarity: Rarity.legendary,
    image: "Ajolote.png",
  },
  {
    id: 6,
    name: "Águila Real",
    rarity: Rarity.legendary,
    image: "Ajolote.png",
  },
  {
    id: 7,
    name: "Cempasúchil",
    rarity: Rarity.rare,
    image: "Ajolote.png",
  },
  {
    id: 8,
    name: "Nochebuena",
    rarity: Rarity.epic,
    image: "Ajolote.png",
  },
  {
    id: 9,
    name: "Vaquiita Marina",
    rarity: Rarity.epic,
    image: "Ajolote.png",
  },
  {
    id: 10,
    name: "Xoloitzcuintle",
    rarity: Rarity.rare,
    image: "Ajolote.png",
  },
];

export const randomQuestions: questionType[] = [];
