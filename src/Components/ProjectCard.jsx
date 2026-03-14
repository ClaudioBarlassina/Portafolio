import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>

      <div className={styles.imageContainer}>
        <img
          src={project.image}
          alt={project.title}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{project.title}</h2>
{project.label && (
  <span className={styles.badge}>
    {project.label}
  </span>
)}

        <p className={styles.description}>{project.description}</p>

        <h3>{project.techTitle}</h3>
        <ul className={styles.tech}>
          {project.tech.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>

        <h3>{project.featuresTitle}</h3>
        <ul className={styles.features}>
          {project.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        {/* botones */}
        <div className={styles.buttons}>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.demoBtn}
            >
              Demo
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubBtn}
            >
              Github
            </a>
          )}
        </div>

      </div>
    </div>
  );
}