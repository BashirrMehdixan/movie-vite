import axios from "axios";
import { toast } from "react-toastify";

const baseURL = import.meta.env.VITE_APP_BASE_API_URL;
const api_key = import.meta.env.VITE_APP_API_KEY;

const instance = axios.create({
    baseURL,
    params: {
        api_key: api_key, // API anahtarını buraya ekliyoruz
    },
});

// Request interceptor
instance.interceptors.request.use(
    (config) => {
        // Her sorğuya API anahtarını Authorization başlığı olarak əlavə edirik
        config.headers.Authorization = `Bearer ${api_key}`;

        // API anahtarını her isteğe query parametresi olarak ekliyoruz
        config.params = {
            ...config.params,
            api_key: api_key,
        };

        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

// Response interceptor
instance.interceptors.response.use(
    (response) => {
        if (response.config.method === "post") {
            toast.success(response.data.message);
        } else if (response.config.method === "delete") {
            toast.error(response.data.message);
        }

        return response.data;
    },
    (err) => {
        if (err.response && err.response.status === 401) {
            localStorage.removeItem("token");
            location.href = "/login";
        }
        return Promise.reject(err);
    }
);

export default instance;