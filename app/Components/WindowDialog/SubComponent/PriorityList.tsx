import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";
import { IconType } from "react-icons/lib";
import {
  MdKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowUp,
} from "react-icons/md";
import { RiArrowDownDoubleFill } from "react-icons/ri";

type PriorityItem = {
  name: string;
  icon: IconType;
  textColor: string;
  backgroundColor: string;
};

const PriorityListArray: PriorityItem[] = [
  {
    name: "Low",
    icon: RiArrowDownDoubleFill,
    textColor: "text-green-700",
    backgroundColor: "bg-green-500/10",
  },
  {
    name: "Medium",
    icon: MdKeyboardDoubleArrowRight,
    textColor: "text-yellow-700",
    backgroundColor: "bg-yellow-500/10",
  },
  {
    name: "High",
    icon: MdOutlineKeyboardDoubleArrowUp,
    textColor: "text-red-700",
    backgroundColor: "bg-red-500/10",
  },
];

const PriorityList = () => {
  const [selectedPriority, setSelectedPriority] = useState<PriorityItem>(
    PriorityListArray[0]
  );

  // util function to render selected priority
  const renderSelectedPriority = () => {
    return (
      <div className="flex items-center gap-2">
        <div
          className={`size-6 ${selectedPriority.backgroundColor} rounded-md flex items-center justify-center text-lg ${selectedPriority.textColor}`}
        >
          {<selectedPriority.icon />}
        </div>
        <span className={`${selectedPriority.textColor}`}>
          {selectedPriority.name}
        </span>
      </div>
    );
  };

  // util function to render each dropdown item
  const renderDropDownMenuItem = (priorityItem: PriorityItem) => {
    return (
      <div className="flex items-center gap-2">
        <div
          className={`size-6 ${priorityItem.backgroundColor} rounded-md flex items-center justify-center text-lg ${priorityItem.textColor}`}
        >
          <priorityItem.icon />
        </div>
        <span className={`${priorityItem.textColor}`}>{priorityItem.name}</span>
      </div>
    );
  };

  // Function to render a checked icon
  const isDropDownItemChecked = (priorityItem: PriorityItem) => {
    return (
      <>{priorityItem.name === selectedPriority.name && <IoCheckmark />}</>
    );
  };
  return (
    <div>
      <Label className="opacity-75 text-sm font-medium">Priority</Label>
      <div className="mt-2 w-full">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              id="priority-dropdown"
              variant={"outline"}
              className="w-full h-11 flex justify-between"
            >
              {renderSelectedPriority()}
              <IoIosArrowDown className="text-gray-600" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="start"
            className="w-full min-w-[var(--radix-dropdown-menu-trigger-width)] poppins"
          >
            {PriorityListArray.map((item, index) => (
              <DropdownMenuItem
                key={index}
                onClick={() => setSelectedPriority(item)}
                className="flex justify-between items-center"
              >
                {renderDropDownMenuItem(item)}
                {isDropDownItemChecked(item)}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default PriorityList;
