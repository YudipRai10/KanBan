import { Button } from "@/components/ui/button";
import { BiTask } from "react-icons/bi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import TaskName from "./SubComponent/TaskName";
import TaskDescription from "./SubComponent/TaskDescription";
import ProjectsList from "./SubComponent/ProjectsList";
import PriorityList from "./SubComponent/PriorityList";

const TaskDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-3xl px-5">Add New Task</Button>
      </DialogTrigger>

      <DialogContent className="poppins max-w-3xl">
        <DialogHeader>
          <div className="size-10 bg-gray-200 rounded-full flex justify-center items-center">
            <BiTask className="text-xl text-gray-700" />
          </div>

          <div className="pt-2">
            <DialogTitle className="text-lg p-0 h-7">New Task</DialogTitle>
            <DialogDescription>
              Fill in the form below to create or modify a task
            </DialogDescription>
          </div>

          <div>
            <Separator className="mt-4 left-0 absolute" />
          </div>
        </DialogHeader>

        {/* Content */}
        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="flex flex-col gap-3">
            <TaskName />
            <TaskDescription />
          </div>
          <div className="flex flex-col gap--[53px]">
            <ProjectsList />
            <PriorityList />
          </div>
        </div>

        {/* Footer */}
        <div>
          <Separator className="mt-4 left-0 absolute" />
        </div>
        <div className="flex gap-1 justify-end mt-6">
          <Button type="button" variant={"secondary"}>
            Close
          </Button>
          <Button className="ml-5 px-5">Add New Task</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskDialog;
