import React, { useState, useEffect } from "react";

import { Badge } from "@/components/ui/badge";
// import IMAGES from '@/images/IMAGES';
import projectData from "../data/projectData";
// import IMAGES from '../data/images';

import { Separator } from "@/components/ui/separator";
import Carousel from "./Carousel";

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
  const setPrevProject = () => {
    if (props.currentProject != 0) {
      props.setCurrentProject((prev) => prev - 1);
    }
  };
  const setNextProject = () => {
    if (props.currentProject < projectData.length - 1) {
      props.setCurrentProject((prev) => prev + 1);
    }
  };
  const closePopup = () => {
    console.log("close popup");
    setIsClosing(true);

    // Introduce a delay before setting isVisible to false
    setTimeout(() => {
      setIsVisible(false);
    }, 500); // Adjust the delay as needed
  };
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // useEffect(() => {
  //   setIsVisible(true);
  //   props.setShowPopup(true)
  // }, []);
  useEffect(() => {
    if (props.showPopup) {
      setIsVisible(true);
    }
  }, [props.showPopup]);

  useEffect(() => {
    if (isClosing) {
      //document.body.style.overflow = "auto";
      setTimeout(() => {
        setIsVisible(false);
        setIsClosing(false);
        props.setShowPopup(false);
      }, 1500);
    }
  }, [isClosing]);

  useEffect(() => {
    // // Disable scrolling when the popup is open
    // const isMobile = window.innerWidth <= 768;

    // if (isMobile) {
    //   // Disable scrolling when the popup is open
    //   console.log("mobile");
    // } else {
    //   document.body.style.overflow = "hidden";
    // }

    // // Enable scrolling when the popup is closed
    // return () => {
    //   document.body.style.overflow = "auto";
    // };
    if (props.showPopup) {
      // Disable scrolling when the popup is open
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling when the popup is closed
      document.body.style.overflow = "auto";
    }

    return () => {
      // Cleanup: Enable scrolling when the component is unmounted
      document.body.style.overflow = "auto";
    };
  }, [props.showPopup, isVisible]);

  //console.log(projectData[props.currentProject].slideImages);

  return (
    <div>
      {props.showPopup && (
        <div
          className={`fixed bottom-0 left-0 w-screen h-screen flex flex-col bg-white bg-opacity-100 transition-transform duration-1000 ease-in-out md:p-20 ${
            isVisible ? "translate-y-0" : "translate-y-full"
          }`}
          style={{ overflowY: "auto", overflowX: "hidden" }}
        >
          <div className="flex flex-col">
            <div className="flex flex-col gap-10 md:flex-row">
              <div className="w-screen md:w-1/2	">
                <Carousel currentProject={props.currentProject} />
              </div>
              <div className="flex flex-col justify-between">
                <div className="text-left flex-grow">
                  <h1 className="text-xs items-center font-mono font-medium text-orange-500">
                    Project Name
                  </h1>
                  <h1>{projectData[props.currentProject].projectName}</h1>
                  <h1 className="text-xs items-center font-mono font-medium text-orange-500 pt-2">
                    Description
                  </h1>
                  <p>{projectData[props.currentProject].description}</p>
                  <h1 className="flex gap-1.5 text-xs items-center font-mono font-medium text-orange-500 pt-2">
                    Tools
                  </h1>
                  {Array.from({ length: props.frameworks.length }).map(
                    (_, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-black text-white mr-2 mb-2 text-white"
                      >
                        {props.frameworks[index]}
                      </Badge>
                    )
                  )}
                  {props.website != "" && (
                    <div>
                      <h1 className="flex gap-1.5 text-xs items-center font-mono font-medium text-orange-500 pt-2">
                        View Live
                      </h1>
                      <p>{props.website}</p>
                    </div>
                  )}
                </div>

                <button
                  onClick={closePopup}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                >
                  Close
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between h-max mb-10 ml-10 mr-10">
              <Separator className="mb-5 md:mt-20"></Separator>
              <div className="flex flex-row justify-between">
                {props.currentProject == 0 && (
                  <button className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded ml-2 opacity-50">
                    Previous Project
                  </button>
                )}
                {props.currentProject != 0 && (
                  <button
                    onClick={setPrevProject}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-2"
                  >
                    Previous Project
                  </button>
                )}
                {props.currentProject == projectData.length - 1 && (
                  <button
                    onClick={setNextProject}
                    className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mr-2 opacity-50"
                  >
                    Next Project
                  </button>
                )}
                {props.currentProject != projectData.length - 1 && (
                  <button
                    onClick={setNextProject}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                  >
                    Next Project
                  </button>
                )}
                {/* <button onClick={setPrevProject} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-2">Previous Project</button> */}
                {/* <button onClick={setNextProject} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">Next Project</button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectPopup;
