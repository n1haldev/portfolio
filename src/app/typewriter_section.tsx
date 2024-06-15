"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { useEffect, useState } from "react";

export function MyTypewriterEffectSmooth() {
  
  const [num, setNum] = useState(0);

  const animationDuration = 6150;

  useEffect(() => {
    const interval = setInterval(() => {
      setNum((prevNum) => (prevNum + 1) % words.length);
    }, animationDuration);

    return () => clearInterval(interval);   
  }, []);

  const words = [
    [
      {
        text: "Web",
      },
      {
        text: "apps",
      },
      {
        text: "with",
      },
      {
        text: "MERN and Spring.",
        className: "text-blue-500 dark:text-blue-500",
      },
    ],
    [
      {
          text: "Building"
      },
      {
        text: "C/C++ and Java",
        className: "text-blue-500 dark:text-blue-500",
      },
      {
        text: "apps.",
      },
    ],
    [
        {
            text: "AI/ML and Data Analytic",
            className: "text-blue-500 dark:text-blue-500",
          },
          {
            text: "projects.",
          },
    ]
  ];

  return (
    // <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="text-neutral-600 dark:text-neutral-200 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            I am interested in
          </p>
          <TypewriterEffectSmooth words={words[num]} />
          {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
            <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
              Join now
            </button>
            <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
              Signup
            </button>
          </div> */}
        </div>
      </div>
    // </div>
  );
}
