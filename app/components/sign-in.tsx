import { signIn } from "@/auth";
import { Button } from "./ui/button";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SignIn() {
  return (
    <>
      <form
        className="mb-2"
        action={async () => {
          "use server";
          await signIn("github", { redirectTo: "/recipe-list" });
        }}
      >
        <Button type="submit" size="lg">
          <FontAwesomeIcon icon={faGithub} className="mr-2" />
          Signin with GitHub
        </Button>
      </form>
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/recipe-list" });
        }}
      >
        <Button type="submit" size="lg">
          <FontAwesomeIcon icon={faGoogle} className="mr-2" />
          Signin with Google
        </Button>
      </form>
    </>
  );
}
