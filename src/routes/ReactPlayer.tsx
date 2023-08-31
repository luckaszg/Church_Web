import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ReactPlayer from "react-player";

const ReactPlayerOpen = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        ReactPlayer
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        sx={{ height: "900px", width: "1200px" }}
      >
        <DialogTitle id="responsive-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=XiemSs43RaI&list=PLJJchAdsH2QsdPBoJN4n4LqwV31rBSmic"
              width={550}
              height={400}
            />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ReactPlayerOpen;
