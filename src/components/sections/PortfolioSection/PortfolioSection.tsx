import { Box, Fade, Tabs } from "@mui/material";
import { Tab } from "components/Tab/Tab";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { PortfolioTabConfig } from "shared/types/portfolio-tab-config.interface";
import { ThemeColors } from "shared/types/theme-color.enum";
import vars from "shared/styles/_variables.module.scss";
import { useTheme } from "hooks/useTheme.ts";
import { Gallery } from "components/Gallery/Gallery.tsx";
import PathConstants from "../../../routes/path-constants.ts";
import { ImageConfig } from "shared/types/image-config.interface.ts";
import { useNavigate } from "react-router-dom";

type PortfolioSectionProps = {
  tabs: PortfolioTabConfig[];
};

export function PortfolioSection({ tabs }: PortfolioSectionProps) {
  const { themeColor } = useTheme();
  const [value, setValue] = useState<string>(tabs[0].value);

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const [height, setHeight] = useState<number>(0);
  const galleryRef = useRef<HTMLBRElement>(null);

  useLayoutEffect(() => {
    if (galleryRef?.current) setHeight(galleryRef.current.clientHeight);
  }, [galleryRef.current]);

  const navigate = useNavigate();

  const onImageClick = useCallback(
    (image: ImageConfig) => {
      const navigateTo =
        value === "btl"
          ? PathConstants.BTL
          : value === "corporateEvents"
          ? PathConstants.CORPORATE_EVENTS
          : null;
      if (navigateTo && image.name)
        navigate(`/${navigateTo}/${PathConstants.EVENT}?name=${image.name}`);
    },
    [navigate, value]
  );

  return (
    <section className="pb-section-y-md pt-section-y-sm">
      <h1 className="h1 mb-8">портфолио</h1>

      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs"
          indicatorColor={themeColor}
          className="mb-[120px]"
          TabIndicatorProps={{
            style: {
              backgroundColor:
                themeColor === ThemeColors.BLUE ? vars.lightBlue : "",
            },
          }}
        >
          {tabs.map((tab) => (
            <Tab
              value={tab.value}
              label={tab.label}
              color={themeColor}
              key={tab.value}
            />
          ))}
        </Tabs>

        <Box className="relative" style={{ height }}>
          {tabs.map((tab) => (
            <Fade in={tab.value === value} key={tab.value} timeout={1000}>
              <Box
                role="tabpanel"
                className="w-full absolute top-0"
                ref={galleryRef}
              >
                <Gallery
                  tabs={tab.childTabConfig}
                  multiRows={true}
                  onImageClick={onImageClick}
                />
              </Box>
            </Fade>
          ))}
        </Box>
      </Box>
    </section>
  );
}
