import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    circle: {
      color: "#123047",
    },
  })
);

export const LevelSkills = (props) => {
  const classes = useStyles();
  const { full } = props;
  
  return (
    <div>
      {Array.apply(null, { length: 5 }).map((e, i) => {
        return full >= i + 1 ? <FiberManualRecordIcon className={classes.circle} key={i} /> : <FiberManualRecordOutlinedIcon className={classes.circle} key={i} />;
      })}
    </div>
  );
};
