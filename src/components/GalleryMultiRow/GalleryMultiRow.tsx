import { ImageConfig } from "shared/types/image-config.interface";
import { useCallback } from "react";
import { GalleryImage } from "components/GalleryImage/GalleryImage";
import { Box } from "@mui/material";

type GalleryMultiRowProps = {
  images: ImageConfig[];
  onImageClick?: (image: ImageConfig) => void;
};

export function GalleryMultiRow({
  images,
  onImageClick,
}: GalleryMultiRowProps) {
  const handleImageClick = useCallback(
    (image: ImageConfig) => {
      if (onImageClick) onImageClick(image);
    },
    [onImageClick]
  );

  return (
    <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
      {images.map((image, index) => (
        <Box key={index} className="" onClick={() => handleImageClick(image)}>
          <GalleryImage {...image} />
        </Box>
      ))}
    </Box>
  );
}
