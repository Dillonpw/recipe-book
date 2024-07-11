import LoggedIn from "./components/loggedIn";
import LoginDialog from "./components/loginDialog";
import Link from "next/link";
import { Button } from "./components/ui/button";

const Content = () => {
  return (
    <>
      <LoggedIn />
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-center text-2xl font-bold md:text-6xl">
            Welcome To RecipeBook
          </h1>
          <p className="mx-4 flex-wrap text-center text-xl font-bold md:text-3xl">
            Store and find recipes from all over the world.
          </p>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <Button variant="outline" size="default" asChild>
              <Link href="/new-recipe">New Recipe</Link>
            </Button>
            <Button variant="outline" size="default" asChild>
              <Link href="/recipelist">Recipes</Link>
            </Button>
            <Button variant="outline" size="default" asChild>
              <Link href="/social">Social</Link>
            </Button>
          </div>
          <LoginDialog />
        </div>
      </div>
    </>
  );
};
export default Content;
