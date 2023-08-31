import React from "react";
import { Box, Card, Container, Grid, Pagination } from "@mui/material";
import { Link } from "react-router-dom";

import ReactPlayer from "react-player";
import PageHeader from "../components/header/PageHeader";
import Footer from "../components/footer/Footer";
import ContenidoLibros from "./ContenidoLibros";
import { MAPLibros } from "./LibrosMAP";
import "./LecturasRecomendadas.css";

const LecturasRecomendadas = () => {
  return (
    <>
      <PageHeader />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <div className="title-libros">
          <span>Autores Recomendados</span>
        </div>
        <Grid
          container
          columns={3}
          justifyContent={"center"}
          alignItems={"center"}
          paddingTop={"20px"}
          gap={6}
        >
          <Grid item width={200} sx={{ justifyContent: "left" }}>
            {MAPLibros.map((contenido, index) => {
              if (index % 3 === 0)
                return (
                  <ContenidoLibros
                    key={contenido.key}
                    title={contenido.title}
                    href={contenido.href}
                  />
                );
            })}
          </Grid>
          <Grid item width={200}>
            {MAPLibros.map((contenido, index) => {
              if (index % 3 === 1)
                return (
                  <ContenidoLibros
                    key={contenido.key}
                    title={contenido.title}
                    href={contenido.href}
                  />
                );
            })}
          </Grid>
          <Grid item width={200}>
            {MAPLibros.map((contenido, index) => {
              if (index % 3 === 2)
                return (
                  <ContenidoLibros
                    key={contenido.key}
                    title={contenido.title}
                    href={contenido.href}
                  />
                );
            })}
          </Grid>
        </Grid>
      </Box>
      <Grid style={{ bottom: "0", position: "absolute" }}>
        <Footer />
      </Grid>
    </>
  );
};

export default LecturasRecomendadas;
