import styles from "./styles.module.css";

function VacancyCard({ vacancy }) {
  return (
    <>
      <li key={vacancy.id} className={styles.job_card}>
        <div className={styles.card_content}>
          <div className={styles.category}>
            <span style={{ backgroundColor: vacancy.color }}></span>
            <p>{vacancy.category}</p>
          </div>
          <h4>{vacancy.name}</h4>
          <div className={styles.position_location}>
            <img src={vacancy.icon} alt="" />
            <p>{vacancy.location}</p>
          </div>
        </div>
        <div className={styles.publication_date}>
          <img src={vacancy.company} alt="" />
          <p>{vacancy.postDate}</p>
        </div>
      </li>
    </>
  );
}
export default VacancyCard;
