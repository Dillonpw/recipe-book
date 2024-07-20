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
      steps: steps.split(/\;\s*\n/).map((item) => item.trim()),
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
      alert("Recipe created successfully");
      setTitle("");
      setIngredients("");
      setSteps("");
    } else {
      const error = await response.json();
      console.error("Error creating recipe:", error);
    }
  };

  return (
    <>
      <h1 className="text-center text-2xl font-bold mb-5 md:text-4xl">
        Add A New Recipe
      </h1>
      <form onSubmit={handleSubmit} className="text-black mb-10">
        <div className="mb-4">
          <label htmlFor="title" className="text-xl  md:text-2xl">
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
          <label htmlFor="ingredients" className="text-xl md:text-2xl">
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
          <label htmlFor="steps" className="text-xl md:text-2xl">
            Steps (semicolon followed by a new line):
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
