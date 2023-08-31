import React from "react";
import PageHeader from "../components/header/PageHeader";
import Footer from "../components/footer/Footer";
import { Box, Card, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./resources.css";
import ContenidoResources from "./ContenidoResources";
import { MAPResources } from "./ResourcesMAP";

const Resources = () => {
  return (
    <>
      <PageHeader />

      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <div className="title-recursos">
          <div className="prueba023">Recursos</div>
          <div className="parrafo-recursos">
            <p>
              - Esta seccion estara destinada a proporcionar una amplia
              coleccion de materiales de estudio y recursos varios para el
              beneficio de todas las personas que lo necesiten.
            </p>
          </div>
        </div>
        <div className="items">
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            paddingBottom={10}
            gap={6}
            paddingTop="0.6rem"
          >
            {MAPResources.map((contenido) => (
              <ContenidoResources
                key={contenido.key}
                imgen={contenido.imgen}
                title={contenido.title}
                href={contenido.href}
              />
            ))}
          </Grid>
        </div>
      </Box>
      <Footer />
    </>
  );
};

export default Resources;
