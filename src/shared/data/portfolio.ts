import { PortfolioTabConfig } from "shared/types/portfolio-tab-config.interface";
import { btlGalleryTabsConfig } from "./btl";
import { corporateGalleryTabsConfig } from "./corporate-events";
import PathConstants from "../../routes/path-constants";

export const portfolioTabs: PortfolioTabConfig[] = [
  {
    label: "Корпоративы",
    value: "corporateEvents",
    childTabConfig: corporateGalleryTabsConfig,
    navigateTo: PathConstants.CORPORATE_EVENTS,
  },
  {
    label: "BTL",
    value: "btl",
    childTabConfig: btlGalleryTabsConfig,
    navigateTo: PathConstants.BTL,
  },
];
