import { IconType } from "react-icons/lib";
import { FaFlagCheckered, FaMobileRetro } from "react-icons/fa6";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import ProjectCommandItem from "./ProjectCommandItem";

export type Project = {
  id: string;
  name: string;
  icon: IconType;
  createdAt: Date;
  tasks: string[];
};

export const projects: Project[] = [
  {
    id: "1",
    name: "Project 1",
    icon: FaMobileRetro,
    createdAt: new Date(),
    tasks: [],
  },
  {
    id: "2",
    name: "Project 2",
    icon: FaFlagCheckered,
    createdAt: new Date(),
    tasks: [],
  },
];

const ProjectSelectionDropDown = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"ghost"}
          className="w-full flex justify-between py-9 rounded-xl bg-gray-50"
        >
          {/* show the name of the selected project */}
          <div className="flex items-center flex-col text-base gap-1">
            <p className="text-[13px] text-slate-500">PROJECT</p>
            <p className="font-bold">{selectedProject.name}</p>
          </div>
          <div className="size-10 bg-primary rounded-full flex items-center justify-center text-2xl text-white">
            <selectedProject.icon />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-2 poppins rounded-xl">
        <ProjectCommandItem
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      </PopoverContent>
    </Popover>
  );
};

export default ProjectSelectionDropDown;
