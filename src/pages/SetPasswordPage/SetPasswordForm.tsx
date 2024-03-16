import { useCallback, useMemo } from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormInput from "../../components/AuthFlow/FormInput";
import SubmitButton from "../../components/AuthFlow/SubmitButton";

import { $api } from "../../api/api";

import { localStorageItems, secret } from "../../utils/constants";
import { handleError } from "../../utils/helpers";

import { InputsWrapper, Label } from "./styles";

export const SetPasswordForm = () => {
  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        password: Yup.string()
          .required("Password is required")
          .min(8, "Password must be at least 8 characters long"),
        password_confirm: Yup.string()
          .required("Password is required")
          .min(8, "Password must be at least 8 characters long")
          .oneOf([Yup.ref("password")], "Passwords must match"),
      }),
    []
  );

  const handleSubmit = useCallback(async (values: object) => {
    const access_token =
      localStorage.getItem(localStorageItems.ACCESS_TOKEN) || "";

    try {
      //Sorry, I don`t know where I can get "secret" and "token" if user forgot password and can`t login to the app
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
            <div>
              <Label>Password</Label>
              <FormInput
                placeholder="Password"
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
                isPassword={true}
              />
            </div>
            <div>
              <Label>Confirm Password</Label>
              <FormInput
                placeholder="Password"
                type="password"
                name="password_confirm"
                onChange={handleChange}
                value={values.password_confirm}
                isPassword={true}
              />
            </div>
          </InputsWrapper>
          <SubmitButton type="submit" buttonText="Reset Password" />
        </Form>
      )}
    </Formik>
  );
};
