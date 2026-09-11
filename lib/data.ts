import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'devx-adarshh@gmail.com',
    phone: '+91 764 400 8647',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Adarsh, I am reaching out to you because...',

    oldPortfolio: '',
    upworkProfile: '',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/adarsh-devx' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/adarsh-devx' },
    { name: 'facebook', url: 'https://www.facebook.com/adarsh-devx' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        // {
        //     name: 'Prisma',
        //     icon: '/logo/prisma.png',
        // },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'Linux',
            icon: '/logo/linux.svg',
        },
        {
            name: 'GitHub',
            icon: '/logo/github.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Nyxi',
        slug: 'nyxi',
        liveUrl: 'https://nyxi-brown.vercel.app/',
        sourceCode: 'https://github.com/adarsh-devx/Nyxi-Chrome-Extension',
        year: 2025,
        description: `
      Nyxi transforms your default browser new tab into a living, high-definition desktop experience. Built for minimalism and visual delight, it combines live animated wallpapers, quick links, and productivity widgets in an ultra-clean glassmorphic interface.<br/><br/>
      
      Key Features:
      <ul>
        <li>✨ Living Scenes & HD Wallpapers: High-quality dynamic video/animated backgrounds</li>
        <li>⚡ Instant Startup: Optimized Manifest V3 architecture with zero lag</li>
        <li>🔗 Quick Links & Bookmarks: Custom link hub with automatic favicons</li>
        <li>🎨 Neo-Brutalist & Glassmorphic UI: Custom curated aesthetic theme</li>
      </ul>
      `,
        role: `
      Lead Developer & Designer<br/>
      <ul>
        <li>🚀 Built Chrome Extension Manifest V3 core using TypeScript & Vite</li>
        <li>🎨 Designed and built the live landing page with Next.js & Tailwind CSS</li>
        <li>💾 Implemented debounced storage synchronization and custom widget settings</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'TypeScript',
            'React',
            'Tailwind CSS',
            'Chrome Extension API',
            'Vite',
        ],
        thumbnail: '',
        longThumbnail: '',
        images: [],
    },
    {
        title: 'Kaun Disha Mei',
        slug: 'kaundishamei',
        liveUrl: 'https://www.kaundishamei.me/',
        year: 2025,
        description: `
      "दो मुसाफ़िर — दो यार, एक नाव, समुंदर भर के गाने"<br/><br/>
      An atmospheric, scenic web audio streaming platform created for sea wanderers and roadtrip melodies. Delivers a calming, soulful listening journey with ambient sound effects, active traveler counters, and curated tracks.
      <br/><br/>
      Key Features:
      <ul>
        <li>🎵 Web Audio Player: Custom playback engine with shuffle, loop, and playlist browsing</li>
        <li>👥 Real-Time Travelers Count: Live online listener presence tracking ("51 Safar par")</li>
        <li>🚢 Interactive Soundscapes: Playable ship horn and travel chimes</li>
        <li>🌊 Glassmorphic Horizon Theme: Immersive oceanic visuals and fluid animations</li>
      </ul>
      `,
        role: `
      Creator & Frontend Developer<br/>
      <ul>
        <li>🎧 Integrated HTML5 Web Audio API for custom soundscapes & audio controls</li>
        <li>🎨 Designed glassmorphic UI elements and responsive layout with Tailwind CSS</li>
        <li>⚡ Optimized audio stream caching and dynamic playlist loading</li>
      </ul>
      `,
        techStack: [
            'React',
            'Next.js',
            'Web Audio API',
            'Tailwind CSS',
            'Framer Motion',
        ],
        thumbnail: '',
        longThumbnail: '',
        images: [],
    },
    {
        title: 'MyNotes',
        slug: 'mynotes',
        liveUrl: 'https://mynotes-pooq.onrender.com/',
        year: 2024,
        description: `
      MyNotes serves as your digital "second brain" — a distraction-free cloud workspace to capture spontaneous thoughts, manage daily task checklists, and organize knowledge from any device.
      <br/><br/>
      Key Features:
      <ul>
        <li>🔒 Google OAuth 2.0: One-click secure sign-in and account management</li>
        <li>📝 Markdown Notes & Task Lists: Rich text organization and checkbox trackers</li>
        <li>☁️ Cloud Synchronization: Seamless real-time data sync across mobile and desktop</li>
        <li>📱 Minimalist UI: Distraction-free, responsive clean interface</li>
      </ul>
      `,
        role: `
      Full-Stack Developer<br/>
      <ul>
        <li>🔐 Implemented Google OAuth 2.0 authentication and user session management</li>
        <li>⚙️ Built RESTful API endpoints using Node.js & Express.js deployed on Render</li>
        <li>💻 Developed responsive note organizing and task management interface</li>
      </ul>
      `,
        techStack: [
            'Node.js',
            'Express.js',
            'Google OAuth 2.0',
            'MongoDB',
            'React',
            'Tailwind CSS',
        ],
        thumbnail: '',
        longThumbnail: '',
        images: [],
    },
    {
        title: 'Team-Sync',
        slug: 'team-sync',
        sourceCode: 'https://github.com/adarsh-devx/Team-Sync',
        year: 2024,
        description: `
      A modern team directory and employee management dashboard built to help administrative teams manage staff directories, track employee onboarding, and oversee departmental status with ease.
      <br/><br/>
      Key Features:
      <ul>
        <li>👥 Employee Directory: Paginated and searchable staff listing with metric badges</li>
        <li>⚡ Status Toggling: Instant Active/Inactive employee status management</li>
        <li>📋 Form Validation: Modular member registration and editing workflows</li>
        <li>📊 Admin Metrics: Quick-view cards for workforce overview</li>
      </ul>
      `,
        role: `
      Frontend Developer<br/>
      <ul>
        <li>🏗️ Architected component hierarchy using React and Vite</li>
        <li>🎨 Built responsive administrative interface with Tailwind CSS</li>
        <li>🔄 Handled form state management and tabular pagination filters</li>
      </ul>
      `,
        techStack: [
            'React',
            'Vite',
            'JavaScript',
            'Tailwind CSS',
            'Context API',
        ],
        thumbnail: '',
        longThumbnail: '',
        images: [],
    },
    {
        title: 'Kookify',
        slug: 'kookify',
        sourceCode: 'https://github.com/adarsh-devx/Kookify',
        year: 2024,
        description: `
      Kookify is a fast, responsive culinary recipe management web application designed for food enthusiasts to curate, search, edit, and organize custom recipes and cooking procedures.
      <br/><br/>
      Key Features:
      <ul>
        <li>🍲 Full Recipe CRUD: Create, read, update, and delete culinary recipes</li>
        <li>❤️ Favorites Collection: Save bookmarked recipes with instant LocalStorage sync</li>
        <li>⚡ Dynamic Form Validation: Smooth multi-field recipe builder using React Hook Form</li>
        <li>🎨 Custom UI Elements: Custom metallic button components and animated 404 page</li>
      </ul>
      `,
        role: `
      Frontend Developer<br/>
      <ul>
        <li>🍳 Built dynamic recipe forms and validation using React Hook Form</li>
        <li>💾 Implemented client-side caching & favorites bookmarking with LocalStorage</li>
        <li>📱 Created fully mobile-responsive UI with Tailwind CSS and Vite</li>
      </ul>
      `,
        techStack: [
            'React',
            'Tailwind CSS',
            'React Hook Form',
            'Vite',
            'JavaScript',
        ],
        thumbnail: '',
        longThumbnail: '',
        images: [],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineer (Frontend)',
        company: 'Strativ AB',
        duration: 'Dec 2024 - Present',
    },
    {
        title: 'Frontend Developer',
        company: 'Epikcoders',
        duration: 'Oct 2023 - Nov 2024',
    },
    {
        title: 'Frontend Engineer',
        company: 'Anchorblock Technology',
        duration: 'Oct 2022 - Sep 2023',
    },
    {
        title: 'Frontend Developer (Part-time)',
        company: 'Branex IT',
        duration: 'Jan 2022 - Oct 2022',
    },
];
