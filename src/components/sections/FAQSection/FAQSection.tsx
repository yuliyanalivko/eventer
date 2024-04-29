import { Button } from "components/Button/Button";
import telegram from "assets/images/icons/telegram.svg";
import { EVENTER_TELEGRAM_FULL } from "shared/constants/contacts";
import { Accordion } from "components/Accordion/Accordion";
import { faqs } from "./faqs";
import { useTheme } from "hooks/useTheme";
import { Box } from "@mui/material";

type FAQSectionProps = {
  classes?: string;
};

export function FAQSection({ classes = "bg-grey-500" }: FAQSectionProps) {
  const { themeColor } = useTheme();

  return (
    <section
      className={`${classes} flex flex-col justify-between space-y-10 box-border py-section-y-md xl:flex-row xl:space-x-24 xl:space-y-0`}
    >
      <Box className="h-full max-w-[406px] box-border">
        <h2 className="h2 mb-2.5 max-w-[800px] mb-3">
          Мы подготовили ответы на ваши вопросы
        </h2>

        <Box className="text-grey-100 tracking-wide text-base mb-8">
          Не нашли нужный ответ? Напишите нам в Telegram. Отвечаем в течение 15
          минут.
        </Box>

        <Button
          color={themeColor}
          onClick={() => window.open(EVENTER_TELEGRAM_FULL)}
        >
          Задать вопрос в Telegram
          <img className="ml-2.5" src={telegram} alt="telegram" />
        </Button>
      </Box>

      <Box className="max-w-[585px]">
        <Accordion data={faqs} />
      </Box>
    </section>
  );
}
