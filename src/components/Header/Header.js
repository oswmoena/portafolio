import React, { useContext } from "react";
import { createStyles, Grid, makeStyles } from "@material-ui/core";
import { LangContext } from "../../context/lang";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      width: "100%",
      color: "black",
      paddingTop: 0,
      backgroundColor: "red",
    },
    gridContainer: {
      //   padding: "2rem",
      //   background: "linear-gradient(to left, black 40%, white)",
      backgroundColor: "#D6D7D9",
    },
    gridTest1: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      //   backgroundColor: "blue",
      fontSize: "140px",
    },
    gridTest2: {
      //   backgroundColor: "green",
      //   background: "linear-gradient(to right, black 40%, white)",
      display: "flex",
      alignItems: "flex-end",
      textAlign: "right",
      paddingRight: "2rem",
    },
  })
);

export const Header = () => {
  const classes = useStyles();
  const {
    state: { language },
    dispatch: { setLanguage, translate },
  } = useContext(LangContext);

  const chooseLang = (value) => {
    setLanguage(value);
  };

  return (
    <div className={classes.container}>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} md={6} className={classes.gridTest1}>
          <p>{translate("HEADER_title1")}</p>
        </Grid>
        <Grid item xs={12} md={6} className={classes.gridTest2}>
          <div style={{ fontSize: "60px", textAlign: "left" }}>
            {translate("HEADER_title2")}
          </div>
          <div style={{ fontSize: "80px", textAlign: "left" }}>{translate("HEADER_name")}</div>
        </Grid>
      </Grid>
    </div>
  );
};
