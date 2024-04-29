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
    <div className="flex flex-col" style={{ height }}>
      <div
        className="bg-cover bg-center relative flex-1 w-full cursor-pointer"
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
      ></div>

      {title ? (
        <div className="mt-5">
          <div className="caption w-full font-roboto-flex font-medium text-xbase">
            {title}
          </div>
          <div className="caption w-full text-sm text-grey-300">{caption}</div>
        </div>
      ) : null}
    </div>
  );
}
