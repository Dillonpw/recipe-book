"use server";
import { NextResponse } from "next/server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const addRecipe = async (formData: FormData) => {
  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;
  const title = formData.get("title") as string;
  const ingredients = formData.get("ingredients") as string;
  const steps = formData.get("steps") as string;

  await prisma.recipe.create({
    data: {
      title,
      ingredients: ingredients.split(","),
      steps: steps.split(";"),
      user: {
        connect: { id: userId },
      },
    },
  });
  revalidatePath("/recipe-list");
};

export default addRecipe;
