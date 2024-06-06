"use client";
import { useState } from "react";

export default function AddRecipe() {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch("/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recipeName, ingredients, steps }),
    });

    const result = await response.json();
    setMessage(result.message || result.error);
  };

  return (
    <div>
      <h1>Add a New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Recipe Name:</label>
          <input
            type="text"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Ingredients:</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Steps:</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Recipe</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
