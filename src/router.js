import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Delivery from "./pages/Delivery";
import Statistics from "./pages/Statistics";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index:true,
        element: <Home/>
      },
      {
        path: '/products',
        element: <Products/>
      }, 
      {
        path: '/delivery',
        element: <Delivery/>
      },
      {
        path: '/statistics',
        element: <Statistics/>
      }
    ]
  }
])

export default router