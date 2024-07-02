"use client";

import React from "react";

interface DeleteRecipeProps {
  recipeId: number;
  onDelete: () => void;
}

const DeleteRecipe: React.FC<DeleteRecipeProps> = ({ recipeId, onDelete }) => {
  const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete this recipe?");
    if (confirmed) {
      await fetch(`/api/recipes/${recipeId}`, {
        method: "DELETE",
      });
      onDelete();
    }
  };

  return (
    <button onClick={handleDelete} className="text-red-500">
      Delete
    </button>
  );
};

export default DeleteRecipe;
