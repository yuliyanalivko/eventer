import { GalleryImage } from "components/GalleryImage/GalleryImage";
import { useCallback, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./GalleryCarousel.scss";
import { ImageConfig } from "shared/types/image-config.interface";
import { useSlidesToShow } from "hooks/useSlidesToShow";

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
    console.log("handleBeforeChange");
    setDragging(true);
  }, [setDragging]);

  const handleAfterChange = useCallback(() => {
    console.log("handleAfterChange");
    setDragging(false);
  }, [setDragging]);

  const handleImageClick = useCallback(
    (image: ImageConfig, e) => {
      if (!dragging && onImageClick) {
        e.stopPropagation();
        onImageClick(image);
      }
    },
    [dragging]
  );

  return (
    <div className="slider-container relative gallery">
      <Slider
        {...settings}
        beforeChange={handleBeforeChange}
        afterChange={handleAfterChange}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="pr-9"
            onClickCapture={(e) => handleImageClick(image, e)}
          >
            <GalleryImage {...image} height={height} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
