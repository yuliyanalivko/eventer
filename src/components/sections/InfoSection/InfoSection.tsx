import logo from "assets/images/icons/eventer-orange.svg";
import clock from "assets/images/icons/clock.svg";
import cocktail from "assets/images/icons/cocktail.svg";
import tie from "assets/images/icons/tie.svg";

export function InfoSection() {
  return (
    <section className="flex justify-between py-section-y-lg bg-grey-500 flex-col space-y-14 xl:flex-row xl:space-y-0 ">
      <div className="mr-16 min-w-min max-w-28">
        <img className="mb-8" src={logo} alt="Logo" />
        <h2 className="h2">Объединение талантов</h2>
      </div>
      <div className="flex flex-col max-w-2xl">
        <div className="flex space-x-4">
          <div className="py-3 flex flex-col justify-center items-center flex-1 space-y-3.5 bg-gradient-to-br from-grey-700 to-6">
            <img src={clock} alt="clock" />
            <div className="text-grey-300 m-y-3 uppercase tracking-wide	text-xs">
              Опыта
            </div>
            <div className="text-white text-md font-semibold tracking-wide font-roboto-flex">
              25 лет
            </div>
          </div>
          <div className="py-3 flex flex-col justify-center items-center flex-1 space-y-3.5 bg-gradient-to-br from-grey-700 to-grey-600">
            <img src={cocktail} alt="cocktail" />
            <div className="text-grey-300 m-y-3 uppercase tracking-wide	text-xs">
              Мероприятий
            </div>
            <div className="text-white text-md font-semibold tracking-wide font-roboto-flex">
              150+
            </div>
          </div>
          <div className="py-3 flex flex-col justify-center items-center flex-1 space-y-3.5 bg-gradient-to-br from-grey-700 to-6">
            <img src={tie} alt="tie" />
            <div className="text-grey-300 m-y-3 uppercase tracking-wide	text-xs">
              Организаций
            </div>
            <div className="text-white text-md font-semibold tracking-wide font-roboto-flex">
              50+
            </div>
          </div>
        </div>
        <p className="mt-8 text-grey-300">
          Уже более 15 лет мы работаем в сфере организации мероприятий. За это
          выремя нам удалось. Мы очень рады вам тут! Опыта у нас много так что
          заказывайте корпораты!
        </p>
      </div>
    </section>
  );
}
