import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { ErrorPage } from "../pages/ErrorPage";
import { LayoutPage } from "../pages/LayoutPage";

const router = createBrowserRouter([
  {
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/entrar",
        element: <h1>Entrar</h1>,
      },
      {
        path: "/catalogo",
        element: <h1>Catalogo</h1>,
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
