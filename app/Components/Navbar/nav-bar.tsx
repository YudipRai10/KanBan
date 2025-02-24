import { Separator } from "@/components/ui/separator";
import LogoApp from "./logo-app";
import { ModeToggle } from "../../mode-toggle";
import SearchBar from "./search-bar";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="poppins p-6 flex justify-between items-center">
      <div className="flex items-center gap-16">
        <LogoApp />
        <SearchBar />
      </div>

      <div className="flex items-center gap-5">
        <ModeToggle />
        <Separator orientation="vertical" className="h-5 w-0.5 bg-gray-500" />

        <Button className="rounded-3xl h-10 shadow-none">
          Add New Project
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
