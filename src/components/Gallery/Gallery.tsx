import { Fade, Tabs } from "@mui/material";
import { GalleryCarousel } from "components/GalleryCarousel/GalleryCarousel";
import { Tab } from "components/Tab/Tab";
import { GalleryMultiRow } from "components/GalleryMultiRow/GalleryMultiRow";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { GalleryTabConfig } from "shared/types/gallery-tab-config.interface";
import { ThemeColors } from "shared/types/theme-color.enum";
import vars from "shared/styles/_variables.module.scss";
import { useTheme } from "hooks/useTheme.ts";
import { ImageConfig } from "shared/types/image-config.interface.ts";

type ServiceInfoSectionProps = {
  tabs: GalleryTabConfig[];
  multiRows?: boolean;
  onImageClick?: (image: ImageConfig) => void;
};

export function Gallery({
  tabs,
  multiRows = false,
  onImageClick,
}: ServiceInfoSectionProps) {
  const [value, setValue] = useState<string>(tabs[0].value);
  const { themeColor } = useTheme();

  const [height, setHeight] = useState<number>(0);
  const imagesRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (imagesRef?.current) setHeight(imagesRef.current.clientHeight);
  }, []);

  const handleChange = useCallback(
    (_: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    },
    []
  );

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="tabs"
        indicatorColor={themeColor}
        className="pb-10"
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        TabIndicatorProps={{
          style: {
            backgroundColor:
              themeColor === ThemeColors.BLUE ? vars.blue100 : "",
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

      <div className="relative" style={{ height }}>
        {tabs.map((tab) => (
          <Fade in={tab.value === value} key={tab.value} timeout={1000}>
            <div className="w-full absolute top-0" ref={imagesRef}>
              {multiRows ? (
                <GalleryMultiRow
                  images={tab.images}
                  onImageClick={onImageClick}
                />
              ) : (
                <GalleryCarousel
                  images={tab.images}
                  onImageClick={onImageClick}
                />
              )}
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}
