"use client";

import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";
import { useEffect } from "react";
import StoreProvider, { useAppSelector } from "./redux";
import clsx from "clsx";
import AuthProvider from "@/components/AuthProvider";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSideBarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      <Sidebar />
      <main
        className={clsx({
          "flex w-full flex-col bg-gray-50 transition-all duration-500 dark:bg-dark-bg":
            true,
          "": isSideBarCollapsed,
          "md:pl-64": !isSideBarCollapsed,
        })}
      >
        <NavBar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <AuthProvider>
        <DashboardLayout>{children}</DashboardLayout>
      </AuthProvider>
    </StoreProvider>
  );
};

export default DashboardWrapper;
