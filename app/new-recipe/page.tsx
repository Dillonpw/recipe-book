import React from "react";
import RecipeForm from "@/components/recipeForm";
import LoggedIn from "@/components/loggedIn";
export default function Page() {
  return (
    <>
      <LoggedIn />
      <div className="flex h-full flex-col items-center justify-center">
        <RecipeForm />
      </div>
    </>
  );
}
