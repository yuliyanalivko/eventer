import { GalleryTabConfig } from "shared/types/gallery-tab-config.interface";
import { Gallery } from "components/Gallery/Gallery.tsx";
import { useNavigate } from "react-router-dom";
import { ImageConfig } from "shared/types/image-config.interface";
import { useCallback } from "react";

type ServiceInfoSectionProps = {
  tabs: GalleryTabConfig[];
  navigateTo?: string;
};

export function GallerySection({ tabs, navigateTo }: ServiceInfoSectionProps) {
  const navigate = useNavigate();

  const onImageClick = useCallback(
    (image: ImageConfig) => {
      if (navigateTo && image.name)
        navigate(`${navigateTo}?name=${image.name}`);
    },
    [navigate, navigateTo]
  );

  return (
    <section className="pr-0 py-section-y-md pl-section-x-xs sm:pl-section-x-sm md:pl-section-x-md 2xl:pl-section-x-lg  bg-grey-500">
      <Gallery tabs={tabs} onImageClick={onImageClick} />
    </section>
  );
}
