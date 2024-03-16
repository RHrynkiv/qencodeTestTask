import { useCallback, useMemo, useState } from "react";

import { ReactComponent as EyeIcon } from "../../../assets/images/eyeIcon.svg";

import { ErrorMessage } from "formik";

import { Input, ErrorWrapper, InputWrapper, PasswordIcon } from "./styles";

interface InputTypes {
  placeholder: string;
  type: "text" | "password";
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  isPassword?: boolean;
}

export const FormInput = (params: InputTypes) => {
  const [showPassword, setShowPassword] = useState(false);

  const type = useMemo(
    () =>
      params?.isPassword ? (showPassword ? "text" : "password") : params?.type,
    [showPassword, params]
  );

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  return (
    <div>
      <InputWrapper>
        <Input {...params} type={type} />
        {params?.isPassword && (
          <PasswordIcon onClick={togglePasswordVisibility}>
            <EyeIcon />
          </PasswordIcon>
        )}
      </InputWrapper>
      <ErrorWrapper>
        <ErrorMessage name={params.name} component="div" />
      </ErrorWrapper>
    </div>
  );
};
