import RecipeList from "../components/recipeList";
import LoggedIn from "../components/loggedIn";

export default function Recipelist() {
  return (
    <div className="flex flex-col justify-center items-center m-10">
      <LoggedIn />
      <RecipeList />
    </div>
  );
}
