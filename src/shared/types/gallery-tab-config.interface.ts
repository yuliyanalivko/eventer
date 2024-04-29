import { ImageConfig } from "./image-config.interface";

export interface GalleryTabConfig {
  label: string;
  value: string;
  images: ImageConfig[];
}
