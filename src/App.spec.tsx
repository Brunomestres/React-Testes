import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from "./App";


describe("App component" , () => {
  it("should be render list" , () => {
    render(<App />);
    expect(screen.getByText("Bruno")).toBeInTheDocument();
    expect(screen.getByText("Fernando")).toBeInTheDocument();
    expect(screen.getByText("Tchalla")).toBeInTheDocument();
  });

  it("button", () => {
    render(<App />);
    const addButton = screen.getByText("Adicionar");
    userEvent.click(addButton);
    expect(screen.getByText("Novo")).toBeInTheDocument();
  })
})