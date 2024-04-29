import { ContactFormSection } from "sections/ContactFormSection/ContactFormSection";
import contactBgImage from "assets/images/party.jpg";
import { PortfolioSection } from "sections/PortfolioSection/PortfolioSection";
import { portfolioTabs } from "shared/data/portfolio";

export function PortfolioPage() {
  return (
    <>
      <PortfolioSection tabs={portfolioTabs} />
      <ContactFormSection classes="bg-[#010302]" bgImage={contactBgImage} />
    </>
  );
}
