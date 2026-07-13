import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { recipes } from "../lib/data";
import RecipeCard from "../components/recipeCards";

export default function Home() {
  const featureRecipes = recipes.slice(0, 3);
  
  return (
    <main className="grow flex flex-col w-full">
      
        <section className="bg-orange-50 py-12 w-full">
          <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center">
            <h1 className="text-3xl sm:text-5xl font-bold">Receitas deliciosas</h1>
            <p className="text-base sm:text-xl">Descubra as receitas simples e saborosas para todas as ocasiões</p>
            
            <Link className="text-white bg-orange-500 px-3 py-2 font-bold rounded-lg hover:bg-orange-700 transition-colors" href="/receitas">
              Ver todas as receitas
            </Link>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto flex flex-col items-center gap-8 px-4">
            <h2 className="font-bold text-2xl transition-colors">Receitas em destaque</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
              {featureRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
            
            <Link className="flex text-orange-400 hover:text-orange-700 transition-colors" href="/receitas">
              Ver todas as receitas <ChevronRight />
            </Link>
          </div>
        </section>
      
    </main>
  );
}