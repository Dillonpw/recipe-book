import React from "react";
import prisma from "../../lib/prisma";
import { auth } from "../../auth";
import Link from "next/link";
import DeleteRecipe from "../components/deleteRecipe";

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

export default async function RecipeList() {
  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    return (
      <>
        <div>No recipes found</div>
      </>
    );
  }

  const userId = session.user.id;
  const recipes = await getRecipes(userId);

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
          <li key={recipe.id} className="flex items-center space-x-4">
            <Link className="un" href={`/${recipe.id}`}>
              {recipe.title}
            </Link>
            <DeleteRecipe recipeId={recipe.id.toString()} />
          </li>
        ))}
      </ul>
    </div>
  );
}
