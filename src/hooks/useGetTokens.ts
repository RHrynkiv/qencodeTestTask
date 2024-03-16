import { useEffect } from "react"

import { $api } from "../api/api"

import { access_id, localStorageItems } from "../utils/constants"
import Cookies from "js-cookie";

import { toast } from "react-toastify";


export const useGetTokens = () => {

    const getAccessToken = async () => {
        try{
            const {data}  = await $api.post("v1/auth/access-token", {access_id})
            const {access_token, refresh_token} = data

            localStorage.setItem(localStorageItems.ACCESS_TOKEN, access_token)
            Cookies.set(localStorageItems.REFRESH_TOKEN, refresh_token)

        }catch(err){
            console.error(err)
            toast.error("Authorization error")
        }
    }

    useEffect(() => {
        getAccessToken()
    },[])

    return
}