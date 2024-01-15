import {useState } from 'react';
import { Separator } from "@/components/ui/separator"
// import { Button } from "@/components/ui/button"
// import IMAGES from '@/images/IMAGES';
// import internal from 'stream';
import { motion, AnimatePresence } from "framer-motion";

function Job(props: {
        jobDate: string;
        companyName: string;
        jobName: string;
        jobTaskList: string[];
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
    <div className='w-full p-4 max-w-full mx-auto bg-white rounded-xl shadow-sm border flex flex-col items-left space-x-4 mb-4'>
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
            {expandToggle && (
                <div className='w-1/2 flex justify-end'>
                    <button className=' p-2 pl-4 pr-4 mt-4 mb-4 text-black max-w-m bg-white shadow-sm border hover:bg-orange-500 rounded-xl items-center space-x-4' onClick={handleClick}>
                        -	
                    </button>
                </div>    
            )}
            {expandToggle===false && (
                <div className='w-1/2 flex justify-end'>
                    <button className=' p-2 pl-4 pr-4 mt-4 mb-4 text-black max-w-m bg-white shadow-sm border hover:bg-orange-500 rounded-xl items-center space-x-4' onClick={handleClick}>
                        +	
                    </button>
                </div>    
            )}
        </div>   
        {/* {expandToggle && (
            <div>
                <Separator></Separator>
                <h2 className='text-left font-bold mt-3 mb-3'>Responsibilities:</h2>
                {taskArray.map((str, index) => (
                    <li className='text-left' key={index}>{str}</li>
                ))}
            </div>
        )} */}
        <AnimatePresence>
        {expandToggle && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            <Separator />
            <h2 className='text-left font-bold mt-3 mb-3'>Responsibilities:</h2>
            {taskArray.map((str, index) => (
              <li className='text-left' key={index}>
                {str}
              </li>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>

  );
};

export default Job;
