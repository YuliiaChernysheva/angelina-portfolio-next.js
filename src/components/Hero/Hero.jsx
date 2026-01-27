import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroTextContainer}>
          <span className={styles.heroBadge}>UX/UI Designer</span>
          <h1 className={styles.heroTitle}>
            Привіт, я Ангеліна
            <span className={styles.heroEmojiWave} aria-hidden="true">
              👋
            </span>
          </h1>
          <p className={styles.heroText}>
            UX/UI дизайнерка, яка створює інтуїтивні та естетичні цифрові
            продукти
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
