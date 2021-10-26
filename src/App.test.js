import {render, screen} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import App from "./App";

test("renders cover title", () => {
  render(
    <HashRouter>
      <App />
    </HashRouter>
  );
  const coverElement = screen.getByText(/be rethought/i);
  expect(coverElement).toBeInTheDocument();
});
