import React, { useContext } from "react";
import { Container, createStyles, Fab, makeStyles } from "@material-ui/core";
import { AboutMe, Career, Contact, Header, Projects, Skills } from "../components";
import Logo from "../assets/logo/logo3.jpg";
import TranslateIcon from "@material-ui/icons/Translate";
import { LangContext } from "../context/lang";

const useStyles = makeStyles((theme) =>
  createStyles({
    type1: {
      backgroundColor: "#113047"
    },
    type2: {
      backgroundColor: "#D6D7D9"
    },
    container1: {
      padding: "3% 3%",
      backgroundColor: "#113047",
      color: "white",
      "& :link": {
        color: "white",
        textDecoration: "none",
      },
      "& :visited": {
        color: "white",
        textDecoration: "none",
      },
      "& :hover": {
        color: "white",
        textDecoration: "none",
      },
    },
    container2: {
      padding: "3% 3%",
      backgroundColor: "#D6D7D9",
      color: "black",
      "& :link": {
        color: "black",
        textDecoration: "none",
      },
      "& :visited": {
        color: "black",
        textDecoration: "none",
      },
      "& :hover": {
        color: "black",
        textDecoration: "none",
      },
    },
    logo: {
      maxWidth: "35%",
    },
    fab: {
      position: "fixed",
      top: theme.spacing(2),
      right: theme.spacing(3),
    },
  })
);

export const Home = () => {
  const classes = useStyles();
  const {
    state: { language },
    dispatch: { setLanguage },
  } = useContext(LangContext);

  const chooseLang = () => {
    switch (language) {
      case "en_US":
        return setLanguage("es_ES");
      case "es_ES":
        return setLanguage("en_US");
      default:
        return setLanguage("es_ES");
    }
  };

  const Sections = {
    0: <Skills />,
    1: <Career />,
    2: <Contact />,
    // 2: <Projects />,
    // 3: <Contact />,
  }

  return (
    <>
      <Fab onClick={() => chooseLang()} aria-label={"translate"} className={classes.fab} color={"primary"}>
        <TranslateIcon />
      </Fab>
      <div className={classes.type1}>
        <Header />
        <Container maxWidth={"lg"} className={classes.container1}>
          <AboutMe />
        </Container>
      </div>
      {Object.values(Sections).map((item, index) => {
        if (index % 2 === 0) {
          return (<div className={classes.type2} >
            <Container maxWidth={"lg"} className={classes.container2}>
              {item}
            </Container>
          </div>)
        } else {
          return (<div className={classes.type1} >
            <Container maxWidth={"lg"} className={classes.container1}>
              {item}
            </Container>
          </div>)
        }
      })}
      <div className={classes.type1}>
        <Container maxWidth={"lg"} className={classes.container1} style={{ textAlign: "center" }}>
          <img src={Logo} alt="Oswall Moena" className={classes.logo} />
        </Container>
      </div>
    </>
  );
};
