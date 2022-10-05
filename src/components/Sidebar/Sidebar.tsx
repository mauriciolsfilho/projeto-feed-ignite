import { PencilLine } from "phosphor-react";
import { UserProps } from "../../core/types/app";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Sidebar.module.css";

/**
 * Componente de Sidebar
 * @param userProps
 * @returns
 */
export function Sidebar({
  name,
  description,
  imageUrl,
  coverImageUrl,
}: UserProps) {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={coverImageUrl} />
      <div className={styles.profile}>
        <Avatar size="lg" imageUrl={imageUrl} hasBorder />
        <strong>{name}</strong>
        <span>{description}</span>
      </div>
      <footer>
        <button type="button">
          <PencilLine size={18} />
          Editar perfil
        </button>
      </footer>
    </aside>
  );
}
