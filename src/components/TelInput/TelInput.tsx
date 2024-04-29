import "shared/styles/mui-text-field.scss";
import { StyledEngineProvider } from "@mui/material/styles";
import { MuiTelInput } from "mui-tel-input";
import { MuiTelInputProps } from "mui-tel-input";

export function TelInput({ ...props }: MuiTelInputProps) {
  return (
    <StyledEngineProvider injectFirst>
      <MuiTelInput {...props} />
    </StyledEngineProvider>
  );
}
