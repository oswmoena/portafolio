import React from "react";
import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
	createStyles({
		container: {
			padding: '3% 3%',
		},
	})
)
export const Career = () => {
  const classes = useStyles();

    return (
        <div className={classes.a}>
            <h1>Hello Career!</h1>
        </div>
    )
}
