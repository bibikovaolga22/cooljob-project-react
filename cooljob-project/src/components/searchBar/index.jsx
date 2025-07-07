import styles from "./styles.module.css";
import searchIcon from "../../assets/icons/search.svg";
import locationIcon from "../../assets/icons/location.svg";

function SearchBar() {
  return (
    <form className={styles.search}>
      <div className={styles.job_position}>
        <img src={searchIcon} alt="Search Icon" />
        <input type="text" placeholder="Position and company" />
      </div>
      <div className={styles.city}>
        <img src={locationIcon} alt="" />
        <input type="text" placeholder="City, country" />
      </div>
      <input type="submit" value="Search" />
    </form>
  );
}
export default SearchBar;
