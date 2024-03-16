import { useCallback, useMemo, useState } from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormInput from "../../components/AuthFlow/FormInput";
import SubmitButton from "../../components/AuthFlow/SubmitButton";

import { NavLink } from "react-router-dom";

import { Paths } from "../../utils/constants";

import { $api } from "../../api/api";

import { InputsWrapper, LinkText } from "./styles";
import { handleError } from "../../utils/helpers";

export const LoginPageForm = () => {
  const [isEmailEntered, setIsEmailEntered] = useState<boolean>(false);

  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        email: Yup.string()
          .email("Invalid email")
          .required("Email is required"),
        ...(isEmailEntered
          ? {
              password: Yup.string()
                .required("Password is required")
                .min(8, "Password must be at least 8 characters long"),
            }
          : {}),
      }),
    [isEmailEntered]
  );

  const handleSubmit = useCallback(
    async (values: object) => {
      if (!isEmailEntered) {
        setIsEmailEntered(true);
        return;
      }

      try {
        await $api.post("/v1/auth/login", { ...values });
      } catch (err) {
        handleError(err);
      }
    },
    [isEmailEntered]
  );

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ handleChange, values }) => (
        <Form>
          <InputsWrapper>
            <FormInput
              placeholder="Work email"
              type="text"
              name="email"
              onChange={handleChange}
              value={values.email}
            />
            {isEmailEntered && (
              <FormInput
                placeholder="Password"
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
                isPassword={true}
              />
            )}
          </InputsWrapper>
          {isEmailEntered && (
            <NavLink
              to={Paths.FORGOT_PASSWORD}
              children={
                <LinkText $display="block" $align="right" $margin="15px 0 0 0">
                  Forgot your password?
                </LinkText>
              }
            />
          )}
          <SubmitButton type="submit" buttonText="Log in to Qencode" />
        </Form>
      )}
    </Formik>
  );
};
