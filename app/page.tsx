import { PrismaClient } from "@prisma/client";
import Link from "next/link";

interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
  steps: string[];
  tags: string[];
  image: string | null;
}

const prisma = new PrismaClient();

async function getRecipes(): Promise<Recipe[]> {
  const recipes = await prisma.recipe.findMany();
  return recipes;
}

export default async function RecipePage() {
  const recipes = await getRecipes();

  if (!recipes || recipes.length === 0) {
    return <div>No recipes found</div>;
  }

  return (
    <div className="m-4 h-full text-3xl">
      <h1 className="text-4xl text-center font-bold">Recipe List</h1>
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
