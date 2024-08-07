import React from 'react';
import { Meteors } from '@/components/ui/meteors';

interface ProjectCardProps {
  animationType: string;
  name: string;
  description: string;
  tech_stack: string;
  link: string;
  color: string;
}

export function MeteorsExample({ animationType, name, description, tech_stack, link, color }: ProjectCardProps) {
  return (
    <div className="bg-black text-white" data-aos={animationType}>
      <div className="w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3.0"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl border-b-2 font-bold ${color} mb-4`}>
              {name}
            </h2>
          </a>
          <p className="text-lg mb-4">{description}</p>
          <p className="text-lg">
            <span className="font-bold border-b-2">Tech Stack</span>: {tech_stack}
          </p>
          {/* Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
