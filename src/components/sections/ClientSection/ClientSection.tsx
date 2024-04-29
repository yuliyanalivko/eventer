import { Button } from "components/Button/Button";
import telegram from "assets/images/icons/telegram-orange.svg";
import { EVENTER_TELEGRAM_FULL } from "shared/constants/contacts";
import mainBg from "assets/images/concert-1.png";
import vars from "shared/styles/_variables.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ClientSection.scss";
import oodji from "assets/images/oodji.png";
import { useTheme } from "hooks/useTheme.ts";
import { useShowContactForm } from "hooks/useShowContactForm";
import { Box } from "@mui/material";

export function ClientSection() {
  const { themeColor } = useTheme();
  const { showContactForm } = useShowContactForm();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    variableWidth: true,
    swipeToSlide: true,
    arrows: false,
  };

  const clients = [oodji];

  return (
    <section
      className="bg-center bg-cover flex flex-col box-border"
      style={{
        backgroundImage: `linear-gradient(to right, ${vars.grey700}, rgba(0, 0, 0, 0)), url("${mainBg}")`,
      }}
    >
      <Box className="h-full w-full py-section-y-md">
        <Box className="h-full max-w-[406px] box-border">
          <h2 className="h2 mb-2.5 max-w-[800px] mb-3">Они выбрали нас</h2>

          <p className="text-grey-100 tracking-wide text-base mb-8">
            И остались довольны бла бла бла и вы тоже нас заказыайте потому то
            нам доверяет более 45 организаций постоянных клиентов
          </p>

          <Box className="flex flex-wrap gap-4 items-start">
            <Button color="primary" onClick={showContactForm}>
              Заказать звонок
            </Button>
            <Button
              color={themeColor}
              variant="outlined"
              onClick={() => window.open(EVENTER_TELEGRAM_FULL)}
            >
              Telegram <img className="ml-2.5" src={telegram} alt="telegram" />
            </Button>
          </Box>
        </Box>
      </Box>

      <Box className="h-20 w-full px-16 py-4 bg-grey-700">
        <Slider {...settings} className="clients">
          {clients.map((client, index) => (
            <Box key={index} style={{ width: 142 }}>
              <Box className="h-10 w-full bg-grey-600 flex items-center justify-center">
                <img src={client} alt="client" className="h-6 opacity-35" />
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </section>
  );
}
