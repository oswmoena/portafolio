import React, { useState } from "react";
import { createStyles, makeStyles, Typography } from "@material-ui/core";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import { DetailDialog } from "./DetailDialog";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      "& :hover": {
        cursor: "pointer",
        backgroundColor: "#D6D7DA",
      },
    },
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
    fadeOut: {
      opacity: 0,
      width: 0,
      height: 0,
      transition: "width 0.5s 0.5s, height 0.5s 0.5s, opacity 0.5s",
    },
    fadeIn: {
      opacity: 1,
      width: "100px",
      height: "100px",
      transition: "width 0.5s, height 0.5s, opacity 0.5s 0.5s",
    },
  })
);

export const TimelineCard = ({ time, title, description, index, detail }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
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
      <TimelineContent className={classes.container} onClick={() => setOpen(true)}>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6" component="h1">
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </Paper>
      </TimelineContent>
      <DetailDialog open={open} close={handleClose} title={title} time={time} detail={detail} />
    </TimelineItem>
  );
};
