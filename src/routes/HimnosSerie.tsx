import React from "react";
import { Box, Card, Container, Grid, Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import "./Himnario.css";
import ReactPlayer from "react-player";

const HimnosSerie = ({ audio }: any) => {
  return (
    <Box paddingLeft={5} paddingRight={5}>
      <Grid container className="audio-player">
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ReactPlayer controls url={audio} width={300} height={100} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HimnosSerie;
