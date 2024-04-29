import wineglass from "assets/images/icons/wineglass.svg";
import dash from "assets/images/icons/dash-blue.svg";
import { Box } from "@mui/material";

export function CorporateAdvantageSection() {
  return (
    <section className="bg-grey-500 flex flex-col justify-between space-y-10 box-border py-section-y-md xl:flex-row xl:space-x-24 xl:space-y-0">
      <Box className="h-full max-w-[406px] flex space-x-4 items-center">
        <img src={wineglass} alt="corporate" />
        <h2 className="h2 max-w-[800px] uppercase">
          В чем преимущество организации?
        </h2>
      </Box>

      <Box className="max-w-[585px]">
        <Box className="text-grey-100 tracking-wide text-base mb-8">
          <span className="text-blue-100">Корпоративы</span> - это инструменты
          непрямой рекламы, направленные на продвижение товара/услуги и на
          создание положительного имиджа бренда..
        </Box>
        <Box className="font-semibold uppercase mb-6">Виды Корпоративов:</Box>
        {[
          "Летние",
          "Тематические",
          "Новогодние",
          "8 марта / 23 февраля",
          "Дни рождения компании",
        ].map((text) => (
          <Box
            className="flex items-center space-x-2 mb-2 first:mt-3.5 last:mb-3.5"
            key={text}
          >
            <img className="mr-2" src={dash} alt="dash" />
            {text}
          </Box>
        ))}
      </Box>
    </section>
  );
}
