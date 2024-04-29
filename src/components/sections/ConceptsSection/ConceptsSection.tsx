import { GalleryCarousel } from "components/GalleryCarousel/GalleryCarousel";
import PathConstants from "../../../routes/path-constants";
import { conceptImages } from "shared/data/concepts";
import { useNavigate } from "react-router-dom";
import { ImageConfig } from "shared/types/image-config.interface";
import { useCallback } from "react";

export function ConceptsSection() {
  const navigate = useNavigate();

  const onImageClick = useCallback(
    (image: ImageConfig) => {
      navigate(
        `/${PathConstants.CORPORATE_EVENTS}/${PathConstants.CONCEPT}?name=${image.name}`
      );
    },
    [navigate]
  );

  return (
    <section className="py-section-y-sm pr-0 pl-section-x-xs sm:pl-section-x-sm md:pl-section-x-md 2xl:pl-section-x-lg bg-grey-500">
      <h2 className="h2 mb-10">Концепции</h2>

      <GalleryCarousel
        images={conceptImages}
        onImageClick={onImageClick}
        height={300}
      />
    </section>
  );
}
