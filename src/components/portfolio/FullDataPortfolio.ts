import IMG1 from'../../assets/dogs-page-home.png';
import IMG2 from'../../assets/rick-morty-home.png';
import IMG3 from'../../assets/ecommerce.png';
import IMG4 from'../../assets/task-list.png';
import IMG5 from'../../assets/chuck-norris-jokes.png';
import IMG6 from'../../assets/rest-api-nestjs.png';
import IMG7 from'../../assets/weatherBot.png';
import IMG8 from '../../assets/formulario-taller.png'

export interface ProyectoDTO {
    id: string;
    title: string;
    img: string;
    description:{
        en: string;
        es: string;
    };
    technologies:string;
    link?: string;
    github: string;
}

export interface PortfolioDataDTO {
    title:{
        en: string;
        es: string;
    };
    subtitle: string;
    button:{
        en: string;
        es: string;
    };
    verMas:{
        en: string;
        es: string;
    };
}

export const soloProjects: ProyectoDTO[] = [
    {
        id: "1",
        title: 'Doogies Page',
        img: IMG1,
        description:{
            en: 'Doggies Page is an app that allows you to view a list of dog breeds, sort them, filter them and as an extra feature create one from scratch.',
            es: 'Doggies Page es una aplicación que permite ver una lista de razas de perros, ordenarlas, filtrarlas y, como función adicional, crear una desde cero.',
        },
        technologies: 'React | Redux | Node Js | Express | PostgreSQL',
        github: 'https://github.com/Scerutti/Dogs-API-Deployment',
    },
    {
        id: "2",
        title: 'Formulario taller',
        img: IMG8,
        description:{
            en: 'It is a project for a group from the faculty of health sciences, for the Environmental Health career.',
            es: 'Es un proyecto para un grupo de la facultad de ciencias de la salud, para la carrera de Salud Ambiental',
        },
        technologies: 'ReactJs | TypeScript | Material UI',
        github: 'https://github.com/Scerutti/taller-invitation-form',
        link: "https://invitacion-one.vercel.app/"
    },
    {
        id: "3",
        title: 'Weather Discord Bot',
        img: IMG7,
        description:{
            en: 'It is a simple bot that, when you enter a command, responds with the weather of the indicated city.',
            es: 'Se trata de un sencillo bot que, al introducir un comando, responde con el tiempo de la ciudad indicada.',
        },
        technologies: ' JavaScript | NodeJs ',
        github: 'https://gitlab.com/sebacerutti/weatherbotds',
    },
    {
        id: "4",
        title: 'Rest-API with Nest.JS',
        img: IMG6,
        description:{
            en: 'CRUD connected to MongoDB, for creating/reading/updating/deleting products.',
            es: 'CRUD conectado a MongoDB, para crear/leer/actualizar/borrar productos.',
        },
        technologies: ' TypesCript | Nest.Js | MongoDB',
        github: 'https://github.com/Scerutti/rest-api-nest',
    },
    {
        id: "5",
        title: 'Chuck Norris Jokes',
        img: IMG5,
        description:{
            en: 'It is a SPA that generates random jokes consumed from an external API.',
            es: 'Es una SPA que genera chistes aleatorios consumidos desde una API externa.',
        },
        technologies: ' TypeScript | React ',
        link: 'https://chuck-norris-jokes-scerutti.vercel.app',
        github: 'https://github.com/Scerutti/chuck-norris-jokes',
    },
    {
        id: "6",
        title: 'E-commerce App',
        img: IMG3,
        description:{
            en: 'This App is a page dedicated to the purchase of electronic products, which has functionalities such as login, shopping cart, among others.',
            es: 'Esta App es una página dedicada a la compra de productos electrónicos, que cuenta con funcionalidades como login, carrito de compras, entre otras.',
        },
        technologies: 'JavaScript | Webpack',
        github: 'https://github.com/federicoacuna/soyHenryWebFT23b-G01-PF',
    },
    {
        id: "7",
        title: 'Task List App',
        img: IMG4,
        description:{
            en: 'A SPA, which allows the user to load tasks, with subtasks. Saving the session in the Local Storage.',
            es: 'Un SPA, que permite al usuario cargar tareas, con subtareas. Guardar la sesión en el Almacenamiento Local.',
        },
        technologies: ' TypeScript | React | Redux | Node Js',
        link: 'https://todos-list-wine.vercel.app',
        github: 'https://github.com/Scerutti/TaskList-complete',
    },
    {
        id: "8",
        title: 'Rick & Morty SPA',
        img: IMG2,
        description:{
            en: 'Rick and Morty application that provides information about the characters of this animated series.',
            es: 'Aplicación de Rick y Morty que ofrece información sobre los personajes de esta serie de animación.',
        },
        technologies: 'React | Redux',
        link: 'https://rick-and-morty-olive.vercel.app',
        github: 'https://github.com/Scerutti/Rick-and-Morty',
    }
];

export const portfolioData: PortfolioDataDTO = {
    title:{
        en: "My Recent Work",
        es: "Mi trabajo reciente",
    },
    subtitle: "Portfolio",
    button:{
        en: "Live Demo",
        es: "Demo",
    },
    verMas:{
        en: "Learn more",
        es: "Ver mas",
    }
}