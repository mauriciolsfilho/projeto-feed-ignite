import styles from "./Avatar.module.css";

interface AvatarProps {
  imageUrl: string;
  size?: "sm" | "md" | "lg";
  hasBorder?: boolean;
}

/**
 * Componente de avatar do usuário
 * @param imageUrl
 * @param hasBorder
 * @returns
 */
export function Avatar({
  imageUrl,
  size = "md",
  hasBorder = false,
}: AvatarProps) {
  /**
   * Retorna a classe CSS para o avatar do usuario
   * @returns
   */
  function getClassName(): string {
    let className = styles.avatar;
    if (hasBorder) {
      className += ` ${styles.avatarWithBorder}`;
    }
    className += ` ${styles[size]}`;
    return className;
  }

  return <img className={getClassName()} src={imageUrl} />;
}
