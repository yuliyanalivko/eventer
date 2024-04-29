import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { team } from "shared/data/team.ts";
import { useSlidesToShow } from "hooks/useSlidesToShow";
import { Box } from "@mui/material";

export function TeamSection() {
  const slidesToShow = useSlidesToShow();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 4,
    initialSlide: 0,
  };

  return (
    <section className="py-section-y-sm pr-0 pl-section-x-xs sm:pl-section-x-sm md:pl-section-x-md 2xl:pl-section-x-lg bg-grey-500">
      <h2 className="h2 mb-10">Концепции</h2>

      <Box className="slider-container gallery relative ">
        <Slider {...settings}>
          {team.map((member, index) => (
            <Box key={index} className="pr-20">
              <Box
                className="bg-cover bg-center relative h-[500px] w-full cursor-pointer relative"
                style={{
                  backgroundImage: `url('${member.imageUrl}')`,
                }}
              >
                <Box className="pt-20 px-4 bg-gradient-to-b from-transparent to-grey-400 absolute bottom-0 w-full">
                  <Box className="w-full font-roboto-flex font-semibold text-md uppercase">
                    {member.name}
                  </Box>
                  <Box className="w-full text-grey-300">{member.position}</Box>
                </Box>
              </Box>

              <Box className="pt-6 pb-8 px-4 bg-grey-400">
                <Box className="w-full text-xs text-grey-300">
                  {member.quote}
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
        <Box className="w-full absolute top-0"></Box>
      </Box>
    </section>
  );
}
