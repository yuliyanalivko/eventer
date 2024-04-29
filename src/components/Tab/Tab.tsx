import "./Tab.scss";
import { Tab as MuiTab } from "@mui/material";
import { TabProps } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

declare module "@mui/material/Tab" {
  interface TabPropsIndicatorColorOverrides {
    blue: true;
  }
}

export function Tab({ ...props }: TabProps) {
  return (
    <StyledEngineProvider injectFirst>
      <MuiTab {...props} />
    </StyledEngineProvider>
  );
}
