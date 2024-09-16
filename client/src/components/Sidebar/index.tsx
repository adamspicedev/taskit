"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import Logo from "@/components/Logo";
import { setIsSidebarCollapsed } from "@/state";
import { clsx } from "clsx";
import {
  Briefcase,
  Home,
  LockIcon,
  Search,
  Settings,
  User,
  Users,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import SettingButton from "../SettingsButton";
import ThemeToggle from "../ThemeToggle";
import PriorityLinks from "./PriorityLinks";
import ProjectLinks from "./ProjectLinks";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSideBarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  return (
    <div
      className={clsx({
        "flex-h-col scrollbar fixed z-40 flex h-full justify-between overflow-y-auto bg-white shadow-xl transition-all duration-500 dark:bg-black":
          true,
        "-left-64 w-64": isSideBarCollapsed,
        "left-0 w-64": !isSideBarCollapsed,
      })}
    >
      <div className="flex h-full flex-col justify-start">
        <div className="z-50 flex min-h-14 w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          {/* LOGO */}
          <Logo />
          {isSideBarCollapsed ? null : (
            <button
              className="py-3"
              onClick={() =>
                dispatch(setIsSidebarCollapsed(!isSideBarCollapsed))
              }
            >
              <XIcon className="size-6 text-gray-800 hover:text-gray-500 dark:text-white" />
            </button>
          )}
        </div>
        <div className="flex w-full items-center justify-center gap-2 p-4 sm:hidden">
          <ThemeToggle />
          <SettingButton />
        </div>

        {/* TEAM */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-800">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <div>
            <h3 className="text-md from-bold tracking-wide dark:text-gray-200">
              SPICEY DEV
            </h3>
            <div className="mt-1 flex items-start gap-2">
              <LockIcon className="mt-[0.1rem] size-3 text-gray-500 dark:text-gray-400" />
              <p className="t-gray-500 text-xs">Private</p>
            </div>
          </div>
        </div>

        {/* NAVBAR LINKS */}
        <nav className="z-10 w-full">
          <SidebarLink href="/" icon={Home} label="Home" />
          <SidebarLink href="/timeline" icon={Briefcase} label="Timeline" />
          <SidebarLink href="/search" icon={Search} label="Search" />
          <SidebarLink href="/settings" icon={Settings} label="Settings" />
          <SidebarLink href="/users" icon={User} label="Users" />
          <SidebarLink href="/teams" icon={Users} label="Teams" />
        </nav>

        {/* PROJECT LINKS */}
        <ProjectLinks />

        {/* PRIORITIES LINKS */}
        <PriorityLinks />
      </div>
    </div>
  );
};

export default Sidebar;
