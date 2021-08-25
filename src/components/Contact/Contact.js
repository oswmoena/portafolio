import React, { useContext } from "react";
import { createStyles, Typography, makeStyles, Grid } from "@material-ui/core";
import gmail from "../../assets/icons/gmail.png";
import linkedin from "../../assets/icons/linkedin.png";
import github from "../../assets/icons/github.png";
import { LangContext } from "../../context/lang";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
        paddingBottom: "3%",
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
  const {
    dispatch: { translate },
  } = useContext(LangContext);
  const handleClick = (value) => {
    window.gtag("event", value);
  };

  return (
    <div className={classes.container}>
      <Typography component="h3" variant="h3" className={classes.title}>
        {translate("CONTACT_title")}
      </Typography>
      <Grid container spacing={3} justify="space-between">
        <Grid item xs={12} md={4} onClick={() => handleClick('gmail')}>
          <div className={classes.subTitle}>
            <img src={gmail} alt="gmail" className={classes.img} />
            {"oswmoena@gmail.com"}
          </div>
        </Grid>
        <Grid item xs={12} md={4} onClick={() => handleClick('linkedin')}>
          <div className={classes.subTitle}>
            <img src={linkedin} alt="linkedin" className={classes.img} />
            <a href="https://www.linkedin.com/in/omoena">{"https://www.linkedin.com/in/omoena"}</a>
          </div>
        </Grid>
        <Grid item xs={12} md={4} onClick={() => handleClick('github')}>
          <div className={classes.subTitle}>
            <img src={github} alt="github" className={classes.img} />
            <a href="https://github.com/oswmoena">{"https://github.com/oswmoena"}</a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
