import { Stepper } from "components/Stepper/Stepper";

export function StepperSection() {
  const steps = [
    {
      label: "Ваш Запрос",
      content: {
        text: "Свяжитесь c нами удобным для вас способом, вы везде ответим одинаково быстро!",
      },
    },
    {
      label: "Обсуждение",
      content: {
        text: "Мы обсудим ваши пожелания и предполагаемый бюджет, поможем свежими идеями!",
      },
    },
    {
      label: "Наш Ресерч",
      content: {
        list: {
          label: "Оставьте это нам! Мы подберем для вас лучшие:",
          items: ["Локацию", "Зазвлечения", "Меню", "Ведущего"],
        },
      },
    },
    {
      label: "Предложение",
      content: {
        list: {
          label: "Мы вернемся к вам с:",
          items: [
            "Подробным планом мероприятия",
            "Коммерческим предложением",
            "Выпиской расходов",
          ],
        },
        text: "После  совместного редактирования и согласования начинается подготовка.",
      },
    },
    {
      label: "Лучшее мероприятие на ваш бюджет!",
      content: {
        text: "",
      },
    },
  ];

  return (
    <section className="bg-grey-600 py-section-y-lg">
      <h2 className="h2 mb-20">Этапы организации c eventer</h2>
      <Stepper steps={steps}></Stepper>
    </section>
  );
}
