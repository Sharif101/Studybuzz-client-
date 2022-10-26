import { createBrowserRouter } from "react-router-dom";
import Courselayout from "../../Layout/Courselayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Coursedetails from "../../Pages/Coursedetails/Coursedetails";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";

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
              return fetch("http://localhost:5000/courses");
            },
          },
          {
            path: "/courses/:id",
            loader: async ({ params }) => {
              return fetch(`http://localhost:5000/courses/${params.id}`);
            },
            element: <Coursedetails></Coursedetails>,
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
    ],
  },
  {
    path: "*",
    element: <h2>errror</h2>,
  },
]);
