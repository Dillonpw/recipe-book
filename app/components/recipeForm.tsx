"use client";
import React, { useState } from "react";

const RecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const recipeData = {
      title,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      steps: steps.split(",").map((item) => item.trim()),
    };

    console.log("Submitting recipe data:", recipeData); // Debugging log

    const response = await fetch("/api/addRecipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipeData),
    });

    if (response.ok) {
      const newRecipe = await response.json();
      console.log("Recipe created successfully:", newRecipe);
    } else {
      const error = await response.json();
      console.error("Failed to create recipe:", error); // Debugging log
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="ingredients">Ingredients (comma-separated):</label>
        <input
          type="text"
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="steps">Steps (comma-separated):</label>
        <input
          type="text"
          id="steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RecipeForm;
