import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GacContextProvider from "./Context/GacContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GacContextProvider>
      <App />
    </GacContextProvider>
  </StrictMode>
);
