import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  StyledEngineProvider,
} from "@mui/material";
import { ContactForm } from "components/ContactForm/ContactForm";
import { useShowContactForm } from "hooks/useShowContactForm";
import "./ContactFormDialog.scss";
import { useTheme } from "hooks/useTheme";
import CloseIcon from "@mui/icons-material/Close";

export function ContactFormDialog() {
  const { openContactForDialog, closeContactFormDialog } = useShowContactForm();
  const { commentIcon } = useTheme();

  return (
    <StyledEngineProvider injectFirst>
      <Dialog
        open={openContactForDialog}
        onClose={closeContactFormDialog}
        className="bg-grey-400"
      >
        <DialogTitle>
          <Box className="flex justify-between items-center mb-3">
            <Box className="flex space-x-2.5 justify-center">
              <img src={commentIcon} alt="comment" />
              <h2 className="h2">Давайте обсудим</h2>
            </Box>
            <IconButton
              aria-label="close"
              color="primary"
              onClick={closeContactFormDialog}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <ContactForm />
        </DialogContent>
      </Dialog>
    </StyledEngineProvider>
  );
}
