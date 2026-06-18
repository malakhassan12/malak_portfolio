import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { EllipsisVertical } from "lucide-react";
import Logo from "../Logo/Logo";
import Links from "./Links";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
        <EllipsisVertical className="text-[32px] text-blue-600" />
      </SheetTrigger>
      
      <SheetContent className="flex flex-col p-6 gap-8 w-[320px]">
        <Logo />
        <Links  />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;