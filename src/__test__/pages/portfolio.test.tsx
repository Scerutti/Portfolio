import { getByRole, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import { MemoryReduxProvider } from "../shared/functions";
import Portfolio from "../../components/portfolio/Portfolio";

describe("Render", () => {
  let page: HTMLElement;
  beforeEach(()=>{
    render(<Portfolio />, { wrapper: MemoryReduxProvider })
    page = screen.getByRole("portfolio");
  });
    test("Render <App/>", async () => {
        expect(page).toBeDefined();
    });

    test("Debería renderizar una card y el boton deberia mostrarnos detalles", () => {
      const card = screen.getByRole("card-portfolio-1");

      const projectTitle = getByRole(card,"card-title-1");
      const technologies = getByRole(card,"card-tecnologias-1");
      
      expect(card).toBeInTheDocument();
      expect(projectTitle).toBeInTheDocument();
      expect(technologies).toBeInTheDocument();
    });
});