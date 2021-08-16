import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import { createStyles, makeStyles } from "@material-ui/core";
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
    custDialogContent: {
      padding: "1.5rem 24px",
    },
    custDialogActions: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      padding: "1rem",
    },
  })
);
export const AngularInfoDialog = ({ open, close }) => {
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
          {"Angular"}
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
        <LevelSkills full={1} empty={4} />
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
