import cross from "assets/images/icons/cross.svg";
import crossOrange from "assets/images/icons/cross-orange.svg";
import crossBlue from "assets/images/icons/cross-blue.svg";

export function AboutSection() {
  return (
    <section className="py-section-y-md bg-grey-500 box-content relative flex flex-col justify-center h-[calc(64px*4+176px*3)] xl:h-[calc(64px*2+176px)]">
      <div className="flex flex-col text-center h-full xl:flex-row">
        <div className="flex-1 flex items-center text-lg font-semibold pt-16 pb-8 xl:pl-16 xl:pr-8 xl:py-0">
          <div className="w-full">11 лет опыта</div>
        </div>
        <div className="flex-1 flex items-center text-lg font-semibold py-8 xl:px-8 xl:py-0">
          <div className="w-full">12 креативных людей</div>
        </div>
        <div className="flex-1 flex items-center text-lg font-semibold pb-16 pt-8 xl:pr-16 xl:pl-8 xl:py-0">
          <div className="w-full">150+ мероприятий</div>
        </div>
      </div>

      <div className="relative w-full top-[-100%]">
        <div className="grid grid-cols-[repeat(2,64px)] xl:grid-cols-[repeat(4,64px)] gap-[176px] justify-between w-full absolute">
          {[...Array(8).keys()].map((_, index) => (
            <img
              key={index}
              className="h-16 w-16"
              src={index === 3 ? crossBlue : index === 5 ? crossOrange : cross}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
