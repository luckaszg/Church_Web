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

const ContenidoResources = ({ imgen, title, href }: any) => {
  return (
    <Box>
      <Card
        className="serie-apocalipsis"
        sx={{
          height: "230px",
          width: "150px",
          display: "flex",
          flexDirection: "column",

          cursor: "pointer",
        }}
      >
        <Link style={{ textDecoration: "none" }} to={href}>
          <img
            src={imgen}
            alt="Your Card"
            className="Card"
            style={{
              cursor: "pointer",
              width: "150px",
              height: "200px",
            }}
          />
        </Link>
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
      </Card>
    </Box>
  );
};

export default ContenidoResources;
