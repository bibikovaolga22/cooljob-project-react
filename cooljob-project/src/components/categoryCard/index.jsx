import styles from "./styles.module.css";

function CategoryCard({ card }) {
  return (
    <li className={styles.card}>
      <img src={card.image} alt="" />
      <p>{card.text}</p>
    </li>
  );
}
export default CategoryCard;
