import axios from "axios";

const BASE_URL="http://localhost:5000/api/";

const TOKEN= JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken;
//const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjAzZDM1YjIzMDQ5NGM3NTE3NzJhOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTk2NTY4MCwiZXhwIjoxNjkwMjI0ODgwfQ.g3_rjotmeLTBdORYWWBT6ue3m5MC4ReOp1ZQYJhNJCM";

console.log(JSON.parse((JSON.parse(localStorage.getItem('persist:root'))).user).currentUser.accessToken);
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer${TOKEN}`}
});