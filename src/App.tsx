import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./pages/products"; 
import Register from "./pages/Register"; 
import Contact from "./pages/Contact";
import Home from "./pages/home";
import AboutUs from "./pages/aboutus";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/about",
      element: <AboutUs/>
    },
    {
      path: "/products",
      element: <Products/>
    },
    {
      path: "/register",
      element: <Register/>
    },
    {
      path: "/contact",  // Changed from "/Contacts" to "/contact"
      element: <Contact/>
    },


    {
  path: "/meals",
  element: <Products/>
}
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;