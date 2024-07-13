"use client";

import { Button } from "./ui/button";
import { useState } from "react";

interface DeleteRecipeProps {
  recipeId: string;
}

const DeleteRecipe: React.FC<DeleteRecipeProps> = ({ recipeId }) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    setIsDeleting(true);
    setError(null);

    try {
      const response = await fetch(`/api/deleteRecipe`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: recipeId }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete the recipe");
      }

      alert("Recipe deleted successfully");
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div>
      <Button variant="destructive" onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? "Deleting..." : "Delete"}
      </Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default DeleteRecipe;
