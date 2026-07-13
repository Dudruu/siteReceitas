import Link from "next/link";
import Image from "next/image";
export default function RecipeCard(){
    return(
        <Link href="">
            <div className="border-slate-200 border rounded-lg overflow-hidden shadow-sm transition-shadow hover:shadow-md">
                <div className="relative h-48 w-full">
                    <Image 
                    src="/receitas/bolo-chocolate.jpg"
                    alt="Titulo da receita"
                    fill
                    />

                    
                </div>
                <div className="flex flex-col p-4 gap-2  ">
                    <h3 className="font-bold text-lg">Titulo da receita</h3>
                    <p>Descrição da receita</p>
                </div>
            </div>
        </Link>



    );


}