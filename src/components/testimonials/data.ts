interface TestimonialsDTO {
    id: number;
    link: string;
    name: string;
    role: string;
    test: string;
    avatar: string;
}
const data: TestimonialsDTO[] = [
    {
        id: 1,
        link: 'https://www.linkedin.com/in/emanuelsaucedo/',
        name: 'Emanuel Saucedo',
        role: 'Full Stack Developer | JavaScript, ReactJS, Redux | NodeJS, ExpressJS | PostgreSQL',
        test: 'I had the pleasure of having studied and worked with Sebastian, if there is something I would highlight about him is that he is a very optimistic person, on the other hand, he is also a great team player, adapting to tasks without problems.',
        avatar: 'ema_logo'
    },
    {
        id: 2,
        link: 'https://www.linkedin.com/in/marialuciabidal/',
        name: 'Maria Lucia Bidal',
        role: 'Full-Stack Web Developer | Full-Stack Teaching Assistant | JavaScript | React | React Native | Redux | CSS | SASS | Express | NodeJS | PostgresSQL | Sequalize | MongoDB',
        test: 'Sebastian is a dedicated person in everything he undertakes. He is charismatic, empathetic and always willing to help you in a neat and effective way,neat and effective.I had the pleasure of working during the bootcamp at Henry, where he showed me daily his skills as a great teammate, teamwork and above all technical skills. Undoubtedly, all these skills together make him an excellent person and professional.',
        avatar: 'malu_logo'
    },
    {
        id: 3,
        link: 'https://www.linkedin.com/in/marcela-utria/',
        name: 'Marcela Utria',
        role: 'Full-Stack Web Developer. Software Developer in Mercado Libre',
        test: 'Sebastian is an excellent person and has an extraordinary charisma. He is always willing to help, and he was able to face and overcome the challenges that were presented in our final project of the Henry bootcamp. I would definitely work with him again.',
        avatar: 'marce_logo'
    },
    {
        id: 4,
        link: 'https://www.linkedin.com/in/engineer-luis-migliore/',
        name: 'Luis Nicolás Migliore Sabadini',
        role: 'FullStack Developer | JavaScript | NodeJS | React | Redux | PostgreSQL & Structural Engineer',
        test: 'Sebastian, with whom I had the pleasure of studying web programming and developing an E-commerce as part of a team of Full Stack developers, demonstrated and demonstrates daily to have the knowledge and skills necessary to develop with ease in the field of programming.Undoubtedly he brings in every job he does all his technical knowledge and, even more, an impeccable human behavior that, together, make him a complete professional.',
        avatar: 'luis_logo'
    },
];

export default data;