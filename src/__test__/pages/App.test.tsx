import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from '../../App';
import { ReduxProvider } from "../shared/functions";

describe("Render", () => {
    it("Render <App/>", async () => {
        const page = render(<App />, { wrapper: ReduxProvider });
        expect(page).toBeDefined();
    });
});
