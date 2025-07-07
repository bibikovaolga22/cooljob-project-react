import financies from "../../assets/icons/pizza.svg";
import car from "../../assets/icons/car.svg";
import design from "../../assets/icons/window.svg";
import food from "../../assets/icons/food.svg";
import medicine from "../../assets/icons/medicine.svg";
import multimedia from "../../assets/icons/multimedia.svg";
import chat from "../../assets/icons/chat.svg";
import managment from "../../assets/icons/managment.svg";
import sales from "../../assets/icons/sales.svg";
import CategoryCard from "../categoryCard";
import styles from "./styles.module.css";

const cards = [
  { image: financies, text: "Financies" },
  { image: car, text: "Logistics" },
  { image: design, text: "Design" },
  { image: food, text: "Restaurant business" },
  { image: medicine, text: "Medicine" },
  { image: multimedia, text: "Multimedia" },
  { image: chat, text: "Support service" },
  { image: managment, text: "Managment" },
  { image: sales, text: "Sales" },
];

function CategoryCardList() {
  return (
    <div className={styles.categories}>
      <h2>Job by categories</h2>
      <ul className={styles.card_content}>
        {cards.map((card) => {
          return <CategoryCard card={card} />;
        })}
      </ul>
    </div>
  );
}
export default CategoryCardList;
