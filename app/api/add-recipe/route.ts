import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const recipeName = searchParams.get("recipeName");
  const ingredients = searchParams.get("ingredients");
  const steps = searchParams.get("steps");

  try {
    if (!recipeName || !ingredients || !steps)
      throw new Error("Recipe name, ingredients, and steps are required");
    await sql`INSERT INTO Recipes (name, ingredients, steps) VALUES (${recipeName}, ${ingredients}, ${steps});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const recipes = await sql`SELECT * FROM Recipes;`;
  return NextResponse.json({ recipes }, { status: 200 });
}
