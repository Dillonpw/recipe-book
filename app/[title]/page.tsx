import prisma from "@/lib/prisma";
import Link from "next/link";
import { deleteRecipe } from "@/lib/actions/deleteRecipe";
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
      <Button asChild variant="default">
        <Link href="/recipe-list" className="text-white">Back</Link>
      </Button>
      <h1 className="title text-center text-4xl mb-10">{recipe.title}</h1>
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
      <form className="flex items-center" action={deleteRecipe}>
        <input type="hidden" name="recipeId" value={recipe.id} />
        <Button variant="destructive">Delete</Button>
      </form>
    </div>
  );
}
