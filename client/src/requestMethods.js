import axios from "axios";

const BASE_URL="http://localhost:5000/api/";
//const TOKEN= JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const TOKEN= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjAzZDM1YjIzMDQ5NGM3NTE3NzJhOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTI3MTY3MCwiZXhwIjoxNjg5NTMwODcwfQ.XjzLNH4SmNZJbqxDNfYdzGSQZhCrAdcuW84NX_I2uJk";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer${TOKEN}`}
});