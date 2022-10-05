import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ThumbsUp, Trash } from "phosphor-react";
import { CommentProps } from "../../core/types/app";
import { getDateToNowFormatted, getFormattedDate } from "../../core/util/date";
import { api } from "../../services/api";
import { Avatar } from "../Avatar/Avatar";
import { DisplayContent } from "../DisplayContent/DisplayContent";
import styles from "./Comment.module.css";
import { authUser } from "../../core/mock/user";

interface CommentDetailsProps {
  comment: CommentProps;
  onDelete: () => void;
}
/**
 * Componente de comentários
 * @param commentProps
 * @param onDelete
 * @returns
 */
export function Comment({ comment, onDelete }: CommentDetailsProps) {
  const formattedDate = getFormattedDate(new Date(comment.publishedAt));

  const formattedDateRelativeToNow = getDateToNowFormatted(
    new Date(comment.publishedAt)
  );

  /**
   * Remove um registro de comentário
   */
  function handleDeleteComment() {
    if (confirm("Deseja realmente remover o comentário?")) {
      api
        .delete(`/comments/${comment.id}`)
        .then(() => onDelete())
        .catch((e) => console.log(e));
    }
  }

  /**
   * Valida se o usuário pode remover o comentário
   * @valid se é o autor do post ou do comentário
   * @returns
   */
  function canDeleteComment(): boolean {
    return (
      comment.author.email === authUser.email ||
      comment?.post?.author.email === authUser.email
    );
  }

  return (
    <div className={styles.comment}>
      <Avatar size="sm" imageUrl={comment.author.imageUrl} />
      <div className={styles.box}>
        <div className={styles.content}>
          <header className={styles.header}>
            <div className={styles.details}>
              <strong>{comment.author.name}</strong>
              <time
                title={formattedDate}
                dateTime={new Date(comment.publishedAt).toISOString()}
              >
                {formattedDateRelativeToNow}
              </time>
            </div>
            {canDeleteComment() && (
              <button
                onClick={handleDeleteComment}
                type="button"
                title="Remover comentário"
              >
                <Trash size={22} />
              </button>
            )}
          </header>
          <DisplayContent data={comment.content} />
        </div>

        <footer>
          <button type="button">
            <ThumbsUp size={22} />
            Curtir
            <span>{comment.likes}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
