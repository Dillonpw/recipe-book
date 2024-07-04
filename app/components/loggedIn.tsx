import { auth } from "@/auth";
import React from "react";
import { SignIn } from "./sign-in";
import { SignOut } from "./signout";

const LoggedIn = async () => {
  const session = await auth();

  if (!session?.user) return <SignIn />;

  return (
    <div className="mt-4 flex w-full items-center justify-between px-4">
      <p className="text-3xl">{session.user.name}</p>
      <SignOut />
    </div>
  );
};

export default LoggedIn;
