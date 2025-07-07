// import styles from "./styles.module.css";
import searchIcon from "../../assets/icons/search.svg";

function SearchBar() {
  return (
    <form>
      <div className="position">
        <img src={searchIcon} alt="Search Icon" />
        <input type="text" />
      </div>
      <div className="city">
        <input type="text" />
      </div>
      <input type="submit" />
    </form>
  );
}
export default SearchBar;
