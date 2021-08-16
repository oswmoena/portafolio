import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    full: {
      color: "#123047",
    },
    empty: {
      color: "#123047",
    },
  })
);

export const LevelSkills = (props) => {
  const classes = useStyles();
  const { full, empty } = props;

  return (
    <div>
      {Array.apply(null, { length: full }).map((e, i) => (
        <FiberManualRecordIcon className={classes.full} key={i} />
      ))}
      {Array.apply(null, { length: empty }).map((e, i) => (
        <FiberManualRecordOutlinedIcon className={classes.empty} key={i} />
      ))}
    </div>
  );
};
