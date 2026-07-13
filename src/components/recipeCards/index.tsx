import Link from "next/link";
import Image from "next/image";

import { Recipe } from "@/src/lib/data";
interface RecipeCardProps {
    recipe: Recipe
}



export default function RecipeCard({recipe}:RecipeCardProps){
    return(
        <Link href= {`/receitas/${recipe.id}`}>
            <div className="border-slate-200 border rounded-lg overflow-hidden shadow-sm transition-shadow hover:shadow-md">
                <div className="relative h-48 w-full">
                    <Image 
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    />

                    
                </div>
                <div className="flex flex-col p-4 gap-2  ">
                    <h3 className="font-bold text-lg">{recipe.title}</h3>
                    <p>{recipe.description}</p>
                </div>
            </div>
        </Link>



    );


}