interface ExperienceDTO {
    id: number;
    name: string;
}

interface ExperienceDataDTO{
    title:{
        en: string;
        es: string;
    };
    subtitle:{
        en: string;
        es: string;
    };
}

const FrontEndExperience: ExperienceDTO[] = [
    {
        id: 1,
        name: "HTML5"
    },
    {
        id: 2,
        name: "CSS"
    },
    {
        id: 3,
        name: "JavaScript"
    },
    {
        id: 4,
        name: "React"
    },
    {
        id: 5,
        name: "Redux"
    },
    {
        id: 6,
        name: "TypeScript"
    }
]

const BackEndExperience: ExperienceDTO[] = [
    {
        id: 1,
        name: "NodeJs"
    },
    {
        id: 2,
        name: "NestJs"
    },
    {
        id: 3,
        name: "PostgreSQL"
    },
    {
        id: 4,
        name: "Firebase"
    },
    {
        id: 5,
        name: "MongoDB"
    }
]

const ExperienceData: ExperienceDataDTO = {
    title:{
        en: "The Skills I Have",
        es: "Mis",
    },
    subtitle:{
        en: "Skills",
        es: "Habilidades",
    },
}

export {
    FrontEndExperience,
    BackEndExperience,
    ExperienceData
}