import { useState, useEffect, useCallback } from "react";
import vars from "shared/styles/_variables.module.scss";

export const useSlidesToShow = () => {
  const getSlidesNumber = useCallback(
    () =>
      window.innerWidth >= +vars.lgScreen.replace("px", "")
        ? 4
        : window.innerWidth >= +vars.mdScreen.replace("px", "")
        ? 3
        : window.innerWidth >= +vars.smScreen.replace("px", "")
        ? 2
        : 1,
    []
  );

  const [slidesToShow, setSlidesToShow] = useState<number>(getSlidesNumber());

  const handleResize = useCallback(() => {
    setSlidesToShow(getSlidesNumber());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return slidesToShow;
};
