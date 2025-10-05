"use client";

import Image from "next/image";
import { useState } from "react";
import { Raleway } from "next/font/google";
import { HiMenu, HiX } from "react-icons/hi";
import { UserButton } from "@clerk/nextjs";
// import { UserButton } from "@clerk/nextjs";

const raleway = Raleway({ subsets: ["latin"] });

function FixedNavBar({ height }: { height?: number }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isFixed = height !== undefined && height >= 300;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    "Home",
    "About Us",
    "Get a cab",
    "Reviews",
    "Our news",
    "Contact us"
  ];

  return (
    <nav
      className={`
        ${raleway.className} w-full font-semibold
        ${
          isFixed
            ? "fixed top-0 z-50 bg-white text-black"
            : "bg-transparent text-white"
        }
        transition-colors duration-300
      `}
      style={{
        boxShadow: isFixed ? "0 2px 8px rgba(0,0,0,0.06)" : "none"
      }}>
      <header className="flex items-center justify-between px-4 md:px-[12%] py-2 md:py-3">
        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <Image
            src="/png/logo2.png"
            alt="Logo2"
            width={80}
            height={40}
            className="md:w-[100px] md:h-[50px]"
          />
          <p className="text-[10px] md:text-[12px] cursor-pointer whitespace-nowrap">
            Premier Taxi Services
          </p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-[1vw] uppercase font-semibold text-[15px]">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="hover:bg-[#ffba00] py-2 px-3 rounded-full transition ease-in delay-100 cursor-pointer whitespace-nowrap">
              {item}
            </li>
          ))}
          <UserButton />
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-md hover:bg-opacity-20 hover:bg-[#ffba00] transition-colors"
          aria-label="Toggle menu">
          {isMenuOpen ? (
            <HiX className="w-6 h-6 cursor-pointer" />
          ) : (
            <HiMenu className="w-6 h-6 cursor-pointer" />
          )}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={toggleMenu}>
          <div
            className={`
              fixed top-0 right-0 h-full w-64 
              ${isFixed ? "bg-white text-black" : "bg-gray-900 text-white"}
              shadow-lg transform transition-transform duration-300 ease-in-out
            `}
            onClick={(e) => e.stopPropagation()}>
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 ">
              <span className="font-semibold">Menu</span>
              <button
                onClick={toggleMenu}
                className="p-1 rounded-md hover:bg-opacity-20 hover:bg-gray-500"
                aria-label="Close menu">
                <HiX className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <ul className="flex flex-col p-4 space-y-2">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="py-3 px-4 rounded-lg hover:bg-[#ffba00] hover:text-black transition-colors cursor-pointer uppercase font-semibold text-sm"
                  onClick={toggleMenu}>
                  {item}
                </li>
              ))}
              <div className="flex justify-center ">
                <UserButton />
              </div>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default FixedNavBar;
