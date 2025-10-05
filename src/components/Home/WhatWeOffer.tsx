import React from "react";
import { LuPlane } from "react-icons/lu";
import { GrMapLocation } from "react-icons/gr";
import { GiPathDistance } from "react-icons/gi";
import { BsFillTaxiFrontFill } from "react-icons/bs";
import { Dosis } from "next/font/google";
import { Raleway } from "next/font/google";

const dosis = Dosis({ subsets: ["latin"] });

const raleway = Raleway({ subsets: ["latin"] });


const welcomeData = [
  {
    icon: <GrMapLocation />,
    title: "Address Pickup",
    description: "We always pick up our clients on time, 24/7 availability."
  },
  {
    icon: <LuPlane />,
    title: "Airport Transfer",
    description: "Waheenor specialized in 24 hours airport transfer service."
  },
  {
    icon: <GiPathDistance />,
    title: "Long Distance",
    description: "We offer you a long distance taxi service to anywhere."
  },
  {
    icon: <BsFillTaxiFrontFill />,
    title: "Taxi Tours",
    description: "We offer taxi tours of various durations and complexity."
  }
];

function WhatWeOffer() {
  return (
    <div className={` h-[100vh]`}>
      <div className="flex items-center flex-col pt-[22vh]">
        <h2 className={`uppercase text-[17px] md:text-[20px]  font-medium ${dosis.className} text-[#ffba00] font-extrabold` }>What we offer</h2>
        <h3 className={`capitalize font-extrabold md:text-[42px] ${raleway.className} text-[#343332] text-[32px] pb-[3vh]`}>Welcome to us</h3>
        <p className={`${dosis.className} text-[14px] text-[#6d6d6d] text-center`}>
          We created our taxi to help you to find the most dependable and
          highest quality taxi services, anytime and anywhere.
        </p>
         <p className={`${dosis.className} text-[14px] text-[#6d6d6d] pb-[12vh]`}>All our drivers are uniformed and fully licensed.</p>
        <div className={`${dosis.className} grid sm:grid-cols-2 md:flex md:items-center gap-3 md:divide-x-2 md:divide-[#dddddc]`}>
          {welcomeData.map((obj, i) => {
            return (
              <div key={i} className="flex flex-col items-center px-[4vw] cursor-pointer text-center">
                <span className="text-[#ffba00] text-[72px] transition-transform duration-300 hover:scale-110">{obj.icon}</span>
                <h4 className="text-[24px] font-semibold text-[#343332]">{obj.title}</h4>
                <p  className="text-[14px] text-[#6d6d6d] ">{obj.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WhatWeOffer;
