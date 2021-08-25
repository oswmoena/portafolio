import React, { useContext } from "react";
import { Container, createStyles, Fab, makeStyles } from "@material-ui/core";
import { AboutMe, Career, Contact, Header, Skills } from "../components";
// import Logo from "../assets/logo/logo.png";
// import Logo from "../assets/logo/logo2.jpg";
import Logo from "../assets/logo/logo3.jpg";
import TranslateIcon from "@material-ui/icons/Translate";
import { LangContext } from "../context/lang";

const useStyles = makeStyles((theme) =>
  createStyles({
    container1: {
      padding: "3% 3%",
      backgroundColor: "#113047",
      color: "white",
    },
    container2: {
      padding: "3% 3%",
      backgroundColor: "#D6D7D9",
      color: "black",
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
  // const fabs = [
  //   {
  //     color: "primary",
  //     className: classes.fab,
  //     icon: <TranslateIcon />,
  //     label: "Translate",
  //   },
  //   {
  //     color: "secondary",
  //     className: classes.fab,
  //     icon: <TranslateIcon />,
  //     label: "Translate",
  //   },
  // ];

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

  return (
    <>
      <Fab onClick={() => chooseLang()} aria-label={"translate"} className={classes.fab} color={"primary"}>
        <TranslateIcon />
      </Fab>
      {/* <Fab aria-label={fabs[0].label} className={fabs[0].className} color={fabs[0].color}>
        {fabs[0].icon}
      </Fab> */}
      <div style={{ backgroundColor: "#113047" }}>
        <Header />
        <Container maxWidth={"lg"} className={classes.container1}>
          <AboutMe />
        </Container>
      </div>
      <div style={{ backgroundColor: "#D6D7D9" }}>
        <Container maxWidth={"lg"} className={classes.container2}>
          <Skills />
        </Container>
      </div>
      <div style={{ backgroundColor: "#113047" }}>
        <Container maxWidth={"lg"} className={classes.container1}>
          <Career />
        </Container>
      </div>
      <div style={{ backgroundColor: "#D6D7D9" }}>
        <Container maxWidth={"lg"} className={classes.container2}>
          <Contact />
        </Container>
      </div>
      <div style={{ backgroundColor: "#113047" }}>
        <Container maxWidth={"lg"} className={classes.container1} style={{ textAlign: "center" }}>
          <img src={Logo} alt="Oswall Moena" className={classes.logo} />
        </Container>
      </div>
    </>
  );
};
