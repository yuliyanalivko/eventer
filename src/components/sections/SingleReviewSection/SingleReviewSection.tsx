import { Button } from "components/Button/Button";
import { EVENTER_TELEGRAM_FULL } from "shared/constants/contacts";
import { useTheme } from "hooks/useTheme.ts";
import { useShowContactForm } from "hooks/useShowContactForm";
import { Box } from "@mui/material";

type SingleReviewSectionProps = {
  title: string;
  subtitle: string;
  text: string;
  image: string;
  align?: "left" | "right";
  style?: string;
};

export function SingleReviewSection({
  title,
  subtitle,
  text,
  image,
  align = "left",
  style = "bg-gradient-to-r from-grey-700 to-transparent",
}: SingleReviewSectionProps) {
  const { themeColor, telegramIcon, starIcon } = useTheme();
  const { showContactForm } = useShowContactForm();

  const backgroundImage = {
    backgroundImage: `url("${image}")`,
  };
  const sectionFlexDirection = align === "right" ? "row-reverse" : "row";

  return (
    <section
      className="h-[780px] py-section-y-md bg-left bg-cover relative box-border"
      style={backgroundImage}
    >
      <Box
        className="flex flex-col space-x-[180px] h-full w-full"
        style={{ flexDirection: sectionFlexDirection }}
      >
        <Box className="flex flex-col justify-between h-full relative z-10 xl:w-6/12">
          <Box>
            <Box className="font-medium text-base text-grey-100 tracking-wide uppercase flex items-center space-x-2 mb-2.5">
              <img className="mr-2" src={starIcon} alt="review" />
              Отзыв
            </Box>
            <h2 className="h2 mb-2.5 max-w-[800px]">{title}</h2>
            <Box className="font-medium text-base text-grey-100 tracking-wide uppercase mb-8">
              {subtitle}
            </Box>

            <p className="text-grey-100 tracking-wide text-base">{text}</p>
          </Box>

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

        <Box className="hidden xl:block"></Box>
      </Box>

      <Box className={`absolute left-0 h-full w-full top-0 ${style}`}></Box>
    </section>
  );
}
