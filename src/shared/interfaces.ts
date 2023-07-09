export interface Language {
    title: {
        en: string;
        es: string;
    };
    subtitle: {
        en: string;
        es: string;
    };
    cards: {
        title: {
            en: string;
            es: string;
        };
        subtitle: {
            en: string;
            es: string;
        };
    }[];
    paragraph: {
        en: string;
        es: string;
    };
    button: {
        en: string;
        es: string;
    };
};

export interface ContactDataDTO {
    title: {
        en: string;
        es: string;
    };
    caption: {
        en: string;
        es: string;
    };
    subtitle: {
        en: string;
        es: string;
    };
    mail: string;
    button: {
        en: string;
        es: string;
    };
    thanks: {
        en: string;
        es: string;
    };
}

export interface ExperienceDTO {
    id: number;
    name: string;
}

export interface ExperienceDataDTO {
    title: {
        en: string;
        es: string;
    };
    subtitle: {
        en: string;
        es: string;
    };
}

export interface ProyectoDTO {
    id: string;
    title: string;
    img: string;
    description: {
        en: string;
        es: string;
    };
    technologies: string;
    link?: string;
    github: string;
}

export interface PortfolioDataDTO {
    title: {
        en: string;
        es: string;
    };
    subtitle: string;
    button: {
        en: string;
        es: string;
    };
    verMas: {
        en: string;
        es: string;
    };
}

export interface FooterDataDTO {
    home: {
        en: string;
        es: string;
    };
    about: {
        en: string;
        es: string;
    };
    experience: {
        en: string;
        es: string;
    };
    portfolio: string;
    recomendations: {
        en: string;
        es: string;
    };
    contact: {
        en: string;
        es: string;
    };
    copyright: {
        en: string;
        es: string;
    };
}

export interface SocialLinkDTO {
    link: string;
    icon: string;
    title: string;
}

export interface HeaderDataDTO {
    title: {
        en: string,
        es: string,
    };
    subtitle: string;
    rol: string;
    endButton: {
        en: string,
        es: string,
    };
    cv: {
        en: string,
        es: string,
    };
    contactButton: {
        en: string,
        es: string,
    };
}

export interface TestimonialsDTO {
    id: number;
    link: string;
    name: string;
    role: string;
    test: {
        en: string;
        es: string;
    };
}

export interface TestimonialDataDTO {
    title: {
        en: string;
        es: string;
    };
    subtitle: {
        en: string;
        es: string;
    }
}
