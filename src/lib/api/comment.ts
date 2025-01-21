import { BASE_URL } from "../contant";
import { commentType } from "../schema/comment";

export const getComments = async () => {
  try {
    const response = await fetch(`${BASE_URL}/comment/get`, {
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

export const createComment = async (data: commentType, token: string) => {
  try {
    const response = await fetch(`${BASE_URL}/comment/create`, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
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
