import CardsGrid from "./components/CardsGrid";
export default async function Home() {
  return (
    <main className="flex flex-col h-dvh items-center bg-gradient-to-b from-blue-950 to-65% to-blue-400 ">
      <nav className="items-center bg-purple-900 px-4 py-6 text-center justify-center rounded-bl-xl rounded-br-xl flex flex-row w-full">
        <p className="font-bold text-white text-2xl">TerraQuest</p>
      </nav>
      <CardsGrid />
    </main>
  );
}
