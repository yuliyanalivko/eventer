import { EVENTER_EMAIL, EVENTER_PHONE } from "shared/constants/contacts";
import { useTheme } from "hooks/useTheme";
import links from "./links";
import { Drawer, IconButton } from "@mui/material";
import { useCallback, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu } from "components/Menu/ Menu";

export function Header() {
  const { logoIcon, phoneIcon, emailIcon } = useTheme();

  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = useCallback(
    (newOpen: boolean) => () => {
      setOpen(newOpen);
    },
    []
  );

  return (
    <header className="box-border bg-grey-700 flex items-center justify-between py-2.5 px-16 fixed w-full z-50 h-[62px]">
      <a href="/">
        <img src={logoIcon} alt="logo" />
      </a>

      <div className="space-x-6 hidden lg:flex">
        {links.map((l) => (
          <a key={l.label} className="text-white font-medium" href={l.href}>
            {l.label}
          </a>
        ))}
      </div>

      <div className="flex-col hidden lg:flex">
        <div className="flex flex-row space-x-2">
          <img src={phoneIcon} alt="phone" />
          <a href={`tel:${EVENTER_PHONE}`}>{EVENTER_PHONE}</a>
        </div>

        <div className="flex flex-row space-x-2">
          <img src={emailIcon} alt="email" />
          <a href={`mailto:${EVENTER_EMAIL}`}>{EVENTER_EMAIL}</a>
        </div>
      </div>

      <div className="lg:hidden">
        <IconButton aria-label="open menu" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <Menu close={toggleDrawer(false)} />
        </Drawer>
      </div>
    </header>
  );
}
