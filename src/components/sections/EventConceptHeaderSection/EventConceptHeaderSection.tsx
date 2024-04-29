import { Box } from "@mui/material";
import { useTheme } from "hooks/useTheme.ts";

type EventHeaderSectionProps = {
  title: string;
  subtitle?: string;
  text?: string;
  bgImage?: string;
};

export function EventConceptHeaderSection({
  title,
  subtitle,
  text,
  bgImage,
}: EventHeaderSectionProps) {
  const { themeColor } = useTheme();

  const fontColor =
    themeColor === "secondary"
      ? "text-gold-200"
      : themeColor === "blue"
      ? "text-blue-100"
      : "text-orange-400";

  return (
    <section
      className={`bg-grey-500 box-border bg-center bg-cover relative py-section-y-sm`}
      style={{
        backgroundImage: `url("${bgImage}")`,
      }}
    >
      <Box className="max-w-[636px] relative z-10">
        <h1 className="h1 max-w-3xl uppercase">{title}</h1>
        <Box className="font-roboto-flex text-xbase font-medium uppercase mt-4 mb-10 empty:hidden">
          {subtitle}
        </Box>

        {text && (
          <Box
            className={`font-roboto-flex text-xbase font-semibold uppercase mb-3 ${fontColor}`}
          >
            Запрос:
          </Box>
        )}
        <p>{text}</p>
      </Box>
      <Box className="absolute left-0 h-full w-full top-0 bg-grey-500 opacity-85"></Box>
    </section>
  );
}
