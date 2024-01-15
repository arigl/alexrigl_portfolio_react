import './App.css'
import Intro from './components/intro'
import About from './components/about'
// import Tools from './components/tools'
import NewTools from './components/newtools'
import Experience from './components/experience'
import Projects from './components/projects'
import ProjectPopup from './components/subcomponents/projectPopup'
import projectData from './components/data/projectData'
import Vara from 'vara';
import {useState, useEffect } from 'react';
// import { ThemeProvider } from "@/components/theme-provider"
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
// import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
// import Carousel from './components/subcomponents/Carousel'


function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentProject, setCurrentProject] = useState(0)
  const { width, height } = useWindowSize()
  const [party, setParty] = useState(false)

  function VaraText({ text }: { text: string }) {
    const containerId = `vara-container-${text.replace(/\s/g, '')}`; // Generate a unique ID based on the text

    useEffect(() => {
      const container = document.getElementById(containerId);

      if (container) {
        // If the container exists, clear its content
        container.innerHTML = ''; // Clear the content of the container
        // Initialize Vara
        new Vara(
          `#${containerId}`,
          "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
          [
            {
              text: text,
              fontSize: 50,
              strokeWidth: 1.5,
              delay: 1000,
              textAlign: "center",
              color: "black"
            },
          ]
        );
      }
    }, [containerId, text]);
  
    return (
      <div id={containerId} className=''></div>
    );
  }

  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProjects(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [showPopup]);

  const handleDownload = async () => {
    // Specify the path to the file in the public directory
    console.log("download")
    //const filePath = process.env.PUBLIC_URL + '/vite.svg';
    const filePath = '/resume.pdf';

    try {
      // Fetch the file using the path
      const response = await fetch(filePath);

      // Get the blob representation of the file
      const blob = await response.blob();

      // Create a link element
      const link = document.createElement('a');

      // Set the href attribute to the Blob object
      link.href = window.URL.createObjectURL(blob);

      // Set the download attribute with the desired file name
      link.download = 'Alex_Rigl_Resume.pdf';

      // Append the link to the document
      document.body.appendChild(link);

      // Trigger a click on the link to start the download
      link.click();

      // Remove the link from the document
      setParty(!party)
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading the file:', error);
    }
  };
  return (
    <>
    {/* <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme"> */}
    <div>
      <Intro></Intro>
      <div className={` ${showProjects ? 'transform scale-100 transition-transform duration-1000 ease-in-out' : 'transform scale-0'}`}>
        <About></About>
      </div>
      <div className={` ${showProjects ? 'transform scale-100 transition-transform duration-1000 ease-in-out delay-500' : 'transform scale-0'}`}>
        {/* <Tools></Tools> */}
        <div className="mt-2 mb-2 pt-4 pb-4">
          <div className="flex justify-center items-center">
            <div className="bg-white max-w-s w-full rounded-xl shadow-sm border pt-4 pb-4">
              <NewTools></NewTools>
            </div>
          </div>
        </div>
      </div>
      <div className={` ${showProjects ? 'transform scale-100 transition-transform duration-1000 ease-in-out delay-700' : 'transform scale-0'}`}>
        <Experience></Experience>
      </div>
      <div className={` ${showProjects ? 'transform scale-100 transition-transform duration-1000 ease-in-out delay-1000' : 'transform scale-0'}`}>
        <Projects
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          currentProject = {currentProject}
          setCurrentProject={setCurrentProject}
        />
      </div>
      
      {showPopup && (
        <ProjectPopup
          projectName={projectData[currentProject].projectName}
          description={projectData[currentProject].description}
          frameworks={projectData[currentProject].frameworks}
          slideImages={projectData[currentProject].slideImages}
          website={projectData[currentProject].website}
          imagePath={projectData[currentProject].imagePath}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
        />
      )}
      <div className='bg-white rounded-xl shadow-sm border flex gap-10 justify-center items-center p-10 flex flex-row '>
        <div className=''>
          <VaraText
            text='Contact Me'
          />
        </div>
        <div className='flex flex-col'>
          <h1 className='flex gap-1.5 text-xs items-center font-mono font-medium text-orange-500'>Email</h1>
          <h1 className='flex gap-1.5 text-xs items-center font-mono font-medium text-black-500'>alexrigl@gmail.com</h1>
          <h1 className='flex gap-1.5 text-xs items-center font-mono font-medium text-orange-500'>Resume</h1>
          <button onClick={handleDownload} className='p-1 text-white max-w-m bg-black hover:bg-orange-500 rounded-xl shadow-lg items-center space-x-4'>
                    Download
          </button>
        </div>
        
      </div>
      <Confetti 
         width={width}
         height={height * 2}
         run={true}
         recycle={false}
         numberOfPieces={party ? 500 : 0}
         onConfettiComplete={confetti => {
          setParty(false)
          confetti?.reset?.();
        }}
         >
      </Confetti>
    </div>
    {/* </ThemeProvider> */}
    <SpeedInsights/>
    <Analytics/>
     
    </>
  )
}

export default App
