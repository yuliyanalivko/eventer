import { createTheme } from "@mui/material/styles";
import vars from "../shared/styles/_variables.module.scss";

declare module "@mui/material/styles" {
  interface Palette {
    blue: Palette["primary"];
  }

  interface PaletteOptions {
    blue?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: vars.orange200,
      light: vars.orange100,
      dark: vars.orange300,
      contrastText: vars.white,
    },
    secondary: {
      main: vars.gold400,
      light: vars.gold200,
      dark: vars.gold500,
      contrastText: vars.white,
    },
    blue: {
      main: vars.blue300,
      light: vars.blue100,
      dark: vars.blue400,
      contrastText: vars.white,
    },
  },
});

export default theme;
