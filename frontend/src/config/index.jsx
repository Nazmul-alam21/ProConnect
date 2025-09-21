const { default: axios } = require("axios");



export const BASE_URL = "https://proconnect-xgki.onrender.com"

export const clientServer = axios.create({
    baseURL: BASE_URL,
})