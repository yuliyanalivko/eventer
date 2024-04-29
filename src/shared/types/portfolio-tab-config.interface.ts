import PathConstants from "../../routes/path-constants";
import { GalleryTabConfig } from "./gallery-tab-config.interface";

export interface PortfolioTabConfig {
  label: string;
  value: string;
  childTabConfig: GalleryTabConfig[];
  navigateTo?: PathConstants;
}
