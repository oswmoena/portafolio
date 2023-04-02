import React, { useContext } from "react";
import { createStyles, Grid, makeStyles } from "@material-ui/core";
import { LangContext } from "../../context/lang";
import Typed from 'react-typed';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      width: "100%",
      color: "black",
      paddingTop: 0,
      backgroundColor: "red",
    },
    gridContainer: {
      backgroundColor: "#D6D7D9",
    },
    gridTest1: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      fontSize: "140px",
    },
    gridTest2: {
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
    // eslint-disable-next-line 
    state: { language },
    dispatch: { setLanguage, translate },
  } = useContext(LangContext);

  // eslint-disable-next-line
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
          <div style={{ fontSize: "80px", textAlign: "left" }}>
            <Typed
              strings={[translate("HEADER_name"), translate("HEADER_specialist")]}
              typeSpeed={80}
              loop
            />
          </div>
          {/* <div style={{ fontSize: "80px", textAlign: "left" }}>{translate("HEADER_name")}</div> */}
        </Grid>
      </Grid>
    </div>
  );
};
