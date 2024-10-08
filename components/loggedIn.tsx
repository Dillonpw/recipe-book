import { auth } from "@/auth";
import React from "react";
import { SignOut } from "./sign-out";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Skeleton } from "./ui/skeleton";

const LoggedIn = async () => {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div className="flex w-full items-center justify-between bg-none px-2 py-1 duration-300">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src={session.user.image as string} />
          <AvatarFallback>
            <Skeleton className="h-12 w-12 rounded-full" />
          </AvatarFallback>
        </Avatar>
        <p className="text-xl font-bold md:text-3xl">{session.user.name}</p>
      </div>
      <SignOut />
    </div>
  );
};

export default LoggedIn;
