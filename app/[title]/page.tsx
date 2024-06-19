import { PrismaClient } from '@prisma/client';

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
      <div className='mx-6 p-2'>
        <h1 className='text-4xl text-center'>{recipe.title}</h1>
        <h2 className='text-2xl font-bold'>Ingredients</h2>
        <ul className='list-disc'>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className='text-2xl font-bold'>Steps</h2>
        <ol className='list-decimal'>
          {recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
        <ul>
          {recipe.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }