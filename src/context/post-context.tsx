import { createContext, PropsWithChildren, useState, useEffect } from "react";
import { getPost } from "../lib/api/post";

type PostContextProp = {
  postData: any;
  setPostData: (data: any) => void;
};

export const PostContext = createContext<PostContextProp>({
  postData: null,
  setPostData: () => {},
});

export default function PostContextProvider({ children }: PropsWithChildren) {
  const [postData, setPostData] = useState();

  useEffect(() => {
    const postData = async () => {
      try {
        const data = await getPost();
        setPostData(data);
        console.log(data);
      } catch (error) {
        console.log("something went wrong while fetching post data", error);
      }
    };

    postData();
  }, []);

  return (
    <PostContext.Provider
      value={{
        postData,
        setPostData,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
