import { useCallback, useMemo } from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormInput from "../../components/AuthFlow/FormInput";
import SubmitButton from "../../components/AuthFlow/SubmitButton";

import { useNavigate } from "react-router-dom";

import { Paths } from "../../utils/constants";

import { $api } from "../../api/api";
import { handleError, reUrlForResetPassword } from "../../utils/helpers";
import { toast } from "react-toastify";

export const ForgotPasswordForm = () => {
  const navigate = useNavigate();

  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        email: Yup.string()
          .email("Invalid email")
          .required("Email is required"),
      }),
    []
  );

  const handleSubmit = useCallback(
    async (values: object) => {
      try {
        const { data } = await $api.post("/v1/auth/password-reset", {
          ...values,
          redirect_url: reUrlForResetPassword(),
        });
        toast.success(data?.detail);
      } catch (err) {
        handleError(err);
      } finally {
        navigate(Paths.SET_PASSWORD);
      }
    },
    [navigate]
  );

  const handleCancel = useCallback(() => {
    navigate(Paths.LOGIN);
  }, [navigate]);

  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ handleChange, values }) => (
        <Form>
          <FormInput
            placeholder="Enter your email"
            type="text"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
          <SubmitButton type="submit" buttonText="Send" />
          <SubmitButton
            type="button"
            buttonText="Cancel"
            onClick={handleCancel}
          />
        </Form>
      )}
    </Formik>
  );
};
