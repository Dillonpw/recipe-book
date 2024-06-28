import { auth } from "@/auth";
import React from "react";

const LoggedIr: React.FC = async () => {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div>
      <p>{session.user.name}</p>
    </div>
  );
};

export default LoggedIr;
