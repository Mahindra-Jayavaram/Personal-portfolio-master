// import one from "../assets/svg/projects/one.svg";
// import two from "../assets/svg/projects/two.svg";
// import three from "../assets/svg/projects/three.svg";
// import four from "../assets/svg/projects/four.svg";
// import five from "../assets/svg/projects/five.svg";
// import six from "../assets/svg/projects/six.svg";
// import seven from "../assets/svg/projects/seven.svg";
// import eight from "../assets/svg/projects/eight.svg";
// import udemy from "../assets/png/udemy2.jpeg";

import hm from "../assets/png/hm1.png";
import hm2 from "../assets/png/hm2.png";
import hm3 from "../assets/png/hm3.png";

export const projectsData = [
  {
    id: 1,
    projectName: "H&M India's",
    projectDesc: [
      `As same as the replica of www.H&Mindia's.com with debouncing to minimize network requests`,
      [
        "Created Header",
        "Product Page",
        "Responsive landing page",
        "Major bug fixes",
      ],
    ],
    tags: ["JavaScript", "CSS", "HTML"],
    code: "https://github.com/Mahindra-Jayavaram/H-M_project",
    demo: "https://zen-ritchie-ceb41a.netlify.app/",
    image: hm
      // "https://user-images.githubusercontent.com/91539305/147107410-e2cf1961-f777-4e33-8a49-586a9a612cb5.gif",
  },
  {
    id: 2,
    projectName: "H&M India's Backend Clone",
    projectDesc: [
      "All round Backend integrated clone mimicing the user flow and behavior of www.H&Mindia's.com",
      ["Configured server and APIs","Laid out data schemas","Created Router to everypage","Major Bug fixes"],
    ],
    tags: ["MongoDB", "Node JS", "Express"],
    code: "https://github.com/Mahindra-Jayavaram/HM-Clone-Backend",
    demo: "",
    image: 
      "https://raw.githubusercontent.com/Mahindra-Jayavaram/Personal-portfolio-master/main/demoVedio.gif?sanitize=true&raw=true",
  },
  {
    id: 3,
    projectName: "H&M clone website",
    projectDesc: [
      "A clone of H&M.com with a sorting and filter functionality,functional cart and product carousel",
      [
        "Built Sign in and Sign up",
        "Ladie's & Men's section",
        "Added functionality for sorting and filter",
      ],
    ],
    tags: ["HTML", "JavaScript", "CSS"],
    code: "https://github.com/ThOmas-Saji/H-and-M-Clone-Project",
    demo: "https://elated-volhard-275438.netlify.app/",
    image: hm3
      // "https://raw.githubusercontent.com/Renukote/clone-rodanandfields.com/master/rodan-and-fields-thumbnail.png",
  },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
