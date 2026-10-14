import { createBrowserRouter } from "react-router-dom";

// components
import Layout from "./components/Layout";

// pages
import Home from "./pages/home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/projects";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/projects",
                element: <Projects />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export { router };
