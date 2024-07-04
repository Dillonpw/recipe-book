import LoggedIn from "./components/loggedIn";
import Link from "next/link";
import { Button } from "./components/ui/button";

const Content = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-6xl font-bold">Welcome To RecipeBook</h1>
        <p className="text-3xl font-bold">Save and Find Recipes From All Over The World</p>
        <LoggedIn />
        <div className="m-10 flex gap-6">
          <Button variant="outline" asChild>
            <Link href="/new-recipe">Add New</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/recipelist">My Recipes</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Content;
