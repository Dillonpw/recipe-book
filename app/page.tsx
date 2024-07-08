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
          <h1 className="text-center text-6xl font-bold">
            Welcome To RecipeBook
          </h1>
          <p className="text-center text-3xl font-bold">
            Store and find recipes from all over the world.
          </p>
          <div className="flex gap-6">
            <Button variant="outline" asChild>
              <Link href="/new-recipe">Add New</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/recipelist">My Recipes</Link>
            </Button>
          </div>
          <LoginDialog />
        </div>
      </div>
    </>
  );
};
export default Content;
