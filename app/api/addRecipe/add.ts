import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { title, ingredients, steps, tags, userId } = req.body;

    if (!title || !ingredients || !steps || !tags || !userId) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const newRecipe = await prisma.recipe.create({
        data: {
          title,
          ingredients,
          steps,
          tags,
          user: {
            connect: { id: userId },
          },
        },
      });

      return res.status(201).json(newRecipe);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to create recipe" });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
