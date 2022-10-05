import { useState } from "react";
import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import { format, formatDistanceToNow } from "date-fns";
import { CommentForm } from "../CommentForm/CommentForm";
import { DisplayContent } from "../DisplayContent/DisplayContent";
import { CommentProps, PostProps } from "../../core/types/app";
import { ptBR } from "date-fns/locale";

import styles from "./Post.module.css";
import { authUser } from "../../core/mock/user";
import { api } from "../../services/api";
import { AxiosResponse } from "axios";
/**
 * Componente de post
 * @returns
 */
export function Post({
  id,
  author,
  comments: postComments,
  content,
  publishedAt,
}: PostProps) {
  const [comments, setComments] = useState<CommentProps[]>(postComments);
  const formattedDate = format(
    new Date(publishedAt),
    "dd 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const formattedDateRelativeToNow = formatDistanceToNow(
    new Date(publishedAt),
    {
      locale: ptBR,
      addSuffix: true,
    }
  );

  function handleGetComments() {
    api
      .get(`comments?postId=${id}`)
      .then(({ data }: AxiosResponse<CommentProps[]>) => {
        setComments(data);
      })
      .catch((e) => console.log(e));
  }

  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <div className={styles.author}>
          <Avatar hasBorder src={author.imageUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.description}</span>
          </div>
        </div>
        <time title={formattedDate} dateTime={publishedAt}>
          {formattedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        <DisplayContent data={content} />
      </div>
      <CommentForm user={authUser} postId={id} onSave={handleGetComments} />
      <div className={styles.commentList}>
        {comments?.map((comment) => (
          <Comment
            key={comment.id}
            comment={{
              ...comment,
              post: { id, author, publishedAt } as PostProps,
            }}
            onDelete={handleGetComments}
          />
        ))}
      </div>
    </article>
  );
}
