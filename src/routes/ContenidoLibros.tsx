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
import "./ContenidoSerie.css";
import { MAPpredicas } from "./PredicasMAP";
import { useLocation } from "react-router-dom";
import "./Himnario.css";
import { Link } from "react-router-dom";
import { MAPResources } from "./ResourcesMAP";

const ContenidoLibros = ({ title, href }: any) => {
  return (
    <Box width={250}>
      <span
        style={{
          fontSize: "18px",
          color: "black",
          display: "flex",
          alignItems: "center",
          padding: "13px",
        }}
      >
        <Link style={{ textDecoration: "none", color: "black" }} to={href}>
          {title}
        </Link>
      </span>
    </Box>
  );
};

export default ContenidoLibros;
