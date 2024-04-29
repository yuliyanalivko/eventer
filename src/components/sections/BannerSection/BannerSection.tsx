import { Button } from "components/Button/Button";
import { EVENTER_TELEGRAM_FULL } from "shared/constants/contacts";
import bgImage from "assets/images/gallery-2.png";
import logo from "assets/images/icons/eventer-orange.svg";
import { useTheme } from "hooks/useTheme";
import { useShowContactForm } from "hooks/useShowContactForm";
import { Box } from "@mui/material";

type BannerSectionProps = {
  title: string;
};

export function BannerSection({ title }: BannerSectionProps) {
  const { themeColor, telegramIcon } = useTheme();
  const { showContactForm } = useShowContactForm();

  return (
    <section
      className="bg-center bg-cover flex flex-col box-border relative py-section-y-md"
      style={{
        backgroundImage: `url("${bgImage}")`,
      }}
    >
      <Box className="h-full relative z-10">
        <img className="mb-3" src={logo} alt="logo" />
        <h2 className="h2 mb-14">{title}</h2>

        <Box className="flex flex-wrap gap-4 items-start">
          <Button color={themeColor} onClick={showContactForm}>
            Заказать звонок
          </Button>
          <Button
            color={themeColor}
            variant="outlined"
            onClick={() => window.open(EVENTER_TELEGRAM_FULL)}
          >
            Telegram{" "}
            <img className="ml-2.5" src={telegramIcon} alt="telegram" />
          </Button>
        </Box>
      </Box>
      <Box className="absolute left-0 h-full w-full top-0 bg-grey-700 opacity-85"></Box>
    </section>
  );
}
