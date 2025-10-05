"use client";

import { ToastContainer, toast, Bounce } from "react-toastify";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import MapBox from "./MapBox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "../ui/card";
import { MapPinIcon } from "lucide-react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Raleway } from "next/font/google";
import { confirmBookingFtn } from "@/redux/rideSlice/rideSlice";

const raleway = Raleway({ subsets: ["latin"] });

interface SlideProps {
  onClose: () => void;
}

function Slide({ onClose }: SlideProps) {
  const {
    isBook,
    // isPanelSlideOpen,
    startDestination,
    endDestination,
    carClass,
    // phoneNumber,
    carPrice,
    distance
  } = useAppSelector((store) => store.rideGlobalState);
  const dispatch = useAppDispatch();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsAnimating(false);

    setTimeout(() => {
      onClose();
    }, 300);
  };

  function confirmBookingHandle() {
    dispatch(confirmBookingFtn());
    toast(ioCheckmarkDoneCircleSharp(), {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce
    });
  }

  function ioCheckmarkDoneCircleSharp() {
    return (
      <div
        className={` text-[#ffba00] ${raleway.className} flex items-center gap-3`}>
        <p>Successful!</p>
        <IoCheckmarkDoneCircleSharp className="text-[20px]" />
      </div>
    );
  }

  return (
    <div className={`${raleway.className} relative`}>
      <div
      // className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
      //   isAnimating ? "opacity-100" : "opacity-0"
      // } `}
      // onClick={handleClose}
      />

      <div
        className={`h-screen bg-white w-full sm:w-[50%] fixed top-0 bottom-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
          isAnimating ? "translate-x-0" : "translate-x-full"
        } `}>
        <div className="p-6">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 transition-colors"
            aria-label="Close panel">
            <X className="w-6 h-6" />
          </button>
          <MapBox />
          <div className="px-3">
            <Card className="absolute bottom-[2vh] right-0 left-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPinIcon className={`size-5 text-[#ffba00]`} />
                  Trip Details
                </CardTitle>
                <CardDescription>Where would you like to go?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="">
                    <div>
                      <div className="">
                        <Label htmlFor="start" className="font-bold">
                          Pickup Location
                        </Label>
                        <p className="text-sm py-2">{startDestination}</p>
                      </div>
                      <div className="">
                        <Label htmlFor="end" className="font-bold">
                          Drop-off Location
                        </Label>
                        <p className="text-sm py-2">{endDestination}</p>
                      </div>
                    </div>
                  </div>
                  <div className=" text-sm grid gap-2">
                    <p className="capitalize">
                      <span className="font-bold">Car Class:</span> {carClass}
                    </p>
                    <p>
                      <span className="font-bold">
                        Car Price: {carPrice ? "#" : ""}
                      </span>{" "}
                      {carPrice}
                    </p>

                    <p>
                      <span className="font-bold">Miles:</span>{" "}
                      {(distance * 0.000621371).toFixed(2) || ""}{" "}
                      {distance ? "miles" : ""}
                    </p>
                    <p>
                      <span className="font-bold">Total: #</span>
                      {Math.floor(distance * 0.000621371 + Number(carPrice)) ||
                        ""}
                    </p>
                  </div>
                </div>
              </CardContent>

              <Button
                onClick={confirmBookingHandle}
                type="submit"
                size="sm"
                className="w-full bg-[#ffba00] text-[16px] font-semibold text-black hover:bg-[#ffba00] cursor-pointer">
                {isBook ? "Booked" : "Confirm Booking"}
              </Button>
            </Card>{" "}
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2002}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
}

export default Slide;
