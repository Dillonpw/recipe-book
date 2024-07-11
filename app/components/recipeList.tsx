import React from "react";
import prisma from "../../lib/prisma";
import { auth } from "../../auth";
import { Button } from "./ui/button";
import { SignIn } from "./sign-in";
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
      <div className="flex h-full flex-col items-center justify-center text-center">
        <p className="mb-4 text-3xl">Sorry... You&apos;re Not Logged In.</p>
        <SignIn />
      </div>
    );
  }

  const userId = session.user.id;
  const recipes = await getRecipes(userId);

  if (!recipes || recipes.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
        <p className="text-2xl font-bold md:text-4xl">No recipes found</p>
        <Button variant="outline" asChild>
          <Link href="/new-recipe">Add New</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col items-center px-4 text-center">
      <h1 className="mb-8 text-2xl font-bold md:text-4xl">Recipe List</h1>
      <ul className="space-y-4 text-2xl">
        {recipes.map((recipe) => (
          <li
            key={recipe.id}
            className="flex w-full max-w-2xl items-center justify-between rounded-lg bg-white p-4 shadow dark:bg-gray-800"
          >
            <Link className="font-semibold underline" href={`/${recipe.id}`}>
              {recipe.title}
            </Link>
            <DeleteRecipe recipeId={recipe.id.toString()} />
          </li>
        ))}
      </ul>
    </div>
  );
}
