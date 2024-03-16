import axios from "axios";
import { toast } from "react-toastify";

export const handleError = (err: unknown) => {
    if (axios.isAxiosError(err)) {
        toast.error(err?.response?.data?.detail);
      }
}