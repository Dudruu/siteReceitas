import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { recipes } from "../lib/data";
import RecipeCard from "../components/recipeCards";

export default function Home() {
  const featureRecipes =recipes.slice(0,3);
  return (
    <main className="flex-grow">
      
        <section className="bg-orange-50 flex ">
          <div className="container mx-auto flex flex-col items-center  gap-6 py-12">
          <h1 className="text-5xl font-bold">Receitas deliciosas</h1>
          <p className="text-xl ">Descubra as receitas simples e saborosas para todas as ocasiões</p>
          <Link className="text-white bg-orange-500 px-3 py-2 font-bold rounded-lg hover:bg-orange-700 transition-colors"href="/receitas">Ver todas as receitas</Link>
          </div>
        </section>

        <section className="py-12">
        <div className="container mx-auto flex flex-col items-center gap-8git ">
          <h2 className="font-bold text-lg transition-colors">Receitas em destaque</h2>
          <div className="flex w-full gap-8">
            {featureRecipes.map((recipe)=>(
              <RecipeCard key={recipe.id} recipe={recipe}/>
            ))}
          </div>
          <Link className="flex text-orange-400 hover:text-orange-700 transition-colors" href="/receitas">Ver todas as receitas <ChevronRight /></Link>
        </div>


        </section>
      
    </main>
  );
}
