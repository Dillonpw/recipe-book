import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const session = await auth();

    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;
    const { title, ingredients, steps } = await req.json();

    if (!title || !ingredients || !steps) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const newRecipe = await prisma.recipe.create({
      data: {
        title,
        ingredients,
        steps,
        user: {
          connect: { id: userId },
        },
      },
    });

    return NextResponse.json(newRecipe, { status: 201 });
  } catch (error) {
    console.error("Failed to create recipe:", error);
    return NextResponse.json(
      { error: "Failed to create recipe" },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
}
