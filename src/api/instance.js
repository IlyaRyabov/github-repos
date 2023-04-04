import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;
const token = process.env.REACT_APP_GITHUB_TOKEN;

export const mainApi = axios.create({
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    },
    baseURL,
});
