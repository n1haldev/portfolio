import React from 'react';
import CardComponent from '../components/ui/cardComponent';

const Skillz = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-col text-white justify-center">
        <div data-aos="fade-up" className='my-10 mx-auto space-y-4'>
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl font-bold text-center text-blue-500">My Skill Set</h1>
            <CardComponent 
            title="Frontend"
            icons={['html', 'css', 'javascript', 'typescript', 'react', 'tailwindcss', 'nextjs']} 
            />
            <CardComponent 
            title="Backend"
            icons={['nodejs', 'express', 'flask', 'spring']} 
            />
            <CardComponent 
            title="Databases"
            icons={['mysql', 'mongodb']} 
            additionals={[{name: "Etcd", url: "/images/etcd_icon.png", className: "h-12 w-12 md:mx-2 md:mt-2 rounded-xl"}]}
            />
            <CardComponent 
            title="DevOps"
            icons={['aws', 'bash', 'git', 'docker', 'github', 'linux', 'jenkins']} 
            />
            <CardComponent 
            title="Data Science and Analytics"
            icons={['tensorflow', 'pytorch', 'opencv', 'python', 'sklearn']} 
            />
            <CardComponent 
            title="Programming Languages"
            icons={['c', 'cpp', 'rust', 'go', 'java']} 
            />
        </div>
      </div>
    </div>
  );
};

export default Skillz;
