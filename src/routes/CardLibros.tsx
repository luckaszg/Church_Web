import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import PageHeader from "../components/header/PageHeader";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";

const CardLibros = ({ title, href, img }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <Card
        className="serie-apocalipsis"
        sx={{
          height: "230px",
          width: "150px",
          cursor: "pointer",
        }}
      >
        <Link style={{ textDecoration: "none" }} to={href} target="_blank">
          <img
            src={img}
            alt="Your Card"
            className="Card"
            style={{
              cursor: "pointer",
              width: "100%",
              height: "230px",
            }}
          />
        </Link>
      </Card>
    </Box>
  );
};

export default CardLibros;
