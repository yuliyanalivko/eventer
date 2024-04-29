import { createTheme } from "@mui/material/styles";
import { compStyleOverrides } from "./compStyleOverride";
import { palette } from "./palette";

declare module "@mui/material/styles" {
  interface Palette {
    blue: Palette["primary"];
  }

  interface PaletteOptions {
    blue?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette,
  components: compStyleOverrides,
});

export default theme;
