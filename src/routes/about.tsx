import React from "react";
import PageHeader from "../components/header/PageHeader";
import Footer from "../components/footer/Footer";
import { Box } from "@mui/material";

const About = () => {
  return (
    <>
      <PageHeader />
      <Box height={819} sx={{ display: "flex", justifyContent: "center" }}>
        <div style={{ paddingTop: "300px", justifyContent: "center" }}>
          <div>
            <span style={{ justifyContent: "center", fontSize: "30px" }}>
              Seccion en Construccion
            </span>
          </div>
          <div
            style={{
              paddingTop: "60px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src="./public/images/seccion en construccion.jpg" />
          </div>
        </div>
      </Box>
      <Footer />
    </>
  );
};

export default About;
