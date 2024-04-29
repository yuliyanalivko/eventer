import { ArticleData } from "./article-data.interface";
import { ImageConfig } from "./image-config.interface";
import { Review } from "./review.interface";

export interface Event {
  name: string;
  description: {
    title: string;
    subtitle: string;
    text: string;
  };
  gallery: ImageConfig[];
  articleData: ArticleData[];
  reviews: Review[];
  bannerText: string;
}
