import { useRouteError } from "react-router-dom";

import "./styles.scss";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <Header />
      <div className="error-page">
        <h1>
          ERROR <span>404</span>
        </h1>
        <p>A página que você estava procurando não foi encontrada.</p>
      </div>
      <Footer />
    </>
  );
};
