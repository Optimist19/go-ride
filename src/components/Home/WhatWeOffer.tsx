import React from "react";
import { LuPlane } from "react-icons/lu";
import { GrMapLocation } from "react-icons/gr";
import { GiPathDistance } from "react-icons/gi";
import { BsFillTaxiFrontFill } from "react-icons/bs";
import { Dosis } from "next/font/google";
import { Raleway } from "next/font/google";
import { motion } from "framer-motion";

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

function WhatWeOffer() {
  return (
    <div className={` h-[100vh]`}>
      <div className="flex items-center flex-col pt-[10vh] md:pt-[22vh]">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className={`uppercase text-[17px] md:text-[20px]  font-medium ${dosis.className} text-[#ffba00] font-extrabold`}>
          What we offer
        </motion.h3>
        <motion.h3
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className={`capitalize font-extrabold md:text-[42px] ${raleway.className} text-[#343332] text-[32px] pb-[3vh]`}>
          Welcome to us
        </motion.h3>
        <p
          className={`${dosis.className} text-[14px] text-[#6d6d6d] text-center`}>
          We created our taxi to help you to find the most dependable and
          highest quality taxi services, anytime and anywhere.
        </p>
        <p
          className={`${dosis.className} text-[14px] text-[#6d6d6d] pb-[12vh]`}>
          All our drivers are uniformed and fully licensed.
        </p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className={`${dosis.className} grid sm:grid-cols-2 md:flex md:items-center gap-3 md:divide-x-2 md:divide-[#dddddc]`}>
          {welcomeData.map((obj, i) => {
            return (
              <motion.div
                variants={itemVariants}
                key={i}
                className="flex flex-col items-center px-[4vw] cursor-pointer text-center">
                <span className="text-[#ffba00] text-[72px] transition-transform duration-300 hover:scale-110">
                  {obj.icon}
                </span>
                <h4 className="text-[24px] font-semibold text-[#343332]">
                  {obj.title}
                </h4>
                <p className="text-[14px] text-[#6d6d6d] ">{obj.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default WhatWeOffer;
