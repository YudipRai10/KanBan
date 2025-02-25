import { useTheme } from "next-themes";
import SingleTask from "./SingleTask";

export type Board = {
  name: string;
  createdAt: Date;
  tasks: string[];
};

const SingleBoard = ({ board }: { board: Board }) => {
  const { name: boardName, tasks } = board;
  const { theme } = useTheme();
  const numberTasks = tasks.length;

  const bgColor = theme === "dark" ? "bg-black" : "bg-gray-100";
  return (
    <div className="w-full h-full border p-4 rounded-2xls">
      {/* board header */}
      <div
        className={`flex justify-between ${bgColor} p-4 rounded-lg items-center`}
      >
        {/* header name */}
        <span className="font-medium text-md">{boardName}</span>

        {/* Container for tasks number */}
        <div className="size-6 rounded-full bg-primary text-white flex items-center justify-center">
          <span className="text-sm mt-0.5">{numberTasks}</span>
        </div>
      </div>

      {/* Tasks Container */}
      <div className="mt-7 space-y-2">
        {[1, 2].map((index) => (
          <SingleTask key={index} />
        ))}
      </div>
    </div>
  );
};

export default SingleBoard;
