import { ArticleData } from "shared/types/article-data.interface";
import styles from "./ArticleSection.module.scss";
import { useCallback } from "react";
import { Box } from "@mui/material";

type ArticleSectionProps = {
  data: ArticleData[];
};

export function ArticleSection({ data }: ArticleSectionProps) {
  const flexDirection = useCallback(
    (index: number) => (index % 2 ? "row-reverse" : "row"),
    []
  );

  return (
    <section className="py-section-y-xs px-section-x-sm md:px-section-x-md xxl:px-section-x-xl bg-grey-500">
      {data.map((d, index) => (
        <Box
          className={`flex gap-x-[190px] ${styles.column}`}
          style={{ flexDirection: flexDirection(index) }}
          key={index}
        >
          <Box className="flex justify-center flex-col flex-1 space-y-8 mt-[120px] mb-[100px]">
            <h3 className="h3">{d.title}</h3>
            <Box dangerouslySetInnerHTML={{ __html: d.text }} />
          </Box>
          <Box
            className="flex-1 bg-cover bg-center min-h-[400px]"
            style={{
              backgroundImage: `url(${d.imageUrl})`,
              display: d.imageUrl ? "block" : "none",
            }}
          ></Box>
        </Box>
      ))}
    </section>
  );
}
