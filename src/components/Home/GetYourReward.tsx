import React from "react";
import Image from "next/image";
import { Dosis } from "next/font/google";

import { Raleway } from "next/font/google";
import { motion } from "framer-motion";

const raleway = Raleway({ subsets: ["latin"] });
const dosis = Dosis({ subsets: ["latin"] });

function GetYourReward() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.5 }}
      className="px-[4%] py-[10vh]">
      <div className="md:flex bg-[#f8f8f8] ">
        <div>
          <Image
            src="/jpeg/smile.jpg"
            alt="passender-on-a-call"
            width={600}
            height={500}
          />
        </div>
        <div className="flex justify-center items-center md:pl-[4vw] pt-5 md:pt-0">
          <div className="md:w-[30vw]">
            <p
              className={`${dosis.className} text-[#ffba00] font-bold uppercase`}>
              Rewards as you travel
            </p>
            <p
              className={`${raleway.className} text-black font-extrabold text-[32px] md:text-5xl pb-6 pt-2`}>
              Get Your Rewards
            </p>
            <p className={`${dosis.className} text-[#6d6d6d] text-[12px] pb-6`}>
              GetCab service helps you to find the highest quality taxi services
              anytime. Our drivers are uniformed, fully licensed and the office
              staff is trained to the highest standards.We can help you to save
              time and money. Our main idea is based on establishing a direct
              connection between drivers and passengers.
            </p>
            <div className="">
              <button
                type="submit"
                className={` ${raleway.className} submit-btn text-[#6d6d6d] bg-[#ffba00] py-4 px-[5vw] rounded-full font-bold cursor-pointer hover:text-white hover:transition-ease-in`}>
                Book Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default GetYourReward;
