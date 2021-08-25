import React, { useContext } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import { TimelineCard } from "./TimelineCard";
import { jobs } from "../../constants/jobs";
import { jobs_EN } from "../../constants/jobs_EN";
import { LangContext } from "../../context/lang";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
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
  const {
    state: { language },
    dispatch: { translate },
  } = useContext(LangContext);

  const renderJobs = () => {
    switch (language) {
      case "en_US":
        return jobs_EN;
      case "es_ES":
        return jobs;
      default:
        return jobs;
    }
  };

  return (
    <div className={classes.container}>
      <Typography component="h3" variant="h3">
        {translate("CAREER_title")}
      </Typography>
      <Container maxWidth="md">
        <Timeline align="alternate">
          {renderJobs().map((job, index) => (
            <TimelineCard time={job.time} title={job.title} description={job.description} index={index} detail={job.details} />
          ))}
        </Timeline>
      </Container>
    </div>
  );
};
