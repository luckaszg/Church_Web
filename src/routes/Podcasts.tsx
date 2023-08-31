import React from "react";
import { Box, Card, Container, Grid, Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import "./Himnario.css";
import ReactPlayer from "react-player";
import PageHeader from "../components/header/PageHeader";
import Footer from "../components/footer/Footer";

const Podcasts = () => {
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

export default Podcasts;
