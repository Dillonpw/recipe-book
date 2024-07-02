import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

interface Params {
    id: string;
}
export async function DELETE(req: NextApiRequest, { params }: { params: Params }) {
  const recipeId = Number(params.id);

  try {
    await prisma.recipe.delete({
      where: { id: recipeId },
    });
    return new Response(JSON.stringify({ message: "Recipe deleted successfully" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error deleting recipe" }), { status: 500 });
  }
}
