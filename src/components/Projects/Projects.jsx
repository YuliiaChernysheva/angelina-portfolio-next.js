import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={`container ${styles.projectsContainer}`}>
        <h2 className={styles.projectsTitle}>Мої проекти</h2>
        <p className={styles.projectsMainText}>
          Кейси, де я застосувала свої знання UX/UI дизайну для вирішення
          реальних проблем
        </p>

        <ul className={styles.projectsList}>
          {/* Project 1 */}
          <li className={styles.projectsItem}>
            <div className={styles.projectCard}>
              <div className={styles.projectMedia}>
                <picture>
                  <source
                    media="(min-width: 1179px)"
                    srcSet="/img/luna-desk.jpg"
                  />
                  <img
                    className={styles.projectImg}
                    src="/img/luna-mob.jpg"
                    alt="Luna — додаток для відстеження сну"
                    loading="lazy"
                  />
                </picture>
              </div>

              <div className={styles.projectBody}>
                <span className={styles.projectsBadge}>Mobile App Design</span>

                <h3 className={styles.projectTitle}>
                  <a
                    className={styles.projectLink}
                    href="https://www.behance.net/gallery/236314731/Luna-dodatok-dlja-vdstezhennja-snu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Luna: Додаток для відстеження сну
                  </a>
                </h3>

                <h4 className={styles.projectSubtitle}>Проблема</h4>
                <p className={styles.projectText}>
                  Користувачі не можуть легко відстежувати свій сон та
                  отримувати персоналізовані поради для поліпшення якості сну.
                </p>

                <h4 className={styles.projectSubtitle}>Рішення</h4>
                <p className={styles.projectText}>
                  Luna — мобільний трекер сну, який аналізує фази, тривалість та
                  якість сну, відстежує звички користувача і на основі цього дає
                  персональні поради для покращення відпочинку та регулярності
                  сну.
                </p>

                <ul
                  className={styles.projectTags}
                  aria-label="Технології та інструменти"
                >
                  <li className={styles.projectTag}>UX Design</li>
                  <li className={styles.projectTag}>UI Design</li>
                  <li className={styles.projectTag}>Prototyping</li>
                </ul>
              </div>
            </div>
          </li>

          {/* Project 2 */}
          <li className={styles.projectsItem}>
            <div
              className={`${styles.projectCard} ${styles.projectCardReverse}`}
            >
              <div className={styles.projectMedia}>
                <picture>
                  <source
                    media="(min-width: 1179px)"
                    srcSet="/img/cosmetics-desk.jpg"
                  />
                  <img
                    className={styles.projectImg}
                    src="img/cosmetics-mob.jpg"
                    alt="Веб-сервіс для персоналізованого підбору косметики"
                    loading="lazy"
                  />
                </picture>
              </div>

              <div className={styles.projectBody}>
                <span className={styles.projectsBadge}>Web Design</span>

                <h3 className={styles.projectTitle}>
                  <a
                    className={styles.projectLink}
                    href="https://www.behance.net/gallery/234080905/Web-Service-for-personalized-cosmetics-selection"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Веб-сервіс для персоналізованого підбору косметики
                  </a>
                </h3>

                <h4 className={styles.projectSubtitle}>Проблема</h4>
                <p className={styles.projectText}>
                  Вибір косметики складний через велику кількість продуктів і
                  відсутність персоналізованих рекомендацій.
                </p>

                <h4 className={styles.projectSubtitle}>Рішення</h4>
                <p className={styles.projectText}>
                  Веб-сервіс, який підбирає косметику під індивідуальні потреби
                  — з прозорими відгуками, фільтрами та рекомендаціями.
                </p>

                <ul
                  className={styles.projectTags}
                  aria-label="Технології та інструменти"
                >
                  <li className={styles.projectTag}>UX Research</li>
                  <li className={styles.projectTag}>Wireframes</li>
                  <li className={styles.projectTag}>UI Kit</li>
                </ul>
              </div>
            </div>
          </li>

          {/* Project 3 */}
          <li className={styles.projectsItem}>
            <div className={styles.projectCard}>
              <div className={styles.projectMedia}>
                <picture>
                  <source
                    media="(min-width: 1179px)"
                    srcSet="/img/volleyball-desk.jpg"
                  />
                  <img
                    className={styles.projectImg}
                    src="/img/volleyball-mob.jpg"
                    alt="Volleyball Training — landing page"
                    loading="lazy"
                  />
                </picture>
              </div>

              <div className={styles.projectBody}>
                <span className={styles.projectsBadge}>Landing Page</span>

                <h3 className={styles.projectTitle}>
                  <a
                    className={styles.projectLink}
                    href="https://www.behance.net/gallery/241389917/landing-page-Volleyball-Training"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Volleyball Training — landing page для персонального тренера
                  </a>
                </h3>

                <h4 className={styles.projectSubtitle}>Проблема</h4>
                <p className={styles.projectText}>
                  Потрібен був зрозумілий і сучасний сайт для тренера з
                  волейболу, який викликає довіру та мотивує записатися на
                  тренування.
                </p>

                <h4 className={styles.projectSubtitle}>Рішення</h4>
                <p className={styles.projectText}>
                  Створено UX/UI дизайн лендінгу з логічною структурою, акцентом
                  на користь тренувань, відгуки та просту форму запису. Дизайн
                  передає професійність, динаміку спорту та дружню атмосферу
                  тренувань для дітей, підлітків і дорослих.
                </p>

                <ul
                  className={styles.projectTags}
                  aria-label="Технології та інструменти"
                >
                  <li className={styles.projectTag}>UX/UI</li>
                  <li className={styles.projectTag}>Design System</li>
                  <li className={styles.projectTag}>Responsive</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
