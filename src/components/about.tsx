import React, { FC } from 'react';

interface AboutProps {
  // Define props and their types here
}

const About: FC<AboutProps> = (props) => {
  // Destructure props here if needed
  // Example: const { propName } = props;

  return (
    <div className='p-6 max-w-m mx-auto rounded-xl shadow-lg flex flex-col items-center space-x-4 mb-4'>
        <h1 className='flex gap-1.5 text-xs items-center font-mono font-medium text-orange-500'>About me</h1>
        <p className='mt-2 text-slate-800 font-mono'>I am a creative and forward thinking developer that aims to create beautiful interfaces while remaining scalable.</p>
    </div>

  );
};

export default About;
