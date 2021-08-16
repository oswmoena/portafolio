import { createStyles, makeStyles } from "@material-ui/core";
import ReactIcon from "../../assets/icons/react.png";
import SpringIcon from "../../assets/icons/spring.png";
import RailsIcon from "../../assets/icons/rails.png";
import AngularIcon from "../../assets/icons/angular.svg";
import NodeIcon from "../../assets/icons/node.svg";
import React, { useState } from "react";
import {
  AngularInfoDialog,
  NodeInfoDialog,
  RailsInfoDialog,
  ReactInfoDialog,
  SpringInfoDialog,
} from "..";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: "3% 3%",
    },
    images: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      maxWidth: '100%',
      overflow: 'auto'
    },
    img: {
      maxHeight: "150px",
      maxWidth: "150px",
      width: "150px",
      transition: "0.5s",
      borderRadius: "20%",
      "&:hover": {
        cursor: "pointer",
        transition: "0.5s",
        backgroundColor: "white",
        borderRadius: "15%",
        transform: "scale(1.2,1.2)",
        zIndex: 9,
      },
    },
  })
);
const INIT_DIALOG = {
  react: false,
  node: false,
  angular: false,
  spring: false,
  rails: false,
};
export const Skills = () => {
  const classes = useStyles();
  const [dialog, setDialog] = useState(INIT_DIALOG);

  const { react, node, angular, spring, rails } = dialog;

  const handleOpenDialog = (value) => {
    setDialog({
      ...dialog,
      [value]: true,
    });
  };

  const handleCloseDialog = () => {
    setDialog(INIT_DIALOG);
  };

  return (
    <div>
      <h1>Te presento mis habilidades</h1>
      <p>
        pst! haz click sobre alguna de las imagenes de acontinuación para ver
        más detalles!
      </p>
      <div className={classes.images}>
        <p>
          <img
            src={ReactIcon}
            className={classes.img}
            alt="React"
            onClick={() => handleOpenDialog("react")}
          />
        </p>
        <p>
          <img
            src={NodeIcon}
            className={classes.img}
            alt="Node"
            onClick={() => handleOpenDialog("node")}
          />
        </p>
        <p>
          <img
            src={SpringIcon}
            className={classes.img}
            alt="Spring"
            onClick={() => handleOpenDialog("spring")}
          />
        </p>
        <p>
          <img
            src={AngularIcon}
            className={classes.img}
            alt="Angular"
            onClick={() => handleOpenDialog("angular")}
          />
        </p>
        <p>
          <img
            src={RailsIcon}
            className={classes.img}
            alt="Rails"
            onClick={() => handleOpenDialog("rails")}
          />
        </p>
      </div>
      <ReactInfoDialog open={react} close={handleCloseDialog} />
      <NodeInfoDialog open={node} close={handleCloseDialog} />
      <SpringInfoDialog open={spring} close={handleCloseDialog} />
      <AngularInfoDialog open={angular} close={handleCloseDialog} />
      <RailsInfoDialog open={rails} close={handleCloseDialog} />
    </div>
  );
};
