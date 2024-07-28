"use client"

import { MySparkles } from "./sparkles-hero";
import Skillz from "./skillz";
import Projects from "./projects";
import ContactMe from "./contactMe";
import AOS from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for animations
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <main>
      <MySparkles />
      <Skillz />
      <Projects />
      <ContactMe />
    </main>
  )
}