import AuthWrapper from "../../components/AuthFlow/AuthWrapper";
import CompanyLogoTitle from "../../components/AuthFlow/CompanyLogoTitle";
import LoginWithButton from "../../components/AuthFlow/LoginWithButton";
import Divider from "../../components/AuthFlow/Divider";

import { ReactComponent as GoogleIcon } from "../../assets/images/googleIcon.svg";
import { ReactComponent as GithubIcon } from "../../assets/images/githubIcon.svg";

import { LoginPageForm } from "./LoginPageForm";

import { LoginWithButtonWrapper, SignUpTextWrapper, LinkText } from "./styles";

export const LoginPage = () => (
  <AuthWrapper>
    <>
      <CompanyLogoTitle subTitle="Log in to your account" />
      <LoginWithButtonWrapper>
        <LoginWithButton icon={<GoogleIcon />} buttonText="Google" />
        <LoginWithButton icon={<GithubIcon />} buttonText="Github" />
      </LoginWithButtonWrapper>
      <Divider />
      <LoginPageForm />
      <SignUpTextWrapper>
        Is your company new to Qencode? <LinkText>Sign up</LinkText>
      </SignUpTextWrapper>
    </>
  </AuthWrapper>
);
