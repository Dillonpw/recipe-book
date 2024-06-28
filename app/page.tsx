import { SignIn } from "./components/sign-in";
import RecipeList from "./components/home";

const Content = () => {
  return (
    <div>
      <RecipeList />
      <SignIn />
      <a href="/new-recipe"> add</a>
    </div>
  );
};
export default Content;
