import { BASE_URL } from "../contant";

export const getPost = async () => {
  try {
    const response = await fetch(`${BASE_URL}/post/get`, {
      method: "GET",
      headers: {
        "Content-type": "Application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Signup API error:", error);
    throw error;
  }
};
