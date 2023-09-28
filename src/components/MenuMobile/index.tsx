import React from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import "./styles.scss";
import { ActiveLink } from "../ActiveLink";
import { InputSwitch } from "primereact/inputswitch";
import { ThemeContext } from "../../contexts/ThemeContext";

export const MenuMobile = () => {
  const { changeMyTheme, theme } = React.useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  function handleMenu() {
    setIsMenuOpen((prev) => !prev);

    const nav = document.getElementById("menu-mobile") as HTMLElement;

    nav?.classList.toggle("active");
  }

  return (
    <nav id="menu-mobile">
      <button
        aria-expanded={isMenuOpen}
        aria-label="Menu de navegação"
        title="Botão para abrir menu de navegação"
        onClick={handleMenu}
      >
        <div className="bar1" />
        <div className="bar2" />
        <div className="bar3" />
      </button>

      <ul style={{ backgroundColor: theme === "dark" ? "#151515" : "rgb(40, 54, 70)" }}>
        <li>
          <ActiveLink title="Início" path="/" />
        </li>
        <li>
          <ActiveLink title="Entrar" path="/entrar" />
        </li>
        <li>
          <ActiveLink title="Catálogo" path="/catalogo" />
        </li>
        <button className="closemenu-button" onClick={handleMenu}>
          <AiOutlineCloseSquare />
        </button>

        <li>
          Tema escuro
          <InputSwitch
            inputId="theme-switch"
            className="input-switch"
            checked={theme === "dark"}
            onChange={() => {
              changeMyTheme();
            }}
          />
        </li>
      </ul>
    </nav>
  );
};
