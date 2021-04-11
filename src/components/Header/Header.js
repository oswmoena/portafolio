import React from "react";
import { createStyles, Grid, makeStyles } from "@material-ui/core";

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
    backgroundColor: '#D6D7D9',
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

  return (
    <div className={classes.container}>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} md={6} className={classes.gridTest1}>
          <p>Qué tal?</p>
          {/* <p>Bienvenido!</p> */}
        </Grid>
        <Grid item xs={12} md={6} className={classes.gridTest2}>
          {/* <p style={{ fontSize: "100px" }}>Qué tal?</p> */}
          <div style={{ fontSize: "60px", textAlign: "left" }}>Soy</div>
          <div style={{ fontSize: "80px", textAlign: "left" }}>
            Oswall Moena
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
