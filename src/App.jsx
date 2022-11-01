import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import ClubServices from "./pages/ClubServices"
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Alumni, Mentor, Main, Assistant } from './pages/team/index'
function Layout() {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/clubservices",
        element: <ClubServices></ClubServices>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/alumni", element: <Alumni></Alumni>
      },
      {
        path: "/assistant", element: <Assistant></Assistant>
      },
      {
        path: "/main", element: <Main></Main>
      },
      {
        path: "/mentor", element: <Mentor></Mentor>
      }
    ]
  },

]);
function App() {

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
