import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { Toolbar } from "@mui/material";
import TemporaryDrawer from "./Prueba";

const Header = ({ scrollValue }: any) => {
  const [scroll, setScroll] = useState(scrollValue);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scroll ? "scroll-header" : ""}>
      <div>
        <a href="./">
          <img
            src="../public/images/artwork.png"
            alt="Your Logo"
            className="logo"
          />
        </a>
      </div>

      <IconButton
        className="iconbutton-responsive"
        onClick={() => setOpen(!open)}
        sx={{
          color: "white",
        }}
      >
        <TemporaryDrawer />
      </IconButton>

      <CustomNav>
        <ul className="CustomNav">
          {/* <li>
            <Link to={`/nosotros`}>Sobre nosotros</Link>
          </li> */}
          <li>
            <a href="/que-creemos">En qué creemos</a>
            <ul className="submenu-items">
              <Link to={`/confesion`} className="menu-item">
                Confesion Bautista de Fe de Londres de 1689
                <br />
              </Link>

              <Link to={`/catecismo-bautista`} className="menu-item">
                Catecismo Bautista
              </Link>
            </ul>
          </li>
          <li>
            <a href="/recursos">Recursos</a>
            <ul className="submenu-items">
              <Link to={"/himnos"} className="menu-item">
                Himnario
                <br />
              </Link>
              <Link to={"/predicas-tematicas"} className="menu-item">
                Predicas Tematicas
                <br />
              </Link>
              <Link to={"/lecturas-recomendadas"} className="menu-item">
                Lecturas Recomendadas
                <br />
              </Link>
              {/* <Link to={"/libro-podcasts"} className="menu-item">
                Podcats
                <br />
              </Link>
              <Link to={"/estudio-confesion-audio"} className="menu-item">
                Estudio de la Confesion
                <br />
              </Link> */}
            </ul>
          </li>
          <li>
            <Link to={`/contacto`}>Contacto</Link>
          </li>
        </ul>
      </CustomNav>
    </header>
  );
};

type CustomNavProps = {
  children: React.ReactNode;
};

const CustomNav = (props: CustomNavProps) => (
  <nav style={{ marginRight: "25rem" }}>{props.children}</nav>
);

export default React.memo(Header);
