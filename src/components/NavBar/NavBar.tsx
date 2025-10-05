"use client";
import { IoCall } from "react-icons/io5";
import { Dosis } from "next/font/google";
import { UserButton } from "@clerk/nextjs";

const dosis = Dosis({
  subsets: ["latin"]
});

function NavBar() {
  return (
    <nav className={dosis.className}>
      <header>
        <ul className="bg-[#272727] flex items-center gap-2 justify-end px-4 md:pr-[12vw] text-[#6d6d6d] text-[10px] md:text-[12px] py-2.5 overflow-x-auto">
          <li className="flex items-center gap-1 md:gap-2 whitespace-nowrap">
            <span>
              <IoCall className="text-[#ffba00] text-sm" />
            </span>
            <span className="hover:text-[#ffba00] cursor-pointer">
              8&#40;800&#41;7668990
            </span>
          </li>
          <li className="flex  items-center gap-1 md:gap-2 whitespace-nowrap">
            <span>
              <IoCall className="text-[#ffba00] text-sm" />
            </span>
            <span className="hover:text-[#ffba00] cursor-pointer">
              8&#40;800&#41;7668991
            </span>
          </li>
          
        </ul>
      </header>
    </nav>
  );
}

export default NavBar;
