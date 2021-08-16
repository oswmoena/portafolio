import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import DateRangeIcon from "@material-ui/icons/DateRange";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import { LevelSkills } from "../Skills/LevelSkills";

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
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
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
  })
);
export const NodeInfoDialog = ({ open, close }) => {
  const classes = useStyles();
  return (
    <Dialog
      onClose={close}
      open={open}
      maxWidth="md"
      className={classes.content}
    >
      <DialogTitle>
        <h1 className={"ct-light-black ff-LatoRegular fs20 m-0 tt-upper"}>
          {"Node"}
        </h1>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={close}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent classes={{ root: classes.custDialogContent }}>
        <p>
          Es una tecnología que aprendo y ejecuto escasamente, pero a su vez, es
          un obejtivo personal para lograr aprender y dominar el stack
          JavaScript, la mayoria de los proyectos que comienzo con ReactJs, son
          pensados para que el Backend sea desarrollado en NodeJs, por lo que es
          especialmente atractivo para mi aprenderlo y ejecutarlo a nivel básico
          o el nivel de conocimiento que posea en ese momento.
        </p>
        <Grid container spacing={4}>
          <Grid item xs={6} md={2} className={classes.title}>
            <span>
              <DateRangeIcon />
            </span>
            <spanc>Tiempo</spanc>:
          </Grid>
          <Grid item xs={6} md={10}>
            <span className={classes.infoDetails}>Tiempos libres</span>
          </Grid>
          <Grid item xs={6} md={2} className={classes.title}>
            <span>
              <TrendingUpIcon />
            </span>
            <span>Nivel</span>:
          </Grid>
          <Grid item xs={6} md={10}>
            <LevelSkills full={1} empty={4} />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions
        disableSpacing
        classes={{ root: classes.custDialogActions }}
      >
        <Button color="primary" onClick={() => close()} variant="contained">
          {"Cerrar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
