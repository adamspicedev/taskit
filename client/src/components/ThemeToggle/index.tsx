"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode } from "@/state";
import { MoonIcon, SunIcon } from "lucide-react";
import React from "react";

const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  return (
    <button
      onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
      className={
        isDarkMode ? "rounded p-2 dark:bg-gray-700" : "rounded bg-gray-100 p-2"
      }
    >
      {isDarkMode ? (
        <SunIcon className="size-6 cursor-pointer dark:text-white" />
      ) : (
        <MoonIcon className="size-6 cursor-pointer dark:text-white" />
      )}
    </button>
  );
};

export default ThemeToggle;
