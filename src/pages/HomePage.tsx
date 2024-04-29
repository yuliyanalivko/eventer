import { ContactFormSection } from "sections/ContactFormSection/ContactFormSection";
import { AboutSection } from "sections/AboutSection/AboutSection";
import { SingleReviewSection } from "sections/SingleReviewSection/SingleReviewSection";
import { HeaderSection } from "sections/HeaderSection/HeaderSection";
import { StepperSection } from "sections/StepperSection/StepperSection";
import { ServiceInfoSection } from "sections/ServiceInfoSection/ServiceInfoSection";
import { CarouselSection } from "sections/CarouselSection/CarouselSection";
import { ClientSection } from "sections/ClientSection/ClientSection";
import { FAQSection } from "sections/FAQSection/FAQSection";
import bgImage from "assets/images/concert-1.png";
import { useEffect, useRef } from "react";

export function HomePage() {
  const review = {
    title: "Golden prison",
    subtitle: "новый год, 2023",
    text: "“Ребята справились на все сто! Все сотрудники были довольны. Настолько организованного построения корпоратива у нас еще не былою Ни минуты не осталось для того, чтобы скучать.Еда на уровне, алкоголь на уровне, развлечения на уровне”",
    image: "background-1.png",
  };

  return (
    <>
      <HeaderSection
        title="Идеи, вдохновленные вами - организуются нами"
        image={bgImage}
      />
      <AboutSection />
      <SingleReviewSection {...review} align="right" image={bgImage} />
      <StepperSection />
      <ServiceInfoSection />
      <ContactFormSection />
      <CarouselSection />
      <ClientSection />
      <FAQSection />
    </>
  );
}
