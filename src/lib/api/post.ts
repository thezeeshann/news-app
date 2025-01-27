import { BASE_URL } from "../contant";

export const createPost = async (data: FormData, token: string) => {
  try {
    const response = await fetch(`${BASE_URL}/post/create`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });

    console.log("Error Data:", await response.json());

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("create post API error:", error.message);
    } else {
      console.error("create post API error:", error);
    }
    throw error;
  }
};

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
    console.error("post API error:", error);
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
    return result.data;
  } catch (error) {
    console.error("post API error:", error.message);
    throw error;
  }
};

export const getPostByUser = async (token: string) => {
  try {
    const response = await fetch(`${BASE_URL}/post/get-user`, {
      method: "GET",
      headers: {
        "Content-type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("post API error:", error);
    throw error;
  }
};

export const deletePost = async (postId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/post/delete/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("post API error:", error);
    throw error;
  }
};
