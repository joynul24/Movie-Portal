import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./COMPONENTS/ErrorPage.jsx";
import MainLayout from "./MainLayout/MainLayout.jsx";
import AllMovies from "./COMPONENTS/NavPages/AllMovies/AllMovies.jsx";
import ContactUs from "./COMPONENTS/NavPages/ContactUs/ContactUs.jsx";
import AddMovies from "./COMPONENTS/NavPages/AddMovies/AddMovies.jsx";
import MyFavorite from "./COMPONENTS/NavPages/MyFavorite/MyFavorite.jsx";
import Home from "./COMPONENTS/NavPages/Home/Home.jsx";
import { ToastContainer } from "react-toastify";
import FeaturedMovie from "./COMPONENTS/HomeRoute/FeaturedMovie.jsx";
import AllMovie from "./COMPONENTS/AllMovie/AllMovie.jsx";
import MovieDetails from "./COMPONENTS/HomeRoute/MovieDetails.jsx";
import Register from "./COMPONENTS/Register/Register.jsx";
import Login from "./COMPONENTS/Navber/Login/Login.jsx";
import AuthProvider from "./porvider/AuthProvider.jsx";
import PrivateRoute from "./COMPONENTS/routes/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://a10-movie-portal-server-jyig3uo1g-joynul2024s-projects.vercel.app/movies"),
      },
      {
        path: "/allMovies",
        element: <AllMovies></AllMovies>,
        loader: () => fetch("https://a10-movie-portal-server-jyig3uo1g-joynul2024s-projects.vercel.app/movies"),
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/addMovies",
        element:<PrivateRoute> <AddMovies></AddMovies></PrivateRoute>,
      },
      {
        path: "/myFavorite",
        element: <PrivateRoute><MyFavorite></MyFavorite></PrivateRoute>,
      },
      {
        path: "/featuredMovie",
        element: <FeaturedMovie></FeaturedMovie>,
      },
      {
        path: "/allMovie",
        element: <AllMovie></AllMovie>,
      },
      {
        path: "/movieDetails/:id",
        loader: async ({ params }) => {
          const res = await fetch("https://a10-movie-portal-server-jyig3uo1g-joynul2024s-projects.vercel.app/movies");
          const datas = await res.json();
          const singleData = datas.find((data) => data._id == params.id);
          return singleData;
        },
        element: <MovieDetails></MovieDetails>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    <ToastContainer />
  </StrictMode>
);
