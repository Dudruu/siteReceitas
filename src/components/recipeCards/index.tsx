// recipeCard.t"s"x

"use client";
import Link from "next/link";
import Image from "next/image";
import { Recipe } from "@/src/lib/data";
import { Edit, Trash2 } from "lucide-react";

interface RecipeCardProps {
  recipe: Recipe;
  onEdit: () => void;
}

export default function RecipeCard({ recipe, onEdit }: RecipeCardProps) {
  
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Evita o comportamento padrão do botão
    e.stopPropagation(); // Impede que o evento suba até o <Link>
    onEdit();
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Faltava os () aqui no seu código
    e.stopPropagation(); // Impede que o evento suba até o <Link>
    
    // Futuramente você colocará a lógica de deletar aqui:
    // onDelete(recipe.id);
  };

  return (
    <Link href={`/receitas/${recipe.id}`}>
      <div className="border-slate-200 border rounded-lg overflow-hidden shadow-sm transition-shadow hover:shadow-md">
        <div className="relative h-48 w-full">
          <Image src={recipe.image} alt={recipe.title} className="object-cover" fill />
        </div>

        <div className="flex flex-col p-4 gap-2">
          <div className="space-y-2">
            <h3 className="font-bold text-lg hover:text-orange-500 transition-colors">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>

          <div className="flex items-center justify-between w-full">
            <span className="text-sm bg-gray-100 px-2 py-1 text-gray-500 rounded">
              {recipe.category}
            </span>
            <div className="flex gap-2">
              <button 
                type="button" 
                onClick={handleEdit} 
                className="p-2 border border-gray-200 hover:bg-gray-200 transition-colors cursor-pointer"
              >
                <Edit size={16}/>
              </button>
              <button  
                type="button" 
                onClick={handleDelete} 
                className="p-2 border border-gray-200 hover:bg-gray-200 transition-colors cursor-pointer"
              >
                <Trash2 size={16}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}