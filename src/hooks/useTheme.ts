import { useState, useEffect, useContext } from "react";
import { ThemeColors } from "shared/types/theme-color.enum";
import { ThemeContext } from "../contexts/ThemeContext";

import telegramPrimary from "assets/images/icons/telegram-orange.svg";
import telegramSecondary from "assets/images/icons/telegram-gold.svg";
import telegramBlue from "assets/images/icons/telegram-blue.svg";

import dashPrimary from "assets/images/icons/dash-orange.svg";
import dashSecondary from "assets/images/icons/dash-gold.svg";
import dashBlue from "assets/images/icons/dash-blue.svg";

import starPrimary from "assets/images/icons/star-orange.svg";
import starSecondary from "assets/images/icons/star-gold.svg";
import starBlue from "assets/images/icons/star-blue.svg";

import commentPrimary from "assets/images/icons/comment-orange.svg";
import commentBlue from "assets/images/icons/comment-blue.svg";

import phonePrimary from "assets/images/icons/phone-orange.svg";
import phoneBlue from "assets/images/icons/phone-blue.svg";

import emailPrimary from "assets/images/icons/email-orange.svg";
import emailBlue from "assets/images/icons/email-blue.svg";

import logoPrimary from "assets/images/icons/eventer-orange.svg";
import logoSecondary from "assets/images/icons/eventer-gold.svg";
import logoBlue from "assets/images/icons/eventer-blue.svg";

export const useTheme = () => {
  const themeColor = useContext<ThemeColors>(ThemeContext);
  const [telegramIcon, setTelegramIcon] = useState<string>(telegramPrimary);
  const [dashIcon, setDashIcon] = useState<string>(dashPrimary);
  const [starIcon, setStarIcon] = useState<string>(starPrimary);
  const [commentIcon, setCommentIcon] = useState<string>(commentPrimary);
  const [phoneIcon, setPhoneIcon] = useState<string>(phonePrimary);
  const [emailIcon, setEmailIcon] = useState<string>(emailPrimary);
  const [logoIcon, setLogoIcon] = useState<string>(commentPrimary);

  useEffect(() => {
    const [telegram, dash, star, comment, phone, email, logo] =
      themeColor === ThemeColors.BLUE
        ? [
            telegramBlue,
            dashBlue,
            starBlue,
            commentBlue,
            phoneBlue,
            emailBlue,
            logoBlue,
          ]
        : themeColor === ThemeColors.SECONDARY
        ? [
            telegramSecondary,
            dashSecondary,
            starSecondary,
            commentPrimary,
            phonePrimary,
            emailPrimary,
            logoSecondary,
          ]
        : [
            telegramPrimary,
            dashPrimary,
            starPrimary,
            commentPrimary,
            phonePrimary,
            emailPrimary,
            logoPrimary,
          ];

    setTelegramIcon(telegram);
    setDashIcon(dash);
    setStarIcon(star);
    setCommentIcon(comment);
    setPhoneIcon(phone);
    setEmailIcon(email);
    setLogoIcon(logo);
  }, [themeColor]);

  return {
    themeColor,
    telegramIcon,
    dashIcon,
    starIcon,
    commentIcon,
    phoneIcon,
    emailIcon,
    logoIcon,
  };
};
