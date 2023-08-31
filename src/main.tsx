import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import About from "./routes/about";
import MainPage from "./routes/root";
import ErrorPage from "./error-page";
import Confesion from "./routes/Confesion";
import CatecismoBautista from "./routes/CatecismoBautista";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Resources from "./routes/resources";
import Contact from "./routes/Contact";
import path from "path";
import PredicasTematicas from "./routes/PredicasTematicas";
import ContenidoSerie from "./routes/ContenidoSerie";
import Himnos from "./routes/Himnos";
import QueCreemos from "./routes/QueCreemos";
import LecturasRecomendadas from "./routes/LecturasRecomendadas";
import Podcasts from "./routes/Podcasts";
import ConfesionAudio from "./routes/ConfesionAudio";
import ContenidoLibros from "./routes/ContenidoLibros";
import AWPcontenido from "./routes/ArthurWPinkContenido";
import ChScontenido from "./routes/CharlesSpurgeonContenido";
import JCRcontenido from "./routes/JCRyleContenido";
import JEcontenido from "./routes/JonatanEdwardsContenido";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/nosotros",
    element: <About></About>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/recursos",
    element: <Resources></Resources>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contacto",
    element: <Contact></Contact>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/confesion",
    element: <Confesion></Confesion>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/catecismo-bautista",
    element: <CatecismoBautista></CatecismoBautista>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas",
    element: <PredicasTematicas></PredicasTematicas>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/tercera-juan",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/segunda-juan",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/primera-juan",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/abdias",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/amos",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/apocalipsis",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/bienaventuranzas",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/culto-familiar",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/decalogo",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/diezmo",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/efesios",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/exodo",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/falsos-profetas",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/genesis",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/hebreos",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/hechos",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/isaias",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/joel",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/jonas",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/juan",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/judas",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/la-gran-comision",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/la-ley-y-el-evangelio",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/llamados-al-ministerio",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/lucas",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/lo-que-esta-escrito-de-mi",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/marcos",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/mateo",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/miqueas",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/oseas",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/proverbios",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/reyes-de-israel",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/salmos",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/salmos-penitenciales",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/sectas-diabolicas",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/teologia-del-pacto",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/predicas-tematicas/matrimonio",
    element: <ContenidoSerie></ContenidoSerie>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/himnos",
    element: <Himnos></Himnos>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/que-creemos",
    element: <QueCreemos></QueCreemos>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/lecturas-recomendadas",
    element: <LecturasRecomendadas></LecturasRecomendadas>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/libro-podcasts",
    element: <Podcasts></Podcasts>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/estudio-confesion-audio",
    element: <ConfesionAudio></ConfesionAudio>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Libros-ArthurPink",
    element: <AWPcontenido></AWPcontenido>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Libros-MartinLutero",
    element: <ContenidoLibros></ContenidoLibros>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Libros-SamWaldron",
    element: <ContenidoLibros></ContenidoLibros>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Libros-MartynLloyd-Jones",
    element: <ContenidoLibros></ContenidoLibros>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Libros-RichardBaxter",
    element: <ContenidoLibros></ContenidoLibros>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Libros-JohnAngellJames",
    element: <ContenidoLibros></ContenidoLibros>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Libros-GeorgeMueller",
    element: <ContenidoLibros></ContenidoLibros>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Libros-JohnOwen",
    element: <ContenidoLibros></ContenidoLibros>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Libros-ThomasWatson",
    element: <ContenidoLibros></ContenidoLibros>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Libros-JuanCalvino",
    element: <ContenidoLibros></ContenidoLibros>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Libros-ThomasBrooks",
    element: <ContenidoLibros></ContenidoLibros>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Libros-JonathanEdwards",
    element: <JEcontenido></JEcontenido>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Libros-JCRyle",
    element: <JCRcontenido></JCRcontenido>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Libros-JohnBunyan",
    element: <ContenidoLibros></ContenidoLibros>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Libros-CharlesSpurgeon",
    element: <ChScontenido></ChScontenido>,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
