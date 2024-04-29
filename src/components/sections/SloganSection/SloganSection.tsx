type SloganSectionProps = {
  slogan: string;
  text: string;
  author: string;
};

export function SloganSection({ slogan, text, author }: SloganSectionProps) {
  return (
    <section className="py-section-y-lg bg-grey-500 bg-bottom bg-contain bg-no-repeat box-border flex flex-col items-center">
      <div className="text-xbase max-w-[802px]">
        <h2
          className="h1 max-w-3xl uppercase mb-4"
          dangerouslySetInnerHTML={{ __html: slogan }}
        ></h2>
        <p className="text-xbase text-balance mb-4">{text}</p>
        <div className="text-right text-xbase">{author}</div>
      </div>
    </section>
  );
}
