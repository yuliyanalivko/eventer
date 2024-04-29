import { Carousel } from "components/Carousel/Carousel";
import { carouselImages } from "shared/data/carousel-images";

export function CarouselSection() {
  return (
    <section className="bg-grey-500 py-20 h-[770px] p-0">
      <Carousel color="primary" images={carouselImages} />
    </section>
  );
}
