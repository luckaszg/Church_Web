import {
  Button,
  Container,
  Grid,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import PodcastsIcon from "@mui/icons-material/Podcasts";

import "./Footer.css";

function Footer() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <footer
      style={{
        backgroundColor: "#85722a",
        maxHeight: "15vh",
        minHeight: "11vh",
      }}
    >
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid
          item
          xs={3}
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "block",
            },
          }}
        >
          <div className="logo-container">
            <a href="/">
              <img
                src="../public/images/artwork.png"
                alt="Your Logo"
                className="logo"
              />
            </a>
          </div>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "block",
            },
          }}
        >
          <ul className="inline-list">
            <li>
              <a href="/nosotros">Sobre nosotros</a>
            </li>
            <li>
              <a href="/confesion">
                Confesión Bautista de Fe de Londres de 1689
              </a>
            </li>
            <li>
              <a href="/recursos">Recursos</a>
            </li>
            <li>
              <a href="/contacto">Contacto</a>
            </li>
          </ul>
        </Grid>
        <Grid item lg={2} md={6}>
          <Grid container className="redes">
            <Grid item xs={2} className="WhatsApp">
              <Button
                color="inherit"
                href="https://api.whatsapp.com/send?phone=+595984448608&text=Quiero contactar con Iglesia Bautista Columna y Baluarte de la Verdad"
                target="_blank"
              >
                <WhatsAppIcon />
              </Button>
            </Grid>
            <Grid item xs={2} className="Facebook">
              <Button
                color="inherit"
                href="https://www.facebook.com/people/Iglesia-Bautista-Columna-y-Baluarte-de-la-Verdad/100064595026214/"
                target="_blank"
              >
                <FacebookIcon />
              </Button>
            </Grid>
            <Grid item xs={2} className="Instagram">
              <Button
                color="inherit"
                href="https://instagram.com/iglesiabautistacbv?igshid=MzRlODBiNWFlZA=="
                target="_blank"
              >
                <InstagramIcon />
              </Button>
            </Grid>
            <Grid item xs={2} className="Youtube">
              <Button
                color="inherit"
                href="https://www.youtube.com/@iglesiabautistacolumnaybal6970"
                target="_blank"
              >
                <YouTubeIcon />
              </Button>
            </Grid>
            <Grid item xs={2} className="Telegram">
              <Button
                color="inherit"
                href="https://t.me/IBCBV1"
                target="_blank"
              >
                <TelegramIcon />
              </Button>
            </Grid>
            <Grid item xs={2} className="Podcasts">
              <Button
                color="inherit"
                href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy80OWM5NGU4L3BvZGNhc3QvcnNz?hl=es"
                target="_blank"
              >
                <PodcastsIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} textAlign={"center"}>
          <Grid item>
            <Typography
              variant="body2"
              className="copyright"
              sx={{
                fontSize: {
                  lg: "15px",
                  md: "15px",
                  sm: "15px",
                },
              }}
            >
              COPYRIGHT &copy; 2023 - Iglesia Bautista Columna y Baluarte de la
              Verdad. Todos los derechos reservados.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
