import * as Yup from "yup";

const ValidationSchema = Yup.object({
  name: Yup.string()
    .strict(true)
    .min(2, "Имя слишком короткое")
    .max(32, "Имя слишком длинное")
    .required("Введите имя"),
  organization: Yup.string().strict(true).required("Введите имя организации"),
  email: Yup.string()
    .strict(true)
    .email("Некорректный e-mail")
    .required("Введите e-mail"),
  phone: Yup.string().strict(true).required("Введите номер телефона"),
});

export default ValidationSchema;
