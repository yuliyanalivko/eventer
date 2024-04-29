import Divider from "@mui/material/Divider";
import logo from "@/assets/images/icons/eventer-orange.svg";
import phone from "@/assets/images/icons/phone.svg";
import email from "@/assets/images/icons/email.svg";
import instagram from "@/assets/images/icons/instagram.svg";
import telegram from "@/assets/images/icons/telegram.svg";
import {
  EVENTER_INSTAGRAM,
  EVENTER_EMAIL,
  EVENTER_PHONE,
  EVENTER_TELEGRAM_FULL,
} from "../../shared/constants/contacts";
import PathConstants from "../../routes/path-constants";

export function Footer() {
  return (
    <footer className="bg-grey-700 box-border flex flex-col py-8 px-16 relative bottom-0">
      <div className="pb-6">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>

      <Divider className="bg-white opacity-20 w-full h-0.25" />

      <div className="flex flex-col space-y-10 pt-8 justify-between items-start xl:flex-row xl:space-y-0">
        <div className="text-grey-300 text-xs opacity-60">
          <div className="mb-3">© 2022 Eventer.by</div>
          <div>Все права защищены</div>
        </div>

        <div className="flex flex-wrap gap-6 h-5 pb-6">
          <a
            className="text-grey-300 text-xs font-medium"
            href={`/${PathConstants.CORPORATE_EVENTS}`}
          >
            Корпоративы
          </a>
          <Divider className="bg-white opacity-20" orientation="vertical" />
          <a
            className="text-grey-300 text-xs font-medium"
            href={`/${PathConstants.BTL}`}
          >
            BTL
          </a>
          <Divider className="bg-white opacity-20" orientation="vertical" />
          <a
            className="text-grey-300 text-xs font-medium"
            href={`/${PathConstants.PORTFOLIO}`}
          >
            Портфолио
          </a>
          <Divider className="bg-white opacity-20" orientation="vertical" />
          <a
            className="text-grey-300 text-xs font-medium"
            href={`/${PathConstants.CONTACTS}`}
          >
            Контакты
          </a>
        </div>

        <div className="flex flex-col space-y-6 sm:flex-row sm:space-x-44 sm:space-y-0">
          <div>
            <div className="flex space-x-2">
              <img src={phone} alt="phone" />
              <a className="text-grey-300" href={`tel:${EVENTER_PHONE}`}>
                {EVENTER_PHONE}
              </a>
            </div>

            <div className="flex space-x-2">
              <img src={email} alt="email" />
              <a className="text-grey-300" href={`mailto:${EVENTER_EMAIL}`}>
                {EVENTER_EMAIL}
              </a>
            </div>
          </div>

          <div>
            <div className="flex space-x-2">
              <img src={telegram} alt="telegram" />
              <a
                className="text-grey-300"
                href={EVENTER_TELEGRAM_FULL}
                target="_blank"
              >
                t.me/eventer
              </a>
            </div>

            <div className="flex space-x-2">
              <img src={instagram} alt="instagram" />
              <a
                className="text-grey-300"
                href={EVENTER_INSTAGRAM}
                target="_blank"
              >
                eventer_by
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
