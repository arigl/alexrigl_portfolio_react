import React from 'react';
// import { Separator } from "@/components/ui/separator"
// import { Button } from "@/components/ui/button"
// import IMAGES from '@/images/IMAGES';
import { Badge } from "@/components/ui/badge"


function Project(props: {
  id: number;
  projectName: string;
  description: string;
  frameworks: [];
  website: string;
  imagePath: string;
  slideImages: [string];
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  currentProject: number;
  setCurrentProject: React.Dispatch<React.SetStateAction<number>>
}) {

  function togglePopup(projectName: String){
    console.log(projectName)
    props.setCurrentProject(props.id)
    props.setShowPopup(true)
  }
  const frameworkArray = props.frameworks;

  return (
    <div>
      <div onClick={() => togglePopup(props.projectName)} className="cursor-pointer hover:opacity-80">
        <div className="relative w-full h-64 rounded-lg overflow-hidden">
          <div className="absolute inset-0">
            <img className="absolute inset-0 w-full h-full object-cover" src={props.imagePath} alt={props.projectName} />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div> */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          </div>
          <div className='p-10 h-full flex flex-col justify-end text-white relative z-10'>
            <div className="mb-auto">
            </div>
            <div>
              <h1 className='font-bold'>{props.projectName}</h1>
              {frameworkArray.map((str, index) => (
                <Badge key={index} variant="outline" className='mr-2 mb-2 text-white'>{str}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;


