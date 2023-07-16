import { render } from "@testing-library/react";
import RecomendationCarrousel from "../../components/testimonials/Testimonials";
import { MemoryReduxProvider } from "../shared/functions";

describe("RecomendationCarrousel", () => {
    it("Deberia renderizar el carrousel", () => {
        render(<RecomendationCarrousel />, { wrapper: MemoryReduxProvider })
    })
    it('displays the title and subtitle correctly', () => {
        const { getByText } = render(<RecomendationCarrousel />, { wrapper: MemoryReduxProvider });
        const title = getByText('Feedback from my peers'); // Reemplaza 'Your Title Here' con el título real que esperas
        const subtitle = getByText('Testimonials'); // Reemplaza 'Your Subtitle Here' con el subtítulo real que esperas

        expect(title).toBeInTheDocument();
        expect(subtitle).toBeInTheDocument();
    });
})