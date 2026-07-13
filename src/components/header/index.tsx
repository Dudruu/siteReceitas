import Link from "next/link";

export default function Header() {
  return (
    <header className=" bg-white text-black py-4">
      <div className="container mx-auto flex justify-between w-full ">
        <Link className="text-xl font-bold hover:scale-105 transition-all" href="/">Receitas Deliciosas</Link>
        <nav className="space-x-6">
          <Link className="hover:text-orange-400 transition-colors" href="/">Inicio</Link >
          <Link className="hover:text-orange-400 transition-colors" href="/receitas"> Receitas </Link>
        </nav>
      </div>
    </header>
  );
}
