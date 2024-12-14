import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";

import Pages from "../pages/Pages";
import Blogs from "../pages/Blogs";
import Portfolio from "../pages/Portfolio";
import ContactUs from "../pages/ContactUs";
import Products from "../pages/Products";
import DetailsPage from "../pages/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/page",
        element: <Pages />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
