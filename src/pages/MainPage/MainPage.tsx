import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import AuthWrapper from "../../components/AuthFlow/AuthWrapper";
import CompanyLogoTitle from "../../components/AuthFlow/CompanyLogoTitle";
import SubmitButton from "../../components/AuthFlow/SubmitButton";

import { Paths, localStorageItems } from "../../utils/constants";
import Cookies from "js-cookie";

export const MainPage = () => {
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    localStorage.removeItem(localStorageItems.ACCESS_TOKEN);
    Cookies.remove(localStorageItems.REFRESH_TOKEN);
    navigate(Paths.LOGIN);
  }, [navigate]);

  return (
    <AuthWrapper>
      <>
        <CompanyLogoTitle subTitle="You have successfully logined" />
        <SubmitButton
          buttonText="Logout?"
          type="button"
          onClick={handleLogout}
        />
      </>
    </AuthWrapper>
  );
};
