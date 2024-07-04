import { signIn } from "@/auth";
import { Button } from "./ui/button";

export function SignIn() {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signIn("github", { redirectTo: "/recipelist" });
        }}
      >
        <Button type="submit">Signin with GitHub</Button>
      </form>
    </>
  );
}
