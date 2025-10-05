"use client";
import Image from "next/image";
import React from "react";
import { Dosis } from "next/font/google";
import { Raleway } from "next/font/google";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const dosis = Dosis({ subsets: ["latin"] });

function DownloadTheApp() {
  return (
    <div
      className="sm:flex sm:flex-col sm:items-center sm:justify-center md:grid md:grid-cols-[60%_40%] relative"
      style={{
        backgroundImage: "url('/jpeg/2149091990.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "multiply"
      }}>
      <div className="flex items-center justify-center flex-col ">
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "40px",
            borderRadius: "10px"
          }}>
          <h3
            className={`uppercase text-[14px] font-medium ${dosis.className} text-[#ffba00] font-bold`}>
            Download for free
          </h3>
          <h4
            className={` text-[50px] font-extrabold ${dosis.className} text-white font-extrabold`}>
            Download the App
          </h4>
          <p className={`${dosis.className} text-[14px] text-white w-[35vw]`}>
            Upload our own taxi application to your smartphone and discover just
            how easy booking a taxi can be. With this application, you can order
            a taxi quickly.
          </p>
          <div className="flex items-center gap-3">
            <Image
              src="/jpeg/google-play-badge-logo-svgrepo-com.svg"
              alt="Google Store"
              width={150}
              height={50}
              className="border border-black"
            />

            <Image
              src="/png/appstore2.png"
              alt="Google Play"
              width={150}
              height={50}
            />
          </div>
        </div>
      </div>
      <div className="absolute  right-[12vw] bottom-0 download-custom-css ">
        <Image
          src="/svg/getACab2.svg"
          alt="App Screenshot"
          width={450}
          height={300}
          className="hidden sm:hidden md:hidden lg:block"
        />
      </div>
        <div className="absolute  right-[4vw] bottom-0 download-custom-css div-phone-frame">
          <Image
            src="/svg/getACab2.svg"
            alt="App Screenshot"
            width={400}
            height={300}
            className="hidden sm:hidden md:block lg:hidden xl:hidden"
          />
        </div>
    </div>
  );
}

export default DownloadTheApp;
