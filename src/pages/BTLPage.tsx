import { ContactFormSection } from "sections/ContactFormSection/ContactFormSection";
import { SingleReviewSection } from "sections/SingleReviewSection/SingleReviewSection";
import { HeaderSection } from "sections/HeaderSection/HeaderSection";
import { StepperSection } from "sections/StepperSection/StepperSection";
import { WhatIsBTLSection } from "sections/WhatIsBTLSection/WhatIsBTLSection";
import { FAQSection } from "sections/FAQSection/FAQSection";
import headerBgImage from "assets/images/coca-cola-bg-1.png";
import reviewBgImage from "assets/images/coca-cola-bg-2.jpg";
import { GallerySection } from "sections/GallerySection/GallerySection";
import { btlGalleryTabsConfig } from "../shared/data/btl";
import PathConstants from "../routes/path-constants";

export function BTLPage() {
  const review = {
    title: "COCA-COLA",
    subtitle: "промоакция",
    text: "“Ребята справились на все сто! Все сотрудники были довольны. Настолько организованного построения корпоратива у нас еще не былою Ни минуты не осталось для того, чтобы скучать.Еда на уровне, алкоголь на уровне, развлечения на уровне”",
  };
  return (
    <>
      <HeaderSection
        title="организация BTL в Минске"
        text="Более 180 мероприятий за 10 лет на высшем уровне"
        image={headerBgImage}
        style="bg-grey-700 opacity-90"
      />
      <WhatIsBTLSection />
      <SingleReviewSection
        {...review}
        image={reviewBgImage}
        style="bg-gradient-to-r from-grey-700 to-transparent bg-grey-500/[.8] "
      />
      <StepperSection />
      <ContactFormSection classes="bg-grey-400" />
      <GallerySection
        tabs={btlGalleryTabsConfig}
        navigateTo={`/${PathConstants.BTL}/${PathConstants.EVENT}`}
      />
      <FAQSection classes="bg-grey-400" />
    </>
  );
}
