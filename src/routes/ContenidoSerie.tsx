import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Menu,
  MenuItem,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  colors,
} from "@mui/material";
import PageHeader from "../components/header/PageHeader";
import Footer from "../components/footer/Footer";
import "./ContenidoSerie.css";
import { MAPpredicas } from "./PredicasMAP";
import { useLocation } from "react-router-dom";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { url } from "inspector";
import ReactPlayer from "react-player";

import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

export function AlertDialog({ open, setOpen, url }: any) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DialogContent sx={{ padding: 0 }}>
        <div
          style={{
            height: "60vh",
            backgroundColor: "black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <ReactPlayer
            url={url}
            controls
            height="85%"
            width="100%"
            style={{ maxWidth: "975px" }}
            progressInterval={0}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "10px",
              color: "white",
            }}
          >
            <img
              src="/images/IBCBV.jpg"
              alt="IBCBV"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "100%",
              }}
            />

            <div style={{ marginLeft: "10px" }}>
              <h1 style={{ fontSize: "20px", margin: 0 }}>
                IBCBV | Iglesia Bautista Columna y Baluarte de le Verdad
                <br />
              </h1>
              <span style={{ fontSize: "15px" }}>164 suscriptores</span>
            </div>
          </div>

          <Button
            variant="contained"
            color="error"
            sx={{
              height: "30px",
              width: "160px",
              marginLeft: "auto",
              bgcolor: "red",
              alignItems: "center",
            }}
            href="https://youtube.com/@iglesiabautistacolumnaybal6970?sub_confirmation=1&feature=subscribe-embed-click"
          >
            <SubscriptionsIcon sx={{ color: "white" }} />
            <span style={{ color: "white" }}>Suscribirse</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const ContenidoSerie = () => {
  let { state }: any = useLocation();

  const [sermonPlayerIsOpen, setSermonPlayerIsOpen] = useState(false);
  const [sermonUrlToDisplay, setSermonUrlToDisplay] = useState("");

  const ThumbnailsUrl = "http://img.youtube.com/vi/";
  const SERMON_URLS = "https://www.youtube.com/watch?v=";

  const handleSermonPlayer = (item: string) => {
    console.log(item);
    setSermonUrlToDisplay(`${SERMON_URLS}${item}`);
    setSermonPlayerIsOpen(true);
  };

  return (
    <>
      <PageHeader />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <div className="body">
          <div className="title-1juan">
            <span>{state.title}</span>
          </div>
          <div
            style={{
              paddingTop: "60px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {state.sermonsUrl.map((item: any, index: number) => {
              return (
                <Box
                  sx={{
                    backgroundImage: `url(${ThumbnailsUrl}${item}/0.jpg)`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "220px",
                    width: "290px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20px",
                    marginLeft: "27px",
                    marginRight: "27px",
                    "&:hover": {
                      color: "#EBOAOO",
                      "& svg": {
                        color: "red",
                      },
                    },
                  }}
                >
                  <Button
                    className="Buttom-Youtube"
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                    onClick={(e) => handleSermonPlayer(item)}
                  >
                    <div
                      style={{
                        backgroundColor: "white",
                        height: "30px",
                        width: "30px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <YouTubeIcon
                        color="error"
                        fontSize="large"
                        sx={{
                          width: "290px",
                          height: "70px",
                        }}
                      />
                    </div>
                  </Button>
                  {/* {sermonPlayerIsOpen && (
                    <ReactPlayer url={sermonUrlToDisplay} />
                  )} */}
                  <AlertDialog
                    open={sermonPlayerIsOpen}
                    setOpen={setSermonPlayerIsOpen}
                    url={sermonUrlToDisplay}
                  />
                </Box>
              );
            })}
          </div>
        </div>
      </Box>
      <Footer />
    </>
  );
};

export default ContenidoSerie;
