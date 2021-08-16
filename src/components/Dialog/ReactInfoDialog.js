import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
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
  })
);

export const ReactInfoDialog = ({ open, close }) => {
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
          {"React"}
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
          Llevo aprendiendo y aplicando conocimientos en React desde Febrero del
          2020, a la fecha sigo con él y la verdad, es que es mi punto más
          fuerte entre todos las tecnologías mencionadas, me encanta y me
          gustaría seguir aprendiendolo y poniendolo en práctica en soluciones
          que ameriten su uso.
        </p>
        <Grid container spacing={4}>
          <Grid item xs={6} md={2} className={classes.title}>
            <DateRangeIcon />
            <spanc>Tiempo</spanc>:
          </Grid>
          <Grid item xs={6} md={10}>
            <span className={classes.infoDetails}>
              Desde Febrero del 2020 a la actualidad
            </span>
          </Grid>
          <Grid item xs={6} md={2} className={classes.title}>
            <TrendingUpIcon />
            <span>Nivel</span>:
          </Grid>
          <Grid item xs={6} md={10}>
            <LevelSkills full={3} empty={2} />
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
