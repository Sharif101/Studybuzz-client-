import { createBrowserRouter } from "react-router-dom";
import Courselayout from "../../Layout/Courselayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Coursedetails from "../../Pages/Coursedetails/Coursedetails";
import Courses from "../../Pages/Courses/Courses";
import Error from "../../Pages/Error/Error";
import Faq from "../../Pages/Faq/Faq";
import Getpremium from "../../Pages/Getpremium/Getpremium";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Privateroute from "./Privateroute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courselayout></Courselayout>,
        children: [
          {
            path: "/courses",
            element: <Courses></Courses>,
            loader: async () => {
              return fetch("https://courses-server-beta.vercel.app/courses");
            },
          },
          {
            path: "/courses/:id",
            loader: async ({ params }) => {
              return fetch(
                `https://courses-server-beta.vercel.app/courses/${params.id}`
              );
            },
            element: <Coursedetails></Coursedetails>,
          },
          {
            path: "/courses/:id/premium",
            loader: async ({ params }) => {
              return fetch(
                `https://courses-server-beta.vercel.app/courses/${params.id}`
              );
            },
            element: (
              <Privateroute>
                <Getpremium></Getpremium>
              </Privateroute>
            ),
          },
        ],
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
