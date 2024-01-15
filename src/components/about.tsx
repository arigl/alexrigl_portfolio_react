function About(){
  // Destructure props here if needed
  // Example: const { propName } = props;

  return (
    <div className='p-6 max-w-m mx-auto rounded-xl shadow-sm border flex flex-col items-center space-x-4 mb-4 mt-4'>
        <h1 className='flex gap-1.5 text-xs items-center font-mono font-medium text-orange-500'>about_me.md</h1>
        <p className='mt-2 text-slate-800 font-mono'>I am a creative and forward thinking developer that aims to create beautiful and scalable web and mobile experiences.</p>
    </div>

  );
};

export default About;
