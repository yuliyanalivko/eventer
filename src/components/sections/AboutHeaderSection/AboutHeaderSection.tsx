import { Button } from "components/Button/Button";
import { EVENTER_TELEGRAM_FULL } from "shared/constants/contacts";
import { useTheme } from "hooks/useTheme.ts";
import aboutBg from "assets/images/about-bg.png";
import logo from "assets/images/icons/eventer-orange.svg";
import { Box } from "@mui/material";

export function AboutHeaderSection() {
  const { themeColor, telegramIcon } = useTheme();

  const backgroundImage = {
    backgroundImage: `url("${aboutBg}")`,
  };

  return (
    <section className="h-[1164px] max-h-screen py-section-y-sm box-border flex flex-col items-center bg-gradient-to-b from-grey-600 to-[#1C1C20] relative">
      <img className="mb-8 h-[44px] relative z-10" src={logo} alt="Eventer" />
      <h1 className="h1 max-w-3xl uppercase text-lg relative z-10">
        ваш крутой краткий лозунг
      </h1>

      <Box className="flex gap-4 mt-8 relative z-10 flex-wrap">
        <Button color={themeColor}>Заказать звонок</Button>
        <Button
          color={themeColor}
          variant="outlined"
          onClick={() => window.open(EVENTER_TELEGRAM_FULL)}
        >
          Telegram <img className="ml-3" src={telegramIcon} alt="telegram" />
        </Button>
      </Box>
      <Box
        className="absolute left-0 top-0 bg-bottom bg-contain bg-no-repeat w-full h-full"
        style={backgroundImage}
      ></Box>
    </section>
  );
}
