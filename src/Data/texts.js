export const texts = {
  en: {
    navbar: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
    },
    home: {
      title: "Hi, I'm Claudio Barlassina",
      subtitle: 'Full-Stack Web Developer',
      description:
        'Web Developer focused on building clean, functional web applications. I work mainly with React and modern web tools, paying attention to usability, performance, and straightforward solutions that make products easier to use.',
      button: 'Projects',
    },
    about: {
      title: 'About Me',
      intro:
        'Here you will find more information about who I am, what I do, and my current skills in web development and technology.',
      subtitle: 'Get to know me',
      description1:
        "I'm a Full-Stack Web Developer with a strong focus on frontend development, building and maintaining modern websites and web applications. I care about creating clean, functional, and user-friendly interfaces that contribute to the success of the final product.",
      description2:
        'In my free time, I continuously improve my skills by learning new technologies and building real-world projects to apply what I learn in practice.',
      description3:
        'I adapt well to teamwork, prioritize clean and maintainable code, and enjoy turning ideas into functional products.',
      opportunities:
        "I'm currently open to job opportunities where I can add value, continue growing as a developer, and collaborate with teams passionate about technology and building quality products.",
      ctaProjects: 'View Projects',
      ctaContact: 'Contact',
    },
    projects: {
      title: 'Projects',
      1: {
        ecommerce: {
          title: 'Star-Accessories | eCommerce',
          description:
            'Full eCommerce platform with a decoupled frontend/backend architecture and its own database. The React frontend features a persistent cart (Zustand), image carousel (Swiper), Firebase authentication, and admin panel. The Express + MongoDB (Atlas) backend handles products and order management with Cloudinary image upload and email notifications via Nodemailer.',
          techTitle: 'Tech Stack',
          label: 'Client project',
          image: 'miniaturaStar.png',
          tech: ['React', 'Vite', 'Zustand', 'Firebase', 'Swiper', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'Nodemailer'],
          featuresTitle: 'Key Features',
          demo: 'https://star-accesorios.vercel.app/',
          github: 'https://github.com/ClaudioBarlassina',
          features: [
            'Decoupled frontend/backend architecture',
            'Persistent shopping cart with Zustand',
            'Image carousel with Swiper',
            'Firebase authentication for admin panel',
            'REST API with Express and MongoDB',
            'Product filtering by category, subcategory, brand, price',
            'Product search by name',
            'Pagination',
            'Cloudinary image upload and management',
            'Order management with email notifications via Nodemailer',
            'Mobile-first responsive design',
          ],
        },
      },
      2: {
        moduCommerce: {
          title: 'Full Stack eCommerce Demo',
          label: 'Demo Project',
          description:
            'Full Stack eCommerce Demo is a full stack eCommerce platform built with a decoupled architecture between frontend and backend. The frontend communicates exclusively with a custom API built using Express, allowing flexible integration across different projects. All system components were designed as reusable, fully responsive and self-contained modules.',
          image: 'miniaturaEcom.png',
          techTitle: 'Technologies',
          tech: ['React', 'Vite', 'Zustand', 'Express', 'Node.js', 'Nodemailer', 'CSS'],
          featuresTitle: 'Features',
          demo: 'https://full-stack-ecommerce-opal.vercel.app/',
          github: 'https://github.com/ClaudioBarlassina/Full-Stack-Ecommerce',
          features: [
            'Decoupled Frontend and Backend architecture',
            'REST API built with Express',
            'Reusable components designed for multiple projects',
            'Fully responsive components',
            'Product filtering by category, brand and price',
            'Product search by name',
            'Automatic pagination (10 products per page)',
            'Shopping cart with persistence',
            'Custom simulated payment gateway',
            'Email sending with Nodemailer',
            'Global state management using Zustand',
          ],
        },
      },
      3: {
        ferreteriaPorMayor: {
          title: 'Wholesale Hardware Store – eCommerce Demo',
          label: 'Demo Project',
          description:
            'Wholesale Hardware Store is a full stack eCommerce application built with a decoupled architecture between frontend and backend. The frontend, developed with React, consumes a custom API built using Node.js, Express, and MongoDB. The application allows dynamic product management, including filtering by name, brand, category, and price range. It also features user authentication with Firebase and online payment integration using Stripe.',
          image: 'FerreteriaPorMayorMiniatura.png',
          techTitle: 'Technologies',
          tech: ['React', 'CSS', 'Zustand', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Stripe'],
          featuresTitle: 'Features',
          demo: 'https://ferreteria-por-mayor-ecommerce-demo.vercel.app/',
          github: 'https://github.com/ClaudioBarlassina/FerreteriaPorMayor-Ecommerce-Demo',
          features: [
            'Decoupled Frontend and Backend architecture',
            'REST API built with Node.js and Express',
            'MongoDB database for product management',
            'User authentication with Firebase',
            'Stripe payment integration',
            'Advanced filters by name, brand, category, and price',
            'Real-time product search',
            'Persistent shopping cart',
            'Fully responsive design',
            'Reusable and scalable components',
            'Global state management with Zustand',
          ],
        },
      },
      4: {
        cvManager: {
          title: 'CV Manager',
          label: 'Full Stack + AI',
          description:
            'A full-stack application for intelligent CV management. Upload multiple PDFs via drag & drop, and AI automatically extracts personal data, skills, experience, and education. Features a dashboard with search and filters, CSV/PDF export, role-based authentication (user/admin/superadmin), admin panel, and subscription management.',
          image: 'miniaturaCvManager.png',
          techTitle: 'Technologies',
          tech: ['React', 'TailwindCSS', 'Express', 'MongoDB', 'OpenAI', 'JWT', 'Multer', 'Zustand'],
          featuresTitle: 'Features',
          demo: 'https://cv-manager-blush.vercel.app/login',
          github: 'https://github.com/ClaudioBarlassina/cv-manager',
          features: [
            'Drag & drop multiple PDF upload',
            'AI-powered CV data extraction',
            'Dashboard with search and filters',
            'CSV and PDF export',
            'Role-based authentication (user/admin/superadmin)',
            'Admin panel for user management',
            'Subscription management system',
            'Decoupled frontend/backend architecture',
          ],
        },
      },
    },
    contact: {
      title: 'Contact',
      description:
        'Results-oriented web developer who builds and manages websites and web applications that contribute to the overall success of the product. Feel free to contact me for opportunities or collaborations.',
      location: 'Find me at:',
      email: 'Email',
      cta: 'Send message',
    },
  },
  es: {
    navbar: {
      home: 'Inicio',
      projects: 'Proyectos',
      about: 'Sobre m\u00ed',
      contact: 'Contacto',
    },
    home: {
      title: 'Hola, soy Claudio Barlassina',
      subtitle: 'Desarrollador Web Full-Stack',
      description:
        'Desarrollador Web enfocado en crear aplicaciones web limpias, funcionales y modernas. Trabajo principalmente con React y herramientas actuales, prestando atenci\u00f3n a la usabilidad, el rendimiento y soluciones claras que mejoran la experiencia del usuario.',
      button: 'Proyectos',
    },
    about: {
      title: 'Sobre m\u00ed',
      intro:
        'Aqu\u00ed encontrar\u00e1s m\u00e1s informaci\u00f3n sobre qui\u00e9n soy, qu\u00e9 hago y cu\u00e1les son mis habilidades actuales en desarrollo web y tecnolog\u00eda.',
      subtitle: 'Con\u00f3ceme',
      description1:
        'Soy Desarrollador Web Full-Stack con un fuerte enfoque en el desarrollo frontend, creando y manteniendo sitios web y aplicaciones modernas. Me interesa desarrollar interfaces limpias, funcionales y f\u00e1ciles de usar que aporten valor al producto final.',
      description2:
        'En mi tiempo libre, contin\u00fao mejorando mis habilidades aprendiendo nuevas tecnolog\u00edas y desarrollando proyectos reales para aplicar lo aprendido en la pr\u00e1ctica.',
      description3:
        'Me adapto bien al trabajo en equipo, priorizo el c\u00f3digo limpio y mantenible, y disfruto transformar ideas en productos funcionales.',
      opportunities:
        'Actualmente estoy abierto a oportunidades laborales donde pueda aportar valor, seguir creciendo como desarrollador y colaborar con equipos apasionados por la tecnolog\u00eda y la creaci\u00f3n de productos de calidad.',
      ctaProjects: 'Ver proyectos',
      ctaContact: 'Contacto',
    },
    projects: {
      title: 'Proyectos',
      1: {
        ecommerce: {
          title: 'Star-Accesorios | eCommerce',
          description:
            'Plataforma eCommerce completa con arquitectura desacoplada frontend/backend y base de datos propia. El frontend en React incluye carrito persistente (Zustand), carrusel de im\u00e1genes (Swiper), autenticaci\u00f3n Firebase y panel de administraci\u00f3n. El backend con Express y MongoDB (Atlas) gestiona productos y pedidos, con subida de im\u00e1genes a Cloudinary y notificaciones por email mediante Nodemailer.',
          image: 'miniaturaStar.png',
          techTitle: 'Tecnolog\u00edas',
          label: 'Proyecto de cliente',
          tech: ['React', 'Vite', 'Zustand', 'Firebase', 'Swiper', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'Nodemailer'],
          featuresTitle: 'Funcionalidades',
          demo: 'https://star-accesorios.vercel.app/',
          github: 'https://github.com/ClaudioBarlassina',
          features: [
            'Arquitectura frontend/backend desacoplada',
            'Carrito de compras persistente con Zustand',
            'Carrusel de im\u00e1genes con Swiper',
            'Autenticaci\u00f3n Firebase para panel admin',
            'API REST con Express y MongoDB',
            'Filtros por categor\u00eda, subcategor\u00eda, marca y precio',
            'B\u00fasqueda de productos por nombre',
            'Paginaci\u00f3n',
            'Subida y gesti\u00f3n de im\u00e1genes en Cloudinary',
            'Gesti\u00f3n de pedidos con notificaciones email (Nodemailer)',
            'Dise\u00f1o responsive mobile-first',
          ],
        },
      },
      2: {
        moduCommerce: {
          title: 'TecnoShop eCommerce Demo',
          label: 'Proyecto demo',
          description:
            'Full Stack eCommerce Demo es una plataforma eCommerce full stack desarrollada con una arquitectura desacoplada entre frontend y backend. El frontend consume exclusivamente una API creada con Express, permitiendo una integraci\u00f3n flexible en diferentes proyectos. Todos los componentes del sistema fueron dise\u00f1ados como componentes reutilizables, completamente responsive y autom\u00e1ticos.',
          image: 'miniaturaEcom.png',
          techTitle: 'Tecnolog\u00edas',
          tech: ['React', 'Vite', 'Zustand', 'Express', 'Node.js', 'Nodemailer', 'CSS'],
          featuresTitle: 'Funcionalidades',
          demo: 'https://full-stack-ecommerce-opal.vercel.app/',
          github: 'https://github.com/ClaudioBarlassina/Full-Stack-Ecommerce',
          features: [
            'Arquitectura Frontend y Backend desacoplada',
            'API REST construida con Express',
            'Componentes reutilizables dise\u00f1ados para m\u00faltiples proyectos',
            'Componentes completamente responsive',
            'Sistema de filtros por categor\u00eda, marca y precio',
            'B\u00fasqueda de productos por nombre',
            'Paginaci\u00f3n autom\u00e1tica (10 productos por p\u00e1gina)',
            'Carrito de compras con persistencia',
            'Simulaci\u00f3n de pasarela de pago propia',
            'Env\u00edo de correos con Nodemailer',
            'Gesti\u00f3n de estado global con Zustand',
          ],
        },
      },
      3: {
        ferreteriaPorMayor: {
          title: 'Ferreter\u00eda Por Mayor \u2013 eCommerce Demo',
          label: 'Proyecto demo',
          description:
            'Ferreter\u00eda Por Mayor es una aplicaci\u00f3n eCommerce full stack desarrollada con una arquitectura desacoplada entre frontend y backend. El frontend, construido en React, consume una API propia desarrollada con Node.js, Express y MongoDB. La aplicaci\u00f3n permite gestionar productos din\u00e1micamente, incluyendo filtros por nombre, marca, categor\u00eda y rango de precios. Adem\u00e1s, cuenta con autenticaci\u00f3n de usuarios mediante Firebase y una integraci\u00f3n de pagos online con Stripe.',
          image: 'FerreteriaPorMayorMiniatura.png',
          techTitle: 'Tecnolog\u00edas',
          tech: ['React', 'CSS', 'Zustand', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Stripe'],
          featuresTitle: 'Funcionalidades',
          demo: 'https://ferreteria-por-mayor-ecommerce-demo.vercel.app/',
          github: 'https://github.com/ClaudioBarlassina/FerreteriaPorMayor-Ecommerce-Demo',
          features: [
            'Arquitectura Frontend y Backend desacoplada',
            'API REST con Node.js y Express',
            'Base de datos MongoDB para gesti\u00f3n de productos',
            'Autenticaci\u00f3n de usuarios con Firebase',
            'Integraci\u00f3n de pagos online con Stripe',
            'Filtros avanzados por nombre, marca, categor\u00eda y precio',
            'B\u00fasqueda de productos en tiempo real',
            'Carrito de compras con persistencia',
            'Dise\u00f1o completamente responsive',
            'Componentes reutilizables y escalables',
            'Gesti\u00f3n de estado global con Zustand',
          ],
        },
      },
      4: {
        cvManager: {
          title: 'CV Manager',
          label: 'Full Stack + IA',
          description:
            'Aplicaci\u00f3n full-stack para gesti\u00f3n inteligente de CVs. Sub\u00ed m\u00faltiples PDFs mediante drag & drop, y la IA extrae autom\u00e1ticamente datos personales, skills, experiencia y educaci\u00f3n. Incluye dashboard con b\u00fasqueda y filtros, exportaci\u00f3n a CSV/PDF, autenticaci\u00f3n por roles (user/admin/superadmin), panel de administraci\u00f3n y gesti\u00f3n de suscripciones.',
          image: 'miniaturaCvManager.png',
          techTitle: 'Tecnolog\u00edas',
          tech: ['React', 'TailwindCSS', 'Express', 'MongoDB', 'OpenAI', 'JWT', 'Multer', 'Zustand'],
          featuresTitle: 'Funcionalidades',
          demo: 'https://cv-manager-blush.vercel.app/login',
          github: 'https://github.com/ClaudioBarlassina/cv-manager',
          features: [
            'Subida m\u00faltiple de PDFs con drag & drop',
            'Extracci\u00f3n de datos con IA',
            'Dashboard con b\u00fasqueda y filtros',
            'Exportaci\u00f3n a CSV y PDF',
            'Autenticaci\u00f3n por roles (user/admin/superadmin)',
            'Panel de administraci\u00f3n de usuarios',
            'Sistema de suscripciones',
            'Arquitectura frontend/backend desacoplada',
          ],
        },
      },
    },
    contact: {
      title: 'Contacto',
      description:
        'Desarrollador web orientado a resultados que crea y gestiona sitios y aplicaciones web que contribuyen al \u00e9xito del producto. Pod\u00e9s contactarme por oportunidades o colaboraciones.',
      location: 'Pod\u00e9s Encontrarme en:',
      email: 'Email',
      cta: 'Enviar mensaje',
    },
  },
}
