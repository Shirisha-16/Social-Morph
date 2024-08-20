"use client";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

const Navbar = () => {
  const [showFeatures, setShowFeatures] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center mx-28 mt-5">
        <div className="flex items-center gap-14">
          {/* LOGO */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="71"
              height="55"
              fill="none"
              viewBox="0 0 71 55"
            >
              <path
                fill="#113441"
                d="M62.883 50.1c.988 0 1.523.734 1.523 1.642v1.723h-.662v-1.616c0-.594-.293-1.115-.908-1.115-.594 0-.894.5-.894 1.102v1.629h-.661v-1.63c0-.6-.3-1.101-.909-1.101-.614 0-.888.52-.888 1.115v1.616h-.66v-1.716c0-.915.52-1.65 1.502-1.65.654 0 1.128.334 1.295.842.18-.508.641-.841 1.262-.841ZM56.498 52.904c.607 0 .941-.528.941-1.135v-1.576h.661v1.656c0 .948-.574 1.696-1.602 1.696-1.015 0-1.59-.755-1.59-1.703v-1.649h.661v1.583c0 .6.328 1.128.929 1.128ZM53.044 53.538c-.608 0-1.075-.24-1.33-.727l.508-.28c.167.326.434.447.795.447.374 0 .661-.154.661-.441 0-.688-1.876-.167-1.876-1.416 0-.574.507-.995 1.222-.995.607 0 1.021.28 1.228.661l-.507.288c-.14-.288-.407-.388-.708-.388-.307 0-.574.16-.574.42 0 .669 1.876.181 1.876 1.416 0 .621-.6 1.015-1.295 1.015ZM48.505 54.967h-.662v-3.145c0-.975.755-1.71 1.743-1.71a1.71 1.71 0 0 1 1.736 1.71c0 .989-.714 1.723-1.71 1.723-.44 0-.84-.194-1.108-.487v1.91Zm1.081-2.043c.608 0 1.075-.5 1.075-1.095 0-.601-.467-1.088-1.075-1.088-.614 0-1.081.487-1.081 1.088 0 .594.467 1.095 1.081 1.095ZM46.306 50.193h.66v3.272h-.66v-3.272ZM55.223 47.207c-5.051 0-8.904-3.885-8.904-8.613 0-4.694 3.853-8.58 8.904-8.58 5.05 0 8.904 3.886 8.904 8.58 0 4.728-3.853 8.613-8.904 8.613Zm0-5.472c1.845 0 3.076-1.425 3.076-3.108 0-1.716-1.23-3.141-3.076-3.141s-3.076 1.425-3.076 3.14c0 1.684 1.23 3.11 3.076 3.11ZM35.314 54.654c-4.015 0-6.93-1.78-8.419-4.954l4.825-2.59c.518 1.1 1.49 2.234 3.497 2.234 2.104 0 3.497-1.328 3.659-3.659-.778.68-2.008 1.198-3.853 1.198-4.501 0-8.128-3.464-8.128-8.321 0-4.695 3.854-8.515 8.905-8.515 5.18 0 8.904 3.594 8.904 8.547v6.411c0 5.828-4.048 9.649-9.39 9.649Zm.388-13.243c1.749 0 3.076-1.198 3.076-2.979 0-1.748-1.327-2.914-3.076-2.914-1.716 0-3.075 1.166-3.075 2.914 0 1.781 1.36 2.98 3.075 2.98ZM17.009 47.207c-5.051 0-8.904-3.885-8.904-8.613 0-4.694 3.853-8.58 8.904-8.58 5.05 0 8.904 3.886 8.904 8.58 0 4.728-3.853 8.613-8.904 8.613Zm0-5.472c1.845 0 3.076-1.425 3.076-3.108 0-1.716-1.23-3.141-3.076-3.141s-3.076 1.425-3.076 3.14c0 1.684 1.23 3.11 3.076 3.11ZM0 23.085h5.828v23.636H0V23.085ZM70.734 32a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
              ></path>
              <path
                fill="#FFD43E"
                fill-rule="evenodd"
                d="M54.79 9.665a33 33 0 0 1 9.616 21.525 11.867 11.867 0 0 0-6.561-3.9 27 27 0 0 0-50.1-7.205H1.086A33 33 0 0 1 54.79 9.665ZM8.828 30.15Zm7.587-3.122a12.704 12.704 0 0 0 0 0Zm9.986 4.415Zm8.685-4.377a12.784 12.784 0 0 0 0 0Zm10.481 4.719Zm8.911-4.75a12.653 12.653 0 0 0 0 0Z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#EE8E1D"
                fill-rule="evenodd"
                d="M50.547 13.908a27.001 27.001 0 0 1 7.298 13.382c-.842-.18-1.72-.276-2.622-.276-1.22 0-2.394.174-3.497.499a20.999 20.999 0 0 0-40.81 1.108 11.8 11.8 0 0 0-2.088 1.529V20.085H7.744a27 27 0 0 1 42.803-6.177ZM26.401 31.443c-1.761-2.194-4.323-3.746-7.284-4.252 2.96.506 5.523 2.058 7.284 4.252Z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#971C1C"
                d="M46.306 30.888a15 15 0 0 0-28.613-3.856c3.56.192 6.67 1.873 8.708 4.411 2.172-2.69 5.563-4.396 9.399-4.396 4.11 0 7.642 1.802 9.767 4.738.231-.311.478-.61.739-.897Z"
              ></path>
              <path
                fill="#D62727"
                fill-rule="evenodd"
                d="M51.725 27.513a11.85 11.85 0 0 0-5.42 3.375 15 15 0 0 0-28.612-3.856 12.716 12.716 0 0 0-.684-.018c-2.237 0-4.317.586-6.093 1.607a21 21 0 0 1 40.81-1.108Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="flex gap-12 text-lg">
            <div className="cursor-pointer ">
              <div
                className="flex items-center gap-1"
                onMouseOver={() => setShowFeatures(true)}
                onMouseLeave={() => setShowFeatures(false)}
              >
                Features{" "}
                {!showFeatures ? (
                  <IoMdArrowDropdown className="text-xl" />
                ) : (
                  <IoMdArrowDropup className="text-xl" />
                )}
              </div>
              <div className="hidden">
                <div className="cursor-pointer">Generate</div>
                <div className="cursor-pointer">Schedule</div>
                <div className="cursor-pointer">Design</div>
              </div>
            </div>
            <h1 className="cursor-pointer">Pricing</h1>
            <h1 className="cursor-pointer ml-2">Blog</h1>
          </div>
        </div>
        <div>
          <button className="text-lg bg-gradient-to-r from-slate-600 to-slate-800 text-white px-3 py-1 rounded-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-900 hover:transition-all hover:duration-500 hover:shadow-lg hover:shadow-purple-400 shadow-md shadow-gray-500">
            Get Started
          </button>
        </div>
      </div>
      <div
        className={`${
          !showFeatures && "hidden"
        } w-fit bg-white py-5 px-6 rounded-xl shadow-xl shadow-purple-300 ml-56 -mt-2`}
      >
        <ul>
          <li>Generate</li>
          <li className="my-5">Schedule</li>
          <li>Design</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
