import { ArticleSection } from "sections/ArticleSection/ArticleSection";
import { BannerSection } from "sections/BannerSection/BannerSection";
import { Carousel } from "components/Carousel/Carousel";
import { Empty } from "components/Empty/Empty";
import { EventConceptHeaderSection } from "sections/EventConceptHeaderSection/EventConceptHeaderSection";
import { ReviewsSection } from "sections/ReviewsSection/ReviewsSection";
import { useSearchParams } from "react-router-dom";
import { events } from "shared/data/events";

export default function EventPage() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");

  const data = events.find((e) => e.name === name);

  return (
    <>
      {data ? (
        <>
          <EventConceptHeaderSection {...data?.description} />
          <div className="bg-grey-500">
            <Carousel images={data?.gallery} showCaption={false} />
          </div>
          <ArticleSection data={data?.articleData} />
          <ReviewsSection reviews={data?.reviews} />
          <BannerSection title={data?.bannerText} />
        </>
      ) : (
        <Empty />
      )}
    </>
  );
}
