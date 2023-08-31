import React from "react";
import PageHeader from "../components/header/PageHeader";
import Footer from "../components/footer/Footer";
import { Box, Grid } from "@mui/material";
import { CatecismoBautistaCapitulo } from "./CatecismoBautistaCapitulo";
import "./CatecismoBautista.css";
import PrincipalCollapse from "./PrincipalCollapse";

const CatecismoBautista = () => {
  return (
    <div>
      <PageHeader />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <div className="title-catecismo-bautista">
          <span>Catecismo Bautista</span>
        </div>

        <div className="items">
          <Grid container columns={2} sx={{ justifyContent: "center" }}>
            <Grid item>
              {CatecismoBautistaCapitulo.map((capitulo, index) => {
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
            <Grid item>
              {CatecismoBautistaCapitulo.map((capitulo, index) => {
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
          </Grid>
        </div>
      </Box>
      <Footer />
    </div>
  );
};

export default CatecismoBautista;
