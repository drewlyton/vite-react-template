import { render } from "@testing-library/react";
import App from "./App";

test("App renders", () => {
  const { findByTestId } = render(<App />);

  expect(findByTestId("app-container")).toBeTruthy();
});
