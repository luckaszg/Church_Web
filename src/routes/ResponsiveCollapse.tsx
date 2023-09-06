import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import Collapse from "@mui/material/Collapse";

const ResponsiveCollapse = ({ title, content }: any) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: "40rem",
        bgcolor: "background.paper",
      }}
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={title} sx={{ fontWeight: "700" }} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary={content} />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

export default ResponsiveCollapse;
