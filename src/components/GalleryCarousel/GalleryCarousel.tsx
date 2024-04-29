import { GalleryImage } from "components/GalleryImage/GalleryImage";
import { useCallback, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./GalleryCarousel.scss";
import { ImageConfig } from "shared/types/image-config.interface";
import { useSlidesToShow } from "hooks/useSlidesToShow";
import { Box } from "@mui/material";

type GalleryCarouselProps = {
  images: ImageConfig[];
  height?: number;
  onImageClick?: (image: ImageConfig) => void;
};

export function GalleryCarousel({
  images,
  height,
  onImageClick,
}: GalleryCarouselProps) {
  const [dragging, setDragging] = useState<boolean>(false);
  const slidesToShow = useSlidesToShow();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 4,
    initialSlide: 0,
  };

  const handleBeforeChange = useCallback(() => {
    setDragging(true);
  }, [setDragging]);

  const handleAfterChange = useCallback(() => {
    setDragging(false);
  }, [setDragging]);

  const handleImageClick = useCallback(
    (image: ImageConfig, e) => {
      if (!dragging && onImageClick) {
        e.stopPropagation();
        onImageClick(image);
      }
    },
    [dragging, onImageClick]
  );

  return (
    <Box className="slider-container relative gallery">
      <Slider
        {...settings}
        beforeChange={handleBeforeChange}
        afterChange={handleAfterChange}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            className="pr-9"
            onClickCapture={(e) => handleImageClick(image, e)}
          >
            <GalleryImage {...image} height={height} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
