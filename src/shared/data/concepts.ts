import { ArticleData } from "shared/types/article-data.interface";
import { Concept } from "shared/types/concept.interface";
import imageUrl from "assets/images/gallery-2.png";
import { ImageConfig } from "shared/types/image-config.interface";
import { corporateEventImages } from "./corporate-events";

export const conceptImages: ImageConfig[] = [
  {
    name: "summer",
    title: "Летние",
    imageUrl: "/src/assets/images/summer.png",
  },
  {
    name: "thematic",
    title: "Тематические",
    imageUrl: "/src/assets/images/thematic.png",
  },
  {
    name: "new-year",
    title: "Новогодние",
    imageUrl: "/src/assets/images/new-year.png",
  },
  {
    name: "8-mar-23-feb",
    title: "8 марта / 23 февраля",
    imageUrl: "/src/assets/images/8-mar-23-feb.png",
  },
  {
    name: "birthday",
    title: "День рождения компании",
    imageUrl: "/src/assets/images/birthday.png",
  },
];

export const conceptArticle: ArticleData[] = [
  {
    title: "Заголовок про локацию",
    text: "Текст о том, что там было и как классно было. Про локацию, что она у воды и очень красивая и супер-пупер! Дальше стырила с китчена.<br/><br/>На зонах тимбилдинга мы доили корову, укрощали быка, осваивали трактора, выкапывали картофель, а в финале готовили самое белорусские блюдо - драники.Вечернюю программу открыл танцевальный мастер-класс, а продолжил деревенский квиз, Ну и как же без кавер-группы",
    imageUrl,
  },
  {
    title: "Какие бывают",
    text: "Текст о том, что там было и как классно было. Про локацию, что она у воды и очень красивая и супер-пупер! Дальше стырила с китчена.<br/><br/>На зонах тимбилдинга мы доили корову, укрощали быка, осваивали трактора, выкапывали картофель, а в финале готовили самое белорусские блюдо - драники.Вечернюю программу открыл танцевальный мастер-класс, а продолжил деревенский квиз, Ну и как же без кавер-группы",
  },
];

export const concepts: Concept[] = [
  {
    name: "new-year",
    description: {
      title: "новогодние корпоративы",
    },
    gallery: corporateEventImages,
    articleData: conceptArticle,
    bannerText: "Промоакции с Eventer",
  },
];
