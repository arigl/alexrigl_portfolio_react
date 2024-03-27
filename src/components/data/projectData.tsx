/*
    projectName: string;
    description: string;
    frameworks: [];
    website: string;
    imagePath: string;
    showPopup: boolean;
*/
//import IMAGES from "@/images/IMAGES";
import IMAGES from "./images";

const projectData = [
  {
    id: 0,
    projectName: "PlayerX.GG",
    description:
      "Lead and managed the development on the marketing site for PlayerX. We aimed to offer a unique web experience centered around content made by the brand. We developed a unique animated gallery view that shows off various media content related to the product, all backed by a Contentful CMS. This was done in collaboration with Religion Studio, who helped create and conceptalize Snapchat.",
    frameworks: ["Javascript", "React"],
    website: "www.playerx.gg",
    imagePath: IMAGES.image8,
    slideImages: [IMAGES.px1, IMAGES.px2, IMAGES.px3, IMAGES.px4],
  },
  {
    id: 1,
    projectName: "PlayerX.GG Streaming",
    description:
      "The PlayerX streaming portal was built as a next-generation streaming platform focused on Esports. The project was incredibly ambitious as it involved live-data collection in sync with video, highlight functionality, player stats, ad-server integrations, and a full catalog experience. This project utilized Edg.io for the live streaming infrastructure, Springserve for ad server integrations, and JWPlayer for the video player.",
    frameworks: ["Javascript", "React", "UI Design"],
    website: "",
    imagePath: IMAGES.image9,
    slideImages: [IMAGES.ps1, IMAGES.ps2, IMAGES.ps3, IMAGES.ps4],
  },
  {
    id: 2,
    projectName: "Lofi Haven",
    description:
      "Lofi Haven is a 3D listening experience made to be your perfect desktop companion. Lofi has become an incredibly popular genre of music to listen to while working, and for awhile now I’ve had the idea to build an interactive site that goes beyond what you can experience on YouTube and Spotify.For every playlist, there is a 3d scene that matches the vibe and theme of the songs. Each scene has unique interactable objects to play with, and differ in art style and direction.",
    frameworks: ["ThreeJS", "React", "Javascript"],
    website: "https://lofi-haven.vercel.app/",
    imagePath: IMAGES.lofiLogo,
    slideImages: [IMAGES.lh1, IMAGES.lh2, IMAGES.lh3, IMAGES.lh4],
  },
  {
    id: 3,
    projectName: "Valorant Tracker",
    description:
      "Web application built in Typescript, Tailwind, and Shadcn ui. Data heavy application that uses an unofficial Valorant API to retrieve user statistics. Directly collaborated with API creator to implement key features and endpoints. Will be available for public testing in the near future.",
    frameworks: ["Typescript", "React", "Rest API"],
    website: "TBA",
    imagePath: IMAGES.valLogo,
    slideImages: [IMAGES.vt1, IMAGES.vt2, IMAGES.vt3, IMAGES.vt4],
  },
  {
    id: 2,
    projectName: "The Suggestible Brain",
    description:
      "The Suggestible Brain was an iOS application meant to test the suseptibility of the human mind. Through various mind tricks, the app taught the user techniques perfected by Amir Raz to trick the mind. The project was developed in Swift (UIKit), and was supported by an in-house designer for graphics. The app had various experiments, PDF reading capabilities, and a reward system for completing various objectives in the book.",
    frameworks: ["Wordpress", "Mobile", "UI Design"],
    website: "",
    imagePath: IMAGES.sbLogo,
    slideImages: [IMAGES.sb1, IMAGES.sb2, IMAGES.sb3, IMAGES.sb4],
  },
  {
    id: 3,
    projectName: "Witch Food",
    description:
      "Figuring out what to eat is easy with magic. Witch Food (Which Food) is a fun way to solve the worlds hardest question. Pick which type of food or restaurant you want, and let the app do the rest. Add your own items to choose from, and change the theme of the application at no additional cost. Find nearby areas fitting your choice with Google and Apple Maps support. This lightweight application is easy to use and completely free.",
    frameworks: ["SwiftUI", "Mobile", "UI Design"],
    website: "https://apps.apple.com/us/app/witch-food/id1634313239",
    imagePath: IMAGES.witchFood,
    slideImages: [IMAGES.wf1, IMAGES.wf2, IMAGES.wf3, IMAGES.wf4],
  },
];

export default projectData;
