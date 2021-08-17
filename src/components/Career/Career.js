import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      //   padding: "3% 3%",
      fontFamily: "Lato",
    },
    paper: {
        padding: "6px 16px",
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
    contentDate: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    contentDateInverese: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    date: {
      color: "#FFFFFF",
    },
    card: {
      fontWeight: "bold",
    },
  })
);
export const Career = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography component="h3" variant="h3">
        Carrera
      </Typography>
      <Container maxWidth="md">
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineOppositeContent className={classes.contentDate}>
              <Typography variant="body2" className={classes.date}>
                2020 - Actualidad
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot className={classes.secondaryTail} />
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Devaid
                </Typography>
                <Typography>Desarrollador ReactJs</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent className={classes.contentDateInverese}>
              <Typography variant="body2" className={classes.date}>
                2020
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  PiikApp
                </Typography>
                <Typography>Desarrollador RoR & ReactJs</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent className={classes.contentDate}>
              <Typography variant="body2" className={classes.date}>
                2019 - 2020
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  SCD Chile
                </Typography>
                <Typography>Desarrollador Angular 7+ & SpringBoot</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent className={classes.contentDateInverese}>
              <Typography variant="body2" className={classes.date}>
                2018 - 2019
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Everis Temuco
                </Typography>
                <Typography>ETL Developer</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </div>
  );
};
