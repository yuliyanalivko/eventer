import { ArticleSection } from "sections/ArticleSection/ArticleSection";
import { BannerSection } from "sections/BannerSection/BannerSection";
import { EventConceptHeaderSection } from "sections/EventConceptHeaderSection/EventConceptHeaderSection";
import { FAQSection } from "sections/FAQSection/FAQSection";
import { GalleryCarousel } from "components/GalleryCarousel/GalleryCarousel";
import { useNavigate, useSearchParams } from "react-router-dom";
import PathConstants from "../routes/path-constants";
import { concepts } from "shared/data/concepts";
import bgImage from "assets/images/gallery-2.png";
import { ImageConfig } from "shared/types/image-config.interface";
import { Empty } from "components/Empty/Empty";

export default function ConceptPage() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");

  const data = concepts.find((c) => c.name === name);

  const navigate = useNavigate();

  const onImageClick = (image: ImageConfig) => {
    navigate(
      `/${PathConstants.CORPORATE_EVENTS}/${PathConstants.EVENT}?name=${image.name}`
    );
  };

  return (
    <>
      {data ? (
        <>
          <EventConceptHeaderSection {...data?.description} bgImage={bgImage} />
          <ArticleSection data={data?.articleData} />
          <BannerSection title={data?.bannerText} />
          <section className="py-section-y-sm pr-0 bg-grey-500">
            <div>
              <GalleryCarousel
                images={data?.gallery}
                onImageClick={onImageClick}
              />
            </div>
          </section>
          <FAQSection />
        </>
      ) : (
        <Empty />
      )}
    </>
  );
}
