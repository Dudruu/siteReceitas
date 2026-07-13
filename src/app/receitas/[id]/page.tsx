import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { recipes } from "@/src/lib/data";
import PreparationStep from "@/src/components/PreparationStep"
import { notFound } from "next/navigation";

interface RecipesPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ReceitasPage({ params }: RecipesPageProps) {
  const { id } = await params;
  const recipe = recipes.find((recipe) => recipe.id === id);


    if(!recipe){
        return notFound()
    }

  return (
    <main className="flex-grow py-8">
      <div className="container mx-auto m ">
        <Link
          className="flex text-orange-500 hover:text-orange-700"
          href="/receitas"
        >
          Voltar para receitas
          <ChevronLeft />
        </Link>
      </div>

      <section className="rounded-lg overflow-hidden shadow-md ">
          <div className="relative h-96 w-full">
            <Image src={recipe.image} alt={recipe.title} fill className="cover"/>
          </div>
          <div className="p-6 flex flex-col gap-6 p-6">
            <div>
                <h1 className="text-xl font-bold">{recipe.title}</h1>
                <p >{recipe.description}</p>
            </div>
            <div className="flex"></div>


            <div className="flex justify-between">
                <div>
                    <h2 className="text-xl font-bold mb-4">Ingredientes</h2>
                    <ul className="list-disc list-inside space-y-2">{recipe.ingredients.map((ingredient)=>(
                        <li className="marker:text-orange-500">{ingredient}</li>
                    ))}
                    </ul>
                </div>



                <div className="">
                <h2 className="text-xl font-bold mb-4">Modo de Preparo</h2>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <PreparationStep key={instruction} index={index + 1} description={instruction} />
                  ))}
                </ol>
                </div>
            </div>
          </div>
      </section>
      
    </main>
  );
}
