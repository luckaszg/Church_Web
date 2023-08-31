import React from "react";
import { Box, Card, Container, Grid, Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import "./Himnario.css";
import ReactPlayer from "react-player";
import PageHeader from "../components/header/PageHeader";
import Footer from "../components/footer/Footer";
import { MAPje } from "./jeMAP";
import CardLibros from "./CardLibros";

const JEcontenido = () => {
  return (
    <div>
      <PageHeader />
      <Container sx={{ marginRight: "430px" }}>
        <Box height={719}>
          <div className="title-recursos">
            <span>Libros Recomendados</span>
          </div>
          <div
            style={{
              marginTop: "40px",
              width: "1340px",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <span style={{ fontSize: "25px", fontVariant: "small-caps" }}>
              - Damos un sincero agradecimiento a{" "}
              <a href="https://www.chapellibrary.org/" target="_blank">
                Chapel Library
              </a>{" "}
              por su excepcional ministerio de publicar libros de manera
              gratuita. Su dedicacion para proveer una amplia variedad de
              recursos espirituales y literatura edificante.
            </span>
          </div>
          <Grid
            container
            sx={{
              marginTop: "100px",
              marginLeft: "140px",
            }}
          >
            {MAPje.map((contenido, index) => (
              <CardLibros
                key={contenido.key}
                img={contenido.img}
                href={contenido.href}
              />
            ))}
          </Grid>
          <span style={{ marginLeft: "1000px" }}>
            <a href="/lecturas-recomendadas">← Atras</a>
          </span>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default JEcontenido;
