import { useState, useEffect } from "react";

import { Outlet, Link } from "react-router-dom";

import PodcastsIcon from "@mui/icons-material/Podcasts";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";

import Button from "@mui/material/Button";

import "./App.css";
import { Box, Grid, Typography } from "@mui/material";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer";

type CustomNavProps = {
  children: React.ReactNode;
};

const MiComponenteX = () => {
  const a = 1;
  const b = 2;
  const c = "hola";

  return <button>Button</button>;
};

const App = () => {
  return (
    <Box>
      {/* <MiComponenteX /> */}
      <Header />
      <div className="section1">
        <span className="current-serie">Serie actual de sermones</span>
        <span className="serie-title">
          Matrimonio. <br /> Un Panorama Biblico.
        </span>
        <Grid
          container
          sx={{ justifyContent: "center" }}
          className="grid-container"
        >
          <Grid item display="flex" gap="2rem" className="grid-item1">
            <Button
              className="button-responsive-1"
              variant="contained"
              size="large"
              disableRipple
              href="https://www.youtube.com/@iglesiabautistacolumnaybal6970/playlists"
              target="_BLANK"
              sx={{
                backgroundColor: "#643120",
                fontFamily: "Roboto sans-serif",
                fontWeight: "bold",
                fontSize: "15px",
                padding: "20px 20px",
                borderRadius: "10px",
                "&:hover": { backgroundColor: "white", color: "#643120" },
              }}
            >
              <Box display="flex" gap="5px">
                <Typography
                  sx={{ letterSpacing: "2px" }}
                  className="typography-1"
                >
                  Ver prédicas pasadas
                </Typography>
                <YouTubeIcon />
              </Box>
            </Button>
          </Grid>
          <Grid
            item
            sx={{
              paddingLeft: {
                xs: "0px",
                sm: "1rem",
                md: "3rem",
                lg: "3rem",
                xl: "3rem",
              },
              width: {
                xs: "350px",
                sm: "auto",
                md: "auto",
                lg: "auto",
                xl: "auto",
              },
            }}
          >
            <Button
              className="button-reponsive-2"
              variant="outlined"
              size="large"
              disableRipple
              href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy80OWM5NGU4L3BvZGNhc3QvcnNz?hl=es"
              target="_BLANK"
              sx={{
                color: "white",
                borderColor: "white",
                fontFamily: "Roboto sans-serif",
                fontWeight: "bold",
                fontSize: "15px",
                padding: "20px 20px",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#643120",
                  borderColor: "white",
                },
              }}
            >
              <Box display="flex" gap="5px">
                <Typography
                  sx={{ letterSpacing: "2px" }}
                  className="typography-1"
                >
                  Escucha la serie en nuestro podcast
                </Typography>
                <PodcastsIcon />
              </Box>
            </Button>
          </Grid>
        </Grid>
        <img src="../../public/images/down.png"></img>
      </div>
      <div className="section2">
        <span className="visitor-welcome-title">Bienvenidos</span>
        <Box className="visitor-info-container">
          <Box className="visitor-info-box">
            <Box className="visitor-info-box-title">
              <AccessTimeIcon fontSize="large" sx={{ color: "#85722A" }} />
              <Typography
                sx={{
                  fontFamily: "Mukta, sans-serif",
                  fontWeight: "bold",
                  fontSize: "16px",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                Domingos
              </Typography>
            </Box>
            <Box className="visitor-info-box-content">
              <LabelImportantIcon sx={{ color: "#85722a" }} />
              <Typography
                sx={{
                  fontFamily: "Mukta, sans-serif",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "13px",
                    sm: "15px",
                    md: "17px",
                  },
                }}
              >
                Oración Congregacional:
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Mukta, sans-serif",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "13px",
                    sm: "15px",
                    md: "17px",
                  },
                }}
              >
                9:15 AM
              </Typography>
            </Box>
            <Box className="visitor-info-box-content">
              <LabelImportantIcon sx={{ color: "#85722a" }} />

              <Typography
                sx={{
                  fontFamily: "Mukta, sans-serif",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "13px",
                    sm: "15px",
                    md: "17px",
                  },
                }}
              >
                Adoración Matutina:
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Mukta, sans-serif",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "13px",
                    sm: "15px",
                    md: "17px",
                  },
                }}
              >
                10:00 AM
              </Typography>
            </Box>
            <Box className="visitor-info-box-content">
              <LabelImportantIcon sx={{ color: "#85722a" }} />
              <Typography
                sx={{
                  fontFamily: "Mukta, sans-serif",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "13px",
                    sm: "15px",
                    md: "17px",
                  },
                }}
              >
                Adoración Vespertina:
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Mukta, sans-serif",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "13px",
                    sm: "15px",
                    md: "17px",
                  },
                }}
              >
                16:00 PM
              </Typography>
            </Box>
          </Box>
          <Box className="visitor-info-box">
            <Box className="visitor-info-box-title">
              <AccessTimeIcon fontSize="large" sx={{ color: "#85722A" }} />
              <Typography
                sx={{
                  fontFamily: "Mukta, sans-serif",
                  fontWeight: "bold",
                  fontSize: "16px",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                Miércoles
              </Typography>
            </Box>
            <Box className="visitor-info-box-content">
              <LabelImportantIcon sx={{ color: "#85722a" }} />
              <Typography
                sx={{
                  fontFamily: "Mukta, sans-serif",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "13px",
                    sm: "15px",
                    md: "17px",
                  },
                }}
              >
                Reunion de Oración:
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Mukta, sans-serif",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "13px",
                    sm: "15px",
                    md: "17px",
                  },
                }}
              >
                19:30 PM
              </Typography>
            </Box>
          </Box>
          <Box className="visitor-info-box">
            <Box className="visitor-info-box-title">
              <AccessTimeIcon fontSize="large" sx={{ color: "#85722A" }} />
              <Typography
                sx={{
                  fontFamily: "Mukta, sans-serif",
                  fontWeight: "bold",
                  fontSize: "16px",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                Sábados
              </Typography>
            </Box>
            <Box className="visitor-info-box-content">
              <LabelImportantIcon sx={{ color: "#85722a" }} />
              <Typography
                sx={{
                  fontFamily: "Mukta, sans-serif",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "13px",
                    sm: "15px",
                    md: "17px",
                  },
                }}
              >
                Enseñanza a los Niños:
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Mukta, sans-serif",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "13px",
                    sm: "15px",
                    md: "17px",
                  },
                }}
              >
                16:30 PM
              </Typography>
            </Box>
            <Box className="visitor-info-box-content">
              <LabelImportantIcon sx={{ color: "#85722a" }} />
              <Typography
                sx={{
                  fontFamily: "Mukta, sans-serif",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "13px",
                    sm: "15px",
                    md: "17px",
                  },
                }}
              >
                Lectura Teológica:
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Mukta, sans-serif",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "13px",
                    sm: "15px",
                    md: "17px",
                  },
                }}
              >
                17:30 PM
              </Typography>
            </Box>
            <Box className="visitor-info-box-content">
              <LabelImportantIcon sx={{ color: "#85722a" }} />
              <Typography
                sx={{
                  fontFamily: "Mukta, sans-serif",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "13px",
                    sm: "15px",
                    md: "17px",
                  },
                }}
              >
                Estudio de la Confesión de Fe:
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Mukta, sans-serif",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "13px",
                    sm: "15px",
                    md: "17px",
                  },
                }}
              >
                18:30 PM
              </Typography>
            </Box>
          </Box>
        </Box>
      </div>
      <div className="section3">
        <span className="visitor-location-title">Nuestra Ubicación</span>

        <Box display={"flex"} justifyContent={"center"}>
          <iframe
            className="ubicacion"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2143.3373278534814!2d-57.55798627667456!3d-25.38306584653168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945dab4c744d200d%3A0xc941ee79ce7df0de!2sIglesia%20Bautista%20Columna%20y%20Baluarte%20de%20la%20Verdad!5e0!3m2!1ses-419!2spy!4v1689973606019!5m2!1ses-419!2spy"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </Box>
      </div>
      <Footer />
    </Box>
  );
};

function CustomNav(props: CustomNavProps) {
  return <nav style={{ marginRight: "25rem" }}>{props.children}</nav>;
}

export default App;
