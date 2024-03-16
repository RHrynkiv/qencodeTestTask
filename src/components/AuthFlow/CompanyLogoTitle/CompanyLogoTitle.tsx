import { ReactComponent as CompanyTitle } from "../../../assets/images/companyTitle.svg";

import { TitleWrapper, SubTitle } from "./styles";

export const CompanyLogoTitle = ({ subTitle }: { subTitle: string }) => (
  <TitleWrapper>
    <CompanyTitle />
    <SubTitle>{subTitle}</SubTitle>
  </TitleWrapper>
);
