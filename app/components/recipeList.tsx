import React, { useState, useEffect } from "react";
import prisma from "../../lib/prisma";
import { auth } from "../../auth";
import Link from "next/link";
import DeleteRecipe from "./deleteRecipe";

interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
  steps: string[];
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

async function getRecipes(userId: string): Promise<Recipe[]> {
  const recipes = await prisma.recipe.findMany({
    where: {
      userId,
    },
  });
  return recipes;
}

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const session = await auth();

      if (!session || !session.user || !session.user.id) {
        setLoading(false);
        return;
      }

      const userId = session.user.id;
      const recipes = await getRecipes(userId);
      setRecipes(recipes);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleDelete = async (deletedRecipeId: number) => {
    setRecipes(recipes.filter(recipe => recipe.id !== deletedRecipeId));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!recipes || recipes.length === 0) {
    return (
      <>
        <div>No recipes found</div>
        <Link href="/new-recipe">Add Recipe</Link>
      </>
    );
  }

  return (
    <div className="m-4 h-full text-3xl">
      <h1 className="text-center text-4xl font-bold">Recipe List</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} className="flex justify-between items-center">
            <Link className="un" href={`/${recipe.id}`}>
              {recipe.title}
            </Link>
            <DeleteRecipe recipeId={recipe.id} onDelete={() => handleDelete(recipe.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
