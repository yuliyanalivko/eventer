import { ArticleData } from "./article-data.interface";
import { ImageConfig } from "./image-config.interface";

export interface Concept {
  name: string;
  description: {
    title: string;
  };
  gallery: ImageConfig[];
  articleData: ArticleData[];
  bannerText: string;
}
