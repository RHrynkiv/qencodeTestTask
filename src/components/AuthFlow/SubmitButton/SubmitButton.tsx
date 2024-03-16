import { Button } from "./styles";

interface ButtonPropsType {
  buttonText: string;
  type: "submit" | "button";
  disabled?: boolean;
  onClick?: () => void;
}

export const SubmitButton = ({
  buttonText,
  type,
  disabled,
  onClick,
}: ButtonPropsType) => (
  <Button type={type} buttonType={type} disabled={disabled} onClick={onClick}>
    {buttonText}
  </Button>
);
