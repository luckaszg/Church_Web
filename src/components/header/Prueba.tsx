import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import PrincipalCollapse from "../../routes/PrincipalCollapse";
import CollapseHamburger from "../../routes/CollapseHamburger";
import CollapseHamburger2 from "../../routes/CollapseHamburger2";
import CloseIcon from "@mui/icons-material/Close";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
    top: false,
  });

  const toggleDrawer = (anchor: any, open: any) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: any) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: "#85722a",
      }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItemText>
          <span
            style={{
              textDecoration: "none",
              color: "white",
              justifyContent: "center",
              display: "flex",
              fontSize: "25px",
              paddingTop: "2%",
            }}
          >
            <a href="/" style={{ textDecoration: "none", color: "white" }}>
              IBCBV
            </a>
            <CloseIcon
              fontSize="large"
              sx={{ position: "absolute", right: "30px" }}
              onClick={toggleDrawer(anchor, false)}
            />
            <br />
            <br />
          </span>
        </ListItemText>

        <ListItemButton href="/nosotros">
          <ListItemText>
            <Link
              to={`/nosotros`}
              style={{
                textDecoration: "none",
                color: "white",
                transition: "color 0.3s ease-in-out",
                paddingLeft: "1rem",
              }}
            >
              Sobre nosotros
            </Link>
          </ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemText>
            <CollapseHamburger /> {/*collapse hamburger 1 */}
          </ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemText>
            <CollapseHamburger2 /> {/*collapse hamburger 2 */}
          </ListItemText>
        </ListItemButton>
        <ListItemButton href="/contacto">
          <ListItemText>
            <Link
              to={`/contacto`}
              style={{
                textDecoration: "none",
                color: "white",
                transition: "color 0.3s ease-in-out",
                paddingLeft: "1rem",
              }}
            >
              Contacto
            </Link>
          </ListItemText>
        </ListItemButton>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon fontSize="large" onClick={toggleDrawer(anchor, true)}>
            {anchor}
          </MenuIcon>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
