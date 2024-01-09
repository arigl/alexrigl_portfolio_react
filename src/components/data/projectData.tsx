/*
    projectName: string;
    description: string;
    frameworks: [];
    website: string;
    imagePath: string;
    showPopup: boolean;
*/
import IMAGES from "@/images/IMAGES";

const projectData = [
    {
      id: 0,
      projectName: 'PlayerX.GG',
      description: '3D Based of ThreeJSJourney',
      frameworks: ['Javascript', 'React'],
      website: 'www.hexmos.com',
      imagePath: IMAGES.image8,
      slideImages: [IMAGES.px1,IMAGES.px2,IMAGES.px3,IMAGES.px4]
    },
    {
      id: 1,
      projectName: 'PlayerX.GG Streaming',
      description: '3D Based of ThreeJSJourney',
      frameworks: ['Javascript', 'React', 'UI Design'],
      website: 'www.hexmos.com',
      imagePath: IMAGES.image9,
      slideImages: [IMAGES.px1,IMAGES.px2,IMAGES.px3,IMAGES.px4]
    },
    {
      id: 2,
      projectName: 'The Suggestible Brain',
      description: '3D Based of ThreeJSJourney',
      frameworks: ['Wordpress', 'Mobile','UI Design'],
      website: 'www.hexmos.com',
      imagePath: IMAGES.sbLogo,
      slideImages: [IMAGES.sb1,IMAGES.sb2,IMAGES.sb3,IMAGES.sb4]
    },
    {
      id: 3,
      projectName: 'Witch Food',
      description: 'Figuring out what to eat is easy with magic. Witch Food (Which Food) is a fun way to solve the worlds hardest question. Pick which type of food or restaurant you want, and let the app do the rest. Add your own items to choose from, and change the theme of the application at no additional cost. Find nearby areas fitting your choice with Google and Apple Maps support. This lightweight application is easy to use and completely free.',
      frameworks: ['SwiftUI','Mobile','UI Design'],
      website: 'https://apps.apple.com/us/app/witch-food/id1634313239',
      imagePath: IMAGES.witchFood,
      slideImages: [IMAGES.px1,IMAGES.px2,IMAGES.px3,IMAGES.px4]
    },
  ];
  
  export default projectData;
  