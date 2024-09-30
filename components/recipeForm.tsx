"use client";
import React, { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import addRecipe from "@/lib/actions/addRecipe";

const RecipeForm = () => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <>
      <h1 className="mb-5 text-center text-2xl font-bold md:text-4xl">
        Add A New Recipe
      </h1>
      <form
        ref={ref}
        action={async (formData) => {
          ref.current?.reset();
          await addRecipe(formData);
        }}
        className="mb-10"
      >
        <div className="mb-4">
          <label htmlFor="title" className="text-xl md:text-2xl">
            Title:
          </label>
          <Input
            className="text-black"
            type="text"
            id="title"
            name="title"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ingredients" className="text-xl md:text-2xl">
            Ingredients (comma-separated):
          </label>
          <Textarea
            className="text-black"
            id="ingredients"
            name="ingredients"
            required
          />
        </div>
        <div>
          <label htmlFor="steps" className="text-xl md:text-2xl">
            Steps (semicolon followed by a new line):
          </label>
          <Textarea className="text-black" id="steps" name="steps" required />
        </div>
        <Button className="mt-4" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};

export default RecipeForm;
