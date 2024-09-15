"use client";

import BoardView from "@/components/BoardView";
import ListView from "@/components/ListView";
import ProjectHeader from "@/components/ProjectHeader";
import TableView from "@/components/TableView";
import Timeline from "@/components/TimelineView";
import { ActiveTab } from "@/state/api";
import { useState } from "react";

type Props = {
  params: { id: string };
};

const ProjectByIdPage = ({ params }: Props) => {
  const { id } = params;
  const [activeTab, setActiveTab] = useState<ActiveTab>(ActiveTab.Board);
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState<boolean>(false);

  return (
    <div>
      <ProjectHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        id={Number(id)}
      />
      {activeTab === ActiveTab.Board && (
        <BoardView id={id} setIsNewTaskModalOpen={setIsNewTaskModalOpen} />
      )}
      {activeTab === ActiveTab.List && (
        <ListView id={id} setIsNewTaskModalOpen={setIsNewTaskModalOpen} />
      )}
      {activeTab === ActiveTab.Timeline && (
        <Timeline id={id} setIsNewTaskModalOpen={setIsNewTaskModalOpen} />
      )}
      {activeTab === ActiveTab.Table && (
        <TableView id={id} setIsNewTaskModalOpen={setIsNewTaskModalOpen} />
      )}
    </div>
  );
};

export default ProjectByIdPage;
