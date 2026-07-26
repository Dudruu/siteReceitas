"use client";

import RecipeCard  from "@/src/components/recipeCards";
import RecipeFormModal from "@/src/components/recipeFormModal";
import { recipes } from "@/src/lib/data";
import { Plus } from "lucide-react";
import { useState } from "react";


export default function ReceitasPage() {
  const [isRecipeModalOpen, setIsRecipeModalOpen] =useState(false);
  return (
    <main className="grow py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between w-full">
        <h1 className="text-3xl sm:text-left font-bold">Todas as receitas</h1>
        <button onClick={()=>setIsRecipeModalOpen(true)} className="flex gap-2 px-4 text-white items-center py-2 border rounded-lg hover:bg-gray-800 transition:colors bg-black">
          <Plus size={16}/>
          Nova receita
        </button>
        
        </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"> 

            {recipes.map((recipe)=>(<RecipeCard key={recipe.id} recipe={recipe}/>))}
        </div>
      </div>
      <RecipeFormModal isOpen={isRecipeModalOpen} onClose={()=> setIsRecipeModalOpen(false)}/>
    </main>
  );
}
