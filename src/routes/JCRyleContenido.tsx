import React from "react";
import { Box, Card, Container, Grid, Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import "./Himnario.css";
import ReactPlayer from "react-player";
import PageHeader from "../components/header/PageHeader";
import Footer from "../components/footer/Footer";
import { MAPjcr } from "./jcrMAP";
import CardLibros from "./CardLibros";

const JCRcontenido = () => {
  return (
    <>
      <PageHeader />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <div className="title-recursos">
          <div className="prueba023">Libros Recomendados</div>
          <div className="parrafo-recursos">
            <p>
              - Damos un sincero agradecimiento a{" "}
              <a href="https://www.chapellibrary.org/" target="_blank">
                Chapel Library
              </a>{" "}
              por su excepcional ministerio de publicar libros de manera
              gratuita. Su dedicacion para proveer una amplia variedad de
              recursos espirituales y literatura edificante.
            </p>
          </div>
        </div>
        <div className="items">
          <Container>
            <Grid
              container
              justifyContent={"center"}
              alignItems={"center"}
              paddingTop="0.6rem"
            >
              {MAPjcr.map((contenido, index) => (
                <CardLibros
                  key={contenido.key}
                  img={contenido.img}
                  href={contenido.href}
                />
              ))}
            </Grid>
          </Container>
        </div>
      </Box>
      <Footer />
    </>
  );
};

export default JCRcontenido;
