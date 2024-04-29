import { EVENTER_EMAIL, EVENTER_PHONE } from "shared/constants/contacts";
import { useTheme } from "hooks/useTheme";
import links from "./links";
import { Box, Drawer, IconButton, Link } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu } from "components/Menu/ Menu";

export function Header() {
  const { logoIcon, phoneIcon, emailIcon } = useTheme();

  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <header className="box-border bg-grey-700 flex items-center justify-between py-2.5 px-16 fixed w-full z-50 h-[62px]">
      <Link href="/">
        <img src={logoIcon} alt="logo" />
      </Link>

      <Box className="space-x-6 hidden lg:flex">
        {links.map(({ label, href }) => (
          <Link key={label} className="text-white font-medium" href={href}>
            {label}
          </Link>
        ))}
      </Box>

      <Box className="flex-col hidden lg:flex">
        <Box className="flex flex-row space-x-2">
          <img src={phoneIcon} alt="phone" />
          <Link href={`tel:${EVENTER_PHONE}`}>{EVENTER_PHONE}</Link>
        </Box>

        <Box className="flex flex-row space-x-2">
          <img src={emailIcon} alt="email" />
          <Link href={`mailto:${EVENTER_EMAIL}`}>{EVENTER_EMAIL}</Link>
        </Box>
      </Box>

      <Box className="lg:hidden">
        <IconButton aria-label="open menu" onClick={() => toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
          <Menu close={() => toggleDrawer(false)} />
        </Drawer>
      </Box>
    </header>
  );
}
