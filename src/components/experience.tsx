// import { Button } from "@/components/ui/button"
import Job from './subcomponents/job';
import jobData from './data/jobData';
import IMAGES from '@/images/IMAGES';

function Experience() {
  return (
    <div className='p-6 max-w-m mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-x-4 mb-4'>
      <h1 className='flex gap-1.5 text-xs items-center font-mono font-medium text-orange-500'>Work Experience</h1>
      <Job jobName='Lead Developer' companyName='PlayerX' jobDate='July 2020 - December 2023' jobTaskList={jobData[0]} jobWebsite="https://playerx.gg/" jobImage={IMAGES.image4} />
      <Job jobName='Web and Mobile Developer' companyName='Brain Institute' jobDate='Nov 2020 - Dec 2021' jobTaskList={jobData[1]} jobWebsite="https://playerx.gg/" jobImage={IMAGES.image5} />
      <Job jobName='Associate Software Engineer' companyName='Thermofisher Scientific' jobDate='Jun 2018 - Aug 2018' jobTaskList={jobData[2]} jobWebsite="https://playerx.gg/" jobImage={IMAGES.image6} />
      {/* <button className='p-4 text-white max-w-m mx-auto bg-black rounded-xl shadow-lg flex flex-col items-center space-x-4 mb-4' onClick={handleClick}>
        View more information
      </button> */}
    </div>
  );
};

export default Experience;
