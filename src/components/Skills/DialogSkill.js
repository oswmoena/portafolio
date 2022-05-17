import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import DateRangeIcon from "@material-ui/icons/DateRange";
// import TrendingUpIcon from "@material-ui/icons/TrendingUp";
// import { LevelSkills } from "./LevelSkills";

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

export const DialogSkill = ({ open, close, title, time, description, level }) => {
  const classes = useStyles();
  return (
    <Dialog onClose={close} open={open} maxWidth="md" className={classes.content}>
      <DialogTitle>
        <h1 className={"ct-light-black ff-LatoRegular fs20 m-0 tt-upper"}>{title}</h1>
        <IconButton aria-label="close" className={classes.closeButton} onClick={close}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent classes={{ root: classes.custDialogContent }}>
        <p>{description}</p>
        <Grid container spacing={4}>
          <Grid item xs={6} md={2} className={classes.title}>
            <DateRangeIcon />
            <spanc>Tiempo</spanc>:
          </Grid>
          <Grid item xs={6} md={10}>
            <span className={classes.infoDetails}>{time}</span>
          </Grid>
          {/* <Grid item xs={6} md={2} className={classes.title}>
            <TrendingUpIcon />
            <span>Nivel</span>:
          </Grid>
          <Grid item xs={6} md={10}>
            <LevelSkills full={level} />
          </Grid> */}
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
