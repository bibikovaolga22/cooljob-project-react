import logo from "../../assets/logo.svg";
import styles from "./styles.module.css";
import SearchBar from "../searchBar";
function Header() {
  return (
    <header className={styles.main_container}>
      <nav>
        <div className={styles.left_side_menu}>
          <img src={logo} alt="Company's logo" />

          <ul>
            <li>Job Search</li>
            <li>Sturtup Search</li>
          </ul>
        </div>
        <ul className={styles.right_side_menu}>
          <li>Registration</li>
          <li>
            {" "}
            <a href="#">Sign In</a>{" "}
          </li>
        </ul>
      </nav>
      <h1>
        One click <br></br>and job is yours
      </h1>
      <SearchBar />
    </header>
  );
}
export default Header;
