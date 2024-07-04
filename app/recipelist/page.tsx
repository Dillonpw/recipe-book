import RecipeList from "../components/recipeList";
import LoggedIn from "../components/loggedIn";

export default function Recipelist() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <LoggedIn />
      <RecipeList />
    </div>
  );
}
