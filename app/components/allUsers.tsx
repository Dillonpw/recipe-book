"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Skeleton } from "./ui/skeleton";

interface User {
  id: string;
  name: string;
  email: string;
  image: string;
}

const AllUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/social");
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await res.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchUsers();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="m-4 flex-grow text-2xl text-center md:text-4xl">Users List</h1>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul className="mx-4 font-bold">
          {users.map((user) => (
            <li className="flex items-center gap-2" key={user.id}>
              <Avatar>
                <AvatarImage src={user.image as string} />
                <AvatarFallback>
                  <Skeleton className="h-12 w-12 rounded-full" />
                </AvatarFallback>
              </Avatar>
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllUsers;
