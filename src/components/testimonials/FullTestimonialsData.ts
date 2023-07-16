import EMANUEL from "../../assets/userAvatar/ema_img.jpg";
import LUCIA from "../../assets/userAvatar/Lucia_img.jpg";
import MARCELA from "../../assets/userAvatar/marce_img.jpg";
import LUIS from "../../assets/userAvatar/luis_img.jpg";
import SANTIAGO from "../../assets/userAvatar/santi_img.jpg";
import SALVADOR from "../../assets/userAvatar/salva_img.jpg";

interface TestimonialsDTO {
    id: number;
    link: string;
    name: string;
    role: string;
    avatar: string;
    test:{
        en: string;
        es: string;
    };
}

interface TestimonialDataDTO {
    title: {
        en: string;
        es: string;
    };
    subtitle: {
        en: string;
        es: string;
    }
}

const Testimonials: TestimonialsDTO[] = [
    {
        id: 1,
        link: 'https://www.linkedin.com/in/emanuelsaucedo/',
        name: 'Emanuel Saucedo',
        role: 'Full Stack Developer | JavaScript, ReactJS, Redux | NodeJS, ExpressJS | PostgreSQL',
        avatar: EMANUEL,
        test: {
            en: 'I had the pleasure of having studied and worked with Sebastian, if there is something I would highlight about him is that he is a very optimistic person, on the other hand, he is also a great team player, adapting to tasks without problems.',
            es: 'Tuve el agrado de haber estudiado y de haber trabajado junto a Sebastian, si hay algo que resaltaria de el es que es una persona muy optimista, por otro lado, tambien es un gran trabajador en equipo, adaptándose a tareas sin problemas.',
        },
    },
    {
        id: 2,
        link: 'https://www.linkedin.com/in/marialuciabidal/',
        name: 'Maria Lucia Bidal',
        role: 'Full-Stack Web Developer | Full-Stack Teaching Assistant | JavaScript | React | React Native | Redux | CSS | SASS | Express | NodeJS | PostgresSQL | Sequalize | MongoDB',
        avatar:LUCIA,
        test: {
            en: 'Sebastian is a dedicated person in everything he undertakes. He is charismatic, empathetic and always willing to help you in a neat and effective way,neat and effective.I had the pleasure of working during the bootcamp at Henry, where he showed me daily his skills as a great teammate, teamwork and above all technical skills. Undoubtedly, all these skills together make him an excellent person and professional.',
            es: 'Sebastián es una persona dedicada en cada cosa que emprende. Es carismático, empático y siempre está dispuesto a ayudarte de manera ordenada,        prolija y efectiva. Tuve el agrado de trabajar durante el bootcamp en Henry, donde me demostró a diario sus habilidades de gran compañero, trabajo en equipo y sobre todo técnicas.Sin duda, todas estas habilidades sumadas lo vuelven una excelente persona y profesional.',
        },
    },
    {
        id: 3,
        link: 'https://www.linkedin.com/in/marcela-utria/',
        name: 'Marcela Utria',
        role: 'Full-Stack Web Developer. Software Developer in Mercado Libre',
        avatar:MARCELA,
        test: {
            en: 'Sebastian is an excellent person and has an extraordinary charisma. He is always willing to help, and he was able to face and overcome the challenges that were presented in our final project of the Henry bootcamp. I would definitely work with him again.',
            es: 'Sebastián es una excelente persona y tiene un carisma extraordinario. Siempre está predispuesto a ayudar, y fue capaz de enfrentar y superar los retos que se presentaron en nuestro proyecto final del bootcamp Henry. Sin duda volvería a trabajar con el.',
        },
    },
    {
        id: 4,
        link: 'https://www.linkedin.com/in/engineer-luis-migliore/',
        name: 'Luis Nicolás Migliore Sabadini',
        role: 'FullStack Developer | JavaScript | NodeJS | React | Redux | PostgreSQL & Structural Engineer',
        avatar: LUIS,
        test: {
            en: 'Sebastian, with whom I had the pleasure of studying web programming and developing an E-commerce as part of a team of Full Stack developers, demonstrated and demonstrates daily to have the knowledge and skills necessary to develop with ease in the field of programming.Undoubtedly he brings in every job he does all his technical knowledge and, even more, an impeccable human behavior that, together, make him a complete professional.',
            es: 'Sebastián, con quien tuve el agrado de estudiar programación web y de desarrollar un E-commerce como parte de un equipo de desarrolladores Full Stack, demostró y demuestra a diario poseer los conocimientos y habilidades necesarias para desarrollarse con soltura en el campo de la programación. Indudablemente aporta en cada trabajo que realiza todos sus conocimientos técnicos y, más aún, un comportamiento humano impecable que, juntos, lo hacen un profesional completo.',
        },
    },
    {
        id: 5,
        link: 'https://www.linkedin.com/in/santiago-bonetto/',
        name: 'Santiago Bonetto',
        role: 'Full-Stack web developer | JavaScript | Typescript | HTML | CSS | React | Redux | Node | Express | Sequelize & SQL',
        avatar: SANTIAGO,
        test: {
            en: "Sebastian is a friend of many years ago, life crossed us again in the IT world, I had the opportunity to learn a lot from him, until today many teachings that he gave me were key to face the obstacles that I was running into along my course in 'Soy Henry'. I am still learning from him and I can say with total security that he is an excellent professional, nowadays wherever I go I always ask for Seba's advice or opinion.",
            es: "Sebastián es un amigo de hace muchísimos años, la vida nos volvió a cruzar en el mundo IT, tuve la oportunidad de aprender mucho de él, hasta hoy en día muchas enseñanzas que me brindo me fueron clave para afrontar los obstáculos que me iba topando a lo largo de mi cursada en 'Soy henry'. Todavía sigo aprendiendo de él y puedo decir con total seguridad que es un excelente profesional, hoy en día a donde vaya siempre pido un consejo u opinión de Seba.",
        },
    },
    {
        id: 6,
        link: 'https://www.linkedin.com/in/salvador-armanasco-catalin/',
        name: 'Salvador Armanasco Catalin',
        role: 'Full Stack Developer| React | Redux | Javascript | PostgresSQL | Sequelize | NodeJs | Express | MaterialUI | React Native | Typescript',
        avatar: SALVADOR,
        test: {
            en: "Seba was the person who helped me in my process of starting to study full-stack web development! He was very patient with me even though we had never met before and had never established a relationship. Today I was able to advance much better and faster thanks to his help. I recommend him 100% as a teammate without a doubt!",
            es: "Seba fue la persona que me ayudo en mi proceso de comenzar a estudiar desarrollo web full-stack! me tuvo muchísima paciencia a pesar de que hasta ese momento no nos conocíamos ni habíamos entablado una relacion. Hoy por hoy pude avanzar mucho mejor y mas rápido gracias a su ayuda. Lo reocomiendo al 100% como compañero de equipo sin dudas!",
        },
    },
];

const TestimonialData: TestimonialDataDTO = {
    title: {
        en: "Feedback from my peers",
        es: "Opinión de mis compañeros",
    },
    subtitle: {
        en: "Testimonials",
        es: "Testimonos",
    },
}

export {
    Testimonials,
    TestimonialData
}