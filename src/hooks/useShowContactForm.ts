import { CommonContext } from "contexts/CommonContext";
import { useCallback, useContext } from "react";
import { CommonContextValue } from "contexts/CommonContext";

export const useShowContactForm = () => {
  const { contactFormRef, openContactForDialog, updateOpenContactForDialog } =
    useContext<CommonContextValue>(CommonContext);

  const showContactForm = useCallback(() => {
    if (contactFormRef) {
      contactFormRef?.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      updateOpenContactForDialog(true);
    }
  }, [contactFormRef]);

  const closeContactFormDialog = useCallback(
    () => updateOpenContactForDialog(false),
    [updateOpenContactForDialog]
  );

  return { showContactForm, openContactForDialog, closeContactFormDialog };
};
