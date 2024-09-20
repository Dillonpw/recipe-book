"use server";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deleteRecipe = async (formData: FormData) => {
  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;
  const recipeId = formData.get("recipeId");

  if (!recipeId) {
    return NextResponse.json({ error: "Missing recipe ID" }, { status: 400 });
  }

  const recipe = await prisma.recipe.findUnique({
    where: { id: Number(recipeId) },
  });

  if (!recipe) {
    return NextResponse.json({ error: "Recipe not found" }, { status: 404 });
  }

  if (recipe.userId !== userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  await prisma.recipe.delete({
    where: { id: Number(recipeId) },
  });

  revalidatePath("/recipe-list");

  return NextResponse.redirect("/recipe-list");
};
