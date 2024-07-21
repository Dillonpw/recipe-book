"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import addRecipe from "@/actions/addRecipe";

const RecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  return (
    <>
      <h1 className="text-center text-2xl font-bold mb-5 md:text-4xl">
        Add A New Recipe
      </h1>
      <form action={addRecipe} className="text-black mb-10">
        <div className="mb-4">
          <label htmlFor="title" className="text-xl md:text-2xl">
            Title:
          </label>
          <Input
            type="text"
            id="title"
            name="title"
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
            name="ingredients"
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
            name="steps"
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
