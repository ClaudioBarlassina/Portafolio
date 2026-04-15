export const texts = {
  en: {
    navbar: {
      home: 'Home',
      projects: 'Proyects',
      about: 'About',
      contact: 'Contact',
    },
    home: {
      title: 'Hi, i`m Claudio Barlassina',
      subtitle: 'Full-Stack Web Developer',
      description:
        'Web Developer focused on building clean, functional web applications. I work mainly with React and modern web tools, paying attention to usability, performance, and straightforward solutions that make products easier to use.',
      button: 'Projects',
    },
    about: {
      title: 'About Me',

      intro:
        'Here you’ll find more information about who I am, what I do, and my current skills in web development and technology.',

      subtitle: 'Get to know me',

      description1:
        'I’m a Full-Stack Web Developer with a strong focus on frontend development, building and maintaining modern websites and web applications. I care about creating clean, functional, and user-friendly interfaces that contribute to the success of the final product.',

      description2:
        'In my free time, I continuously improve my skills by learning new technologies and building real-world projects to apply what I learn in practice.',

      description3:
        'I adapt well to teamwork, prioritize clean and maintainable code, and enjoy turning ideas into functional products.',

      opportunities:
        'I’m currently open to job opportunities where I can add value, continue growing as a developer, and collaborate with teams passionate about technology and building quality products.',

      ctaProjects: 'View Projects',
      ctaContact: 'Contact',
    },
    projects: {
      title: 'Projects',
      1: {
        ecommerce: {
          title: 'Star-Accesorios | eCommerce',
          description:
            'A full eCommerce application developed from scratch. It includes a complete shopping flow, cart management, and global state handling, with a Supabase backend for data persistence. The project focuses on best practices, performance optimization, and a mobile-first user experience.',
          techTitle: 'Tech Stack',
          label: 'Proyect client',
          image: 'miniaturaStar.png',
          tech: ['React', 'Vite', 'CSS', 'Supabase', 'Zustand'],
          featuresTitle: 'Key Features',
           demo: 'https://ecommerce-star-six.vercel.app/',
          github: 'https://github.com/ClaudioBarlassina',
          features: [
            'Product catalog',
            'Product filtering',
            'Product detail view',
            'Shopping cart',
            'Global state management with Zustand',
            'Mobile-first responsive design',
            'Deployed to production',
            "Supabase database",
          ],
        },
      },
      2: {
  moduCommerce: {
    title: "Full Stack eCommerce Demo",

    label: "Demo Project",

    description:
      "Full Stack eCommerce Demo is a full stack eCommerce platform built with a decoupled architecture between frontend and backend. The frontend communicates exclusively with a custom API built using Express, allowing flexible integration across different projects. All system components were designed as reusable, fully responsive and self-contained modules, making them easy to adapt to different applications or project structures.",

    image: "miniaturaEcom.png",

    techTitle: "Technologies",

    tech: [
      "React",
      "Vite",
      "Zustand",
      "Express",
      "Node.js",
      "Nodemailer",
      "CSS"
    ],

    featuresTitle: "Features",

    demo: "",
    github: "https://github.com/ClaudioBarlassina",

    features: [
      "Decoupled Frontend and Backend architecture",
      "REST API built with Express",
      "Reusable components designed for multiple projects",
      "Fully responsive components",
      "Product filtering by category, brand and price",
      "Product search by name",
      "Automatic pagination (10 products per page)",
      "Shopping cart with persistence",
      "Custom simulated payment gateway",
      "Email sending with Nodemailer",
      "Global state management using Zustand"
    ]
  }
},3: {
  ferreteriaPorMayor: {
    title: "Wholesale Hardware Store – eCommerce Demo",

    label: "Demo Project",

    description:
      "Wholesale Hardware Store is a full stack eCommerce application built with a decoupled architecture between frontend and backend. The frontend, developed with React, consumes a custom API built using Node.js, Express, and MongoDB. The application allows dynamic product management, including filtering by name, brand, category, and price range. It also features user authentication with Firebase and online payment integration using Stripe. The entire system is built with reusable, fully responsive, and scalable components.",

    image: "miniaturaFerreteria.png",

    techTitle: "Technologies",

    tech: [
      "React",
      "CSS",
      "Zustand",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "Stripe"
    ],

    featuresTitle: "Features",

    demo: "",
    github: "",

    features: [
      "Decoupled Frontend and Backend architecture",
      "REST API built with Node.js and Express",
      "MongoDB database for product management",
      "User authentication with Firebase",
      "Stripe payment integration",
      "Advanced filters by name, brand, category, and price",
      "Real-time product search",
      "Persistent shopping cart",
      "Fully responsive design",
      "Reusable and scalable components",
      "Global state management with Zustand"
    ]
  }
}
    },
  },
  es: {
    navbar: {
      home: 'Inicio',
      projects: 'Proyectos',
      about: 'Sobre mí',
      contact: 'Contacto',
    },

    home: {
      title: 'Hola, soy Claudio Barlassina',
      subtitle: 'Desarrollador Web Full-Stack',
      description:
        'Desarrollador Web enfocado en crear aplicaciones web limpias, funcionales y modernas. Trabajo principalmente con React y herramientas actuales, prestando atención a la usabilidad, el rendimiento y soluciones claras que mejoran la experiencia del usuario.',
      button: 'Proyectos',
    },

    about: {
      title: 'Sobre mí',

      intro:
        'Aquí encontrarás más información sobre quién soy, qué hago y cuáles son mis habilidades actuales en desarrollo web y tecnología.',

      subtitle: 'Conoceme',

      description1:
        'Soy Desarrollador Web Full-Stack con un fuerte enfoque en el desarrollo frontend, creando y manteniendo sitios web y aplicaciones modernas. Me interesa desarrollar interfaces limpias, funcionales y fáciles de usar que aporten valor al producto final.',

      description2:
        'En mi tiempo libre, continúo mejorando mis habilidades aprendiendo nuevas tecnologías y desarrollando proyectos reales para aplicar lo aprendido en la práctica.',

      description3:
        'Me adapto bien al trabajo en equipo, priorizo el código limpio y mantenible, y disfruto transformar ideas en productos funcionales.',

      opportunities:
        'Actualmente estoy abierto a oportunidades laborales donde pueda aportar valor, seguir creciendo como desarrollador y colaborar con equipos apasionados por la tecnología y la creación de productos de calidad.',

      ctaProjects: 'Ver proyectos',
      ctaContact: 'Contacto',
    },

    projects: {
      title: 'Proyectos',
      1: {
        ecommerce: {
          title: 'Star-Accesorios | eCommerce',
          description:
            'Aplicación eCommerce completa desarrollada desde cero. Incluye un flujo de compra completo, manejo del carrito y estado global, con un backend en Supabase para la persistencia de datos. El proyecto está enfocado en buenas prácticas, optimización de rendimiento y una experiencia mobile-first.',
          image: 'miniaturaStar.png',
          techTitle: 'Tecnologías',
          label: 'Proyecto de cliente',
          tech: ['React', 'Vite', 'CSS', 'Supabase', 'Zustand'],
          featuresTitle: 'Funcionalidades',
          demo: 'https://ecommerce-star-six.vercel.app/',
          github: 'https://github.com/ClaudioBarlassina',
          features: [
            'Catálogo de productos',
            'Filtrado de productos',
            'Vista de detalle del producto',
            'Carrito de compras',
            'Manejo de estado global con Zustand',
            'Diseño responsive mobile-first',
            'Aplicación desplegada en producción',
            "Base de datos en Supabase",
          ],
        },
      },
      2: {
  moduCommerce: {
    title: "Full Stack eCommerce Demo",

    label: "Proyecto demo",

    description:
      "Full Stack eCommerce Demo es una plataforma eCommerce full stack desarrollada con una arquitectura desacoplada entre frontend y backend. El frontend consume exclusivamente una API creada con Express, permitiendo una integración flexible en diferentes proyectos. Todos los componentes del sistema fueron diseñados como componentes reutilizables, completamente responsive y automáticos, capaces de adaptarse fácilmente a distintos proyectos o estructuras de aplicación.",

    image: "miniaturaEcom.png",

    techTitle: "Tecnologías",

    tech: [
      "React",
      "Vite",
      "Zustand",
      "Express",
      "Node.js",
      "Nodemailer",
      "CSS"
    ],

    featuresTitle: "Funcionalidades",

    demo: "",
    github: "https://github.com/ClaudioBarlassina/Full-Stack-Ecommerce",

    features: [
      "Arquitectura Frontend y Backend desacoplada",
      "API REST construida con Express",
      "Componentes reutilizables diseñados para múltiples proyectos",
      "Componentes completamente responsive",
      "Sistema de filtros por categoría, marca y precio",
      "Búsqueda de productos por nombre",
      "Paginación automática (10 productos por página)",
      "Carrito de compras con persistencia",
      "Simulación de pasarela de pago propia",
      "Envío de correos con Nodemailer",
      "Gestión de estado global con Zustand"
    ]
  }
},3: {
  ferreteriaPorMayor: {
    title: "Ferretería Por Mayor – eCommerce Demo",

    label: "Proyecto demo",

    description:
      "Ferretería Por Mayor es una aplicación eCommerce full stack desarrollada con una arquitectura desacoplada entre frontend y backend. El frontend, construido en React, consume una API propia desarrollada con Node.js, Express y MongoDB. La aplicación permite gestionar productos dinámicamente, incluyendo filtros por nombre, marca, categoría y rango de precios. Además, cuenta con autenticación de usuarios mediante Firebase y una integración de pagos online con Stripe. Todo el sistema fue construido con componentes reutilizables, completamente responsive y escalables.",

    image: "miniaturaFerreteria.png",

    techTitle: "Tecnologías",

    tech: [
      "React",
      "CSS",
      "Zustand",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "Stripe"
    ],

    featuresTitle: "Funcionalidades",

    demo: "",
    github: "",

    features: [
      "Arquitectura Frontend y Backend desacoplada",
      "API REST con Node.js y Express",
      "Base de datos MongoDB para gestión de productos",
      "Autenticación de usuarios con Firebase",
      "Integración de pagos online con Stripe",
      "Filtros avanzados por nombre, marca, categoría y precio",
      "Búsqueda de productos en tiempo real",
      "Carrito de compras con persistencia",
      "Diseño completamente responsive",
      "Componentes reutilizables y escalables",
      "Gestión de estado global con Zustand"
    ]
  }
}
    },
  },
}
