import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
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
  src,
  size = "md",
  hasBorder = false,
  ...props
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

  return <img className={getClassName()} src={src} {...props} />;
}
