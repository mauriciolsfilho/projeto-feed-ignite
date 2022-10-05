import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./CommentForm.module.css";
import { useEffect } from "react";
import { CommentProps, UserProps } from "../../core/types/app";
import { api } from "../../services/api";

type InputComment = {
  comment: string;
};

interface CommentFormProps {
  user: UserProps;
  postId: number;
  onSave: () => void;
}

/**
 * Formulário de comentários
 * @returns
 */
export function CommentForm({ user, postId, onSave }: CommentFormProps) {
  const {
    register,
    reset,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<InputComment>();

  const onSubmit: SubmitHandler<InputComment> = ({ comment }) => {
    const commentTO = {
      postId,
      author: user,
      publishedAt: new Date().toString(),
      content: [{ type: "paragraph", content: comment }],
      likes: 0,
    } as CommentProps;

    api
      .post("/comments", commentTO)
      .then((rs) => {
        reset();
        onSave();
      })
      .catch((e) => console.log(e));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <strong>Deixe seu feedback</strong>
      <textarea
        onBlurCapture={() => clearErrors()}
        className={errors.comment ? styles.commentFieldError : ""}
        {...register("comment", { required: true })}
        placeholder="Deixe um comentário..."
      />
      {errors.comment && (
        <span className={styles.messageError}>Campo obrigatório</span>
      )}
      <footer>
        <button
          disabled={!!errors.comment}
          className={errors.comment ? styles.buttonError : styles.buttonSubmit}
          type="submit"
        >
          Publicar
        </button>
      </footer>
    </form>
  );
}
