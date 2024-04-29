import { RefObject, createContext, useState } from "react";

export interface CommonContextValue {
  contactFormRef: RefObject<HTMLElement> | null;
  updateContactFormRef: (ref: RefObject<HTMLElement> | null) => void;
  openContactForDialog: boolean;
  updateOpenContactForDialog: (open: boolean) => void;
}

type CommonContextProviderProps = {
  children: React.ReactElement;
};

export const CommonContext = createContext<CommonContextValue | null>(null);

export default function CommonContextProvider({
  children,
}: CommonContextProviderProps) {
  const [contactFormRef, setContactFormRef] =
    useState<RefObject<HTMLElement> | null>(null);

  const [openContactForDialog, setOpenContactForDialog] =
    useState<boolean>(false);

  const updateContactFormRef = (ref: RefObject<HTMLElement> | null) =>
    setContactFormRef(ref);

  const updateOpenContactForDialog = (open: boolean) =>
    setOpenContactForDialog(open);

  return (
    <CommonContext.Provider
      value={{
        contactFormRef,
        updateContactFormRef,
        openContactForDialog,
        updateOpenContactForDialog,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
}
