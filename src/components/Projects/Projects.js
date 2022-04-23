import React, { useContext } from 'react'
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
                textDecoration: "none",
            },
            "& :visited": {
                textDecoration: "none",
            },
            "& :hover": {
                textDecoration: "none",
            },
        },
        img: {
            width: "8%",
            padding: "3%",
        },
    })
);

export const Projects = () => {
    const classes = useStyles();
    const {
        dispatch: { translate },
    } = useContext(LangContext);

    const handleClick = (value) => {
        window.gtag("event", value);
    };

    return (<div className={classes.container}>
       <div>
      <h1>{translate("PROJECTS_title")}</h1>
      <p>{translate("PROJECTS_subtitle")}{translate("PROJECTS_here")}</p>
      <div className={classes.images}>
        
      </div>
    </div>
    </div>)
}
