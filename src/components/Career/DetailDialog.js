import React from "react";
import { createStyles, makeStyles, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import DevaidLogo from "../../assets/icons/DevaidLogo.png";
import EverisLogo from "../../assets/icons/EverisLogo.png";
import SCDLogo from "../../assets/icons/SCDLogo.png";
import PiikApp from "../../assets/icons/PiikApp.svg";
import NotFound from "../../assets/images/notFound.png";

const useStyles = makeStyles((theme) =>
  createStyles({
    content: {
      "& p": {
        fontSize: "18px",
      },
      "& .MuiDialogTitle-root": {
        padding: "0px 24px",
      },
    },
    title: {
      fontSize: "20px",
      display: "flex",
      alignContent: "center",
      justifyContent: "space-between",
    },
    infoDetails: {
      fontSize: "20px",
      fontWeight: "bolder",
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    custDialogContent: {
      paddingBottom: "2rem",
      "& p": {
        fontSize: "22px",
        fontWeight: "lighter",
      },
    },
    custDialogActions: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      padding: "1rem",
    },
    img: {
      maxHeight: "150px",
      maxWidth: "150px",
      width: "150px",
      height: "150px",
      transition: "0.5s",
      borderRadius: "20%",
      padding: "5%",
    },
    imgPiikApp: {
      maxHeight: "150px",
      maxWidth: "150px",
      width: "150px",
      height: "150px",
      transition: "0.5s",
      borderRadius: "20%",
      backgroundColor: "#FF0192",
      padding: "5%",
    },
    timeTitle: {
      fontWeight: "bold",
      padding: "2%",
    },
    paddingTitle: {
      paddingBottom: "3%",
    },
  })
);

export const DetailDialog = ({ open, close, title, time, detail }) => {
  const classes = useStyles();

  const renderImage = () => {
    switch (title) {
      case "Devaid":
        return DevaidLogo;
      case "PiikApp":
        return PiikApp;
      case "SCD":
        return SCDLogo;
      case "Everis Temuco":
        return EverisLogo;
      default:
        return NotFound;
    }
  };
  return (
    <Dialog onClose={close} open={open} maxWidth="md" className={classes.content}>
      <DialogTitle>
        <h1 className={"ct-light-black ff-LatoRegular fs20 m-0 tt-upper"}>{title}</h1>
        <IconButton aria-label="close" className={classes.closeButton} onClick={close}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent classes={{ root: classes.custDialogContent }}>
        <Typography variant="h6" component="h1" className={classes.paddingTitle}>
          <span className={classes.timeTitle}>Tiempo:</span>
          {time}
        </Typography>
        <Grid container justify="center">
          <Grid item xs={12} md={3} style={{ textAlign: "center" }}>
            <img src={renderImage()} alt={renderImage()} className={title === "PiikApp" ? classes.imgPiikApp : classes.img} />
          </Grid>
          <Grid item xs={12} md={9}>
            <p>{detail}</p>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions disableSpacing classes={{ root: classes.custDialogActions }}>
        <Button color="primary" onClick={() => close()} variant="contained">
          {"Cerrar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
