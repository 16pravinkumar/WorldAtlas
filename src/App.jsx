import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Country from "./Pages/Country";
import Layout from "./Layout/Layout";
import ErrorPage from "./Pages/ErrorPage";
import { CountryDetail } from "./components/UI/CountryDetail";

const router = createBrowserRouter([
    {
      path : '/',
      element : <Layout/>,
      errorElement: <ErrorPage/>,
      children : [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/country",
          element: <Country />,
        },
        {
          path: "/country/:countryName",
          element: <CountryDetail />,
        }
        
      ]
    }
]);

function App() {
  return <>
  <RouterProvider router={router}/>
  </>;
}

export default App;
