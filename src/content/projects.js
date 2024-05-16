import quickbookImage from '../images/quickbook.webp';
import spaceImage from '../images/space.webp';
import typewriterImage from '../images/typewriter.webp';
import londonEyeImage from '../images/london-eye.webp';
import movingCompanyImage from '../images/moving-company.webp';

export const PROJECTS = [
    {
        projectId: 0,
        projectImage: quickbookImage,
        projectTitle: "Quickbooks",
        projectDescription: "Web App made with React",
        showRepository: true,
        projectRepository: "https://github.com/MarcoValeri/quickbooks-calculator",
        projectUrl: "https://marcovaleri.github.io/quickbooks-calculator/",
        projectShowButton: true,
        projectButton: "Check it out",
    },
    {
        projectId: 1,
        projectImage: spaceImage,
        projectTitle: "Nasa Gallery",
        projectDescription: "Web App made with React and NASA's APIs",
        showRepository: true,
        projectRepository: "https://github.com/MarcoValeri/nasa-gallery",
        projectUrl: "https://marcovaleri.github.io/nasa-gallery/#/",
        projectShowButton: true,
        projectButton: "Check it out",
    },
    {
        projectId: 2,
        projectImage: typewriterImage,
        projectTitle: "Words Counter",
        projectDescription: "Words Counter made with React",
        showRepository: true,
        projectRepository: "https://github.com/MarcoValeri/words-counter",
        projectUrl: "https://words-counter-302018.nw.r.appspot.com/",
        projectShowButton: true,
        projectButton: "Check it out",
    },
    {
        projectId: 3,
        projectImage: londonEyeImage,
        projectTitle: "ViaggIn",
        projectDescription: "Travel Magazine made with WordPress",
        showRepository: true,
        projectRepository: "https://github.com/MarcoValeri/viaggin",
        projectUrl: "https://viaggin.com/",
        projectShowButton: false,
        projectButton: "Check it out",

    },
    {
        projectId: 4,
        projectImage: movingCompanyImage,
        projectTitle: "Brandimarte",
        projectDescription: "Website for Moving Company made with Symfony",
        showRepository: true,
        projectRepository: "https://github.com/MarcoValeri/traslochi_brandimarte",
        projectUrl: "https://www.brandimarte.info/",
        projectShowButton: true,
        projectButton: "Check it out",
    }
]