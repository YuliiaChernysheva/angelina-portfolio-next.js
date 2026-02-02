import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <p className={styles.footerCopy}>
          © 2025 Angelina Portfolio. Всі права захищені.
        </p>
      </div>
    </footer>
  );
}
