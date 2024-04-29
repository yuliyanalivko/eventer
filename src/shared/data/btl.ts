import { GalleryTabConfig } from "shared/types/gallery-tab-config.interface";
import { reviews } from "./reviews";
import { carouselImages } from "./carousel-images";
import { Event } from "shared/types/event.interface";
import { ArticleData } from "shared/types/article-data.interface";
import imageUrl from "assets/images/coca-cola.png";
import { ImageConfig } from "shared/types/image-config.interface";

export const btlImages: ImageConfig[] = [
  {
    name: "promo-coca-cola",
    title: "Coca-cola",
    caption: "Промоакция",
    imageUrl: "/src/assets/images/coca-cola.png",
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

export const btlGalleryTabsConfig: GalleryTabConfig[] = [
  {
    label: "Акции",
    value: "promotions",
    images: btlImages,
  },
  {
    label: "Дегустации",
    value: "tastings",
    images: [...btlImages].reverse(),
  },
  {
    label: "Выставки",
    value: "exhibitions",
    images: btlImages,
  },
];

export const promoAction: ArticleData[] = [
  {
    title: "Заголовок про локацию",
    text: "Текст о том, что там было и как классно было. Про локацию, что она у воды и очень красивая и супер-пупер! Дальше стырила с китчена.<br/><br/>На зонах тимбилдинга мы доили корову, укрощали быка, осваивали трактора, выкапывали картофель, а в финале готовили самое белорусские блюдо - драники.Вечернюю программу открыл танцевальный мастер-класс, а продолжил деревенский квиз, Ну и как же без кавер-группы",
    imageUrl,
  },
];

export const btlEvents: Event[] = [
  {
    name: "promo-coca-cola",
    description: {
      title: "Промоакция",
      subtitle: "Coca-cola",
      text: "Запросом клиента было мероприятие на свежем воздухе, которое может завлечь все разнообразие сотрудников: программистов от 20 до 57 лет. Что-то еще особенное тут написать, типа сложно было.",
    },
    gallery: carouselImages,
    articleData: promoAction,
    reviews: reviews,
    bannerText: "Промоакции с Eventer",
  },
];
