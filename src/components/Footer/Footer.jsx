import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <p className={styles.footerMade}>
          Створено з
          <span className={styles.footerHeart} aria-hidden="true">
            <svg className={styles.footerHeartIcon} width="17" height="17">
              <use href="/icons/symbol-defs.svg#heart"></use>
            </svg>
          </span>
          Ангеліною
        </p>

        <p className={styles.footerCopy}>
          © 2025 Angelina Portfolio. Всі права захищені.
        </p>
      </div>
    </footer>
  );
}
