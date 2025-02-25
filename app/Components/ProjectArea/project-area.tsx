import ProjectAreaBoards from "./ProjectAreaBoard/project-area-boards";
import ProjectAreaTask from "./ProjectAreaHeader/project-area-header";

const ProjectArea = () => {
  return (
    <div className="shadow-none p-7 rounded-3xl px-7 flex flex-col gap-8">
      <ProjectAreaTask />
      <ProjectAreaBoards />
    </div>
  );
};

export default ProjectArea;
