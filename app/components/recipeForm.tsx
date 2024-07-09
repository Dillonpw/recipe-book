"use client";
import React, { useState } from "react";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Button } from "@/app/components/ui/button";

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
    }
  };

  return (
    <>
      <h1 className="text-center text-4xl font-bold">Add A New Recipe</h1>
      <form onSubmit={handleSubmit} className="m-10">
        <div className="mb-4">
          <label htmlFor="title" className="text-2xl">
            Title:
          </label>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ingredients" className="text-2xl">
            Ingredients (comma-separated):
          </label>
          <Textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="steps" className="text-2xl">
            Steps (comma-separated):
          </label>
          <Textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            required
          />
        </div>
        <Button className="mt-4" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};

export default RecipeForm;
