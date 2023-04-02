import React, { useState, useContext } from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import { skills } from "../../constants/skills";
import { skills_EN } from "../../constants/skills_EN";
import { DialogSkill } from "./DialogSkill";
import notFound from "../../assets/images/notFound.png";
import { LangContext } from "../../context/lang";

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
  const {
    state: { language },
    dispatch: { translate },
  } = useContext(LangContext);

  const renderSkills = () => {
    switch (language) {
      case "en_US":
        return skills_EN;
      case "es_ES":
        return skills;
      default:
        return skills;
    }
  };

  const [skillsList, setSkillList] = useState(renderSkills());

  const handleOpenDialog = (value) => {
    window.gtag("event", value.title);
    let valueSkill = skillsList.indexOf(value);

    setSkillList(skillsList.map((skill) => skill === value && { ...skillsList[valueSkill], active: true }));
  };

  const handleCloseDialog = () => {
    setSkillList(skills);
  };

  return (
    <div>
      <h1>{translate("SKILLS_title")}</h1>
      <p>{translate("SKILLS_subtitle")}</p>
      <div className={classes.images}>
        {skillsList.map((skill) => skill.show && (
          <p>
            <img src={skill.img ? skill.img : notFound} className={classes.img} alt={skill.title} onClick={() => handleOpenDialog(skill)} />
            <DialogSkill open={skill.active} close={handleCloseDialog} title={skill.title} time={skill.time} description={skill.description} level={skill.level} />
          </p>
        ))}
      </div>
    </div>
  );
};
