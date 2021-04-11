import { ErrorMessage, Field } from "formik";
import { TextField, InputAdornment, Typography } from "@material-ui/core";

export const FormikInput = ({ name, icon, type = "text" }) => {
  return (
    <Field
      variant="outlined"
      autoComplete="off"
      as={TextField}
      name={name}
      fullWidth
      type={type}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      }}
      helperText={
        <ErrorMessage
          name={name}
          render={(msg) => (
            <Typography style={{ color: "red" }}>{msg}</Typography>
          )}
        />
      }
    />
  );
};
