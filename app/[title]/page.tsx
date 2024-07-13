import prisma from "@/lib/prisma";
import Link from "next/link";
import DeleteRecipe from "../components/deleteRecipe";
import { Button } from "../components/ui/button";

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
    <div className="mx-10 p-2">
      <h1 className="text-center text-4xl title">{recipe.title}</h1>
      <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
      <ul className="list-disc mb-4">
        {recipe.ingredients.map((ingredient: string, index: number) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold mb-2">Steps</h2>
      <ol className="list-decimal mb-4">
        {recipe.steps.map((step: string, index: number) => (
          <li className="mb-2" key={index}>{step}</li>
        ))}
      </ol>
      <div className="flex justify-between items-center">
        <DeleteRecipe recipeId={recipe.id} />
        <Button asChild variant="link">
          <Link href="/">Back</Link>
        </Button>
      </div>
    </div>
  );
}
