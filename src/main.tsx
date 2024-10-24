import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//Typefaces
import "@fontsource/titillium-web"; // Defaults to weight 400
import "@fontsource/titillium-web/900.css"; // Specify weight
import "@fontsource/titillium-web/400-italic.css"; // Specify weight and style
import "@fontsource/noto-sans-display"; // Defaults to weight 400
import "@fontsource/noto-sans-display/900.css"; // Specify weight
import "@fontsource/noto-sans-display/800.css"; // Specify weight
import "@fontsource/noto-sans-display/900-italic.css"; // Specify weight and style
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
