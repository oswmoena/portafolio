import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() =>
	createStyles({
		container: {
			padding: '3% 3%',
		},
	})
)

export const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.a}>
      <h1>Hello Contact!</h1>
    </div>
  );
};
