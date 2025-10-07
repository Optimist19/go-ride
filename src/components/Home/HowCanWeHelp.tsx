import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";

import { Dosis } from "next/font/google";
import { Raleway } from "next/font/google";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { motion } from "framer-motion";

const raleway = Raleway({ subsets: ["latin"] });
const dosis = Dosis({ subsets: ["latin"] });

export const haveQuestionsData = [
  {
    icon: <FaMapLocationDot />,
    title: "our address",
    contact: "550 Mill Pond Ave, Arlington, MA 02474"
  },
  {
    icon: <FiPhoneCall />,
    title: "our phone",
    contact: "0800555321, 0800533312"
  },
  {
    icon: <MdOutlineTextsms />,
    title: "our mail",
    contact: "taxiservicegetcab@info.com"
  }
];
function HowCanWeHelp() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };
  return (
    <div className={` `}>
      <div className="flex items-center flex-col gap-[4vh] pt-10 md:pt-[22vh]">
        <h2
          className={`uppercase text-[12px] font-bold ${dosis.className} text-[#ffba00] font-extrabold`}>
          How can we help you?
        </h2>
        <h3
          className={`capitalize font-extrabold  text-[32px] md:text-[42px] ${raleway.className} text-[#343332]  `}>
          Welcome to us
        </h3>
        <p
          className={`${dosis.className} text-[14px] text-[#6d6d6d] px-4 md:px-0 md:w-[50vw]  text-center font`}>
          If you have any comments, suggestions or questions, please do not
          hesitate to contact us. Our high-quality office staff will help you
          and answer all your questions.
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className={`${raleway.className} grid gap-[5vh] md:flex md:items-center md:gap-3 md:divide-x-2 divide-[#dddddc] py-[10vh]`}>
          {haveQuestionsData.map((obj, i) => {
            return (
              <motion.div
                variants={itemVariants}
                key={i}
                className="flex flex-col items-center px-[4vw] cursor-pointer text-center">
                <div className="h-[54px] md:w-[54px] bg-[#ffba00] flex items-center justify-center rounded-full">
                  <p className="text-white text-[30px] transition-transform duration-300 hover:scale-110">
                    {obj.icon}
                  </p>
                </div>
                <h4 className="text-[14px] font-semibold text-[#343332] uppercase">
                  {obj.title}
                </h4>
                <p className="text-[14px] text-[#6d6d6d] ">{obj.contact}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.5 }}
        className="bg-[#f6f6f6] py-[12vh]">
        <div className="flex justify-center items-center  ">
          <div className="grid   md:grid-cols-3 md:gap-6 md:items-center">
            <div className="grid gap-2">
              <Input placeholder="Your Name" className="md:w-[26vw]" />
              <Input placeholder="Your Phone" className="md:w-[26vw]" />
            </div>
            <div className="grid gap-2 pt-2 md:pt-0">
              <Input placeholder="Your E-mail" />
              <Input placeholder="Your City" />
            </div>
            <div className="">
              <div className="pt-2 md:pt-0">
                <Textarea className="" placeholder="Your Question" />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex py-2 justify-center">
            <label className="flex items-center  space-x-2 cursor-pointer py-3">
              <input
                type="checkbox"
                className="appearance-none w-4 h-4 border border-gray-400 rounded-sm 
               checked:bg-transparent checked:border-gray-600 
               checked:before:content-['✔'] checked:before:text-gray-600 
               checked:before:text-sm checked:before:flex checked:before:items-center 
               checked:before:justify-center checked:before:w-full checked:before:h-full 
               focus:outline-none transition duration-200"
              />
              <p
                className={`${dosis.className}  text-sm font-semibold text-[#343332]`}>
                I agree that my submitted data is being collected and stored
              </p>
            </label>
          </div>
        </div>
        <div className="pt-[3vh] md:pt-0 flex justify-center">
          <button
            type="submit"
            className={` ${raleway.className} submit-btn text-[#6d6d6d]  py-4 px-[5vw] rounded-full font-bold bg-[#ffba00] cursor-pointer hover:text-white hover:transition-ease-in`}>
            Book Now!
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default HowCanWeHelp;
