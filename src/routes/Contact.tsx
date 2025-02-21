import React from "react";
import PageHeader from "../components/header/PageHeader";
import Footer from "../components/footer/Footer";
import { Box, Container, Grid } from "@mui/material";
import "./Contact.css";
import { url } from "inspector";

const Contact = () => {
  return (
    <>
      <PageHeader />
      <Box sx={{ paddingBottom: "3.8rem" }}>
        <div className="img-title" />
        <Container>
          <div className="title-iglesia" style={{ width: "100%" }}>
            <span>
              IBCBV | Iglesia Bautista Columna y Baluarte de la Verdad
            </span>
          </div>
          <Grid
            container
            className="container-responsive"
            sx={{ paddingBottom: "0.45rem" }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={5}
              xl={5}
              className="grid-1-responsive"
            >
              <div className="info-contac">
                <span>
                  Cell: 0982568863 --- Pr. German Vazquez
                  <br />
                </span>
                <div style={{ paddingTop: "10px" }}>
                  <span>
                    Correo:{" "}
                    <a
                      href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZbjQtxpNkJZmJMrZKqgzcTTHrCrjtkbPHCsVWPlqxpPnrhwqSxDRslNtzdkgfLDMCxZFL"
                      target="_blank"
                    >
                      ibcolumnaybaluarte@gmail.com
                    </a>
                    <br />
                  </span>
                </div>
                <div
                  style={{
                    fontVariant: "small-caps",
                    fontSize: "33px",
                    paddingTop: "50px",
                  }}
                >
                  <span>¿Donde Encontrarnos?</span>
                </div>
                <div style={{ paddingTop: "20px" }}>
                  <span>
                    Ubicacion: Nemby-Paraguay
                    <br />
                    Barrio: Cañadita
                  </span>
                </div>
                <div style={{ paddingTop: "30px", width: "auto" }}>
                  <iframe
                    className="iframe-facebook"
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100064595026214%26mibextid%3DD4KYlr&tabs=timeline&width=380&height=70&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                    width="345"
                    height="70"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
            </Grid>
            <Grid item>
              <br />
              <br />
              <br />
              <iframe
                className="ubicacion1"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d792.953709526738!2d-57.53106042819951!3d-25.432235535632955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945dad001781167d%3A0xaaf42aa8ec5e9875!2sIglesia%20Bautista%20Reformada%20Columna%20y%20Baluarte%20de%20la%20Verdad!5e0!3m2!1sen!2sus!4v1740171536700!5m2!1sen!2sus"
                width="670"
                height="330"
                style={{ border: "0" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Contact;
