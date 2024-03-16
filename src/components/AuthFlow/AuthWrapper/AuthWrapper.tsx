import { GlobalWrapper, Wrapper } from "./styles";

type Props = {
  children: string | JSX.Element;
};

export const AuthWrapper = ({ children }: Props) => {
  return (
    <GlobalWrapper>
      <Wrapper>{children}</Wrapper>
    </GlobalWrapper>
  );
};
