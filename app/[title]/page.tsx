import prisma from "@/lib/prisma";
import Link from "next/link";
import DeleteRecipe from "../components/deleteRecipe";

interface Recipe {
  id: string;
  title: string;
  ingredients: string[];
  steps: string[];
}

async function getRecipe(): Promise<Recipe | null> {
  const recipe = await prisma.recipe.findFirst();
  return recipe as Recipe | null;
}

export default async function RecipePage() {
  const recipe = await getRecipe();

  if (!recipe) {
    return <div>No recipe found</div>;
  }

  return (
    <div className="mx-6 p-2">
      <h1 className="text-center text-4xl">{recipe.title}</h1>
      <h2 className="text-2xl font-bold">Ingredients</h2>
      <ul className="list-disc">
        {recipe.ingredients.map((ingredient: string, index: number) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold">Steps</h2>
      <ol className="list-decimal">
        {recipe.steps.map((step: string, index: number) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <DeleteRecipe recipeId={recipe.id} />
      <Link href="/">Back to Home</Link>
    </div>
  );
}
