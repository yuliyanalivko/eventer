import { ContactForm } from "components/ContactForm/ContactForm";
import { useTheme } from "hooks/useTheme.ts";
import {
  EVENTER_PHONE,
  EVENTER_EMAIL,
  EVENTER_TELEGRAM,
  EVENTER_TELEGRAM_FULL,
} from "shared/constants/contacts.ts";
import { YMaps, Map } from "@pbe/react-yandex-maps";
import mapIcon from "assets/images/icons/map-orange.svg";
import { Box, Link } from "@mui/material";

export function ContactMapSection() {
  const { phoneIcon, emailIcon, telegramIcon } = useTheme();

  return (
    <section className="py-section-y-xs bg-grey-500">
      <h2 className="h2 mb-12">Контакты</h2>

      <Box className="flex flex-col space-y-[100px] xl:flex-row xl:space-y-0 xl:space-x-[120px] 3xl:space-x-[190px]">
        <Box className="max-w-[500px] flex-1">
          <Box className="flex flex-col space-y-2 mb-10">
            <Box className="flex space-x-2">
              <img src={phoneIcon} alt="phone" />
              <Link href={`tel:${EVENTER_PHONE}`}>{EVENTER_PHONE}</Link>
            </Box>

            <Box className="flex space-x-2">
              <img src={emailIcon} alt="email" />
              <Link href={`mailto:${EVENTER_EMAIL}`}>{EVENTER_EMAIL}</Link>
            </Box>

            <Box className="flex space-x-2">
              <img src={telegramIcon} alt="telegram" />
              <Link href={EVENTER_TELEGRAM_FULL} target="_blank">
                {EVENTER_TELEGRAM}
              </Link>
            </Box>
          </Box>
          <ContactForm />
        </Box>

        <Box className="w-full flex-1">
          <Box className="mb-4 flex space-x-3">
            <img src={mapIcon} alt="address" />
            <Box>ул. Матусевича 32</Box>
          </Box>
          <Box className="h-[545px] w-full">
            <YMaps>
              <Map
                width="100%"
                height="100%"
                defaultState={{ center: [53.916748, 27.475242], zoom: 15 }}
              />
            </YMaps>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
