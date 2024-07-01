import prisma from "@/lib/prisma";
import Link from "next/link";

async function getRecipe() {
  const recipe = await prisma.recipe.findFirst();
  return recipe;
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
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold">Steps</h2>
      <ol className="list-decimal">
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
