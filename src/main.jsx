import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/inter-tight";
import "@fontsource-variable/jetbrains-mono";
import "./styles/tokens.css";
import "./styles/base.css";
import Hero from "./sections/Hero.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Hero />
  </StrictMode>
);