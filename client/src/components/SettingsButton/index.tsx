"use client";

import { useAppSelector } from "@/app/redux";
import { Settings } from "lucide-react";
import Link from "next/link";
import React from "react";

const SettingButton = () => {
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  return (
    <Link
      href="/settings"
      className={
        isDarkMode
          ? "h-min w-min rounded p-2 dark:bg-gray-700"
          : "h-min w-min rounded bg-gray-100 p-2"
      }
    >
      <Settings className="size-6 cursor-pointer dark:text-white" />
    </Link>
  );
};

export default SettingButton;
