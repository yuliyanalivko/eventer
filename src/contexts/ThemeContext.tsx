import { createContext, useEffect, useState } from "react";
import PathConstants from "../routes/path-constants";
import { ThemeColors } from "shared/types/theme-color.enum";

type ThemeContextProps = {
  children: React.ReactElement;
};

export const ThemeContext = createContext<ThemeColors>(ThemeColors.PRIMARY);

export default function ThemeContextProvider({ children }: ThemeContextProps) {
  const { pathname } = window.location;

  const [themeColor, setThemeColor] = useState<ThemeColors>(
    ThemeColors.PRIMARY
  );

  useEffect(() => {
    const color = pathname.includes(PathConstants.BTL)
      ? ThemeColors.SECONDARY
      : pathname.includes(PathConstants.CORPORATE_EVENTS)
      ? ThemeColors.BLUE
      : ThemeColors.PRIMARY;

    setThemeColor(color);
  }, [pathname]);

  return (
    <ThemeContext.Provider value={themeColor}>{children}</ThemeContext.Provider>
  );
}
