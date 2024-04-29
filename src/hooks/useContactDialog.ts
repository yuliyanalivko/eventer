import { useState } from "react";

export const useContactDialog = () => {
  const [openContactForDialog, setOpenContactForDialog] =
    useState<boolean>(false);

  return { openContactForDialog, setOpenContactForDialog };
};
