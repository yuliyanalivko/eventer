import bgImage from "assets/images/video-cover.jpeg";
import playIcon from "assets/images/icons/play.svg";
import { useCallback } from "react";

export function VideoSection() {
  const handleOnClick = useCallback(() => {
    window.open("https://www.youtube.com/watch?v=dlkGhgwGmLM&ab_channel=Kais");
  }, []);

  return (
    <section
      className="h-[888px] bg-center bg-cover flex items-center justify-center relative"
      style={{ backgroundImage: `url("${bgImage}"` }}
    >
      <img
        className="relative z-10 cursor-pointer opacity-50 hover:opacity-100 ease-in-out duration-200"
        src={playIcon}
        alt="play"
        onClick={handleOnClick}
      />
      <div
        className={`absolute left-0 h-full w-full top-0 bg-grey-400/80`}
      ></div>
    </section>
  );
}
