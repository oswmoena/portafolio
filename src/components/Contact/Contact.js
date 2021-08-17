import {
  Button,
  Container,
  createStyles,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { FormikProvider, useFormik } from "formik";
import React from "react";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: "3%",
    },
    title: {
      fontFamily: 'Lato'
    },
  })
);

export const Contact = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(`values`, values);
    },
  });

  return (
    <FormikProvider value={formik}>
      <Container maxWidth="sm">
        <Grid container spacing={2} justify="space-between">
          <Grid item xs={12} md={12}>
            <Typography component="h3" variant="h3" className={classes.title}>
              Contacto
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              id={"fullName"}
              name={"fullName"}
              label={"Nombre Completo"}
              variant={"outlined"}
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.fullName}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              id={"email"}
              name={"email"}
              label={"E-mail"}
              variant={"outlined"}
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              id={"message"}
              name={"message"}
              label={"Mensaje"}
              variant={"outlined"}
              multiline
              rows={4}
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.message}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Button variant='contained' fullWidth color='primary' >
              {'Enviar'}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </FormikProvider>
  );
};
