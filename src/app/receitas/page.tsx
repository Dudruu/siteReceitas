"use client";

import DeleteConfirmationModal from "@/src/components/DeleteConfirmationModal";
import RecipeCard  from "@/src/components/recipeCards";
import RecipeFormModal from "@/src/components/recipeFormModal";
import api from "@/src/lib/api";

import type { Recipe } from "@/src/lib/data";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";


export default function ReceitasPage() {
  const [isRecipeModalOpen, setIsRecipeModalOpen] =useState(false);
  const [recipes, setRecipes]= useState<Recipe[]>([]);
  const [modalMode, setModalMode] = useState<"create"|"edit">("create");
  const [isDeleteConfirmationModalOPen, setIsDeleteConfirmationModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | undefined>(undefined);

  useEffect(()=>{
    const fetchRecipes = async ()=>{
        try{
          
          const response = await api.get("/recipes");
          setRecipes(response.data)
        } catch(error){
          console.error("erro ao requisitar",error);
        }
    }
    fetchRecipes();
  },[])
  
  const handleOpenCreateModal = ()=>{
    setModalMode("create");
    setSelectedRecipe(undefined);
    setIsRecipeModalOpen(true);
  }

  const handleOpenEditModal =(recipe : Recipe)=>{
    setModalMode("edit");
    setSelectedRecipe(recipe);
    setIsRecipeModalOpen(true);
  }

  const handleCloseModal = ()=>{
    setIsRecipeModalOpen(false)
  }

  const handleDeleteRecipe=()=>{
    if(selectedRecipe){
      setRecipes((prev)=> (prev.filter((recipe)=>recipe.id!==selectedRecipe.id)))
      setIsDeleteConfirmationModalOpen(false);
      setSelectedRecipe(undefined);
    }
  }

  const handleOpendDeleteConfirmationModal = (recipe: Recipe)=>{
    setSelectedRecipe(recipe);
    setIsDeleteConfirmationModalOpen(true);
  }

  const handleSaveRecipe =(recipeData : Omit<Recipe, "id">| Recipe)=> {
    if(modalMode==="create"){
      const newRecipe: Recipe = {
      ...recipeData,
      id: (recipes.length +1).toString(),
    }
    setRecipes((prev)=>[...prev, newRecipe])
    } else{
      const updateRecipe = recipeData as Recipe
      setRecipes((prev)=>
        prev.map((recipe)=>
          (recipe.id === updateRecipe.id ? updateRecipe : recipe))
    );
    }
    handleCloseModal();
    
  }

  return (
    <main className="grow py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between w-full">
        <h1 className="text-3xl sm:text-left font-bold">Todas as receitas</h1>
        <button onClick={handleOpenCreateModal} className="flex gap-2 px-4 text-white items-center py-2 border rounded-lg hover:bg-gray-800 transition:colors bg-black">
          <Plus size={16}/>
          Nova receita
        </button>
        
        </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"> 

            {recipes.map((recipe)=>(<RecipeCard key={recipe.id} onDelete= {()=>handleOpendDeleteConfirmationModal(recipe) }recipe={recipe} onEdit={()=>handleOpenEditModal(recipe)}/>))}
        </div>
      </div>
      <RecipeFormModal isOpen={isRecipeModalOpen}  onClose={ handleCloseModal} onSave={handleSaveRecipe} mode={modalMode} recipe={selectedRecipe}/>
      <DeleteConfirmationModal isOpen={isDeleteConfirmationModalOPen} onClose={()=> setIsDeleteConfirmationModalOpen (false)} onConfirm={handleDeleteRecipe} recipe={selectedRecipe}/>
    </main>
  ); 
}
 