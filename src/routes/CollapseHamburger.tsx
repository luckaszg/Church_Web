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
    <List sx={{ width: "100%", bgcolor: "#85722a", paddingBottom: "0px" }}>
      <ListItemButton onClick={handleClick}>
        <ListItemText sx={{ color: "white" }}>
          <a
            href="/que-creemos"
            style={{ textDecoration: "none", color: "white" }}
          >
            En Que Creemos
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
                href="/confesion"
                style={{ textDecoration: "none", color: "white" }}
              >
                Confesion Bautista de Fe de Londres de 1689
              </a>
              <br />
              <br />
              <a
                href="/catecismo-bautista"
                style={{ textDecoration: "none", color: "white" }}
              >
                Catecismo Bautista
              </a>
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

export default PrincipalCollapse;
