import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Cart from "../pages/books/Cart";
import CheckoutPage from "../pages/books/CheckoutPage";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoutes from "./PrivateRoutes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: <div>Orders</div>,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/Checkout",
        element: (
          <PrivateRoutes>
            <CheckoutPage />
          </PrivateRoutes>
        ),
      },
      {
        path: "/books/:id",
        element: <SingleBook />,
      },
    ],
  },
]);
export default router;
