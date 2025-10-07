import Image from "next/image";
import React from "react";
import { CiMail } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { VscTriangleRight } from "react-icons/vsc";

import { Input } from "../ui/input";

import { Dosis } from "next/font/google";

import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });
const dosis = Dosis({ subsets: ["latin"] });

function Footer() {
  return (
    <div className=" bg-[#272727] text-[#cfcfcf] py-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 p-4">
        <div className="flex flex-col gap-9.5">
          <div className="">
            <Image src="/png/logo2.png" alt="Logo2" width={100} height={50} />
            <p className="text-[12px] cursor-pointer">Premier Taxi Services</p>
          </div>
          <div>
            <p
              className={`w-[100%] md:w-[17vw] lg:w-[15vw] text-sm ${dosis.className}`}>
              We created our taxi to help you to find the most dependable and
              highest quality taxi services, anytime and anywhere without any
              problems.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[8.8vh]">
          <div className={`${raleway.className} font-bold text-[20px]`}>
            <p>Useful Links</p>
          </div>
          <div
            className={`flex items-center  md:gap-10 justify-between md:justify-start text-sm ${dosis.className}`}>
            <ul>
              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <VscTriangleRight className="text-[8px] text-[#ffba00]" />
                </span>
                <span className="hover:text-white cursor-pointer">Home</span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <VscTriangleRight className="text-[8px] text-[#ffba00]" />
                </span>
                <span className="hover:text-white cursor-pointer">
                  Get a cab
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <VscTriangleRight className="text-[8px] text-[#ffba00]" />
                </span>
                <span className="hover:text-white cursor-pointer">
                  Our News
                </span>
              </li>
            </ul>
            <ul>
              <li className="flex items-center gap-2">
                <span>
                  <VscTriangleRight className="text-[8px] text-[#ffba00]" />
                </span>
                <span className="hover:text-white cursor-pointer">
                  About Us
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <VscTriangleRight className="text-[8px] text-[#ffba00]" />
                </span>
                <span className="hover:text-white cursor-pointer">Reviews</span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <VscTriangleRight className="text-[8px] text-[#ffba00]" />
                </span>
                <span className="cursor-pointer hover:text-white">
                  Contacts
                </span>
              </li>{" "}
            </ul>
          </div>
        </div>
        <div>
          <div
            className={`${raleway.className} font-bold text-[20px] pb-[8.8vh]`}>
            <p>Contact Info</p>
          </div>
          <div className={`text-sm ${dosis.className}`}>
            <div className="flex items-center gap-2">
              <CiMail className="text-[#ffba00]" />
              <p className="cursor-pointer hover:text-white">
                taxiservice@info.com
              </p>
            </div>
            <div className="flex items-center gap-2 py-1">
              <IoMdCall className="text-[#ffba00]" />
              <p className="cursor-pointer hover:text-white">8(800)7668990</p>
            </div>
            <div className="flex items-center gap-2">
              <IoLocation className="text-[#ffba00]" />
              <p className="cursor-pointer hover:text-white">
                550 Mill Pond Ave. Arlington
              </p>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`${raleway.className} font-bold text-[20px] pb-[8.8vh]`}>
            {" "}
            <p>Subscribe to Us</p>
          </div>
          <div className={`text-sm ${dosis.className}`}>
            <p className="pb-1">Subscribe to Our Newsletters!</p>
            <div>
              <Input placeholder="Enter your E-mail" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
