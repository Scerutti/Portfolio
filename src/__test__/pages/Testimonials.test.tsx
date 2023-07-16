import { render } from "@testing-library/react";
import RecomendationCarrousel from "../../components/testimonials/Testimonials";
import { MemoryReduxProvider } from "../shared/functions";

describe("RecomendationCarrousel", () => {
    it("Deberia renderizar el carrousel", () => {
        render(<RecomendationCarrousel />, { wrapper: MemoryReduxProvider })
    })
})