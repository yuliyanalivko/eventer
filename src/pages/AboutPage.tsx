import { AboutHeaderSection } from "sections/AboutHeaderSection/AboutHeaderSection";
import { FAQSection } from "sections/FAQSection/FAQSection";
import { SloganSection } from "sections/SloganSection/SloganSection";
import { AboutSection } from "sections/AboutSection/AboutSection";
import { TeamSection } from "sections/TeamSection/TeamSection";
import { VideoSection } from "sections/VideoSection/VideoSection";
import { useTheme } from "hooks/useTheme";
import vars from "shared/styles/_variables.module.scss";

export function AboutPage() {
  const { themeColor } = useTheme();

  const slogan = `“Ваше желание - наш <span style="color: ${vars[themeColor]}">результат</span>“`;
  const text =
    "Мы стремимся к большему. Каждый раз путь становится только интеренсее! Новые знакомства, новые идеи, новые фишки. Мы можем делать так, как другие побоятся!";
  const author = "Команда Eventer";

  return (
    <>
      <AboutHeaderSection />
      <SloganSection slogan={slogan} text={text} author={author} />
      <VideoSection />
      <AboutSection />
      <TeamSection />
      <FAQSection classes="bg-grey-400" />
      <SloganSection slogan={slogan} text={text} author={author} />
    </>
  );
}
