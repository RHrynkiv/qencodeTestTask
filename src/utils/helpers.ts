import axios from "axios";
import { toast } from "react-toastify";
import { Paths } from "./constants";

interface ErrorType {
  error: string;
  field_name: string;
}

export const handleError = (err: unknown) => {
    if (axios.isAxiosError(err)) {
      if(!!Array.isArray(err?.response?.data?.detail)){
        err?.response?.data?.detail?.map(({error}: ErrorType) => {
          toast.error(error)
          return null;
        })
      } else {
        toast.error(err?.response?.data?.detail);
      }
      }
}

export const reUrlForResetPassword = () => window.location.origin + Paths.SET_PASSWORD
