import { PrismaClient } from '@prisma/client';
import Link from "next/link";

async function getRecipe() {
    const prisma = new PrismaClient();
    const recipe = await prisma.recipe.findFirst();
    return recipe;
  }
  
  export default async function RecipePage() {
    const recipe = await getRecipe();
  
    if (!recipe) {
      return <div>No recipe found</div>;
    }
  
    return (
      <div>
        <Link href={`/${recipe.title}`}>{recipe.title}</Link>
      </div>
    );
  }