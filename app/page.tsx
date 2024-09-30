import LoggedIn from "@/components/loggedIn";
import LoginDialog from "@/components/loginDialog";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Content = () => {
  return (
    <>
      <LoggedIn />
      <div className="relative flex h-full items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="title text-center text-4xl font-bold text-gray-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,4)] md:text-5xl">
            RecipeBook
          </h1>
          <p className="title mx-4 flex-wrap text-center text-xl font-bold text-gray-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,4)] md:text-3xl">
            Store and find recipes from all over the world.
          </p>
          <div className="flex items-center justify-center gap-2">
            <Button variant="default" size="default" asChild>
              <Link href="/new-recipe">New Recipe</Link>
            </Button>
            <Button variant="default" size="default" asChild>
              <Link href="/recipe-list">Recipes</Link>
            </Button>
            <Button variant="default" size="default" asChild>
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
