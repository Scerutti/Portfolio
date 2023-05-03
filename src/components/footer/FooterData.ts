interface FooterDataDTO {
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

const FooterData: FooterDataDTO = {
    home:{
        en: "Home",
        es: "Inicio"
    },
    about:{
        en: "About",
        es: "Sobre Mi",
    },
    experience:{
        en: "Skills",
        es: "Habilidades",
    },
    portfolio: "Portfolio",
    recomendations:{
        en: "Testimonials",
        es: "Testimonios",
    },
    contact:{
        en: "Contact",
        es: "Contact0",
    },
    copyright:{
        en: '© SCerutti 2022. All rights reserved.',
        es: "© SCerutti 2022. Todos los derechos reservados."
    }
}

export default FooterData;