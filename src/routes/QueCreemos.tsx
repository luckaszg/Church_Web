import React from "react";
import PageHeader from "../components/header/PageHeader";
import Footer from "../components/footer/Footer";
import { Box, Card, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./resources.css";
import ContenidoResources from "./ContenidoResources";
import { MAPQuecreemos } from "./QueCreemosMAP";
import ContenidoQueCreemos from "./ContenidoQueCreemos";

const Resources = () => {
  return (
    <>
      <PageHeader />

      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <div className="title-recursos">
          <div className="prueba023">En que Creemos</div>
          <div className="parrafo-recursos">
            <p>
              - Esta seccion pondremos a disposicion de todos informacion y
              materiales en el cual creemos y lo recomendamos.
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
            {MAPQuecreemos.map((contenido) => (
              <ContenidoQueCreemos
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
