import { MdOutlineCategory } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { IoIosArrowDown, IoMdSearch } from "react-icons/io";

type ProjectItem = {
  name: string;
  icon: React.ElementType;
};

const ProjectArrays: ProjectItem[] = [
  { name: "Project 1", icon: MdOutlineCategory },
  { name: "Project 2", icon: AiFillSafetyCertificate },
];

const ProjectsList = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem>(
    ProjectArrays[0]
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filterBySearchQuery = ProjectArrays.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderSelectedProject = () => {
    const Icon = selectedProject.icon;
    return (
      <div className="flex items-center gap-2">
        <div className="size-7 rounded-md flex items-center justify-center text-lg text-primary bg-primary/10">
          <Icon />
        </div>
        <span>{selectedProject.name}</span>
      </div>
    );
  };

  const renderDropDownMenuItem = (projectItem: ProjectItem) => {
    const Icon = projectItem.icon;
    return (
      <div
        className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
        onClick={() => {
          setSelectedProject(projectItem);
          setIsOpen(false);
        }}
      >
        <div className="size-7 bg-primary/10 rounded-md flex items-center justify-center text-[15px] text-primary">
          <Icon />
        </div>
        <span>{projectItem.name}</span>
        {projectItem.name === selectedProject.name && (
          <IoCheckmark className="ml-auto" />
        )}
      </div>
    );
  };
  return (
    <div className="relative" ref={dropdownRef}>
      <label className="opacity-75 text-sm font-medium">Projects</label>

      {/* Dropdown Tirgger Button */}
      <div className="mt-1 w-full">
        <Button
          variant={"outline"}
          className="w-full h-11 flex justify-between items-center border"
          onClick={() => setIsOpen(!isOpen)}
        >
          {renderSelectedProject()}
          <IoIosArrowDown className="text-gray-600" />
        </Button>
      </div>

      {isOpen && (
        <div className="absolute overflow-hidden z-10 mt-2 w-full bg-white border broder-gray-300 rounded-lg shadow-lg">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-11 p-2 pl-8 text-sm border-b border-gray-300 focus:outline-none overflow-hidden"
            placeholder="Search a project..."
            autoFocus
          />

          <IoMdSearch className="absolute top-[13px] left-2 text-lg text-gray-500" />

          <div className="max-h-60 overflow-y-auto hidden">
            {filterBySearchQuery.map((item, index) => (
              <div key={index} className="text-sm">
                {renderDropDownMenuItem(item)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsList;
