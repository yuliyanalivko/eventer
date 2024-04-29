import { GalleryTabConfig } from "shared/types/gallery-tab-config.interface";
import { Event } from "shared/types/event.interface";
import { carouselImages } from "./carousel-images";
import { reviews } from "./reviews";
import { ArticleData } from "shared/types/article-data.interface";
import imageUrl from "assets/images/gallery-2.png";
import { ImageConfig } from "shared/types/image-config.interface";

export const corporateEventImages: ImageConfig[] = [
  {
    name: "new-year-2023",
    title: "Golden Prison",
    caption: "Новый год 2023",
    imageUrl: "/src/assets/images/gallery-4.png",
  },
  {
    name: "new-year-2022",
    title: "Golden Prison",
    caption: "Новый год 2022",
    imageUrl: "/src/assets/images/gallery-5.png",
  },
  {
    name: "new-year-2021",
    title: "Golden Prison",
    caption: "Новый год 2021",
    imageUrl: "/src/assets/images/gallery-3.png",
  },
  {
    name: "new-year-2020",
    title: "Golden Prison",
    caption: "Новый год 2020",
    imageUrl: "/src/assets/images/gallery-1.png",
  },
  {
    name: "new-year-2019",
    title: "Golden Prison",
    caption: "Новый год 2019",
    imageUrl: "/src/assets/images/gallery-2.png",
  },
  {
    name: "new-year-2018",
    title: "Golden Prison",
    caption: "Новый год 2018",
    imageUrl: "/src/assets/images/gallery-1.png",
  },
];

export const corporateGalleryTabsConfig: GalleryTabConfig[] = [
  {
    label: "Новый год",
    value: "newYear",
    images: corporateEventImages,
  },
  {
    label: "Летние",
    value: "summer",
    images: [...corporateEventImages].reverse(),
  },
  {
    label: "Хэллоуин",
    value: "halloween",
    images: corporateEventImages,
  },
  {
    label: "Зимние",
    value: "winter",
    images: [...corporateEventImages].reverse(),
  },
  {
    label: "Тимбилдинг",
    value: "teambuilding",
    images: corporateEventImages,
  },
];

export const newYearArticleData: ArticleData[] = [
  {
    title: "Заголовок про локацию",
    text: "Текст о том, что там было и как классно было. Про локацию, что она у воды и очень красивая и супер-пупер! Дальше стырила с китчена.<br/><br/>На зонах тимбилдинга мы доили корову, укрощали быка, осваивали трактора, выкапывали картофель, а в финале готовили самое белорусские блюдо - драники.Вечернюю программу открыл танцевальный мастер-класс, а продолжил деревенский квиз, Ну и как же без кавер-группы",
    imageUrl,
  },
  {
    title: "Заголовок про локацию",
    text: "Текст о том, что там было и как классно было. Про локацию, что она у воды и очень красивая и супер-пупер! Дальше стырила с китчена.<br/><br/>На зонах тимбилдинга мы доили корову, укрощали быка, осваивали трактора, выкапывали картофель, а в финале готовили самое белорусские блюдо - драники.Вечернюю программу открыл танцевальный мастер-класс, а продолжил деревенский квиз, Ну и как же без кавер-группы",
    imageUrl,
  },
];

export const corporateEvents: Event[] = [
  {
    name: "new-year-2023",
    description: {
      title: "новый год 2023",
      subtitle: "GOLDEN PRISON",
      text: "Запросом клиента было мероприятие на свежем воздухе, которое может завлечь все разнообразие сотрудников: программистов от 20 до 57 лет. Что-то еще особенное тут написать, типа сложно было.",
    },
    gallery: carouselImages,
    articleData: newYearArticleData,
    reviews: reviews,
    bannerText: "Новый год с Eventer",
  },
];
