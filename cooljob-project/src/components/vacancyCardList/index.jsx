import styles from "./styles.module.css";
import VacancyCard from "../vacancyCard";
import locationIcon from "../../assets/vacancies/location.svg";
import fb from "../../assets/vacancies/fb.svg";
import cola from "../../assets/vacancies/cola.svg";
import sony from "../../assets/vacancies/sony.svg";

const vacanciesList = [
  {
    id: 1,
    color: "#5182FF",
    category: "Finances",
    name: "Finance Manager in a large company",
    icon: locationIcon,
    location: "Osaka, Japan",
    company: sony,
    postDate: "Sony, 3 days ago",
  },
  {
    id: 2,
    color: "#FF51EE",
    category: "Sales",
    name: "Sales Specialist",
    icon: locationIcon,
    location: "Koyasan, Japan ",
    company: fb,
    postDate: "Facebook, 7 days ago",
  },
  {
    id: 3,
    color: "#58D94D",
    category: "Customer Support",
    name: "Call Center Operator",
    icon: locationIcon,
    location: "Tomamu, Japan",
    company: cola,
    postDate: "CocaCola, 1 day ago",
  },
  {
    id: 4,
    color: "#FF9051",
    category: "Multimedia",
    name: "System Administrator",
    icon: locationIcon,
    location: "Tokyo, Japan",
    company: sony,
    postDate: "Sony, 3 days ago",
  },
  {
    id: 5,
    color: "#F84242",
    category: "Design",
    name: "Interior Designer for a professional studio in the city center",
    icon: locationIcon,
    location: "Yokohama, Japan",
    company: fb,
    postDate: "Facebook, 7 days ago",
  },
  {
    id: 6,
    color: "#383838",
    category: "Logistics",
    name: "Long-distance driver ",
    icon: locationIcon,
    location: "Kobe, Japan ",
    company: cola,
    postDate: "CocaCola, 1 day ago",
  },
];
function VacanciesCardList() {
  return (
    <div className={styles.vacancies_list}>
      <div className={styles.new_position}>
        <h2>New positions</h2>
        <p>Find your dream job right now</p>
      </div>
      <ul>
        {vacanciesList.map((vacancy) => {
          return <VacancyCard vacancy={vacancy} key={vacancy.id} />;
        })}
      </ul>
      <button>All vacancies</button>
    </div>
  );
}
export default VacanciesCardList;
