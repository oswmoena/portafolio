import React from "react";
import { Container, createStyles, makeStyles } from "@material-ui/core";
import { AboutMe, Career, Contact, Header, Skills } from "../components";
// import Logo from "../assets/logo/logo.png";
// import Logo from "../assets/logo/logo2.jpg";
import Logo from "../assets/logo/logo3.jpg";

const useStyles = makeStyles(() =>
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
  })
);

export const Home = () => {
  const classes = useStyles();
  return (
    <>
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
        <Container maxWidth={"lg"} className={classes.container1} style={{textAlign: 'center'}}>
          <img src={Logo} alt="Oswall Moena" className={classes.logo} />
        </Container>
      </div>
    </>
  );
};
