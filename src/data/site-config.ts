import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://github.com/Jplazadelosreyes',
    avatar: {
        src: avatar,
        alt: 'Juan Plaza de los Reyes'
    },
    title: 'Juan Plaza de los Reyes',
    subtitle: 'Product Engineer | Full Stack & DevOps',
    description: 'Portafolio profesional de Juan Plaza de los Reyes, especialista en desarrollo de producto y sistemas escalables en Barcelona.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Juan Plaza de los Reyes - Portafolio'
    },
    headerNavLinks: [
        {
            text: 'Inicio',
            href: '/'
        },
        {
            text: 'Proyectos',
            href: '/projects'
        },
        {
            text: 'Stacks',
            href: '/stacks'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'Sobre mí',
            href: '/about'
        },
        {
            text: 'Contacto',
            href: '/contact'
        },
        {
            text: 'Términos',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/juan-plaza-de-los-reyes-014991133/'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/Jplazadelosreyes'
        }
    ],
    hero: {
        title: '¡Hola! Soy Juan Plaza de los Reyes',
        text: "Desarrollador **Full Stack & DevOps** residente en Barcelona. \n\n" +
            "Me especializo en transformar problemas complejos en soluciones robustas y escalables, con un enfoque total en el **éxito del negocio**. Experto en gestionar situaciones críticas y optimizar recursos para entregar resultados bajo presión. \n\n" +
            "Firme creyente en el **talento colectivo**, aporto una mentalidad de 'equipo como familia' donde la responsabilidad es compartida y el aprendizaje es constante. \n\n" +
            "Mi compromiso es convertir requerimientos urgentes en arquitectura técnica sólida, bajo una ética profesional donde **el objetivo común siempre es la prioridad**.",
        image: {
            src: hero,
            alt: 'Juan Plaza de los Reyes - Full Stack & DevOps'
        },
        actions: [
            {
                text: 'Contactar',
                href: '/contact'
            },
            {
                text: 'Ver Proyectos',
                href: '/projects'
            }
        ]
    },
    subscribe: {
        enabled: false,
        title: 'Suscríbete',
        text: 'Actualizaciones sobre tecnología y arquitectura.',
        form: {
            action: '#'
        }
    },
    stacksPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;