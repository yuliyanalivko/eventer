import { EVENTER_EMAIL, EVENTER_PHONE } from "shared/constants/contacts";
import { useTheme } from "hooks/useTheme";
import { Divider, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import links from "components/Header/links";

type MenuProps = {
  close: () => void;
};

export function Menu({ close }: MenuProps) {
  const { phoneIcon, emailIcon } = useTheme();

  return (
    <div className="bg-grey-500 max-w-full h-full px-6">
      <div className="pt-6 text-right">
        <IconButton aria-label="close menu" onClick={close} className="pt-6">
          <CloseIcon />
        </IconButton>
      </div>
      <div className="flex flex-col space-y-12 pb-10">
        {links.map((l) => (
          <a key={l.label} className="text-white font-medium" href={l.href}>
            {l.label}
          </a>
        ))}
      </div>

      <Divider className="bg-white opacity-20" orientation="horizontal" />

      <div className="flex flex-col space-y-4 py-10">
        <div className="flex flex-row space-x-2">
          <img src={phoneIcon} alt="phone" />
          <a href={`tel:${EVENTER_PHONE}`}>{EVENTER_PHONE}</a>
        </div>

        <div className="flex flex-row space-x-2">
          <img src={emailIcon} alt="email" />
          <a href={`mailto:${EVENTER_EMAIL}`}>{EVENTER_EMAIL}</a>
        </div>
      </div>
    </div>
  );
}
