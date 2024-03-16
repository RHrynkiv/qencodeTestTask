import AuthWrapper from "../../components/AuthFlow/AuthWrapper";
import CompanyLogoTitle from "../../components/AuthFlow/CompanyLogoTitle";

import { ForgotPasswordForm } from "./ForgotPasswordForm";

export const ForgotPasswordPage = () => (
  <AuthWrapper>
    <>
      <CompanyLogoTitle subTitle="Forgot Password?" />
      <ForgotPasswordForm />
    </>
  </AuthWrapper>
);
