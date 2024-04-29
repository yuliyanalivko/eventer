import { MutableRefObject, createContext, useState } from "react";

export interface CommonContextValue {
  contactFormRef: MutableRefObject<HTMLElement> | null;
  updateContactFormRef: (ref: MutableRefObject<HTMLElement>) => void;
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
    useState<MutableRefObject<HTMLElement> | null>(null);

  const [openContactForDialog, setOpenContactForDialog] =
    useState<boolean>(false);

  const updateContactFormRef = (ref: MutableRefObject<HTMLElement>) =>
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
