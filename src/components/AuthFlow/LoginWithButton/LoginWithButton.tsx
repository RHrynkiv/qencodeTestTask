import { ButtonWrapper, ButtonIcon, ButtonText } from "./styles";

interface LoginWithButtonTypes {
  icon: string | JSX.Element;
  buttonText: string;
}

export const LoginWithButton = ({ icon, buttonText }: LoginWithButtonTypes) => (
  <ButtonWrapper>
    <ButtonIcon>{icon}</ButtonIcon>
    <ButtonText>{buttonText}</ButtonText>
  </ButtonWrapper>
);
