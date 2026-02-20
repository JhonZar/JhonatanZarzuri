export const portfolioData = {
    profile: {
        name: "Jhonatan Zarzuri",
        role: "Full Stack Developer",
        location: "Bolivia",
        email: "jhonzar574@gmail.com",
        avatar: "/assets/profile.png",
        socials: {
            github: "https://github.com/JhonZar",
            linkedin: "https://linkedin.com/in/jhonatanzarzuri/",
        },
    },

    translations: {
        en: {
            nav: {
                about: "About",
                experience: "Experience",
                projects: "Projects",
                contact: "Contact",
            },

            hero: {
                greeting: "Hi, my name is",
                subtitle: "I build robust and scalable web applications.",
                description:
                    "I'm a full stack developer based in Bolivia with real experience building, maintaining, and improving web systems. I focus on clean code, architecture, and long-term maintainability.",
            },

            about: {
                title: "About Me",
                p1:
                    "My professional journey started as a software development intern in a government institution, where I worked with databases and internal systems. Since then, I have collaborated with startups and businesses on real-world web applications.",
                p2:
                    "I have worked remotely on contract-based projects and currently collaborate as an independent software consultant. I'm continuously improving my technical skills and strengthening my English to access global remote opportunities.",
                skillsTitle: "Technologies I've been working with:",
            },

            experience: {
                title: "Where I've Worked",
                items: [
                    {
                        company: "Procuraduría General del Estado",
                        role: "Software Development Intern",
                        period: "2022",
                        description:
                            "Provided technical support for internal systems, performed SQL queries for data analysis, and assisted in maintaining administrative software tools.",
                        tech: ["SQL", "MySQL", "Technical Support"],
                    },
                    {
                        company: "DesarrollaMelo (Remote)",
                        role: "Laravel Developer",
                        period: "Nov 2023 – Apr 2024",
                        description:
                            "Worked on DoctorPlace, maintaining and improving existing backend features, fixing bugs, and implementing additional functionalities in a production environment.",
                        tech: ["Laravel", "PHP", "MySQL"],
                    },
                    {
                        company: "DesarrollaMelo (Remote – Contract)",
                        role: "Laravel Developer",
                        period: "May 2024 – Jul 2024",
                        description:
                            "Developed core modules for a land, lots, and cemetery management system, including visual management of properties and implementation of business rules.",
                        tech: ["Laravel", "MySQL", "Blade"],
                    },
                    {
                        company: "Independent Software Consultant",
                        role: "Laravel Consultant",
                        period: "2024 – Present",
                        description:
                            "Consulting and development for a poultry production company, building systems to manage production processes, sales, inventory transformations, and operational workflows.",
                        tech: ["Laravel", "MySQL", "Business Logic"],
                    },
                ],
            },

            projects: {
                title: "Some Things I've Built",
                viewProject: "View Project",
                items: [
                    {
                        title: "Sombrerera Management System",
                        description:
                            "Web system designed to manage workforce tracking, production times, and order follow-ups for a local manufacturing business.",
                        tech: ["Laravel", "MySQL"],
                        link: "#",
                        images: [
                            "/assets/projects/ketal/image.png",
                            "/assets/projects/ketal/image copy.png"
                        ],
                    },
                    {
                        title: "Metacognitivo Platform",
                        description:
                            "Educational platform developed with React and backend services, focused on content management and interactive learning features.",
                        tech: ["React", "TypeScript", "REST APIs"],
                        link: "#",
                        images: [
                            "/assets/projects/image.png",
                            "/assets/projects/image copy.png",
                            "/assets/projects/image copy 2.png",
                            "/assets/projects/image copy 3.png",
                            "/assets/projects/image copy 4.png"
                        ],
                    },
                ],
            },
        },

        es: {
            nav: {
                about: "Sobre Mí",
                experience: "Experiencia",
                projects: "Proyectos",
                contact: "Contacto",
            },

            hero: {
                greeting: "Hola, mi nombre es",
                subtitle: "Construyo aplicaciones web robustas y escalables.",
                description:
                    "Soy un desarrollador full stack en Bolivia con experiencia real construyendo, manteniendo y mejorando sistemas web. Me enfoco en código limpio, arquitectura y mantenibilidad a largo plazo.",
            },

            about: {
                title: "Sobre Mí",
                p1:
                    "Mi camino profesional comenzó como pasante en una institución del Estado, donde trabajé con bases de datos y sistemas internos. Desde entonces he colaborado con startups y negocios en aplicaciones web reales.",
                p2:
                    "He trabajado de forma remota en proyectos por contrato y actualmente colaboro como consultor independiente. Continúo fortaleciendo mis habilidades técnicas y mi inglés para acceder a oportunidades remotas globales.",
                skillsTitle: "Tecnologías con las que he trabajado:",
            },

            experience: {
                title: "Dónde he trabajado",
                items: [
                    {
                        company: "Procuraduría General del Estado",
                        role: "Pasante en Desarrollo de Software",
                        period: "2022",
                        description:
                            "Soporte técnico para sistemas internos, consultas SQL para análisis de datos y apoyo en el mantenimiento de herramientas administrativas.",
                        tech: ["SQL", "MySQL", "Soporte Técnico"],
                    },
                    {
                        company: "DesarrollaMelo (Remoto)",
                        role: "Desarrollador Laravel",
                        period: "Nov 2023 – Abr 2024",
                        description:
                            "Trabajo en DoctorPlace realizando mantenimiento del backend, corrección de errores e implementación de nuevas funcionalidades en un entorno productivo.",
                        tech: ["Laravel", "PHP", "MySQL"],
                    },
                    {
                        company: "DesarrollaMelo (Remoto – Contrato)",
                        role: "Desarrollador Laravel",
                        period: "May 2024 – Jul 2024",
                        description:
                            "Desarrollo de módulos principales para un sistema de gestión de terrenos, lotes y cementerio, incluyendo la parte visual y lógica del negocio.",
                        tech: ["Laravel", "MySQL", "Blade"],
                    },
                    {
                        company: "Consultoría Independiente",
                        role: "Consultor Laravel",
                        period: "2024 – Presente",
                        description:
                            "Desarrollo y consultoría para una empresa avícola, creando sistemas de gestión de producción, ventas, transformaciones de inventario y operaciones.",
                        tech: ["Laravel", "MySQL", "Lógica de Negocio"],
                    },
                ],
            },

            projects: {
                title: "Cosas que he construido",
                viewProject: "Ver Proyecto",
                items: [
                    {
                        title: "Sistema de Gestión para Sombrerera",
                        description:
                            "Sistema web para el control de mano de obra, tiempos de producción y seguimiento de pedidos para un negocio local.",
                        tech: ["Laravel", "MySQL"],
                        link: "#",
                        images: [
                            "/assets/projects/ketal/image.png",
                            "/assets/projects/ketal/image copy.png"
                        ],
                    },
                    {
                        title: "Plataforma Metacognitivo",
                        description:
                            "Plataforma educativa desarrollada con React y servicios backend, enfocada en la gestión de contenidos y aprendizaje interactivo.",
                        tech: ["React", "TypeScript", "APIs REST"],
                        link: "#",
                        images: [
                            "/assets/projects/image.png",
                            "/assets/projects/image copy.png",
                            "/assets/projects/image copy 2.png",
                            "/assets/projects/image copy 3.png",
                            "/assets/projects/image copy 4.png"
                        ],
                    },
                ],
            },
        },
    },
};
