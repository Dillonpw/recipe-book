"use client";
import { useEffect, useState } from "react";

interface Recipe {
  id: number;
  name: string;
  ingredients: string;
  steps: string;
  created_at: string;
}

export default function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("/api/recipes");
        const data = await response.json();
        if (response.ok) {
          setRecipes(data.recipes);
        } else {
          setError(data.error);
        }
      } catch (error) {
        setError("Failed to fetch recipes");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch("/api/recipes", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const result = await response.json();
      if (response.ok) {
        setRecipes((prevRecipes) =>
          prevRecipes.filter((recipe) => recipe.id !== id),
        );
      } else {
        setError(result.error);
      }
    } catch (error) {
      setError("Failed to delete recipe");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>All Recipes</h1>
      {recipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <h2>{recipe.name}</h2>
              <p>
                <strong>Ingredients:</strong> {recipe.ingredients}
              </p>
              <p>
                <strong>Steps:</strong> {recipe.steps}
              </p>
              <p>
                <em>
                  Created at: {new Date(recipe.created_at).toLocaleString()}
                </em>
              </p>
              <button onClick={() => handleDelete(recipe.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
