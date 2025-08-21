export const DATA = {
  home: {
    hero: {
      name: 'PHAM LUONG',
      title: 'FullStack Web Developer',
      subtitle:
        'I build fast, accessible and visually engaging web experiences.',
    },
    skills: {
      sectionTitle: 'Skills & Expertise',
      sectionDescription:
        'Specialized in building responsive front-end interfaces and full-stack web applications with modern technologies',
      overview: [
        {
          name: 'Frontend Development',
          level: 90,
          icon: 'lucide:monitor', // ReactJS, Tailwind, Redux, etc.
          color: 'primary',
        },
        {
          name: 'Backend Development',
          level: 80,
          icon: 'lucide:server', // Node.js, Laravel, Express, NestJS
          color: 'secondary',
        },
        {
          name: 'Database Management',
          level: 85,
          icon: 'lucide:database', // MySQL, MongoDB, MSSQL
          color: 'success',
        },
        {
          name: 'DevOps & Tools',
          level: 70,
          icon: 'lucide:settings', // Docker, CI/CD, Git, Jira
          color: 'default',
        },
      ],
    },
    testimonials: {
      sectionTitle: 'Recommendations',
      sectionDescription:
        'Feedback from colleagues and mentors I have worked with',
      items: [
        {
          id: 1,
          name: 'Pham Dinh Son',
          role: 'CTO at Nextsky',
          content:
            'Luong quickly became a core contributor to our Shopify ecosystem. His work on public apps and themes helped us serve thousands of merchants with reliable, scalable solutions.',
          avatar: '/Son_Pham.png',
        },
        {
          id: 2,
          name: 'Pham Thi Ly',
          role: 'Project Manager at Nextsky',
          content:
            'He consistently delivered features ahead of deadlines. The Shopify themes he built not only delighted clients but also reduced customization requests by 30%.',
          avatar: '/Ly_Pham.png',
        },
        {
          id: 3,
          name: 'Pham Anh Truong',
          role: 'Senior Developer Mentor',
          content:
            'Luong demonstrated strong problem-solving and eagerness to learn. He quickly picked up React Query, Zustand, and Laravel to extend our support system with advanced analytics and payment flows.',
          avatar: '/Truong_Pham.png',
        },
      ],
    },
  },
  about: {
    profile: {
      name: 'Pham Luong',
      title: 'Full Stack Developer',
      image: '/account.jpg',
      description: [
        "I'm a creative full-stack developer with a passion for UI/UX design and clean code. I focus on building beautiful, functional, and high-performance websites and web apps.",
        'My approach is both technical and aesthetic — I enjoy turning complex problems into elegant user experiences. I work primarily with modern frameworks like React, Vite, and TailwindCSS.',
        'Outside of code, I enjoy motion design, product strategy, and always pushing the boundaries of front-end development.',
      ],
    },
    education: [
      {
        title: 'FPT University',
        date: '2021 - 2024',
        icon: 'mdi:school-outline',
        description:
          "Bachelor's degree in Software Engineering. Focused on full-stack development and modern JavaScript frameworks. Developed graduation projects and internships with real-world applications.",
      },
    ],

    experience: [
      {
        title: 'Frontend Developer',
        date: '2023 - Present',
        icon: 'mdi:briefcase',
        description:
          'Developed web applications and SaaS products with ReactJS, TailwindCSS, and Node.js. Key projects include NextSky Affiliate Program and ScrapeFlow. Focused on building reusable components, responsive design, and improving performance.',
      },
      {
        title: 'Frontend & Backend Developer - Ticksify',
        date: '2023 - Present',
        icon: 'mdi:monitor-dashboard',
        description:
          'Enhanced an internal support system using ReactJS integrated with Laravel APIs. Implemented features such as PayOS payments, license renewals, and analytics dashboards with data visualization.',
      },
      {
        title: 'Frontend Developer',
        date: '2023 - 2024',
        icon: 'mdi:palette',
        description:
          'Built and optimized premium Shopify themes such as Agile, Umino, and Glozin. Implemented responsive UIs, ReactJS components, and TailwindCSS styling. These themes reached over 1,500 sales with an average 4.9/5 rating, improving storefront speed and conversion.',
      },
    ],

    technologies: {
      frontend: {
        description:
          'I craft dynamic, responsive UIs using modern JavaScript frameworks and CSS tools.',
        tools: [
          { name: 'React', icon: 'logos:react' },
          { name: 'Next.js', icon: 'skill-icons:nextjs-dark' },
          { name: 'TailwindCSS', icon: 'logos:tailwindcss-icon' },
          { name: 'TypeScript', icon: 'logos:typescript-icon' },
          { name: 'HTML5', icon: 'logos:html-5' },
          { name: 'CSS3', icon: 'logos:css-3' },
        ],
      },
      backend: {
        description:
          'I build fast APIs and scalable backends using Node.js, PHP, and TypeScript frameworks.',
        tools: [
          { name: 'Node.js', icon: 'logos:nodejs-icon' },
          { name: 'NestJS', icon: 'simple-icons:nestjs' },
          { name: 'Express', icon: 'simple-icons:express' },
          { name: 'Laravel', icon: 'logos:laravel' },
          { name: 'Livewire', icon: 'simple-icons:livewire' },
          { name: 'REST API', icon: 'simple-icons:api' },
          { name: 'GraphQL', icon: 'logos:graphql' },
        ],
      },
      database: {
        description:
          'I design and manage relational and non-relational databases for scalable web applications.',
        tools: [
          { name: 'MySQL', icon: 'logos:mysql-icon' },
          { name: 'PostgreSQL', icon: 'logos:postgresql' },
          { name: 'MongoDB', icon: 'logos:mongodb-icon' },
          { name: 'Redis', icon: 'logos:redis' },
        ],
      },
      tools: {
        description:
          'Daily tools for productivity, version control, and deployment.',
        tools: [
          { name: 'Git', icon: 'logos:git-icon' },
          { name: 'GitHub', icon: 'logos:github-icon' },
          { name: 'Docker', icon: 'logos:docker-icon' },
          { name: 'Postman', icon: 'simple-icons:postman' },
          { name: 'Figma', icon: 'logos:figma' },
          { name: 'VS Code', icon: 'logos:visual-studio-code' },
        ],
      },
      others: {
        description:
          'Core knowledge and professional practices that support scalable, production-ready applications.',
        tools: [
          { name: 'OOP', icon: 'mdi:code-braces' },
          { name: 'Data Structures & Algorithms', icon: 'mdi:chart-tree' },
          {
            name: 'Relational & Non-relational Databases',
            icon: 'mdi:database',
          },
          { name: 'ORM', icon: 'mdi:table-large' },
          { name: 'RESTful API', icon: 'mdi:api' },
          { name: 'GraphQL', icon: 'logos:graphql' },
          { name: 'CI/CD', icon: 'mdi:cached' },
          { name: 'Cloud Storage', icon: 'mdi:cloud-outline' },
          { name: 'Payment Gateways', icon: 'mdi:credit-card-outline' },
        ],
      },
    },
  },
  projects: {
    sectionTitle: 'Featured Projects',
    sectionDescription:
      'A selection of real-world projects showcasing my frontend development expertise in building scalable and user-friendly applications.',
    work: [
      {
        id: 1,
        title: 'Ticksify Support System',
        description:
          'An internal support and license management system for handling customer tickets, payments, and analytics.',
        image: '/Ticksify/Ticksify_1.png', // thay bằng ảnh của bạn
        gallery: [
          '/Ticksify/Ticksify_1.png',
          '/Ticksify/Ticksify_2.png',
          '/Ticksify/Ticksify_3.png',
          '/Ticksify/Ticksify_4.png',
        ],
        category: 'Web Application',
        details:
          'Extended Ticksify with Laravel, Livewire, and TailwindCSS to support PayOS payments, license renewals, and advanced analytics. Improved internal workflows and reduced support response times.',
        github: '',
        live: 'https://support.nextsky.co/',
        tech: [
          { name: 'NestJs', icon: 'logos:nestjs' },
          { name: 'React', icon: 'logos:react' },
          { name: 'TailwindCSS', icon: 'logos:tailwindcss-icon' },
          { name: 'MySQL', icon: 'logos:mysql-icon' },
        ],
      },
      {
        id: 2,
        title: 'Nextsky Affiliate Program',
        description:
          'Affiliate platform to manage partner onboarding, tracking, and commission payouts.',
        image: '/nextsky/nextsky_1.png', // thay bằng ảnh của bạn
        gallery: [
          '/nextsky/nextsky_1.png',
          '/nextsky/nextsky_2.png',
          '/nextsky/nextsky_3.png',
        ],
        category: 'Web Development',
        details:
          'Built user-friendly frontend with ReactJS and TailwindCSS, integrated secure tracking logic and responsive UI for affiliates. Helped Nextsky grow its merchant base by streamlining partnership management.',
        github: '',
        live: 'https://nextsky.co/pages/affiliate',
        tech: [
          { name: 'React', icon: 'logos:react' },
          { name: 'TailwindCSS', icon: 'logos:tailwindcss-icon' },
          { name: 'TypeScript', icon: 'logos:typescript-icon' },
          { name: 'REST API', icon: 'simple-icons:apachesuperset' },
        ],
      },
      {
        id: 3,
        title: 'ScrapeFlow',
        description:
          'A web scraping automation tool designed to extract, clean, and visualize structured data.',
        image: '/scrapeflow/ScrapeFlow_1.png', // thay bằng ảnh của bạn
        gallery: [
          '/scrapeflow/ScrapeFlow_1.png',
          '/scrapeflow/ScrapeFlow_2.png',
          '/scrapeflow/ScrapeFlow_3.png',
        ],
        category: 'Applications',
        details:
          'Developed a modular scraping workflow with Node.js and Puppeteer, providing data visualization and export capabilities. Improved efficiency for clients by automating manual data collection processes.',
        github: '',
        live: 'https://scrape-flow-two-sand.vercel.app/',
        tech: [
          { name: 'Node.js', icon: 'logos:nodejs-icon' },
          { name: 'Puppeteer', icon: 'logos:puppeteer' },
          { name: 'Next.js', icon: 'skill-icons:nextjs-dark' },
          { name: 'MongoDB', icon: 'logos:mongodb-icon' },
        ],
      },
      {
        id: 5,
        title: 'Umino Shopify Theme',
        description:
          'A premium Shopify theme optimized for performance and mobile-first design, tailored for fashion and lifestyle brands.',
        image: '/umino/umino_1.webp', // 👉 bạn thay bằng ảnh thật của theme
        gallery: [
          '/umino/umino_1.webp',
          '/umino/umino_2.webp',
          '/umino/umino_3.webp',
          '/umino/umino_4.webp',
          '/umino/umino_5.webp',
          '/umino/umino_6.webp',
          '/umino/umino_7.png',
        ],
        category: 'E-commerce',
        details:
          'Developed a high-converting Shopify theme using Liquid, HTML, CSS, and JavaScript. Focused on speed optimization, WCAG-compliant UI, and modular sections that allowed merchants to customize without coding. Reached 500+ sales with excellent merchant reviews.',
        github: '',
        live: 'https://umino-demo-v2.myshopify.com/?pb=0', // hoặc link demo
        tech: [
          { name: 'Shopify Liquid', icon: 'simple-icons:shopify' },
          { name: 'HTML5', icon: 'vscode-icons:file-type-html' },
          { name: 'CSS3', icon: 'vscode-icons:file-type-css' },
          { name: 'JavaScript', icon: 'logos:javascript' },
        ],
      },
      {
        id: 6,
        title: 'Glozin Shopify Theme',
        description:
          'A modern Shopify theme with advanced product filtering and clean UI, designed for electronics and multi-category stores.',
        image: '/glozin/glozin_1.webp', // 👉 bạn thay bằng ảnh thật của theme
        gallery: [
          '/glozin/glozin_1.webp',
          '/glozin/glozin_2.webp',
          '/glozin/glozin_3.webp',
          '/glozin/glozin_4.webp',
          '/glozin/glozin_5.webp',
          '/glozin/glozin_6.png',
          '/glozin/glozin_7.png',
        ],
        category: 'E-commerce',
        details:
          'Built with Shopify Liquid, JavaScript, and responsive CSS, Glozin provides merchants with scalable storefronts. Integrated custom product filtering, optimized checkout flow, and lightweight scripts to ensure fast page load. Achieved 300+ sales and average rating of 4.9/5.',
        github: '',
        live: 'https://glozin-demo.myshopify.com/', // hoặc link demo
        tech: [
          { name: 'Shopify Liquid', icon: 'simple-icons:shopify' },
          { name: 'HTML5', icon: 'vscode-icons:file-type-html' },
          { name: 'CSS3', icon: 'vscode-icons:file-type-css' },
          { name: 'JavaScript', icon: 'logos:javascript' },
        ],
      },
    ],
  },

  contact: {
    heading:
      "Have a project in mind? Get in touch and let's create something amazing.",
    location: {
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.700291037968!2d105.81514097594907!3d21.046379680612556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac8f0d1a0f6f%3A0x6bb6a2e2e85db6a7!2s190%20Nguyen%20Trai%2C%20Thanh%20Xuan%2C%20Ha%20Noi%2C%20Vietnam!5e0!3m2!1svi!2s!4v1715809876543!5m2!1svi!2s',
      address: '190, Nguyen Trai, Thanh Xuan, Ha Noi',
    },
  },
  morphingTexts: {
    about: ['Creative', 'Passionate', 'Developer'] as const,
    projects: ['My Work', 'Creations', 'Experiments', 'Innovations'] as const,
    contact: ["Let's", 'Build', 'Together'] as const,
  },
  navigation: [
    { name: 'Home', href: '/', icon: 'lucide:home' },
    { name: 'About', href: '/about', icon: 'lucide:user' },
    { name: 'Projects', href: '/projects', icon: 'lucide:folder-code' },
    { name: 'Contact', href: '/contact', icon: 'lucide:send' },
  ],
  footer: {
    name: 'PHAM LUONG',
    description: 'Always interested in new projects and collaborations.',
    contact: {
      email: 'luongnb3213@gmail.com',
      phone: '0912800141',
      location: '190, Nguyen Trai, Thanh Xuan, Ha Noi',
    },
    socialLinks: [
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/pham.luong.689932/',
        icon: 'simple-icons:facebook',
      },
      {
        platform: 'GitHub',
        url: 'https://github.com/Luongnb3213',
        icon: 'mdi:github',
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/choai-pham-b9505b25b/',
        icon: 'mdi:linkedin',
      },
    ],
    services: [
      'Web Development',
      'Mobile Apps',
      'Desktop App Development',
      'Consulting',
    ],
  },
} as const;
