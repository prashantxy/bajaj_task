const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export const api = {
  processData: async (data) => {
    const response = await fetch(`${API_BASE_URL}/bfhl`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("API request failed");
    }

    return response.json();
  },

  getOperationCode: async () => {
    const response = await fetch(`${API_BASE_URL}/bfhl`);

    if (!response.ok) {
      throw new Error("API request failed");
    }

    return response.json();
  },
};
