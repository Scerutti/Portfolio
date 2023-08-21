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
        const title = getByText('Feedback from my peers');
        const subtitle = getByText('Testimonials');

        expect(title).toBeInTheDocument();
        expect(subtitle).toBeInTheDocument();
    });

    it('Muestra correctamente los avatares', () => {
        const { getAllByTestId } = render(<RecomendationCarrousel />, { wrapper: MemoryReduxProvider });
        const avatars = getAllByTestId('avatar');

        expect(avatars.length).toBe(Testimonials.length);
    });

    it('Renderiza correctamente los links de LinkedIn', () => {
        const { getAllByTestId } = render(<RecomendationCarrousel />, { wrapper: MemoryReduxProvider });
        const links = getAllByTestId('linkedin-link');

        expect(links.length).toBe(Testimonials.length);

        links.forEach((link, index) => {
            expect(link.getAttribute('href')).toBe(Testimonials[index].link);
        });
    });

    it('Renderiza el testimonio correctamente', () => {
        const { getAllByTestId } = render(<RecomendationCarrousel />, { wrapper: MemoryReduxProvider });
        const testimonialTexts = getAllByTestId('testimonial-text');

        expect(testimonialTexts.length).toBe(Testimonials.length);

        testimonialTexts.forEach((text, index) => {
            expect(text.textContent).toBe(Testimonials[index].test.en);
        });
    });
})