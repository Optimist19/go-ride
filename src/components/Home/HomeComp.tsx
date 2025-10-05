"use client";

import NavBar from "../NavBar/NavBar";
import { useEffect, useRef, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Dosis } from "next/font/google";
import { Raleway } from "next/font/google";
import WhatWeOffer from "./WhatWeOffer";
import DownloadTheApp from "./DownloadTheApp";
import BenefitComp from "./BenefitComp";
import ChooseYourCar from "./ChooseYourCar";
import GetYourReward from "./GetYourReward";
import Testimonial from "./Testimonial";
import HowCanWeHelp from "./HowCanWeHelp";
import Footer from "./Footer";
import FixedNavBar from "../NavBar/FixedNavBar";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import {
  setPanelSlideOpen,
  typeEndDest,
  typeStartDest,
  toggleStartDestinationResultModalFtn,
  toggleEndDestinationResultModalFtn,
  bookNowFtn,
  startCoordinatesFtn,
  endCoordinatesFtn
} from "@/redux/rideSlice/rideSlice";
import { carClassInfo } from "../../../data";
import Slide from "./Slide";
import Image from "next/image";

const dosis = Dosis({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

type passengerInputs = {
  startDestination: string;
  endDestination: string;
  carClass: string;
  phoneNumber: number;
};

function HomeComp() {
  const [hoveredCarClass, setHoveredCarClass] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isSelectFocused, setIsSelectFocused] = useState(false);

  const selectRef = useRef<HTMLSelectElement>(null);
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const dispatch = useAppDispatch();
  const {
    startDestinationResult,
    endDestinationResult,
    toggleStartDestinationResultModal,
    toggleEndDestinationResultModal,
    isPanelSlideOpen
  } = useAppSelector((state) => state.rideGlobalState);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors }
  } = useForm<passengerInputs>();

  const [scrollY, setScrollY] = useState(0); //Scroll to show the fixed/Hide NavBar
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  useEffect(() => {
    // userLocationFtn(); //user location

    if (hoveredCarClass) {
      // The display of cars
      const timer = setTimeout(() => setShowModal(true), 100);
      return () => clearTimeout(timer);
    } else {
      setShowModal(false);
    }
  }, [hoveredCarClass]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // set initially

    return () => {
      window.removeEventListener("scroll", handleScroll); // For scroll

      if (hideTimerRef.current) {
        // For select element(cars)
        clearTimeout(hideTimerRef.current);
      }
    };
  }, []);

  const watchStartDestination = watch("startDestination"); //Here is the watch
  const watchEndDestination = watch("endDestination"); //Here is the watch

  // Update Redux whenever value changes for startDestination and endDestination inputs
  // startDestination
  useEffect(() => {
    const handler = setTimeout(() => {
      if (watchStartDestination) {
        dispatch(typeStartDest(watchStartDestination));
      }
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [watchStartDestination, dispatch]);

  // endDestination
  useEffect(() => {
    const handler = setTimeout(() => {
      if (watchEndDestination) {
        dispatch(typeEndDest(watchEndDestination));
      }
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [watchEndDestination, dispatch]);

  const onSubmit: SubmitHandler<passengerInputs> = (data) => {
    // dispatch(typeStartDest(data.startDestination));
    dispatch(setPanelSlideOpen(true));
    dispatch(bookNowFtn(data));
    reset();
  };

  const handleCloseSlide = () => {
    dispatch(setPanelSlideOpen(false));
  };

  //For cars
  const handleHideModal = (delay = 0) => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
    }

    if (delay > 0) {
      hideTimerRef.current = setTimeout(() => {
        setHoveredCarClass(null);
        setIsSelectFocused(false);
      }, delay);
    } else {
      setHoveredCarClass(null);
      setIsSelectFocused(false);
    }
  };

  const handleShowModal = (value?: string) => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }

    const carClass = value || selectRef.current?.value;
    if (carClass && carClass !== "") {
      setHoveredCarClass(carClass);
    }
  };

  return (
    <div>
      <div
        className=""
        style={{
          backgroundImage:
            "url('/jpeg/young-african-american-friends-sitting-inside-car.jpg')",
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%"
        }}>
        <NavBar />

        <FixedNavBar height={scrollY} />
        <div className="pt-[19vh] relative">
          <div className="text-center">
            <h1
              className={`${dosis.className} text-[#ffba00] uppercase font-semibold`}>
              Fast, Affordable, Secure!
            </h1>

            <h2
              className={`${raleway.className} text-white text-[40px] md:text-[64px] font-extrabold capitalize`}>
              Find your taxi
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`${raleway.className} flex flex-col items-center gap-4 pt-[4vh] `}>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <label className="flex flex-col gap-1 relative">
                <input
                  className="bg-white outline-none hover:ring-1  ring-[#ffba00] p-2 rounded cursor-pointer"
                  type="text"
                  placeholder="Start Destination"
                  {...register("startDestination", { required: true })}
                />
                {errors.startDestination && (
                  <span className="text-red-500 text-[8px]">
                    This field is required
                  </span>
                )}

                {/* toggleStartDestinationResultModal */}
                {/* Suggestion list */}
                {toggleStartDestinationResultModal && (
                  <ul className="flex flex-col gap-2 absolute top-11 bottom-0 right-0 left-0 text-sm h-[20vh] overflow-y-scroll">
                    {Array.isArray(startDestinationResult) &&
                      startDestinationResult.map((obj, id) => (
                        <li
                          key={id}
                          onClick={() => {
                            setValue(
                              "startDestination",
                              obj?.properties?.full_address
                            );
                            dispatch(toggleStartDestinationResultModalFtn());
                            dispatch(
                              startCoordinatesFtn(obj.properties.coordinates)
                            );
                          }}
                          className="p-2 rounded bg-gray-100 hover:bg-[#ffba00] hover:text-black cursor-pointer transition">
                          {obj?.properties?.full_address}
                        </li>
                      ))}
                  </ul>
                )}
              </label>

              <label className="flex flex-col gap-1 relative">
                <input
                  className="bg-white outline-none hover:ring-1  ring-[#ffba00] p-2 rounded cursor-pointer"
                  type="text"
                  placeholder="End Destination"
                  {...register("endDestination", { required: true })}
                />
                {errors.endDestination && (
                  <span className="text-red-500 text-[8px]">
                    This field is required
                  </span>
                )}

                {/* toggleEndDestinationResultModal */}
                {/* Suggestion list */}
                {toggleEndDestinationResultModal && (
                  <ul className="flex flex-col gap-2 absolute top-11 bottom-0 right-0 left-0 text-sm h-[20vh] overflow-y-scroll">
                    {Array.isArray(endDestinationResult) &&
                      endDestinationResult.map((obj, id) => (
                        <li
                          key={id}
                          onClick={() => {
                            setValue(
                              "endDestination",
                              obj?.properties?.full_address
                            );
                            dispatch(toggleEndDestinationResultModalFtn());
                            dispatch(
                              endCoordinatesFtn(obj.properties.coordinates)
                            );
                          }}
                          className="p-2 rounded bg-gray-100 hover:bg-[#ffba00] hover:text-black cursor-pointer transition">
                          {obj?.properties?.full_address}
                        </li>
                      ))}
                  </ul>
                )}
              </label>

              {/* <label className="flex flex-col gap-1">
                <input
                  className="bg-white outline-none hover:ring-1  ring-[#ffba00] p-2 rounded cursor-pointer"
                  type="datetime-local"
                  {...register("timeNDate", { required: true })}
                />

                {errors.timeNDate && (
                  <span className="text-red-500 text-[8px]">
                    This field is required
                  </span>
                )}
              </label> */}
              <label className="flex flex-col gap-1">
                <select
                  className="bg-white outline-none hover:ring-1 ring-[#ffba00] py-2  pl-2 pr-8 rounded cursor-pointer text-sm md:text-base appearance-none"
                  {...register("carClass", { required: true })}
                  onMouseOver={(e) => {
                    if (!isSelectFocused) {
                      const target = e.target as HTMLSelectElement;
                      const value = target.value;
                      if (value && value !== "") {
                        handleShowModal(value);
                      }
                    }
                  }}
                  onMouseOut={() => {
                    if (!isSelectFocused) {
                      handleHideModal();
                    }
                  }}
                  onFocus={(e) => {
                    setIsSelectFocused(true);
                    handleShowModal(e.target.value);
                  }}
                  onBlur={() => {
                    handleHideModal(3000);
                  }}
                  onClick={(e) => {
                    const target = e.target as HTMLSelectElement;
                    handleShowModal(target.value);
                  }}
                  onChange={(e) => {
                    const value = e.target.value;
                    setValue("carClass", value, {
                      shouldValidate: true,
                      shouldDirty: true
                    });

                    if (value) {
                      handleShowModal(value);
                      handleHideModal(3000);
                    }
                  }}>
                  <option value="mini van">Mini Van</option>
                  <option value="economy">Economy</option>
                  <option value="comfort">Comfort</option>
                  <option value="luxury">Luxury</option>
                  <option value="electric">Electric</option>
                </select>
                {errors.carClass && (
                  <span className="text-red-500 text-[8px]">
                    This field is required
                  </span>
                )}
              </label>

              <label className="flex flex-col gap-1">
                <input
                  className="bg-white outline-none [#ffba00] p-2 rounded cursor-pointer"
                  type="number"
                  placeholder="Phone Number"
                  {...register("phoneNumber", {
                    required: true,
                    minLength: 11
                  })}
                />
                {errors.phoneNumber && (
                  <span className="text-red-500 text-[8px]">
                    This field is required and must be at least 11 digits
                  </span>
                )}
              </label>
            </div>

            {/* <label className="flex items-center text-white gap-2">
              <input type="checkbox" required />
              <p>
                I agree that my submitted data is being collected and stored
              </p>
            </label> */}
            {/* <label className="inline-flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="appearance-none w-4 h-4 border border-gray-400 rounded-sm 
               checked:bg-transparent checked:border-gray-600 
               checked:before:content-['✔'] checked:before:text-gray-600 
               checked:before:text-sm checked:before:flex checked:before:items-center 
               checked:before:justify-center checked:before:w-full checked:before:h-full 
               focus:outline-none transition duration-200"
                {...register("agree", { required: true })}
              />
              <span
                className={`${dosis.className} text-white text-sm font-semibold`}>
                I agree that my submitted data is being collected and stored
              </span>
            </label> */}
            <div className="pt-[6vh]">
              <button
                type="submit"
                className={` ${raleway.className} submit-btn text-[#6d6d6d] bg-[#ffba00] py-4 px-[5vw] rounded-full font-bold cursor-pointer hover:text-white hover:transition-ease-in`}>
                Book Now!
              </button>
            </div>
            {hoveredCarClass && carClassInfo[hoveredCarClass] && (
              <div className="absolute bottom-[-30vh] transition-all duration-300 ease-out"
                style={{
                  transform: showModal ? "translateX(0)" : "translateX(-100%)",
                  opacity: showModal ? 1 : 0
                }}>
                <div className="bg-white rounded-lg shadow-2xl p-4 w-64 border-2 border-[#ffba00]">
                  <h3
                    className={`${raleway.className} text-sm font-bold text-gray-800 mb-2`}>
                    {carClassInfo[hoveredCarClass].title}
                  </h3>

                  <div>
                    <Image
                      src={
                        carClassInfo[hoveredCarClass].car_type ||
                        "/placeholder.svg"
                      }
                      width={200}
                      height={200}
                      alt={carClassInfo[hoveredCarClass].description}
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                    <span
                      className={`${dosis.className} text-xs text-gray-500 font-semibold`}>
                      Est. Price:
                    </span>
                    <span
                      className={`${raleway.className} text-sm font-bold text-[#ffba00]`}>
                      {carClassInfo[hoveredCarClass].price}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>

      {isPanelSlideOpen && <Slide onClose={handleCloseSlide} />}

      <main>
        <WhatWeOffer />
        <DownloadTheApp />
        <BenefitComp />
        <GetYourReward />
        <ChooseYourCar />
        <Testimonial />
        <HowCanWeHelp />
        <Footer />
      </main>
    </div>
  );
}
export default HomeComp;
