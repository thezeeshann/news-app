import { BASE_URL } from "../contant";
import { signupType } from "../schema/signup";

export const signup = async (data: signupType) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Signup API error:", error);
    throw error;
  }
};
