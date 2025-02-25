import { MdOutlineSortByAlpha } from "react-icons/md";
import SortingDropDown from "../../DropDown/SortingDropDown";
import { Button } from "@/components/ui/button";

const ProjectAreaTask = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <span className="text-2xl font-bold">Projects</span>

        {/* All Project Dialog */}
      </div>

      {/* Sorting label, icon and dropdown */}
      <div className="flex items-center gap-2">
        {/* Sort label and icon */}
        <div className="flex items-center gap-1">
          <MdOutlineSortByAlpha className="text-xl text-gray-500" />
          <span className="text-gray-500 text-sm">Sort</span>
        </div>

        {/* sorting dropdown */}
        <SortingDropDown />

        <Button className="rounded-3xl px-4">Add Task</Button>
      </div>
    </div>
  );
};

export default ProjectAreaTask;
