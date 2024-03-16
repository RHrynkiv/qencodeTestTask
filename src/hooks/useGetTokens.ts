import { useEffect } from "react"

import { toast } from "react-toastify";


export const useGetTokens = () => {

    const getAccessToken = async () => {
        //Sorry, I don't know what access_id and where I can get "secret" and "token" if user forgot password and can`t login to the app 
        try{
            // const {data}  = await $api.post("v1/auth/access-token", {access_id})
            // const {access_token, refresh_token} = data

            // localStorage.setItem(localStorageItems.ACCESS_TOKEN, access_token)
            // Cookies.set(localStorageItems.REFRESH_TOKEN, refresh_token)

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