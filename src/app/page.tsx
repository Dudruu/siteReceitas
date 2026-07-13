import { ChevronRight } from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex-grow">
      
        <section className="bg-orange-50 flex ">
          <div className="container mx-auto flex flex-col items-center  gap-6 py-12">
          <h1 className="text-5xl font-bold">Receitas deliciosas</h1>
          <p className="text-xl ">Descubra as receitas simples e saborosas para todas as ocasiões</p>
          <Link className="text-white bg-orange-500 px-3 py-2 font-bold rounded-lg hover:bg-orange-700 transition-colors"href="/receitas">Ver todas as receitas</Link>
          </div>
        </section>

        <section className="py-12">Receitas em destaque
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="font-bold text-lg transition-colors">Receitas em destaque</h2>
          <Link className="flex text-orange-400 hover:text-orange-700 transition-colors" href="/receitas">Ver todas as receitas <ChevronRight /></Link>
        </div>


        </section>
      
    </main>
  );
}
