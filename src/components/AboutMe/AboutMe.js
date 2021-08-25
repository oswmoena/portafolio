import React, { useContext } from "react";
import { createStyles, Grid, makeStyles } from "@material-ui/core";
import ProfileImage from "../../assets/images/perfil.jpeg";
import { LangContext } from "../../context/lang";

const useStyles = makeStyles(() =>
  createStyles({
    text: {
      fontSize: "20px",
    },
    profileImg: {
      borderRadius: "100%",
      maxHeight: "300px",
    },
    gridImg: {
      textAlign: "center",
      overflow: "hidden",
    },
  })
);

export const AboutMe = () => {
  const classes = useStyles();
  const {
    dispatch: { translate },
  } = useContext(LangContext);
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={8}>
          <h1>{translate("ABOUTME_title")}</h1>
          <p className={classes.text}>{translate("ABOUTME_subtitle1")}</p>
          <p className={classes.text}>{translate("ABOUTME_subtitle2")}</p>
        </Grid>
        <Grid item xs={12} md={4} className={classes.gridImg}>
          <img src={ProfileImage} alt="Oswall Moena" className={classes.profileImg} />
        </Grid>
      </Grid>
    </div>
  );
};
