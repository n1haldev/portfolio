"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { MyTypewriterEffectSmooth } from "./typewriter_section";

export function MySparkles() {
  return (
    <div>
      <div className="h-[65vh] md:h-screen w-full bg-black items-center justify-center overflow-hidden">
        <div className="w-full h-full relative">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={500}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          <div className="absolute inset-0 z-0 w-full h-full bg-black [mask-image:radial-gradient(circle,transparent_1%,white)]">
          </div>
            <div className="md:text-5xl text-3xl lg:text-7xl font-bold flex flex-col md:flex-row items-center space-x-8 justify-center text-white mt-[-50vh] md:mt-[-85vh] opacity-100 z-20">
              <div data-aos="fade-right">
                <img src="/images/candid_edited.jpg" alt="my photo" className="w-[20vh] md:w-[40vh] rounded-full"/>
              </div>
                <h1 data-aos="fade-left">
                  Hi, I&apos;m <span className="text-blue-800">Nihal T M</span>
                </h1>
            </div>
            <br />
            <div></div>
            <MyTypewriterEffectSmooth />
        </div>
      </div>
    </div>
  );
}
