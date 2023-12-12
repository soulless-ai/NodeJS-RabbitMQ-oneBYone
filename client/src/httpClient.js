import axios from 'axios';
import config from './config.js';

const httpClient = axios.create({
    baseURL: config.apiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default { httpClient };