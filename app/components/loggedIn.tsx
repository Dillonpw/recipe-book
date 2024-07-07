import { auth } from "@/auth";
import React from "react";
import { SignOut } from "./sign-out";

const LoggedIn = async () => {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div className="mt-4 flex w-full items-center justify-between px-4">
      <p className="text-3xl">{session.user.name}</p>
      <SignOut />
    </div>
  );
};

export default LoggedIn;
