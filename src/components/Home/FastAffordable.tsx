import React from "react";
import { Dosis } from "next/font/google";

import { Raleway } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const dosis = Dosis({ subsets: ["latin"] });

const raleway = Raleway({ subsets: ["latin"] });

function FastAffordable() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);



  return (
    <div className="text-center">
      <motion.div
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${dosis.className} text-[#ffba00] uppercase font-semibold`}>
          Fast, Affordable, Secure!
        </motion.h1>

        <motion.h2
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className={`${raleway.className} text-white text-[40px] md:text-[64px] font-extrabold capitalize`}>
          Find your taxi
        </motion.h2>
      </motion.div>
    </div>
  );
}

export default FastAffordable;
