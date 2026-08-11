import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GameProvider from "./context/GameContext.jsx";

import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GameProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GameProvider>

  </StrictMode>
);
