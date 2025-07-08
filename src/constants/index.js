export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Vijay N',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review4.png',
      review:
        'Suresh provided exceptional React Native development services for us. From building custom components to optimizing app performance, his work has greatly enhanced our mobile app. His dedication and attention to detail truly stood out. Highly recommended!',
      length: 4,
    },
    {
      id: 2,
      name: 'Daniel Joe R',
      position: 'Founder of Hubmer Solutions',
      img: 'assets/review2.png',
      review:
        'Suresh played a key role in developing our React Native app. He handled everything from UI design to integration with our backend APIs, ensuring a smooth and scalable mobile experience. Our users love the new app, and we’ve seen a great improvement in engagement!',
    },
    {
      id: 3,
      name: 'Bala Murugan L',
      position: 'Project Manager at Stanch.io',
      img: 'assets/review3.png',
      review:
        'Working with Suresh on multiple React Native projects has been a fantastic experience. He expertly managed complex requirements, implemented advanced features, and ensured top performance across both iOS and Android platforms. A reliable and talented developer!',
    },
    {
      id: 4,
      name: 'Nivetha S',
      position: 'Team Lead at StanTech',
      img: 'assets/review1.png',
      length: 4,
      review:
        'Suresh delivered outstanding results on several React Native projects for us. His ability to understand our needs and translate them into a polished, high-quality app was impressive. From frontend to API integration, his skills are top-notch!',
    },
  ];
  
  export const myProjects = [
    {
      title: 'SyncList - Grocery list app',
      desc: 'SyncList revolutionizes grocery shopping with real-time collaborative list management. Families and roommates can sync their shopping lists instantly across devices, ensuring everyone stays updated on household needs.',
    subdesc: 'Built with Next.js 14, Tailwind CSS, and Convex for real-time updates, featuring offline mode, smart categorization, and sharing capabilities that make grocery planning effortless.',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#eef4ed',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      color: '#b7e4c7',
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'node js',
          path: '/assets/node.svg',
        },
      ],
    },
    {
      title: 'EveryNote - Notes taking app',
      desc: 'EveryNote is a minimalist yet powerful note-taking application that organizes your thoughts with intuitive tagging and search. Capture ideas instantly with markdown support and cross-device synchronization.',
    subdesc: 'Developed with Next.js and Liveblocks for real-time collaboration, featuring end-to-end encryption, rich media embedding, and customizable workspaces for personal and professional use.',      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      color: '#9f86c0',
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Javascript',
          path: '/assets/javascript.svg',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'Estate Sphere - Real estate app',
      desc: 'Estate Sphere transforms property search with AI-powered recommendations and immersive 3D tours. Homebuyers can filter listings by neighborhood vibes, school districts, and commute times.',
    subdesc: 'Powered by Next.js and Three.js for interactive property visualizations, integrating MLS data with machine learning to match users with their ideal homes based on lifestyle preferences.',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#eef4ed',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      color: '#e4bb97',
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Javascript',
          path: '/assets/javascript.svg',
        },
        {
          id: 4,
          name: 'Node Js',
          path: '/assets/node.svg',
        },
      ],
    }
  ];
   
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.06 : isMobile ? 0.06 : 0.13,
      deskPosition: isMobile ? [0.5, -1.5, 0] : [0.25, -2.9, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [12, -5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 5, 0],
      // html logo position
      ringPosition: isSmall ? [-3, 5, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-15, 5, 0],
      targetPosition: isSmall ? [-5, -7, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-22, -7, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Happy Nest Agro',
      pos: 'Junior Frontend Developer',
      duration: '2022 - 2022',
      title: 'At Happy Nest Agro, I contributed to building and maintaining their tourism and product sales platform using modern frontend technologies. I focused on creating responsive user interfaces and enhancing user experience for their agro-tourism website.',
      icon: '/assets/framer.svg',
      animation: 'hiphop',
    },
    {
      id: 2,
      name: 'Freelance Developer',
      pos: 'React Native Freelance',
      duration: '2023 - 2024',
      title: 'As a freelance React Native developer, I worked on multiple client projects, delivering high-quality cross-platform mobile apps. I handled everything from UI development to integrating APIs and ensuring smooth app performance.',
      icon: '/assets/notion.svg',
      animation: 'silly',
    },
    {
      id: 3,
      name: 'DevChoice',
      pos: 'React Internship',
      duration: '2023 - 2024',
      title: 'During my internship at DevChoice, I gained practical experience building React applications. I worked on implementing features, fixing bugs, and collaborating with senior developers to improve the codebase and user experience.',
      icon: '/assets/github.svg',
      animation: 'dance',
    },
  ];