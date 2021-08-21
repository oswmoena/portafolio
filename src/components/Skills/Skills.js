import React, { useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import { skills } from "../../constants/skills";
import { DialogSkill } from "./DialogSkill";
import notFound from "../../assets/images/notFound.png";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: "3% 3%",
    },
    images: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      maxWidth: "100%",
      overflow: "auto",
    },
    img: {
      maxHeight: "150px",
      maxWidth: "150px",
      width: "150px",
      height: "150px",
      transition: "0.5s",
      borderRadius: "20%",
      "&:hover": {
        cursor: "pointer",
        transition: "0.5s",
        backgroundColor: "white",
        borderRadius: "15%",
        zIndex: 9,
      },
    },
  })
);

export const Skills = () => {
  const classes = useStyles();
  const [skillsList, setSkillList] = useState(skills);

  const handleOpenDialog = (value) => {
    let valueSkill = skillsList.indexOf(value);

    setSkillList(skillsList.map((skill) => skill === value && { ...skillsList[valueSkill], active: true }));
  };

  const handleCloseDialog = () => {
    setSkillList(skills);
  };

  return (
    <div>
      <h1>Te presento mis habilidades</h1>
      <p>pst! haz click sobre alguna de las imagenes de acontinuación para ver más detalles!</p>
      <div className={classes.images}>
        {skillsList.map((skill) => (
          <p>
            <img src={skill.img ? skill.img : notFound} className={classes.img} alt={skill.title} onClick={() => handleOpenDialog(skill)} />
            <DialogSkill open={skill.active} close={handleCloseDialog} title={skill.title} time={skill.time} description={skill.description} level={skill.level} />
          </p>
        ))}
      </div>
      {/* {skillsList.map((skill) => (
        <DialogSkill open={skill.active} close={handleCloseDialog} title={skill.title} time={skill.time} description={skill.description} level={skill.level} />
      ))} */}
    </div>
  );
};
