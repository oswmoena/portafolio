import React, { useState, useContext } from 'react'
import { createStyles, Grid, makeStyles, Paper } from "@material-ui/core";
import { LangContext } from "../../context/lang";
import { projects_EN } from '../../constants/projects_EN';
import { projects } from '../../constants/projects';

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
            "&:link": {
                textDecoration: "none",
            },
            "&:visited": {
                textDecoration: "none",
            },
            "&:hover": {
                textDecoration: "none",
            },
        },
        projectItem: {
            margin: '2%',
            padding: '3%',
            transition: "0.5s",
            "&:hover": {
                cursor: "pointer",
                backgroundColor: '#D6D7D9',
                transition: "0.5s"
            },
        },
        projectSelected: {
            color: 'green',
            margin: "3%",
            padding: "2%",
            ":link": {
                color: "green"
            },
            ":hover": {
                color: "green"
            },
        }
    })
);

export const Projects = () => {
    const classes = useStyles();
    const {
        state: { language },
        dispatch: { translate },
    } = useContext(LangContext);

    const renderProjects = () => {
        switch (language) {
            case "en_US":
                return projects_EN;
            case "es_ES":
                return projects;
            default:
                return projects;
        }
    };

    const handleSelectProject = (project) => {
        if (project === projectSelected) {
            setProjectSelected(null)

        } else {
            setProjectSelected(project)
        }
    }

    const [projectSelected, setProjectSelected] = useState()

    // const handleClick = (value) => {
    //     window.gtag("event", value);
    // };

    return (<div className={classes.container}>
        <div>
            <h1>{translate("PROJECTS_title")}</h1>
            <p>{translate("PROJECTS_subtitle")}{translate("PROJECTS_here")}</p>
            {projectSelected && (
                <div className={classes.projectSelected}>
                    <h2>{projectSelected.title}</h2>
                    <h4>Descripción: {projectSelected.description}</h4>
                    <h4>Detalles: {projectSelected.details}</h4>
                    <h4>Repositorio: <a href={projectSelected.github}>{projectSelected.github}</a></h4>
                </div>)}
            <div>
                <Grid container spacing={2}>
                    {renderProjects().map(item => {
                        return (
                            <Grid xs={12} md={4} >
                                <Paper elevation={3} className={classes.projectItem} onClick={() => handleSelectProject(item)}>
                                    {item.title}
                                </Paper>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        </div>
    </div >)
}
