export type UserProps = {
  name: string;
  email: string;
  imageUrl: string;
  description: string;
  coverImageUrl: string;
};

export type ContentProps = {
  type: "paragraph" | "link";
  content: string;
  href: string;
};

export type PostProps = {
  id: number;
  author: UserProps;
  publishedAt: string;
  content: Array<ContentProps>;
  comments: Array<CommentProps>;
};

export type CommentProps = {
  id: number;
  likes: number;
  postId: number;
  post?: PostProps;
  author: UserProps;
  publishedAt: string;
  content: Array<ContentProps>;
};