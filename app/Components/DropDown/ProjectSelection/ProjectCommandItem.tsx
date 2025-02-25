import React from "react";
import { Project, projects } from "./ProjectSelectionDropDown";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import SingleProjectCommandItem from "./SingleProjectCommandItem";

const ProjectCommandItem = ({
  selectedProject,
  setSelectedProject,
}: {
  selectedProject: Project;
  setSelectedProject: React.Dispatch<React.SetStateAction<Project>>;
}) => {
  const handleProjectSelection = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <Command>
      <CommandInput placeholder="Search a project..." />
      <CommandList className="my-3">
        <CommandEmpty>No results found.</CommandEmpty>
      </CommandList>

      <div className="flex flex-col gap-3">
        {projects.map((project, index) => (
          <SingleProjectCommandItem
            key={index}
            project={project}
            onSelectedItem={handleProjectSelection}
            isSelected={selectedProject.name === project.name}
          />
        ))}
      </div>
    </Command>
  );
};

export default ProjectCommandItem;
