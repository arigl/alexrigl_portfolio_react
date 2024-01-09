import React, { FC, useState, useEffect } from 'react';

import { Badge } from "@/components/ui/badge"
// import IMAGES from '@/images/IMAGES';
import projectData from '../data/projectData';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselNext2,
    CarouselPrevious,
    CarouselPrevious2
  } from "@/components/ui/carousel"

import {
    Card,
    CardContent,
    // CardDescription,
    // CardFooter,
    // CardHeader,
    // CardTitle,
} from "@/components/ui/card"

import { Separator } from "@/components/ui/separator"


function ProjectPopup(props: {
  projectName: string;
  description: string;
  frameworks: string[];
  website: string;
  imagePath: string;
  slideImages: string[];
  currentProject: number;
  setCurrentProject: React.Dispatch<React.SetStateAction<number>>;
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const closePopup = () => {
    console.log("close popup")
    props.setShowPopup(false);
  };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      {props.showPopup && (
        // <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-black bg-opacity-80">
        <div className={`fixed bottom-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-white bg-opacity-100 transition-transform duration-1000 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
        {/* Rest of your content */}
            <div className="flex flex-col">
              {/* <div className={`rounded border border-gray-300 p-4 inline-flex max-w-max mb-5 ml-10`}>
                  <span className='text-orange-500 mr-2'>⌘</span>
                  <h1 className="font-semibold">Alex Rigl</h1>
              </div> */}
              <div className='flex flex-row'> 
                  <div className='justify-center items-center ml-10'>
                      <Carousel orientation="horizontal">
                          <CarouselContent>
                              {Array.from({ length: props.slideImages.length }).map((_, index) => (
                              <CarouselItem key={index}>
                                  <Card>
                                      <CardContent className="flex items-center justify-center">
                                      <img src={props.slideImages[index]} loading="lazy" alt='first image' className="fill rounded-lg mt-2 ml-2 mr-2 mb-2 max-h-1/2 " />
                                      </CardContent>
                                  </Card>
                              </CarouselItem>
                              ))}
                          </CarouselContent>
                          <CarouselPrevious2 />
                          <CarouselNext2 />
                      </Carousel>
                  </div>
                  <div className='min-w-[33.33333vw] h-max p-10 flex flex-col justify-between'>
                      <div className='text-left'>
                          <h1 className='text-xs items-center font-mono font-medium text-orange-500'>Project Name</h1>
                          <h1>{projectData[props.currentProject].projectName}</h1>
                          <h1 className='text-xs items-center font-mono font-medium text-orange-500 pt-2'>Description</h1>
                          <p>{projectData[props.currentProject].description}</p>
                          <h1 className='flex gap-1.5 text-xs items-center font-mono font-medium text-orange-500 pt-2'>Tools</h1>
                          {Array.from({ length: props.frameworks.length }).map((_, index) => (
                               <Badge variant="outline" className='bg-black text-white mr-2 mb-2 text-white'>{props.frameworks[index]}</Badge>
                          ))}
                         
                          <h1 className='flex gap-1.5 text-xs items-center font-mono font-medium text-orange-500 pt-2'>View Live</h1>
                          <p>View Live</p>
                      </div>
                      <button onClick={closePopup} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                          Close
                      </button>
                  </div>
              </div>
              <div className='flex flex-col justify-between h-max mb-10 ml-10 mr-10'>
                  <Separator className='mt-20 mb-5'></Separator>
                  <div className='flex flex-row justify-between'>
                      <button onClick={closePopup} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-2">Previous Project</button>
                      <button onClick={closePopup} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">Next Project</button>
                  </div>
              </div> 
            
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectPopup;
