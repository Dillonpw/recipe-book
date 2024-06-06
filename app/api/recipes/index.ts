import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const recipes = await sql`SELECT * FROM Recipes;`;
    return NextResponse.json({ recipes }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const { recipeName, ingredients, steps } = await request.json();

  try {
    if (!recipeName || !ingredients || !steps) {
      throw new Error("Recipe name, ingredients, and steps are required");
    }
    await sql`INSERT INTO Recipes (name, ingredients, steps) VALUES (${recipeName}, ${ingredients}, ${steps});`;
    return NextResponse.json(
      { message: "Recipe added successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const { id } = await request.json();

  try {
    if (!id) {
      throw new Error("Recipe ID is required");
    }
    await sql`DELETE FROM Recipes WHERE id = ${id};`;
    return NextResponse.json(
      { message: "Recipe deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
