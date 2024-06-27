import React from "react";
import { PrismaClient } from "@prisma/client";
import { auth } from "../../auth";
import Link from "next/link";
import RecipeForm from "./recipeForm";

interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
  steps: string[];
  tags: string[];
}

const prisma = new PrismaClient();

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
      </>
    );
  }

  return (
    <div className="m-4 h-full text-3xl">
      <h1 className="text-center text-4xl font-bold">Recipe List</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link className="un" href={`/${recipe.id}`}>
              {recipe.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
