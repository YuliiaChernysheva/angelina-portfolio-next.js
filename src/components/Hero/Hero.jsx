import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroTextContainer}>
          <span className={styles.heroBadge}>UX/UI Designer</span>
          <h1 className={styles.heroTitle}>Привіт, я Ангеліна</h1>
          <p className={styles.heroText}>
            <span className={styles.line1}>UX/UI дизайнерка, </span>
            <span className={styles.line2}>яка створює інтуїтивні та </span>
            <span className={styles.line3}>естетичні цифрові продукти</span>
          </p>
        </div>

        <div className={styles.heroButtonsContainer}>
          <a type="button" href="#projects" className={styles.btnProjects}>
            Переглянути проекти
            <svg
              className={styles.heroArrowRight}
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use href="/icons/symbol-defs.svg#arrow_right_click" />
            </svg>
          </a>

          <a className={styles.btnContact} href="#contact">
            Зв&apos;язатися зі мною
          </a>
        </div>
      </div>
    </section>
  );
}
