export type PostType = {
  id: string;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  author: {
    id: string;
    username: string;
    fullName: string;
    profile?: string;
  };
  comments: {
    id: string;
    title: string;
    user: {
      id: string;
      username: string;
      fullName: string;
      profile?: string;
    };
  };
};

export type SignUpType = {
  username: string;
  email: string;
  password: string;
  fullName: string;
  profile?: string;
  dateOfBirth: string;
  bio?: string;
  gender?: "MALE" | "FEMALE" | "OTHER";
  token: string;
  existUser: string;
};

export type CommentType = {
  id: string;
  title: string;
  user: {
    id: string;
    username: string;
    fullName: string;
    profile?: string;
  };
};
