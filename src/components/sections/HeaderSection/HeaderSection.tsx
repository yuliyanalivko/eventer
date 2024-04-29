import { Button } from "components/Button/Button";
import { EVENTER_TELEGRAM_FULL } from "shared/constants/contacts";
import { useTheme } from "hooks/useTheme.ts";
import { useShowContactForm } from "hooks/useShowContactForm";

type HeaderSectionProps = {
  title: string;
  text: string;
  image: string;
  style?: string;
};

export function HeaderSection({
  title,
  text,
  image,
  style = "bg-gradient-to-r from-grey-700 to-transparent",
}: HeaderSectionProps) {
  const { themeColor, telegramIcon } = useTheme();
  const { showContactForm } = useShowContactForm();

  const backgroundImage = {
    backgroundImage: `url("${image}"`,
  };

  return (
    <section
      className="h-[900px] py-section-y-lg max-h-full bg-center bg-cover box-border flex items-center relative"
      style={backgroundImage}
    >
      <div className="relative z-10">
        <h1 className="h1 max-w-3xl uppercase">{title}</h1>
        <p className="uppercase mt-6 text-grey-100 text-xbase font-roboto-flex">
          {text}
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          <Button color={themeColor} onClick={showContactForm}>
            Заказать звонок
          </Button>
          <Button
            color={themeColor}
            variant="outlined"
            onClick={() => window.open(EVENTER_TELEGRAM_FULL)}
          >
            Telegram <img className="ml-3" src={telegramIcon} alt="telegram" />
          </Button>
        </div>
      </div>
      <div className={`absolute left-0 h-full w-full top-0 ${style}`}></div>
    </section>
  );
}
