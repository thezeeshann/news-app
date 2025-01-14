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

export const getSinglePost = async (postId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/post/get-single/${postId}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const result = await response.json();
    console.log(result, "inside from get single post");
    return result.data;
  } catch (error) {
    console.error("Signup API error:", error);
    throw error;
  }
};
