import React, { useState } from "react";
import SidebarLink from "./SidebarLink";
import {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Layers3,
  ShieldAlert,
} from "lucide-react";
import clsx from "clsx";

const PriorityLinks = () => {
  const [showPriority, setShowPriority] = useState<boolean>(true);

  return (
    <>
      <button
        onClick={() => setShowPriority((prev) => !prev)}
        className="flex w-full items-center justify-between px-8 py-3 text-gray-500"
      >
        <span>Priority</span>
        {showPriority ? (
          <ChevronUp className="size-5" />
        ) : (
          <ChevronDown className="size-5" />
        )}
      </button>

      <div
        className={clsx({
          "scrollbar overflow-y-scroll transition-all duration-500": true,
          "h-0": !showPriority,
          "h-80 pb-10": showPriority,
        })}
      >
        <SidebarLink
          href="/priority/urgent"
          icon={AlertCircle}
          label="Urgent"
        />
        <SidebarLink href="/priority/high" icon={ShieldAlert} label="High" />
        <SidebarLink
          href="/priority/medium"
          icon={AlertTriangle}
          label="Medium"
        />
        <SidebarLink href="/priority/low" icon={AlertOctagon} label="Low" />
        <SidebarLink href="/priority/backlog" icon={Layers3} label="Backlog" />
      </div>
    </>
  );
};

export default PriorityLinks;
