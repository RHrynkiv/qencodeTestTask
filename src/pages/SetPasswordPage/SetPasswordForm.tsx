import { useCallback, useMemo } from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormInput from "../../components/AuthFlow/FormInput";
import SubmitButton from "../../components/AuthFlow/SubmitButton";

import { $api } from "../../api/api";

import { localStorageItems, secret } from "../../utils/constants";
import { handleError } from "../../utils/helpers";

import { InputsWrapper } from "./styles";

export const SetPasswordForm = () => {
  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        password: Yup.string()
          .required("Password is required")
          .min(8, "Password must be at least 8 characters long"),
        password_confirm: Yup.string()
          .required("Password is required")
          .min(8, "Password must be at least 8 characters long"),
      }),
    []
  );

  const handleSubmit = useCallback(async (values: object) => {
    const access_token =
      localStorage.getItem(localStorageItems.ACCESS_TOKEN) || "";

    try {
      await $api.post("/v1/auth/password-set", {
        ...values,
        secret: secret,
        token: access_token,
      });
    } catch (err) {
      handleError(err);
    } finally {
    }
  }, []);

  return (
    <Formik
      initialValues={{ password: "", password_confirm: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ handleChange, values }) => (
        <Form>
          <InputsWrapper>
            <FormInput
              placeholder="Enter new password"
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
              isPassword={true}
            />
            <FormInput
              placeholder="Confirm  password"
              type="password"
              name="password_confirm"
              onChange={handleChange}
              value={values.password_confirm}
              isPassword={true}
            />
          </InputsWrapper>
          <SubmitButton type="submit" buttonText="Reset Password" />
        </Form>
      )}
    </Formik>
  );
};
