import React, { FC} from 'react';
// import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import Project from './subcomponents/project';
// import IMAGES from '@/images/IMAGES';
import projectData from './data/projectData';
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination"

interface ProjectProps {
  // Define props and their types here
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  currentProject: number;
  setCurrentProject: React.Dispatch<React.SetStateAction<number>>
}

const Projects: FC<ProjectProps> = (props) => {
  // Destructure props here if needed
  // Example: const { propName } = props;
  // const stringArray = 
  // [
  //   'ThreeJS'
  // ];

  return (
    <div className='p-6 max-w-m mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-x-4 mb-4'>
        {/* <h1 className='flex gap-1.5 text-xs items-center font-mono font-medium text-orange-500 mb-3'>Projects</h1> */}
        {/* <ToggleGroup type="single">
          <ToggleGroupItem value="a">All</ToggleGroupItem>
          <ToggleGroupItem value="b">2D</ToggleGroupItem>
          <ToggleGroupItem value="c">3D</ToggleGroupItem>
          <ToggleGroupItem value="d">Hybrid</ToggleGroupItem>
          <ToggleGroupItem value="e">Mobile</ToggleGroupItem>
        </ToggleGroup> */}
        
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-2 mb-2">
            {projectData.map((project, index) => (
              <Project
                id={index}
                key={index}
                projectName={project.projectName}
                description={project.description}
                frameworks={project.frameworks}
                slideImages={project.slideImages}
                website={project.website}
                imagePath={project.imagePath}
                showPopup={props.showPopup}
                setShowPopup={props.setShowPopup}
                currentProject={props.currentProject}
                setCurrentProject={props.setCurrentProject}
              />
            ))}
        </div>
        {/* <Pagination className='mt-5'>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination> */}
    </div>
  );
};

export default Projects;
