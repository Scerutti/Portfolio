interface HeaderDataDTO {
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

export const HeaderData: HeaderDataDTO = {
    title: {
        en: "Hello i\'m",
        es: "Hola soy",
    },
    subtitle: "Sebastián Cerutti",
    rol: "Full-Stack Developer",
    endButton: {
        en: "Scroll Down",
        es: "Ir al final",
    },
    cv: {
        en: "Download CV",
        es: "Descargar CV",
    },
    contactButton: {
        en: "Let\'s talk",
        es: "Contáctame"
    },
}