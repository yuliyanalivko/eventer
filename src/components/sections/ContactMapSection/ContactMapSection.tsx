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

export function ContactMapSection() {
  const { phoneIcon, emailIcon, telegramIcon } = useTheme();

  return (
    <section className="py-section-y-xs bg-grey-500">
      <h2 className="h2 mb-12">Контакты</h2>

      <div className="flex flex-col space-y-[100px] xl:flex-row xl:space-y-0 xl:space-x-[120px] 3xl:space-x-[190px]">
        <div className="max-w-[500px] flex-1">
          <div className="flex flex-col space-y-2 mb-10">
            <div className="flex space-x-2">
              <img src={phoneIcon} alt="phone" />
              <a href={`tel:${EVENTER_PHONE}`}>{EVENTER_PHONE}</a>
            </div>

            <div className="flex space-x-2">
              <img src={emailIcon} alt="email" />
              <a href={`mailto:${EVENTER_EMAIL}`}>{EVENTER_EMAIL}</a>
            </div>

            <div className="flex space-x-2">
              <img src={telegramIcon} alt="telegram" />
              <a href={EVENTER_TELEGRAM_FULL} target="_blank">
                {EVENTER_TELEGRAM}
              </a>
            </div>
          </div>
          <ContactForm />
        </div>

        <div className="w-full flex-1">
          <div className="mb-4 flex space-x-3">
            <img src={mapIcon} alt="address" />
            <div>ул. Матусевича 32</div>
          </div>
          <div className="h-[545px] w-full">
            <YMaps>
              <Map
                width="100%"
                height="100%"
                defaultState={{ center: [53.916748, 27.475242], zoom: 15 }}
              />
            </YMaps>
          </div>
        </div>
      </div>
    </section>
  );
}
