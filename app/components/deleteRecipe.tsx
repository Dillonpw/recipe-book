"use client";

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
      <button onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? "Deleting..." : "Delete Recipe"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default DeleteRecipe;
