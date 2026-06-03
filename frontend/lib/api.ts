import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 60000, // 60 seconds for cold start
});

export interface Inquiry {
  name: string;
  mobile: string;
  requirement?: string;
  message?: string;
}

export interface InquiryResponse {
  id: number;
  name: string;
  mobile: string;
  requirement: string;
  message: string;
  createdAt: string;
  read: boolean;
}

export const sendInquiry = async (inquiry: Inquiry): Promise<InquiryResponse> => {
  try {
    const response = await apiClient.post("/inquiries", inquiry);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

// Wake up backend - call this when contact page loads
export const wakeUpBackend = async (): Promise<void> => {
  try {
    await fetch(`${API_BASE_URL}/inquiries/health`);
    console.log("Backend awake!");
  } catch (e) {
    // ignore - backend waking up
  }
};

export const checkBackendHealth = async (): Promise<string> => {
  try {
    const response = await apiClient.get("/inquiries/health");
    return response.data;
  } catch (error) {
    console.error("Backend not reachable:", error);
    return "Backend unavailable";
  }
};