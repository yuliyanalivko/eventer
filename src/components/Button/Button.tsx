import "./Button.scss";
import { Button as MuiButton } from "@mui/material";
import { ButtonProps } from "@mui/material/Button";
import { StyledEngineProvider } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    blue: true;
  }
}

export function Button({ children, color, ...props }: ButtonProps) {
  return (
    <StyledEngineProvider injectFirst>
      <MuiButton
        variant="contained"
        color={color}
        {...props}
        className="button"
      >
        {children}
      </MuiButton>
    </StyledEngineProvider>
  );
}
