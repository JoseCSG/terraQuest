import Image from "next/image";

export default function Navbar({ score }: { score: number }) {
  return (
    <nav className="items-center z-50 top-0 sticky justify-between bg-purple-900 px-4 py-1 rounded-bl-xl rounded-br-xl flex flex-row w-full">
      <div className="flex flex-row items-center gap-2">
        <Image
          src={"/Logo.png"}
          width={100}
          height={100}
          alt="TerraQuest Logo"
          unoptimized={true}
        />
        <p className="font-bold text-white hidden sm:block text-2xl">
          TerraQuest
        </p>
      </div>
      <span className="text-white text-2xl font-bold pe-2">
        Puntos: <span className="font-normal">{score}</span>{" "}
      </span>
    </nav>
  );
}
