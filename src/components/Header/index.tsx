import React from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import { InputSwitch } from "primereact/inputswitch";
import { ActiveLink } from "../ActiveLink";
import { MenuMobile } from "../MenuMobile";
import "./styles.scss";
import BrandingHeader from "/brandingheader.svg";

export const Header = () => {
  const { changeMyTheme, theme } = React.useContext(ThemeContext);
  return (
    <header id="header">
      <div>
        <div>
          <img src={BrandingHeader} alt="Ferrari 812GTS Logo" />
        </div>

        <InputSwitch
          className="input-switch"
          checked={theme === "dark"}
          onChange={() => {
            changeMyTheme();
          }}
        />

        <nav>
          <ul>
            <li>
              <ActiveLink title="Início" path="/" />
            </li>
            <li>
              <ActiveLink title="Entrar" path="/entrar" />
            </li>
            <li>
              <ActiveLink title="Catálogo" path="/catalogo" />
            </li>
          </ul>
        </nav>

        <MenuMobile />
      </div>

      <p tabIndex={0}>
        Take You To <span>Incredible</span> Speed & Go Further
      </p>
    </header>
  );
};
