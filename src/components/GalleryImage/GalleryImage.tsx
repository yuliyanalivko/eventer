import { Box } from "@mui/material";

type GalleryCarouselProps = {
  title?: string;
  caption?: string;
  imageUrl: string;
  height?: number;
};

export function GalleryImage({
  title,
  caption,
  imageUrl,
  height = 380,
}: GalleryCarouselProps) {
  return (
    <Box className="flex flex-col" style={{ height }}>
      <Box
        className="bg-cover bg-center relative flex-1 w-full cursor-pointer"
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
      ></Box>

      {title ? (
        <Box className="mt-5">
          <Box className="caption w-full font-roboto-flex font-medium text-xbase">
            {title}
          </Box>
          <Box className="caption w-full text-sm text-grey-300">{caption}</Box>
        </Box>
      ) : null}
    </Box>
  );
}
