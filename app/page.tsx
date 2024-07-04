import LoggedIn from "./components/loggedIn";
import Link from "next/link";
import { Button } from "./components/ui/button";

const Content = () => {
  return (
    <div className="m-10 flex flex-col items-center justify-center">
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
  );
};
export default Content;
