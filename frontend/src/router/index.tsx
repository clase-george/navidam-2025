import {createBrowserRouter} from "react-router-dom";
import Home from "@/pages/Home.tsx";
import PageNotFound from "@/pages/PageNotFound.tsx";


export const router = createBrowserRouter([
    {path: "/", element: <Home/>},
    {path: "*", element: <PageNotFound/>},
]);