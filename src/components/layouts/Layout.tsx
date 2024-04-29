import { Footer } from "components/Footer/Footer";
import { Header } from "components/Header/Header";
import { ContactFormDialog } from "components/ContactFormDialog/ContactFormDialog";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "themes/theme";
import vars from "shared/styles/_variables.module.scss";

export default function Layout() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <main
          className={`flex flex-col flex-1 bg-grey-500 relative top-[${vars.headerHeight}]`}
        >
          <Outlet />
          <ScrollRestoration />
        </main>
        <Footer />
        <ContactFormDialog />
      </ThemeProvider>
    </>
  );
}
