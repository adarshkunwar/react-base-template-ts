import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type AxiosError,
  type InternalAxiosRequestConfig,
} from "axios";

// Base configuration
const baseConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3001/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
};

// Create the axios instance
const axiosInstance: AxiosInstance = axios.create(baseConfig);

// Request interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Add auth token if available
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Log request in development
    if (import.meta.env.MODE === "development") {
      console.log(`🚀 ${config.method?.toUpperCase()} ${config.url}`);
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Log response in development
    if (import.meta.env.MODE === "development") {
      console.log(`✅ ${response.status} ${response.config.url}`);
    }

    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Unauthorized - clear token and redirect to login
      localStorage.removeItem("authToken");
      window.location.href = "/login";
    }

    if (error.response?.status === 403) {
      // Forbidden
      console.error("Access denied");
    }

    if (error.response?.status >= 500) {
      // Server error
      console.error("Server error occurred");
    }

    // Log error in development
    if (import.meta.env.MODE === "development") {
      console.error(
        `❌ ${error.response?.status} ${error.config?.url}`,
        error.response?.data
      );
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
