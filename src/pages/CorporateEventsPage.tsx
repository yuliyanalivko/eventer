import { ContactFormSection } from "sections/ContactFormSection/ContactFormSection";
import { SingleReviewSection } from "sections/SingleReviewSection/SingleReviewSection";
import { HeaderSection } from "sections/HeaderSection/HeaderSection";
import { StepperSection } from "sections/StepperSection/StepperSection";
import { FAQSection } from "sections/FAQSection/FAQSection";
import { GallerySection } from "sections/GallerySection/GallerySection";
import { CorporateAdvantageSection } from "sections/CorporateAdvantageSection/CorporateAdvantageSection";
import { ContractorsSection } from "sections/ContractorsSection/ContractorsSection";
import { ConceptsSection } from "sections/ConceptsSection/ConceptsSection";

import { corporateGalleryTabsConfig } from "shared/data/corporate-events";
import headerBgImage from "assets/images/corporate-event-1.png";
import reviewBgImage from "assets/images/corporate-event-2.jpeg";
import PathConstants from "../routes/path-constants";

export function CorporateEventsPage() {
  const review = {
    title: "Golden prison",
    subtitle: "новый год, 2023",
    text: "“Ребята справились на все сто! Все сотрудники были довольны. Настолько организованного построения корпоратива у нас еще не былою Ни минуты не осталось для того, чтобы скучать.Еда на уровне, алкоголь на уровне, развлечения на уровне”",
  };

  return (
    <>
      <HeaderSection
        title="Организация корпоративов в Минске"
        text="Более 180 мероприятий за 10 лет на высшем уровне"
        image={headerBgImage}
        style="bg-grey-500 opacity-85"
      />
      <CorporateAdvantageSection />
      <ContractorsSection />
      <ConceptsSection />
      <SingleReviewSection
        {...review}
        image={reviewBgImage}
        style="bg-gradient-to-r from-grey-700 to-transparent bg-grey-500/[.8] "
      />
      <StepperSection />
      <ContactFormSection classes="bg-grey-400" />
      <GallerySection
        tabs={corporateGalleryTabsConfig}
        navigateTo={`/${PathConstants.CORPORATE_EVENTS}/${PathConstants.EVENT}`}
      />
      <FAQSection classes="bg-grey-400" />
    </>
  );
}
