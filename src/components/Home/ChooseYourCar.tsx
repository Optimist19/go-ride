import Image from "next/image";
import React from "react";

import { Dosis } from "next/font/google";

import { Raleway } from "next/font/google";
import { chooseYourCarData } from "../../../data";

const raleway = Raleway({ subsets: ["latin"] });

function ChooseYourCar() {
  const backgroundPicture = {
    backgroundImage: `url("/jpeg/choose_car_comp_bg.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "rgba(0,0,0,0.8)",
    backgroundBlendMode: "multiply"
  };

  return (
    <div
      className={`h-[100vh] ${raleway.className} flex justify-center items-center`}
      style={backgroundPicture}>
      <div>
        <div className="flex justify-center flex-col items-center pb-3">
          <p className="uppercase text-[#ffba00] text-[14px] font-bold">
            Car classes and rates
          </p>
          <p className="pb-[10vh] capitalize text-[32px] md:text-5xl font-extrabold text-white">
            Choose your car
          </p>
        </div>
        <div className="flex justify-center">
          <div className="flex items-center gap-9">
            {chooseYourCarData.map((obj, i) => {
              return (
                <div key={i} className="w-[25vw] relative cursor-pointer">
                  <div className="bg-[#191717] cursor:pointer  hover:bg-[#ffba00] rounded-2xl pt-20 pb-10 text-white ">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2  text-white p-5">
                      <div className="h-[80px] w-[80px] bg-white flex justify-center items-center rounded-full">
                        <div className="h-[70px] w-[70px] bg-[#ffba00]  flex justify-center items-center rounded-full ">
                          <Image
                            src={obj.img}
                            alt="car type"
                            width={100}
                            height={100}
                            className="p-1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid justify-center text-center">
                      <p>{obj.car_type}</p>
                      <p className="w-[20vw]  text-[12px] pt-5">{obj.desc}</p>
                      <p className="text-[#ffba00]">${obj.mi}/mi</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseYourCar;
