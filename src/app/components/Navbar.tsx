import Image from "next/image";

export default function Navbar({ score }: { score: number }) {
  return (
    <nav className="items-center justify-between bg-purple-900 px-4 py-6 rounded-bl-xl rounded-br-xl flex flex-row w-full">
      <div className="flex flex-row items-center gap-2">
        <Image
          src={"/logo.png"}
          width={50}
          height={50}
          alt="TerraQuest Logo"
          unoptimized={true}
        />
        <p className="font-bold text-white hidden sm:block text-2xl">
          TerraQuest
        </p>
      </div>
      <span className="text-white text-2xl font-bold">
        Score: <span className="font-semibold">{score}</span>{" "}
      </span>
    </nav>
  );
}
