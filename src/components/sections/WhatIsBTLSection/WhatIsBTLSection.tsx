import { Accordion } from "components/Accordion/Accordion";
import { questions } from "shared/data/questions";
import percent from "assets/images/icons/percent-gold.svg";

export function WhatIsBTLSection() {
  return (
    <section className="bg-grey-500 flex flex-col justify-between space-y-10 box-border py-section-y-md xl:flex-row xl:space-x-24 xl:space-y-0">
      <div className="h-full max-w-[406px] flex space-x-4 items-center">
        <img src={percent} alt="BTL" />
        <h2 className="h2 max-w-[800px]">Что такое btl?</h2>
      </div>

      <div className="max-w-[585px]">
        <p className="text-grey-100 tracking-wide text-base mb-8">
          <span className="text-gold-200">BTL</span> - это инструменты непрямой
          рекламы, направленные на продвижение товара/услуги и на создание
          положительного имиджа бренда.
        </p>
        <p className="text-gold-200 font-semibold uppercase mb-6">
          Виды BTL инструментов:
        </p>
        <Accordion data={questions} />
      </div>
    </section>
  );
}
