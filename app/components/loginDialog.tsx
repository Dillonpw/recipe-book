import { SignIn } from "./sign-in";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export default function LoginDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Sign In</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h1 className="xs:text-xl mb-6 text-center text-3xl">Sign In</h1>
          </DialogTitle>
          <DialogDescription>
            <div className="flex flex-col items-center justify-center gap-2">
              <SignIn />
              <p className="mb-[-1rem] mt-4">
                press anywhere outside this box to cancel
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
