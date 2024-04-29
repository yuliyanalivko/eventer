import { EVENTER_EMAIL, EVENTER_PHONE } from "shared/constants/contacts";
import { useTheme } from "hooks/useTheme";
import { Box, Divider, IconButton, Link } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import links from "components/Header/links";

type MenuProps = {
  close: () => void;
};

export function Menu({ close }: MenuProps) {
  const { phoneIcon, emailIcon } = useTheme();

  return (
    <Box className="bg-grey-500 max-w-full h-full px-6">
      <Box className="pt-6 text-right">
        <IconButton aria-label="close menu" onClick={close} className="pt-6">
          <CloseIcon />
        </IconButton>
      </Box>
      <Box className="flex flex-col space-y-12 pb-10">
        {links.map((l) => (
          <Link key={l.label} className="text-white font-medium" href={l.href}>
            {l.label}
          </Link>
        ))}
      </Box>

      <Divider className="bg-white opacity-20" orientation="horizontal" />

      <Box className="flex flex-col space-y-4 py-10">
        <Box className="flex flex-row space-x-2">
          <img src={phoneIcon} alt="phone" />
          <Link href={`tel:${EVENTER_PHONE}`}>{EVENTER_PHONE}</Link>
        </Box>

        <Box className="flex flex-row space-x-2">
          <img src={emailIcon} alt="email" />
          <Link href={`mailto:${EVENTER_EMAIL}`}>{EVENTER_EMAIL}</Link>
        </Box>
      </Box>
    </Box>
  );
}
