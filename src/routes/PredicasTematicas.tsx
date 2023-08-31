import React from "react";
import PageHeader from "../components/header/PageHeader";
import Footer from "../components/footer/Footer";
import { Box, Card, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import PredicasTematicasSerie from "./PredicasTematicasSerie";
import { MAPpredicas } from "./PredicasMAP";
import "./PredicasTematicas.css";

const PredicasTematicas = () => {
  return (
    <>
      <PageHeader />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Container>
          <div className="title-series">
            <span>Series Temáticas</span>
          </div>
          <div>
            <Grid
              container
              justifyContent={"center"}
              alignItems={"center"}
              padding={"90px"}
              paddingBottom={20}
              gap={6}
            >
              {MAPpredicas.map((series) => (
                <PredicasTematicasSerie
                  key={series.key}
                  img={series.img}
                  title={series.title}
                  link={series.link}
                  sermonsUrl={series.sermonsUrl}
                />
              ))}
            </Grid>
          </div>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default PredicasTematicas;
