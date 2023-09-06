import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Menu,
  MenuItem,
  Typography,
  Pagination,
} from "@mui/material";
import PageHeader from "../components/header/PageHeader";
import Footer from "../components/footer/Footer";
import "./Himnario.css";
import HimnosSerie from "./HimnosSerie";
import { MAPhimnos } from "./HimnosMAP";
import { Link } from "react-router-dom";
import PredicasTematicasSerie from "./PredicasTematicasSerie";
import { MAPpredicas } from "./PredicasMAP";
import "./PredicasTematicas.css";

const Himnos = () => {
  const [page, setPage] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(setPage);
    setPage(value - 1);
  };

  return (
    <React.Fragment>
      <PageHeader />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="title-himnario">
          <span>Nuestro Himnario</span>
        </div>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              },
            }}
          >
            {MAPhimnos[page].audios.map((numero, index) => {
              if (index % 2 === 0)
                return <HimnosSerie key={index} audio={numero} />;
            })}
          </Grid>
          <Grid
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              },
              paddingBottom: "55px",
            }}
          >
            {MAPhimnos[page].audios.map((numero, index) => {
              if (index % 2 === 1)
                return <HimnosSerie key={index} audio={numero} />;
            })}
          </Grid>
          <Grid
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none",
              },
              paddingBottom: "55px",
            }}
          >
            {MAPhimnos[page].audios.map((numero, index) => {
              return <HimnosSerie key={index} audio={numero} />;
            })}
          </Grid>
        </Grid>
        {/* <Grid
          item
          sx={{
            paddingTop: "2rem",
            paddingBottom: "2rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Pagination count={30} onChange={handleChange} size="small" />
        </Grid> */}
      </Box>
      <Footer />
    </React.Fragment>
  );
};

export default Himnos;
