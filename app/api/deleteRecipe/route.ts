// pages/api/deleteRecipe/route.ts

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export async function DELETE(req: NextRequest) {
  try {
    const session = await auth();

    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;
    const { id } = await req.json();

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

    return NextResponse.json(
      { message: "Recipe deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Failed to delete recipe:", error);
    return NextResponse.json(
      { error: "Failed to delete recipe" },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
}
