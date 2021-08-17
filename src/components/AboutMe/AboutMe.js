import React from "react";
import { createStyles, Grid, makeStyles } from "@material-ui/core";
import ProfileImage from "../../assets/images/perfil.jpeg";

const useStyles = makeStyles(() =>
  createStyles({
    text: {
      fontSize: "20px",
    },
    profileImg: {
      borderRadius: "100%",
      maxHeight: "300px",
    },
    gridImg: {
      textAlign: "center",
      overflow: "hidden",
    },
  })
);

export const AboutMe = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={8}>
          <h1>Quien?</h1>
          <p className={classes.text}>
            Mi nombre es Oswall Moena, soy una persona que se dedica al
            desarrollo de software.
          </p>
          <p className={classes.text}>
            Me encanta mi profesión y los desaos que ella conlleva. En mis empos
            libres me gusta ver series, películas, anime, jugar videojuegos,
            reír y también , perfeccionarme en lo hago a través del aprendizaje
            constante de nuevas herramientas.
          </p>
        </Grid>
        <Grid item xs={12} md={4} className={classes.gridImg}>
          <img
            src={ProfileImage}
            alt="Oswall Moena"
            className={classes.profileImg}
          />
        </Grid>
      </Grid>
    </div>
  );
};
