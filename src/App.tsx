import './App.css'
import Intro from './components/intro'
import About from './components/about'
import Tools from './components/tools'
import Experience from './components/experience'
import Projects from './components/projects'
import ProjectPopup from './components/subcomponents/projectPopup'
import Project from './components/subcomponents/project'
import projectData from './components/data/projectData'
import Vara from 'vara';
import React, { FC, useState, useEffect } from 'react';
import { ThemeProvider } from "@/components/theme-provider"


function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentProject, setCurrentProject] = useState(0)
  const [showTextAnim, setShowTextAnim] = useState(true)
  const [count, setCount] = useState(0)
  const [showEmail, setShowEmail] = useState(false);

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
  return (
    <>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <div>
      <Intro></Intro>
      <div className={` ${showProjects ? 'transform scale-100 transition-transform duration-1000 ease-in-out' : 'transform scale-0'}`}>
        <About></About>
      </div>
      <div className={` ${showProjects ? 'transform scale-100 transition-transform duration-1000 ease-in-out delay-500' : 'transform scale-0'}`}>
        <Tools></Tools>
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
          id={projectData[currentProject].id}
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
      <div className='bg-white rounded-xl shadow-lg flex gap-10 justify-center items-center p-10 flex flex-row '>
        <div className=''>
          <VaraText
            text='Contact Me'
          />
        </div>
        <div className='flex flex-col'>
          <h1 className='flex gap-1.5 text-xs items-center font-mono font-medium text-orange-500'>Email</h1>
          <h1 className='flex gap-1.5 text-xs items-center font-mono font-medium text-black-500'>alexrigl@gmail.com</h1>
          <h1 className='flex gap-1.5 text-xs items-center font-mono font-medium text-orange-500'>Resume</h1>
          <button className='p-1 text-white max-w-m bg-black hover:bg-black rounded-xl shadow-lg items-center space-x-4'>
                    Download
          </button>
        </div>
        
      </div>
      
    </div>
    </ThemeProvider>
     
    </>
  )
}

export default App
