import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={`container ${styles.aboutContainer}`}>
        <h2 className={styles.aboutTitle}>Про мене</h2>

        <div className={styles.aboutContent}>
          <div className={styles.aboutPhoto}>
            <picture>
              <source
                media="(min-width: 1179px)"
                srcSet="/img/about-me-desk.jpg"
              />
              <img
                className={styles.aboutImg}
                src="/img/about-me-mob.jpg"
                alt="Моє фото"
                loading="lazy"
                width="460"
                height="460"
              />
            </picture>
          </div>

          <div className={styles.aboutInfo}>
            <p className={styles.aboutText}>
              Я UX/UI дизайнерка, яка допомагає бізнесам і стартапам створювати
              зручні та привабливі цифрові продукти. <br />
              Проєктую інтерфейси для мобільних додатків, вебсервісів і
              лендингів — від ідеї до фінального дизайну. <br />У роботі
              орієнтуюсь на потреби користувачів, просту навігацію та чітку
              структуру, щоб дизайн не лише виглядав красиво, а й працював.{" "}
              <br />
              Відкрита до співпраці над новими проєктами та ідеями.
            </p>

            <h3 className={styles.aboutSubtitle}>Навички</h3>

            <ul className={styles.skills}>
              <li className={styles.skill}>
                <div className={styles.skillTop}>
                  <span>Figma</span>
                  <span>90%</span>
                </div>
                <div className={styles.skillBar}>
                  <span
                    className={styles.skillFill}
                    style={{ width: "90%" }}
                  ></span>
                </div>
              </li>

              <li className={styles.skill}>
                <div className={styles.skillTop}>
                  <span>Illustrator</span>
                  <span>85%</span>
                </div>
                <div className={styles.skillBar}>
                  <span
                    className={styles.skillFill}
                    style={{ width: "85%" }}
                  ></span>
                </div>
              </li>

              <li className={styles.skill}>
                <div className={styles.skillTop}>
                  <span>Photoshop</span>
                  <span>35%</span>
                </div>
                <div className={styles.skillBar}>
                  <span
                    className={styles.skillFill}
                    style={{ width: "35%" }}
                  ></span>
                </div>
              </li>

              <li className={`${styles.skill} ${styles.desktopOnly}`}>
                <div className={styles.skillTop}>
                  <span>UX дослідження</span>
                  <span>95%</span>
                </div>
                <div className={styles.skillBar}>
                  <span
                    className={styles.skillFill}
                    style={{ width: "95%" }}
                  ></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
