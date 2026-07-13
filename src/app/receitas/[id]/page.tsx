import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function receitaPage() {
  return (
    <main className="flex-grow py-8">
      <div className="container mx-auto ">
        <Link
          className="flex text-orange-500 hover:text-orange-700"
          href="receitas"
        >
          Voltar para receitas
          <ChevronLeft />{" "}
        </Link>
      </div>

      <section>
          <div className="relative h-96 w-full">
            <Image src={""} alt={""} fill />
          </div>
          <div className="">
            <h1>Titulo da receita</h1>
            <p>Descrição</p>
            <div className="flex"></div>


            <div className="flex">
                <div className=""></div>
                <div className=""></div>
            </div>
          </div>
      </section>
      
    </main>
  );
}
