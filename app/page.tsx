import { SignIn } from "./components/sign-in";
import RecipeList from "./components/home";

const Content = () => {
  return (
    <div>
      <RecipeList />
      <SignIn />
    </div>
  );
};
export default Content;
