import AuthWrapper from "../../components/AuthFlow/AuthWrapper";
import CompanyLogoTitle from "../../components/AuthFlow/CompanyLogoTitle";

import { SetPasswordForm } from "./SetPasswordForm";

import { useGetTokens } from "../../hooks/useGetTokens";

export const SetPasswordPage = () => {
  useGetTokens();

  return (
    <AuthWrapper>
      <>
        <CompanyLogoTitle subTitle="Create new Password?" />
        <SetPasswordForm />
      </>
    </AuthWrapper>
  );
};
