import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { createStyles, makeStyles } from "@material-ui/core";
import NodeIcon from "../../assets/icons/node.svg";

const useStyles = makeStyles((theme) =>
  createStyles({
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    custDialogContent: {
      padding: "1.5rem 24px",
    },
    custDialogActions: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      padding: "1rem",
    },
    container: {
      width: "200px",
      height: "200px",
      position: "absolute",
      left: 0,
      right: 0,
      margin: "0 auto",
      top: "20px",
    },
    divImg: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      "& .hidden": {
        overflow: "hidden",
      },
      "& img": {
        display: "block",
        marginLeft: "auto",
        marginFight: "auto",
        width: "100%",
      },
    },
  })
);
export const SpringInfoDialog = ({ open, close }) => {
  const classes = useStyles();
  return (
    <Dialog onClose={close} open={open} maxWidth="lg">
      <DialogTitle>
        <h1 className={"ct-light-black ff-LatoRegular fs20 m-0 tt-upper"}>
          {"Spring"}
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
        <div className={classes.container}>
          <div className={classes.divImg}>
            <img
              className={classes.img}
              src={NodeIcon}
              title="Foto9"
              alt="Foto9"
            />
            <div className="classes.text">What's up?</div>
          </div>
        </div>
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
