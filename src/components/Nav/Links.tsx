"use client";
import { navLinks } from "@/constants/NavConstants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeBtn } from "../Buttons/ModeBtn";

const Links = () => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <>
      {/* desktop nav & hire me button */}
      {navLinks.map((link, i) => (
        <Link
          key={i}
          href={link.path}
          className={`${
            pathName === link.path
              ? "text-[#8B5CF6] font-semibold border-b-2 border-[#8B5CF6]"
              : "text-[#001F3F] hover:text-[#001F3F] dark:text-white dark:hover:text-[#8B5CF6]"
          }  duration-200
          capitalize font-medium hover:text-[#565CD6]  hover:border-[#565CD6] transition-all 
          `}
        >
          {link.name}
        </Link>
      ))}

      <ModeBtn />
    </>
  );
};

export default Links;
