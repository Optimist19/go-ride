import React, { useRef } from "react";
import { CiShoppingTag } from "react-icons/ci";
import { MdPayment } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { FaGlobeAfrica } from "react-icons/fa";
import Image from "next/image";

import { motion, useTransform, useScroll } from "framer-motion";

import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

function BenefitComp() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div
      className={`
        ${raleway.className} h-[100vh] grid justify-center items-center py-[5vh] md:py-0`}>
      <div className="grid gap-3 pt-[4vh] md:pt-0">
        <h3 className="font-medium text-[#ffba00] text-center">
          Main Features
        </h3>
        <h4 className="text-[#272727] text-[32px] md:text-5xl font-extrabold text-center">
          Our Benefits
        </h4>
      </div>
      <div className="grid md:grid-cols-3 px-[4%]">
        <motion.div
          ref={heroRef}
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="grid ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-6">
            <div className="h-12 w-12 bg-[#ffba00] rounded-full flex items-center justify-center">
              <CiShoppingTag className="text-white text-2xl" />
            </div>
            <div>
              <p className="text-[#343332] font-medium text-2xl">Fixed Price</p>
              <p className="text-[12px] text-[#6d6d6d]">
                The fixed fare is set in every
                <br />
                taximeter as the main tariff.
              </p>
            </div>
          </motion.div>
          <div className="flex items-center gap-6">
            <div className="h-12 w-12 bg-[#ffba00] rounded-full flex items-center justify-center">
              <MdPayment className="text-white text-2xl" />
            </div>
            <div>
              <p className="text-[#343332] text-2xl font-medium">No Fee</p>
              <p className={`text-[#6d6d6d]  text-[12px]`}>
                We guarantee fixed price and
                <br />
                you should not pay tips.
              </p>
            </div>
          </div>
        </motion.div>
        <div>
          <Image src="/jpeg/car.jpg" width={500} height={700} alt="Car Image" />
        </div>
        <motion.div
          ref={heroRef}
          style={{ opacity: heroOpacity, scale: heroScale }}
          viewport={{ once: true }}
          className="grid justify-end">
          <motion.div
            className="flex items-center gap-6 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            <div>
              <p className="text-[#343332] font-medium text-2xl">
                100% Pleasure
              </p>
              <p className="text-[12px] text-[#6d6d6d]">
                We have a lot of standing
                <br />
                customers and high ratings.
              </p>
            </div>
            <div className="h-12 w-12 bg-[#ffba00] rounded-full flex items-center justify-center">
              <SlLike className="text-white text-2xl" />
            </div>
          </motion.div>
          <div className="flex items-center gap-6">
            <div>
              <p className="text-[#343332] font-medium text-2xl">Nationwide</p>
              <p className="text-[12px] text-[#6d6d6d]">
                Our application is teh easiest
                <br />
                way to book a taxi.
              </p>
            </div>
            <div className="h-12 w-12 bg-[#ffba00] rounded-full flex items-center justify-center">
              <FaGlobeAfrica className="text-white text-2xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default BenefitComp;
