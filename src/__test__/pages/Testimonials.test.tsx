import { render } from "@testing-library/react";
import RecomendationCarrousel from "../../components/testimonials/Testimonials";
import { MemoryReduxProvider } from "../shared/functions";
import { Testimonials } from "../../components/testimonials/FullTestimonialsData";

describe("RecomendationCarrousel", () => {
    it("Deberia renderizar el carrousel", () => {
        render(<RecomendationCarrousel />, { wrapper: MemoryReduxProvider })
    })
    
    it('Muesta correctamente titulo y subtitulo', () => {
        const { getByText } = render(<RecomendationCarrousel />, { wrapper: MemoryReduxProvider });
        const title = getByText('Feedback from my peers'); // Reemplaza 'Your Title Here' con el título real que esperas
        const subtitle = getByText('Testimonials'); // Reemplaza 'Your Subtitle Here' con el subtítulo real que esperas

        expect(title).toBeInTheDocument();
        expect(subtitle).toBeInTheDocument();
    });

    it('Muestra correctamente los avatares', () => {
        const { getAllByTestId } = render(<RecomendationCarrousel />, { wrapper: MemoryReduxProvider });
        const avatars = getAllByTestId('avatar');

        expect(avatars.length).toBe(Testimonials.length); // Asegúrate de que haya tantos avatares como testimonios en el array Testimonials
    });

    it('Renderiza correctamente los links de LinkedIn', () => {
        const { getAllByTestId } = render(<RecomendationCarrousel />, { wrapper: MemoryReduxProvider });
        const links = getAllByTestId('linkedin-link');

        expect(links.length).toBe(Testimonials.length); // Asegúrate de que haya tantos enlaces como testimonios en el array Testimonials

        links.forEach((link, index) => {
            expect(link.getAttribute('href')).toBe(Testimonials[index].link); // Verifica que el href del enlace coincida con la URL del testimonio correspondiente
        });
    });

    it('Renderiza el testimonio correctamente', () => {
        const { getAllByTestId } = render(<RecomendationCarrousel />, { wrapper: MemoryReduxProvider });
        const testimonialTexts = getAllByTestId('testimonial-text');

        expect(testimonialTexts.length).toBe(Testimonials.length); // Asegúrate de que haya tantos textos de testimonio como testimonios en el array Testimonials

        testimonialTexts.forEach((text, index) => {
            expect(text.textContent).toBe(Testimonials[index].test.en); // Verifica que el contenido del texto coincida con el testimonio correspondiente en el idioma correcto
        });
    });
})