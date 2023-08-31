import React from "react";
import PageHeader from "../components/header/PageHeader";
import Footer from "../components/footer/Footer";
import { Box, Card, Container } from "@mui/material";
import { Link } from "react-router-dom";

const PredicasTematicasSerie = ({ img, title, link, sermonsUrl }: any) => {
  return (
    <Box>
      <Card
        className="serie-apocalipsis"
        sx={{
          height: "190px",
          width: "290px",
          display: "flex",
          flexDirection: "column",

          cursor: "pointer",
        }}
      >
        <Link
          style={{ textDecoration: "none" }}
          to={link}
          state={{ sermonsUrl: sermonsUrl, title: title }}
        >
          <img
            src={img}
            alt="Your Card"
            className="Card"
            style={{
              cursor: "pointer",
              width: "100%",
              height: "auto",
            }}
          />
          <div
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#643120",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {title}
          </div>
        </Link>
      </Card>
    </Box>
  );
};

export default PredicasTematicasSerie;
