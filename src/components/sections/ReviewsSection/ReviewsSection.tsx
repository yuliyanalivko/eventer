import { Review } from "shared/types/review.interface";
import { Divider } from "@mui/material";
import { useTheme } from "hooks/useTheme.ts";

type ReviewsSectionProps = {
  reviews: Review[];
};

export function ReviewsSection({ reviews }: ReviewsSectionProps) {
  const { starIcon } = useTheme();

  return (
    <section className="py-section-y-xs px-section-x-sm md:px-section-x-md xxl:px-section-x-xl space-y-14 bg-grey-500">
      <div className="max-w-[800px]">
        <div className="text-md font-medium tracking-wide uppercase flex items-center space-x-2 mb-14">
          <img className="mr-2" src={starIcon} alt="review" />
          Отзыв
        </div>

        {reviews.map((review: Review, index) => (
          <div className="mb-8 last:mb-0" key={index}>
            <div className="flex space-x-6 mb-4">
              <img src={review.authorAvatarUrl} alt={review.author} />
              <div className="space-y-1">
                <div className="font-roboto-flex font-semibold uppercase">
                  {review.author}
                </div>
                <div className="font-sm text-grey-300">
                  {review.authorOccupation}
                </div>
              </div>
            </div>
            <p className="font-sm pb-6">{review.text}</p>
            <Divider className="bg-white opacity-10 h-px" />
          </div>
        ))}
      </div>
    </section>
  );
}
