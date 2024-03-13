import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import ServiceRequest from "./pages/ServiceRequest";
import Services from "./pages/Services";
import Vendors from "./pages/Vendors";
import Users from "./pages/Users";
import Payments from "./pages/Payments";
import AppLayout from "./components/Layout";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/service-request",
                element: <ServiceRequest />,
            },
            {
                path: "/vendors",
                element: <Vendors />,
            },
            {
                path: "/users",
                element: <Users />,
            },
            {
                path: "/services",
                element: <Services />,
            },
            {
                path: "/payments",
                element: <Payments />,
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
