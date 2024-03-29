interface ContactDataDTO{
    title: {
        en: string;
        es: string;
    };
    caption:{
        en: string;
        es: string;
    };
    subtitle: {
        en: string;
        es: string;
    };
    mail: string;
    button:{
        en: string;
        es: string;
    };
    thanks:{
        en: string;
        es: string;
    };
}

const ContactData: ContactDataDTO = {
    title:{
        en: "Get In Touch",
        es: "Póngase en contacto",
    },
    caption:{
        en: "I do receive your messages and will respond asap if the valid email is provided 😁",
        es: "Recibo sus mensajes y responderé lo antes posible si el correo electrónico válido es proporcionado 😁",
    },
    subtitle:{
        en: "Contact Me",
        es: "Contáctame",
    },
    mail: "softsys95@gmail.com",
    button:{
        en: "Send a message",
        es: "Enviar mensaje",
    },
    thanks:{
        en: "Thanks, I'll reply ASAP 😁",
        es: "Gracias, responderé lo antes posible 😁",
    }
}

export default ContactData;
