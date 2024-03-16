import axios from "axios";

export const $api = axios.create({
    baseURL: 'https://auth-qa.qencode.com',
    headers: {'Content-Type': 'application/json'}
});