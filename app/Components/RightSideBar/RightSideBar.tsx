import ProgressSelectionDropDown from "../DropDown/ProjectSelection/ProjectSelectionDropDown";
import CircularProgress from "./CircularProgress";
import TaskStats from "./TaskStats";

const RightSideBar = () => {
  return (
    <div className="shadow-none p-6 rounded-3xl max-h-[640px]">
      <div className="flex flex-col">
        <ProgressSelectionDropDown />
        <CircularProgress />
        <TaskStats />
      </div>
    </div>
  );
};

export default RightSideBar;
