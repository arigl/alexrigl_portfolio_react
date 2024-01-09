import React, { FC, useState } from 'react';
import { Separator } from "@/components/ui/separator"
// import { Button } from "@/components/ui/button"
// import IMAGES from '@/images/IMAGES';
// import internal from 'stream';


function Job(props: {
        jobDate: string;
        companyName: string;
        jobName: string;
        jobTaskList: [];
        jobWebsite: string;
        jobImage: string
    }){
  // Destructure props here if needed
  // Example: const { propName } = props;
  const taskArray = props.jobTaskList;
  const [expandToggle, setExpand] = useState(false);
  
  function handleClick(){
    console.log("click job button")
    setExpand(prevCheck => !prevCheck);
  }
  return (
    <div className='w-full p-4 max-w-full mx-auto bg-white rounded-xl shadow-lg flex flex-col items-left space-x-4 mb-4'>
        <div className='flex flex-row justify-start justify-between'>
            <div className='text-left flex flex-row'>
                <img src={props.jobImage} loading="lazy" width="75" height="75" alt='first image' className="rounded-lg ml-2 mr-2 mb-2" />
                <div>
                    <h1 className='font-bold'>{props.companyName}</h1>
                    <h2>{props.jobName}</h2>
                    <h3 className='text-sm opacity-50'>{props.jobDate}</h3>
                </div>
                {/*                 
                {expandToggle && (
                    <Button><a href={props.jobWebsite} target="_blank" rel="noopener noreferrer">
                    Visit Site
                    </a></Button>
                )}
                 */}
            </div>
            <div className='w-1/2 flex justify-end'>
                <button className='p-1 mt-4 mb-4 text-white max-w-m bg-gray-500 hover:bg-black rounded-xl shadow-lg items-center space-x-4' onClick={handleClick}>
                    Expand
                </button>
            </div>
        </div>   
        {expandToggle && (
            <div>
                <Separator></Separator>
                <h2 className='text-left font-bold mt-3 mb-3'>Responsibilities:</h2>
                {taskArray.map((str, index) => (
                    <li className='text-left' key={index}>{str}</li>
                ))}
            </div>
        )}
    </div>

  );
};

export default Job;
