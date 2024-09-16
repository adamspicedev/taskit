import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import { motion } from "framer-motion";
import { Menu, Search } from "lucide-react";
import Logo from "../Logo";
import SettingButton from "../SettingsButton";
import ThemeToggle from "../ThemeToggle";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const isSideBarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black">
      {/* search bar */}
      <div className="flex items-center gap-8">
        {!isSideBarCollapsed ? null : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-8"
          >
            <button
              onClick={() =>
                dispatch(setIsSidebarCollapsed(!isSideBarCollapsed))
              }
            >
              <Menu className="size-8 dark:text-white" />
            </button>
            <Logo />
          </motion.div>
        )}
        <div className="relative flex h-min w-[200px]">
          <Search className="absolute left-1 top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white" />
          <input
            type="search"
            placeholder="Search....."
            className="w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white"
          />
        </div>
      </div>

      {/* Icons */}
      <div className="hidden items-center gap-2 sm:flex">
        <ThemeToggle />
        <SettingButton />
        <div className="ml-2 mr-5 hidden min-h-8 w-[0.1rem] bg-gray-200 md:inline-block"></div>
      </div>
    </div>
  );
};

export default NavBar;
