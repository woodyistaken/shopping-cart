import { describe, it, expect } from "vitest";
import { render, screen ,within} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "./card";

describe("Card component",()=>{
  it("Renders Title",()=>{
    render(<Card title="Test Title"/>);
    expect(screen.getByRole("heading").textContent).toMatch("Test Title");  
  })
  it("Renders Title",()=>{
    render(<Card category="Test Category"/>);
    const category = within(document).getByText('Test',{exact:false})
    expect(category.textContent).toMatch("Test Category");  
  })
})