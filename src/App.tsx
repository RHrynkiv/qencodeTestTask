import { Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import SetPasswordPage from "./pages/SetPasswordPage";
import MainPage from "./pages/MainPage";

import AuthGuard from "./components/AuthGuard";

import { Paths } from "./utils/constants";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path={Paths.LOGIN} element={<LoginPage />} />
      <Route path={Paths.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
      <Route path={Paths.SET_PASSWORD} element={<SetPasswordPage />} />
      <Route element={<AuthGuard />}>
        <Route path={Paths.MAIN} element={<MainPage />} />
      </Route>
      <Route path="*" element={<Navigate to={Paths.LOGIN} />} />
    </Routes>
  );
}

export default App;
