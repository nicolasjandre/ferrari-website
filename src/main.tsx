import React from "react";
import ReactDOM from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import { ThemeContextProvider } from "./contexts/ThemeContext.tsx";
import { Routes } from "./routes/index.tsx";
import "primereact/resources/primereact.css";
import "./styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <ThemeContextProvider>
        <Routes />
      </ThemeContextProvider>
    </PrimeReactProvider>
  </React.StrictMode>
);
