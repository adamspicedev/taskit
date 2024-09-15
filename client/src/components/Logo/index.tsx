import clsx from "clsx";
import { CheckCheckIcon } from "lucide-react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div
      className={`text-gray-8000 flex flex-row items-center gap-2 text-xl font-bold transition-all duration-500 dark:text-white ${className}`}
    >
      <CheckCheckIcon className="size-8 text-green-400" />
      TASKIT
    </div>
  );
};

export default Logo;
