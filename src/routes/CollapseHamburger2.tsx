import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import Collapse from "@mui/material/Collapse";

const PrincipalCollapse = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List sx={{ width: "100%", bgcolor: "#85722a", paddingTop: "0px" }}>
      <ListItemButton onClick={handleClick}>
        <ListItemText sx={{ color: "white" }}>
          <a
            href="/recursos"
            style={{ textDecoration: "none", color: "white" }}
          >
            Recursos
          </a>
        </ListItemText>
        {open ? (
          <ExpandLess sx={{ color: "white" }} />
        ) : (
          <ExpandMore sx={{ color: "white" }} />
        )}
      </ListItemButton>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        sx={{ backgroundColor: "#897A50" }}
      >
        <List component="div" disablePadding>
          <ListItemButton>
            <ListItemText>
              <a
                href="/himnos"
                style={{ textDecoration: "none", color: "white" }}
              >
                Himnario Bautista
              </a>
              <br />
              <br />
              <a
                href="/predicas-tematicas"
                style={{ textDecoration: "none", color: "white" }}
              >
                Predicas Tematicas
              </a>
              <br />
              <br />
              <a
                href="/lecturas-recomendadas"
                style={{ textDecoration: "none", color: "white" }}
              >
                Lecturas Recomendadas
              </a>
              <br />
              {/* <br /> */}
              {/* <a
                href="/libro-podcasts"
                style={{ textDecoration: "none", color: "white" }}
              >
                Podcasts
              </a>
              <br />
              <br />
              <a
                href="/estudio-confesion-audio"
                style={{ textDecoration: "none", color: "white" }}
              >
                Estudio de la Confesion
              </a> */}
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

export default PrincipalCollapse;
