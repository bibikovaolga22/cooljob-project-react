import logo from "../../assets/logo.svg";
import styles from "./styles.module.css";
import SearchBar from "../searchBar";
import bgImg from "../../assets/Rectangle.svg";
import disney from "../../assets/partner's logos/disney.svg";
import fb from "../../assets/partner's logos/fb.svg";
import microsoft from "../../assets/partner's logos/microsoft.svg";
import sony from "../../assets/partner's logos/sony.svg";
import cocacola from "../../assets/partner's logos/cocacola.svg";

function Header() {
  return (
    <>
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
        <img src={bgImg} alt="background" className={styles.bgImage} />
      </header>
      <div className={styles.partners}>
        <p>We can help to find a job:</p>
        <ul>
          <li>
            <img src={disney} alt="" />
          </li>
          <li>
            {" "}
            <img src={fb} alt="" />
          </li>
          <li>
            {" "}
            <img src={microsoft} alt="" />
          </li>
          <li>
            {" "}
            <img src={sony} alt="" />
          </li>
          <li>
            {" "}
            <img src={cocacola} alt="" />
          </li>
        </ul>
      </div>
    </>
  );
}
export default Header;
