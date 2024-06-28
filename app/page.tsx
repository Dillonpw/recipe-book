import { SignIn } from "./components/sign-in";
import { SignOut } from "./components/signout";
import Link from "next/link";

const Content = () => {
  return (
    <div>
      <SignIn />
      <SignOut />
      <Link href="/new-recipe"> add</Link>
      <Link href="/recipelist"> list</Link>

    </div>
  );
};
export default Content;
