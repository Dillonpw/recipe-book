import LoggedIn from "./components/loggedIn";
import Link from "next/link";

const Content = () => {
  return (
    <div>
      <LoggedIn />
      <Link href="/new-recipe"> add</Link>
      <Link href="/recipelist"> list</Link>
    </div>
  );
};
export default Content;
