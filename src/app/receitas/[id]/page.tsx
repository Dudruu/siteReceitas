
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Recipe} from "@/src/lib/data";
import PreparationStep from "@/src/components/PreparationStep"
import { notFound } from "next/navigation";
import InfoPill from "@/src/components/infoPill";
import api from "@/src/lib/api"

interface RecipesPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ReceitasPage({ params }: RecipesPageProps) {

  //precisei pegar com o gemini essa sintaxe antes de implementar o delete, o next nao criava o app se a page n fosse atualizada e logo após deletar o lib/data o cód quebrou 
  const { id } = await params;
  let recipe: Recipe | null = null;


  
  try {
    const response = await api.get(`/recipes/${id}`);
    recipe = response.data;
  } catch (error) {
    console.error(`Erro ao buscar a receita com ID ${id}:`, error);
  }

  if (!recipe) {
    return notFound();
  }

  return (
    <main className="grow py-8">
      <div className="container mx-auto px-4 max-w-8xl">
        <Link
          className="flex text-orange-500 hover:text-orange-700 transition-colors mb-6"
          href="/receitas"
        >
          Voltar para receitas
        </Link>

        <section className="rounded-lg overflow-hidden shadow-md">
          {/* Imagem da receita */}
          <div className="relative h-64 w-full">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          {/* Descrição da receita */}
          <div className="flex flex-col gap-6 p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl font-bold">{recipe.title}</h1>
            <p>{recipe.description}</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <InfoPill title="Preparo" info={recipe.prepTime} />
                <InfoPill title="Cozimento" info={recipe.cookTime} />
                <InfoPill title="Porções" info={recipe.servings} />
                <InfoPill title="Categoria" info={recipe.category} />
            </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <div>
                <h2 className="text-xl font-bold mb-4">Ingredientes</h2>
                <ul className="list-disc list-inside space-y-2">
                  {recipe.ingredients.map((ingredient, index) => {
                    const text = typeof ingredient === 'string' ? ingredient : ingredient.value;
                    return (
                      <li key={index} className="marker:text-orange-500">{text}</li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Modo de Preparo</h2>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, index) => {
                    const text = typeof instruction === 'string' ? instruction : instruction.value;
                    return (
                      <PreparationStep key={index} index={index + 1} description={text} />
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
