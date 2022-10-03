import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#fafafa",
    },
    secondary: {
      main: "#263238",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
