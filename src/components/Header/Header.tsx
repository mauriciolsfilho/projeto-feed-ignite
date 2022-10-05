import styles from "./Header.module.css";
import logoIgnite from "../../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoIgnite} alt="logo" />
      <h2>
        <strong>Ignite Feed</strong>
      </h2>
    </header>
  );
}
