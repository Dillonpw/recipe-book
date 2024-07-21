import prisma from "@/lib/prisma";
import Link from "next/link";
import DeleteRecipe from "@/components/deleteRecipe";
import { Button } from "@/components/ui/button";

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
    <div className="mx-10 flex flex-col p-2">
      <Button className="justify-end" asChild variant="link">
        <Link href="/">Back</Link>
      </Button>
      <h1 className="title text-center text-4xl">{recipe.title}</h1>
      <h2 className="mb-2 text-2xl font-bold">Ingredients</h2>
      <ul className="mb-4 list-disc">
        {recipe.ingredients.map((ingredient: string, index: number) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="pb-2 text-2xl font-bold">Steps</h2>
      <ol className="list-decimal pb-4">
        {recipe.steps.map((step: string, index: number) => (
          <li className="pb-2" key={index}>
            {step}
          </li>
        ))}
      </ol>
      <div className="flex items-center">
        <DeleteRecipe recipeId={recipe.id} />
      </div>
    </div>
  );
}
