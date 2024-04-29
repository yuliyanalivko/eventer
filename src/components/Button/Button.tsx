import "./Button.scss";
import { Button as MuiButton } from "@mui/material";
import { ButtonProps } from "@mui/material/Button";
import { StyledEngineProvider } from "@mui/material/styles";

export function Button({ children, ...props }: ButtonProps) {
  return (
    <StyledEngineProvider injectFirst>
      <MuiButton variant="contained" {...props} className="button">
        {children}
      </MuiButton>
    </StyledEngineProvider>
  );
}
