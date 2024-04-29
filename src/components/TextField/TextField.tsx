import "shared/styles/mui-text-field.scss";
import { TextField as MuiTextField } from "@mui/material";
import { TextFieldProps } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

export function TextField({ children, ...props }: TextFieldProps) {
  return (
    <StyledEngineProvider injectFirst>
      <MuiTextField {...props}></MuiTextField>
    </StyledEngineProvider>
  );
}
