import React from 'react';
import { MeteorsExample } from '../components/ui/meteors-projects';

interface ProjectCard {
  name: string;
  description: string;
  tech_stack: string;
  link: string;
  color: string;
}

const project_data: ProjectCard[] = [
  {
    name: 'Oishi Asagohan',
    description: 'A restaurant ordering system where users can order food and admins can update menu and handle orders with ease.',
    tech_stack: 'Spring-boot, Java Server Pages, HTML, CSS, Javascript and Mongodb',
    link: 'https://restaurant-ordering-system-9alk.onrender.com/',
    color: 'text-yellow-500',
  },
  {
    name: 'MFlix-Netflix Clone',
    description: 'Clone of the popular OTT streaming platform Netflix. Watch movies with the power of OMDB - Open Movies Database.',
    tech_stack: 'MERN - MongoDB, ExpressJS, ReactJS, NodeJS and CSS',
    link: 'https://mflix-nu-seven.vercel.app/',
    color: 'text-red-500',
  },
  {
    name: 'Cruise Connect',
    description: 'A platform where users can rent cars with flexibility and ease. Admins manage updation of available cars to menu.',
    tech_stack: 'ReactJS, Tailwind, ExpressJS, NodeJS and MongoDB',
    link: 'https://cruise-connect.vercel.app/',
    color: 'text-blue-300',
  },
  {
    name: 'Chat Application',
    description: 'A barebones terminal based chat application created in the process of learning Go programming language.',
    tech_stack: 'Golang with gorilla websockets implementing TCP connections',
    link: 'https://github.com/n1haldev/Chat_Application_using_Golang',
    color: 'text-red-300',
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl font-bold text-center text-blue-500 mb-10">
          Notable Projects
        </h1>
        <div className="space-y-8 md:space-y-0 flex justify-evenly mt-0 flex-col md:flex-row">
          {project_data.map((project, index) => (
            <MeteorsExample
              key={index}
              name={project.name}
              description={project.description}
              tech_stack={project.tech_stack}
              link={project.link}
              color={project.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
