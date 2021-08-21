import React from "react";
import { createStyles, makeStyles, Typography } from "@material-ui/core";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) =>
  createStyles({
    contentDate: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    date: {
      color: "#FFFFFF",
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
    paper: {
      padding: "6px 16px",
    },
    contentDateInverese: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    },
  })
);

export const TimelineCard = ({ time, title, description, index }) => {
  const classes = useStyles();
  return (
    <TimelineItem>
      <TimelineOppositeContent className={index % 2 ? classes.contentDateInverese : classes.contentDate}>
        <Typography variant="body2" className={classes.date}>
          {time}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot className={index === 0 && classes.secondaryTail} />
        <TimelineConnector className={index === 0 && classes.secondaryTail} />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6" component="h1">
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};
