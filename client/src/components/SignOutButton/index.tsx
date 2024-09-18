"use client";

import { useGetAuthUserQuery } from "@/state/api";
import { signOut } from "aws-amplify/auth";
import { User } from "lucide-react";
import Image from "next/image";
import React from "react";

const SignOutButton = () => {
  const { data: currentUser } = useGetAuthUserQuery({});
  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  if (!currentUser) return null;
  const currentUserDetails = currentUser?.userDetails;

  return (
    <div className="hidden items-center justify-between md:flex">
      <div className="align-center flex h-9 w-9 justify-center">
        {!!currentUserDetails?.profilePictureUrl ? (
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/${currentUserDetails?.profilePictureUrl}`}
            alt={currentUserDetails?.username || "User Profile Picture"}
            width={100}
            height={50}
            className="h-full rounded-full object-cover"
          />
        ) : (
          <User className="h-6 w-6 cursor-pointer self-center rounded-full dark:text-white" />
        )}
      </div>
      <span className="mx-3 text-gray-800 dark:text-white">
        {currentUserDetails?.username}
      </span>
      <button
        className="hidden rounded bg-blue-400 px-4 py-2 text-xs font-bold text-white hover:bg-blue-500 md:block"
        onClick={handleSignOut}
      >
        Sign out
      </button>
    </div>
  );
};

export default SignOutButton;
