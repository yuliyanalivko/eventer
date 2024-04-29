import logo from "assets/images/icons/eventer-orange.svg";
import clock from "assets/images/icons/clock.svg";
import cocktail from "assets/images/icons/cocktail.svg";
import tie from "assets/images/icons/tie.svg";
import { Box } from "@mui/material";

export function InfoSection() {
  return (
    <section className="flex justify-between py-section-y-lg bg-grey-500 flex-col space-y-14 xl:flex-row xl:space-y-0 ">
      <Box className="mr-16 min-w-min max-w-28">
        <img className="mb-8" src={logo} alt="Logo" />
        <h2 className="h2">Объединение талантов</h2>
      </Box>
      <Box className="flex flex-col max-w-2xl">
        <Box className="flex space-x-4">
          <Box className="py-3 flex flex-col justify-center items-center flex-1 space-y-3.5 bg-gradient-to-br from-grey-700 to-6">
            <img src={clock} alt="clock" />
            <Box className="text-grey-300 m-y-3 uppercase tracking-wide	text-xs">
              Опыта
            </Box>
            <Box className="text-white text-md font-semibold tracking-wide font-roboto-flex">
              25 лет
            </Box>
          </Box>
          <Box className="py-3 flex flex-col justify-center items-center flex-1 space-y-3.5 bg-gradient-to-br from-grey-700 to-grey-600">
            <img src={cocktail} alt="cocktail" />
            <Box className="text-grey-300 m-y-3 uppercase tracking-wide	text-xs">
              Мероприятий
            </Box>
            <Box className="text-white text-md font-semibold tracking-wide font-roboto-flex">
              150+
            </Box>
          </Box>
          <Box className="py-3 flex flex-col justify-center items-center flex-1 space-y-3.5 bg-gradient-to-br from-grey-700 to-6">
            <img src={tie} alt="tie" />
            <Box className="text-grey-300 m-y-3 uppercase tracking-wide	text-xs">
              Организаций
            </Box>
            <Box className="text-white text-md font-semibold tracking-wide font-roboto-flex">
              50+
            </Box>
          </Box>
        </Box>
        <Box className="mt-8 text-grey-300">
          Уже более 15 лет мы работаем в сфере организации мероприятий. За это
          выремя нам удалось. Мы очень рады вам тут! Опыта у нас много так что
          заказывайте корпораты!
        </Box>
      </Box>
    </section>
  );
}
