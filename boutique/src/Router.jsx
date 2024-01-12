import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "shop",
      element: <Shop />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
