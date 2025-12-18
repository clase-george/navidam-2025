import {createBrowserRouter} from "react-router-dom";
import Home from "@/pages/Home.tsx";
import Personas from "@/pages/Personas.tsx";
import Postal from "@/pages/Postal.tsx";
import AltaPersona from "@/pages/AltaPersona.tsx";
import PageNotFound from "@/pages/PageNotFound.tsx";


export const router = createBrowserRouter([
    {path: "/", element: <Home/>},
    {path: "/personas", element: <Personas/>},
    {path: "/postal", element: <Postal/>},
    {path: "/altapersona", element: <AltaPersona/>},
    {path: "*", element: <PageNotFound/>},
]);