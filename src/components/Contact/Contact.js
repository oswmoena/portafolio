import React from "react";
import {
  createStyles,
  Typography,
  makeStyles,
  Grid,
} from "@material-ui/core";
import gmail from "../../assets/icons/gmail.png";
import linkedin from "../../assets/icons/linkedin.png";
import github from "../../assets/icons/github.png";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      //   padding: "3%",
    },
    title: {
      fontFamily: "Lato",
      paddingBottom: "5%",
    },
    subTitle: {
      fontFamily: "Lato",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      "& :link": {
        color: "#000000",
        textDecoration: "none",
      },
      "& :visited": {
        color: "#000000",
        textDecoration: "none",
      },
      "& :hover": {
        color: "#000000",
        textDecoration: "none",
      },
    },
    img: {
      width: "8%",
      padding: "3%",
    },
  })
);

export const Contact = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography component="h3" variant="h3" className={classes.title}>
        {"Contacto"}
      </Typography>
      <Grid container spacing={3} justify="space-between">
        <Grid item xs={12} md={4}>
          <div className={classes.subTitle}>
            <img src={gmail} alt="gmail" className={classes.img} />
            {"oswmoena@gmail.com"}
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.subTitle}>
            <img src={linkedin} alt="linkedin" className={classes.img} />
            <a href="https://www.linkedin.com/in/omoena">
              {"https://www.linkedin.com/in/omoena"}
            </a>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.subTitle}>
            <img src={github} alt="github" className={classes.img} />
            <a href="https://github.com/oswmoena">
              {"https://github.com/oswmoena"}
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
