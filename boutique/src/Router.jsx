import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import IndividualItem from "./pages/IndividualItemPage";
import { useState, useEffect } from "react";

const Router = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        console.log(json);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App items={items} />,
    },
    {
      path: "shop",
      element: <Shop items={items} />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
    {
      path: "individual",
      element: <IndividualItem />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
