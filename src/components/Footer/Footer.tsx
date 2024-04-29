import Divider from "@mui/material/Divider";
import logo from "@/assets/images/icons/eventer-orange.svg";
import phone from "@/assets/images/icons/phone.svg";
import email from "@/assets/images/icons/email.svg";
import instagram from "@/assets/images/icons/instagram.svg";
import telegram from "@/assets/images/icons/telegram.svg";
import {
  EVENTER_INSTAGRAM,
  EVENTER_EMAIL,
  EVENTER_PHONE,
  EVENTER_TELEGRAM_FULL,
} from "../../shared/constants/contacts";
import { Box, Link } from "@mui/material";
import links from "./links";

export function Footer() {
  return (
    <footer className="bg-grey-700 box-border flex flex-col py-8 px-16 relative bottom-0">
      <Box className="pb-6">
        <Link href="/">
          <img src={logo} alt="logo" />
        </Link>
      </Box>

      <Divider className="bg-white opacity-20 w-full h-0.25" />

      <Box className="flex flex-col space-y-10 pt-8 justify-between items-start xl:flex-row xl:space-y-0">
        <Box className="text-grey-300 text-xs opacity-60">
          <Box className="mb-3">© 2022 Eventer.by</Box>
          <Box>Все права защищены</Box>
        </Box>

        <Box className="flex flex-wrap gap-6 h-5 pb-6">
          {links.map(({ href, label }, index) => (
            <Box key={label} sx={{ display: "flex", gap: 2 }}>
              <Link className="text-grey-300 text-xs font-medium" href={href}>
                {label}
              </Link>
              {index < links.length - 1 ? (
                <Divider
                  className="bg-white opacity-20"
                  orientation="vertical"
                />
              ) : null}
            </Box>
          ))}
        </Box>

        <Box className="flex flex-col space-y-6 sm:flex-row sm:space-x-44 sm:space-y-0">
          <Box>
            <Box className="flex space-x-2">
              <img src={phone} alt="phone" />
              <Link className="text-grey-300" href={`tel:${EVENTER_PHONE}`}>
                {EVENTER_PHONE}
              </Link>
            </Box>

            <Box className="flex space-x-2">
              <img src={email} alt="email" />
              <Link className="text-grey-300" href={`mailto:${EVENTER_EMAIL}`}>
                {EVENTER_EMAIL}
              </Link>
            </Box>
          </Box>

          <Box>
            <Box className="flex space-x-2">
              <img src={telegram} alt="telegram" />
              <Link
                className="text-grey-300"
                href={EVENTER_TELEGRAM_FULL}
                target="_blank"
                rel="noopener"
              >
                t.me/eventer
              </Link>
            </Box>

            <Box className="flex space-x-2">
              <img src={instagram} alt="instagram" />
              <Link
                className="text-grey-300"
                href={EVENTER_INSTAGRAM}
                target="_blank"
                rel="noopener"
              >
                eventer_by
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </footer>
  );
}
