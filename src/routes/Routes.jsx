import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../shared/ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Service from "../pages/Service";
import Explore from "../pages/Explore";
import AboutMe from "../components/about/AboutMe";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
            path: "/about",
            element: <About/>,
          },
          {
            path: "/aboutMe",
            element: <AboutMe/>,
          },
          {
            path: "/contact",
            element: <Contact/>,
          },
          {
            path: "/service",
            element: <Service/>,
          },
      ],
    },
  ]);