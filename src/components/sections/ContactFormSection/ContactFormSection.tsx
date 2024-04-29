import { ContactForm } from "components/ContactForm/ContactForm";
import { CommonContextValue } from "contexts/CommonContext";
import { CommonContext } from "contexts/CommonContext";
import { useTheme } from "hooks/useTheme.ts";
import { useContext, useEffect, useRef } from "react";

type ContactFormSectionProps = {
  classes?: string;
  bgImage?: string;
};

export function ContactFormSection({
  classes = "bg-grey-500",
  bgImage,
}: ContactFormSectionProps) {
  const { commentIcon } = useTheme();
  const ref = useRef<HTMLElement>(null);
  const { updateContactFormRef } =
    useContext<CommonContextValue>(CommonContext);

  useEffect(() => {
    if (ref) updateContactFormRef(ref);
    return () => {
      updateContactFormRef(null);
    };
  }, [ref]);

  return (
    <section
      className={`py-section-y-xs flex justify-center bg-cover bg-center relative ${classes}`}
      style={{ backgroundImage: `url(${bgImage})` }}
      ref={ref}
    >
      <div className="max-w-[470px] relative z-10">
        <div className="flex space-x-2.5 mb-3">
          <img src={commentIcon} alt="comment" />
          <h2 className="h2">Давайте обсудим</h2>
        </div>
        <div>
          <p className="text-grey-300 mb-12">
            Свяжитесь с нами удобным для вас способом, вы везде ответим
            одинаково быстро!
          </p>
          <ContactForm />
        </div>
      </div>
      <div
        className={`absolute left-0 h-full w-full top-0 ${
          bgImage ? "bg-grey-600/80" : ""
        }`}
      ></div>
    </section>
  );
}
