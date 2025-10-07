import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import { testimonialData } from "../../../data";
import { Dosis } from "next/font/google";
import { Raleway } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const dosis = Dosis({ subsets: ["latin"] });

const raleway = Raleway({ subsets: ["latin"] });

// import required modules
import { Pagination } from "swiper/modules";

function Testimonial() {
  //   const backgroundPicture = {
  //     backgroundImage: `url("/jpeg/testimonial_bg.jpg")`,
  //     backgroundSize: "cover",
  //     backgroundPosition: "center",
  //     backgroundRepeat: "no-repeat"
  //   };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.5 }}
      className="h-[100vh] flex justify-center items-center flex-col bg-blend-multiply bg-[rgba(0,0,0,0.6)] bg-[url('/jpeg/testimonial_bg.jpg')] bg-cover bg-center bg-no-repeat">
      <h4 className={`text-[#ffba00] ${raleway.className} uppercase`}>
        Client about us
      </h4>
      <h5
        className={`text-white text-[32px] md:text-5xl font-bold pb-[12vh] ${raleway.className}`}>
        Testimonials
      </h5>
      <div className="w-[100%] px-[20%]  relative">
        <div className="absolute z-10 top-0 left-1/2 -translate-x-1/2  -translate-y-1/2  text-white p-5">
          <div className="h-[40px] w-[40px] bg-[#ffba00]  flex justify-center items-center rounded-full ">
            <ImQuotesLeft />
          </div>
        </div>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {testimonialData.map((obj, i) => {
            return (
              <SwiperSlide key={i}>
                <div className=" py-[5vh] bg-[rgba(0,0,0,0.4)]">
                  <div className="grid justify-center text-center">
                    <p
                      className={`w-[45vw]  text-[14px] text-center pt-5 text-white ${dosis.className}`}>
                      {obj.statement}
                    </p>
                    <p
                      className={`text-[#ffba00] py-6 ${dosis.className} uppercase font-medium text-[13px]`}>
                      {obj.client}, {obj.city}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.div>
  );
}

export default Testimonial;
