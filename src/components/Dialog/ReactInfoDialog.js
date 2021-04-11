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

const useStyles = makeStyles((theme) =>
  createStyles({
    content: {
      "& p": {
        fontSize: "18px",
      },
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

const LinearProgressWithLabel = (props) => {
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={35}>
        <Typography
          variant="body2"
          color="textSecondary"
          style={{ paddingRight: "1rem" }}
        >{`Bajo`}</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress
          variant="determinate"
          {...props}
          style={{ height: "10px", borderRadius: "100%" }}
        />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`Alto`}</Typography>
      </Box>
    </Box>
  );
};

export const ReactInfoDialog = ({ open, close }) => {
  const classes = useStyles();
  return (
    <Dialog
      onClose={close}
      open={open}
      maxWidth="lg"
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
        <p>
          Llevo aprendiendo y aplicando conocimientos en React desde Febrero del
          2020, a la fecha sigo con él y la verdad, es que es mi punto más
          fuerte entre todos las tecnologías mencionadas, me encanta y me
          gustaría seguir aprendiendolo y poniendolo en práctica en soluciones
          que ameriten su uso.
        </p>
      </DialogTitle>
      <DialogContent classes={{ root: classes.custDialogContent }}>
        <Grid container spacing={4}>
          <Grid item xs={6} md={2} style={{ fontSize: "20px" }}>
            <span>
              <DateRangeIcon />
            </span>{" "}
            <spanc>Tiempo</spanc>:
          </Grid>
          <Grid item xs={6} md={10}>
            <span className={classes.infoDetails}>
              Desde Febrero del 2020 a la actualidad
            </span>
          </Grid>
          <Grid item xs={6} md={12} style={{ fontSize: "20px" }}>
            <span>
              <TrendingUpIcon />
            </span>{" "}
            <span>Nivel:</span>
          </Grid>
          <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
            {/* <Grid item xs={6} md={10} style={{textAlign: 'center'}}> */}
            <span className={classes.infoDetails}>Medio</span>
            <LinearProgressWithLabel value={50} />
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
