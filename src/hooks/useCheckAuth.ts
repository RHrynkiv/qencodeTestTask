import { useNavigate } from "react-router-dom";
import { Paths, localStorageItems } from "../utils/constants";
import { useEffect } from "react";

export const useCheckAuth = () => {
    const navigate = useNavigate()

    const access_token = localStorage.getItem(localStorageItems.ACCESS_TOKEN) || "";

    useEffect(() => {
        if(!access_token){
            navigate(Paths.LOGIN);
        }
    }, [access_token, navigate])


}