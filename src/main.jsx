import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './COMPONENTS/ErrorPage.jsx'
import MainLayout from './MainLayout/MainLayout.jsx'
import AllMovies from './COMPONENTS/NavPages/AllMovies/AllMovies.jsx'
import ContactUs from './COMPONENTS/NavPages/ContactUs/ContactUs.jsx'
import AddMovies from './COMPONENTS/NavPages/AddMovies/AddMovies.jsx'
import MyFavorite from './COMPONENTS/NavPages/MyFavorite/MyFavorite.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/allMovies',
        element: <AllMovies></AllMovies>
      },
      {
        path: '/contactUs',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/addMovies',
        element: <AddMovies></AddMovies>
      },
      {
        path: '/myFavorite',
        element: <MyFavorite></MyFavorite>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
