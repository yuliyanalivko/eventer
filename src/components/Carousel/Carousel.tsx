import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";
import { useTheme } from "hooks/useTheme";
import vars from "shared/styles/_variables.module.scss";
import { useState, useEffect, useCallback } from "react";

type CarouselProps = {
  images: [
    {
      imageUrl: string;
      title?: string;
      caption?: string;
    }
  ];
  showCaption?: boolean;
};

export function Carousel({ images, showCaption = true }: CarouselProps) {
  const { themeColor } = useTheme();

  const getImageWidth = useCallback(
    () => (window.innerWidth >= +vars.lgScreen.replace("px", "") ? 800 : 400),
    [window.innerWidth]
  );
  const [imageWidth, setImageWidth] = useState<number>(getImageWidth());

  useEffect(() => {
    const handleResize = () => {
      setImageWidth(getImageWidth());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    dots: true,
    variableWidth: true,
    arrows: false,
  };

  return (
    <Slider {...settings} className={`${themeColor} carousel`}>
      {images.map((image, index) => (
        <div
          key={index}
          className="h-[580px] relative"
          style={{ width: imageWidth }}
        >
          <div
            className={`bg-cover bg-center h-full w-full relative`}
            style={{ backgroundImage: `url(${image.imageUrl})` }}
          />
          {showCaption ? (
            <div className="caption w-full absolute bottom-0 before:content-[''] before:absolute before:bg-grey-700 before:opacity-50 before:w-full before:h-full">
              <div className="relative py-3 px-6 space-x-2">
                <span className="text-grey-100 uppercase font-roboto-flex text-[20px] font-semibold">
                  {image.title}
                </span>
                <span className="text-grey-300 text-base">{image.caption}</span>
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </Slider>
  );
}
