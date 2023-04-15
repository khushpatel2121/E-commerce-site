import axios from "axios"

const BASE_URL = "http://localhost:8080/api/";

const TOKEN= "access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjFhYjM0NDAwOTgyYmZiYmUzMmNiOSIsImlzQWRpbSI6dHJ1ZSwiaWF0IjoxNjgwMTY0NTQ0fQ.4Pw7S0ZMyAtPesIAyIxMzXxKwqsZ_xoPmY5Xct2cV-A; Path=/; HttpOnly; Domain=localhost"

export const publicRequest = axios.create({
    baseURL: BASE_URL,

});

export const userRequest =axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
})