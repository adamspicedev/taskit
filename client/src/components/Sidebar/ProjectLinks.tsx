"use client";

import { useGetProjectsQuery } from "@/state/api";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import SidebarLink from "./SidebarLink";
import clsx from "clsx";

type Props = {};

const ProjectLinks = (props: Props) => {
  const [showProjects, setShowProjects] = useState<boolean>(true);

  const { data: projects } = useGetProjectsQuery();

  return (
    <>
      <button
        onClick={() => setShowProjects((prev) => !prev)}
        className="flex w-full items-center justify-between px-8 py-3 text-gray-500"
      >
        <span>Projects</span>
        {showProjects ? (
          <ChevronUp className="size-5" />
        ) : (
          <ChevronDown className="size-5" />
        )}
      </button>
      {/* PROJECT LIST */}
      <div
        className={clsx({
          "scrollbar overflow-y-scroll transition-all duration-500": true,
          "h-0": !showProjects,
          "h-80": showProjects,
        })}
      >
        {projects?.map((project) => (
          <SidebarLink
            key={project.id}
            href={`/projects/${project.id}`}
            icon={Briefcase}
            label={project.name}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectLinks;
