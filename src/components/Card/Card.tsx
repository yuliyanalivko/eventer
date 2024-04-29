type CardProps = {
  title: string;
  text: string;
};
export function Card({ title, text }: CardProps) {
  return (
    <div className="border rounded border-blue-200/70 p-3 space-y-10">
      <div className="text-xxs text-grey-300 font-light capitalize">
        {title}
      </div>
      <div className="text-sm uppercase sm:text-xbase">{text}</div>
    </div>
  );
}
