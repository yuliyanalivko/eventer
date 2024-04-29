import { Tabs } from "@mui/material";
import { Tab } from "components/Tab/Tab";
import { useCallback, useState } from "react";
import { useTheme } from "hooks/useTheme.ts";
import bgImage from "assets/images/concert-2.png";
import PathConstants from "routes/path-constants";

declare module "@mui/material/Tabs" {
  interface TabsPropsIndicatorColorOverrides {
    blue: true;
  }
}

enum TabValues {
  CORPORATES = "corporateEvents",
  BTL = "btl",
}

export function ServiceInfoSection() {
  const [value, setValue] = useState<string>("corporateEvents");
  const { themeColor } = useTheme();

  const handleChange = useCallback(
    (_: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    },
    []
  );

  return (
    <section className="flex px-0 bg-grey-400">
      <div className="py-section-y-md px-section-x-xs sm:px-section-x-sm md:plx-section-x-md 2xl:px-section-x-lg">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="secondary tabs example"
          indicatorColor={themeColor}
        >
          <Tab value={TabValues.CORPORATES} label="Корпоративы" />
          <Tab value={TabValues.BTL} label="BTL" />
        </Tabs>

        <div className="flex">
          <div
            role="tabpanel"
            className="mr-[-100%] w-full"
            style={{
              visibility: value === TabValues.CORPORATES ? "visible" : "hidden",
            }}
          >
            <h2 className="h2 mb-4 mt-10">Текст про корпораты</h2>
            <ul className="text-grey-300 mb-10">
              <li>- Новый год</li>
              <li>- 8 марта / 23 февраля</li>
              <li>- День Рождения Копании</li>
              <li>- Летние</li>
              <li>- Зимние</li>
              <li>- Многое другое..</li>
            </ul>
            <a
              href={`/${PathConstants.CORPORATE_EVENTS}`}
              className="underline"
            >
              Узнать подробнее
            </a>
          </div>

          <div
            role="tabpanel"
            className="mr-[-100%] w-full"
            style={{
              visibility: value === TabValues.BTL ? "visible" : "hidden",
            }}
          >
            <h2 className="h2 mb-4 mt-10">Текст про BTL</h2>
            <ul className="text-grey-300 mb-10">
              <li>- Пример</li>
              <li>- Пример 2</li>
              <li>- Многое другое..</li>
            </ul>
            <a href={`/${PathConstants.BTL}`} className="underline">
              Узнать подробнее
            </a>
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-center grow"
        style={{ backgroundImage: `url("${bgImage}")` }}
      ></div>
    </section>
  );
}
