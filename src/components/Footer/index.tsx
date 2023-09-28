import React from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./styles.scss";
import BrandingHeader from "/brandingheader.svg";

export const Footer = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <footer tabIndex={0} style={{ backgroundColor: theme === "dark" ? "rgb(32, 32, 32)" : "#283646" }}>
      <img tabIndex={0} src="/ferraris.png" alt="Multiple Ferrari's" />
      <div className="grid-container">
        <div className="grid-item">
          <img tabIndex={0} src={BrandingHeader} alt="Ferrari 812GTS Logo" />

          <p tabIndex={0}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sint nobis distinctio inventore.
          </p>

          <p tabIndex={0}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, laudantium. Magnam dolor assumenda
            impedit, aspernatur doloremque praesentium accusamus fugiat cupiditate cumque illo.
          </p>
        </div>
        <div className="grid-item">
          <h2 tabIndex={0}>AUTO</h2>

          <ul>
            <li tabIndex={0}>Ferrari Line Up</li>
            <li tabIndex={0}>Ferrari Car Configurator</li>
            <li tabIndex={0}>Personalization</li>
            <li tabIndex={0}>Services</li>
            <li tabIndex={0}>Officine Classiche</li>
          </ul>
        </div>
        <div className="grid-item">
          <h2 tabIndex={0}>STORE</h2>

          <ul>
            <li tabIndex={0}>Man</li>
            <li tabIndex={0}>Woman</li>
            <li tabIndex={0}>Kids</li>
            <li tabIndex={0}>Ferrari Watches</li>
            <li tabIndex={0}>Ferrari Shoes</li>
            <li tabIndex={0}>Scuderia Ferrari</li>
          </ul>
        </div>
        <div className="grid-item">
          <h2 tabIndex={0}>RACES</h2>

          <ul>
            <li tabIndex={0}>Competiziani GT</li>
            <li tabIndex={0}>Corse Clienti</li>
            <li tabIndex={0}>Ferrari Challenge</li>
            <li tabIndex={0}>XX Programme</li>
            <li tabIndex={0}>Club Competiziani GT</li>
            <li tabIndex={0}>Finali Mandiali</li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p tabIndex={0}>Ferrari © 2023 Copyright</p>
        <p tabIndex={0}>Claim - Privacy - Terms</p>
      </div>
    </footer>
  );
};
