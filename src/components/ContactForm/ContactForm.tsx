import { useCallback, useEffect, useState } from "react";
import { TextField } from "components/TextField/TextField";
import { Button } from "components/Button/Button";
import { TelInput } from "components/TelInput/TelInput";
import { useTheme } from "hooks/useTheme.ts";
import { useFormik } from "formik";
import validationSchema from "./validationSchema";
import { matchIsValidTel } from "mui-tel-input";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import { CircularProgress } from "@mui/material";
import { EVENTER_TELEGRAM_FULL } from "shared/constants/contacts";
import { SERVICE_ID, TEMPLATE_ID } from "shared/constants/email-js";
import { FormikHelpers } from "formik";

interface FormValues {
  name: string;
  organization: string;
  email: string;
  phone: string;
}

const initialValues: FormValues = {
  name: "",
  organization: "",
  email: "",
  phone: "",
};

export const ContactForm = () => {
  const [, setPhone] = useState<string>("");
  const { themeColor, telegramIcon } = useTheme();
  const [loading, setLoading] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackbarText, setSnackbarText] = useState<string>("");

  useEffect(() => emailjs.init("bj0yGqKBM8ltQ2LVI"), []);

  const onSubmit = useCallback(
    async (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
      try {
        setLoading(true);
        const data = {
          name: values.name,
          organization: values.organization,
          email: values.email,
          phone: values.phone,
        };

        await emailjs.send(SERVICE_ID, TEMPLATE_ID, data);

        setSnackbarText("Ваш запрос принят. Пожалуйста, ожидайте звонка.");
        resetForm();
      } catch (error) {
        setSnackbarText("Что-то пошло не так  Пожалуйста, попробуйте еще раз.");
      } finally {
        setLoading(false);
        setOpenSnackbar(true);
      }
    },
    []
  );

  const formik = useFormik<FormValues>({
    validationSchema,
    initialValues,
    onSubmit,
  });

  const handlePhoneChange = (newValue: string) => {
    setPhone(newValue);
    formik.setFieldValue("phone", newValue);

    matchIsValidTel(newValue, {
      onlyCountries: ["BY"],
    });
  };

  const handleCloseSnackbar = useCallback(() => setOpenSnackbar(false), []);

  return (
    <>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <TextField
          label="Ваше Имя"
          variant="outlined"
          color="primary"
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          fullWidth
          sx={{ mb: 1 }}
        />
        <TextField
          label="Организация"
          variant="outlined"
          color="primary"
          type="text"
          name="organization"
          value={formik.values.organization}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.organization && Boolean(formik.errors.organization)
          }
          helperText={formik.touched.organization && formik.errors.organization}
          fullWidth
          sx={{ mb: 1 }}
        />
        <TextField
          label="E-mail"
          variant="outlined"
          color="primary"
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          fullWidth
          sx={{ mb: 1 }}
        />

        <TelInput
          color="primary"
          name="phone"
          defaultCountry="BY"
          onlyCountries={["BY"]}
          value={formik.values.phone}
          onChange={handlePhoneChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
          fullWidth
          sx={{ mb: 3 }}
        />

        <Button
          variant="contained"
          color={themeColor}
          type="submit"
          fullWidth
          size="medium"
          sx={{ mb: 2 }}
          disabled={loading}
        >
          Заказать звонок
          <CircularProgress size={20} className="ml-3" hidden={!loading} />
        </Button>
        <Button
          variant="outlined"
          color={themeColor}
          fullWidth
          size="medium"
          onClick={() => window.open(EVENTER_TELEGRAM_FULL)}
        >
          Telegram
          <img src={telegramIcon} alt="telegram" className="ml-2.5" />
        </Button>
      </form>

      <Snackbar
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        autoHideDuration={5000}
        message={snackbarText}
      />
    </>
  );
};
