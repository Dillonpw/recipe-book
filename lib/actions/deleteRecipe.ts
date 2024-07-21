"use server";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const deleteRecipe = async (id: string) => {
  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;

  if (!id) {
    return NextResponse.json({ error: "Missing recipe ID" }, { status: 400 });
  }

  const recipe = await prisma.recipe.findUnique({
    where: { id: Number(id) },
  });

  if (!recipe) {
    return NextResponse.json({ error: "Recipe not found" }, { status: 404 });
  }

  if (recipe.userId !== userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  await prisma.recipe.delete({
    where: { id: Number(id) },
  });
  revalidatePath("/recipe-list");
};

export default deleteRecipe;
