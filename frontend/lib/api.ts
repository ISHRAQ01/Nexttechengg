const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";

export interface Inquiry {
  name: string;
  mobile: string;
  requirement?: string;
  message?: string;
}

export const sendInquiry = async (inquiry: Inquiry): Promise<boolean> => {
  const formData = new FormData();
  formData.append("entry.123456789", inquiry.name);      // Replace with actual entry IDs
  formData.append("entry.987654321", inquiry.mobile);
  formData.append("entry.111111111", inquiry.requirement || "");
  formData.append("entry.222222222", inquiry.message || "");

  await fetch(GOOGLE_FORM_URL, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  });
  
  return true;
};