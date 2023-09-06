import React from "react";
import PageHeader from "../components/header/PageHeader";
import Footer from "../components/footer/Footer";
import { Box, Grid } from "@mui/material";
import "./Confesion.css";
import "./Confesion";
import PrincipalCollapse from "./PrincipalCollapse";
import ResponsiveCollapse from "./ResponsiveCollapse";
import { capitulosConfesion } from "./confesionCapitulos";

const Confesion = () => {
  return (
    <div>
      <PageHeader />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <div className="title-confesion">
          <span>Confesion de Fe de Londres de 1689</span>
        </div>

        <div className="capitulos">
          <Grid container columns={2} sx={{ justifyContent: "center" }}>
            <Grid
              item
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "block",
                  xl: "block",
                },
              }}
            >
              {capitulosConfesion.map((capitulo, index) => {
                if (index % 2 === 0)
                  return (
                    <PrincipalCollapse
                      key={capitulo.key}
                      title={capitulo.title}
                      content={capitulo.content}
                    />
                  );
              })}
            </Grid>
            <Grid
              item
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "block",
                  xl: "block",
                },
              }}
            >
              {capitulosConfesion.map((capitulo, index) => {
                if (index % 2 === 1)
                  return (
                    <PrincipalCollapse
                      key={capitulo.key}
                      title={capitulo.title}
                      content={capitulo.content}
                    />
                  );
              })}
            </Grid>
            <Grid
              item
              sx={{
                display: {
                  xs: "block",
                  sm: "block",
                  md: "block",
                  lg: "none",
                  xl: "none",
                },
              }}
            >
              {capitulosConfesion.map((capitulo, index) => {
                return (
                  <ResponsiveCollapse
                    key={capitulo.key}
                    title={capitulo.title}
                    content={capitulo.content}
                  />
                );
              })}
            </Grid>
          </Grid>
        </div>
      </Box>
      <Footer />
    </div>
  );
};

export default Confesion;
