import "./Button.scss";
import { Button as MuiButton } from "@mui/material";
import { ButtonProps } from "@mui/material/Button";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeColors } from "shared/types/theme-color.enum";

export type ExtendedButtonProps = Omit<ButtonProps, "color"> & {
  color: ThemeColors;
};

export function Button({ children, color, ...props }: ExtendedButtonProps) {
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
