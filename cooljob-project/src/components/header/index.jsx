import styles from "./styles.module.css";
import logo from "../../assets/logo.svg";
import SearchBar from "../searchBar";
import bgImg from "../../assets/Rectangle.svg";
import disney from "../../assets/partner's logos/disney.svg";
import fb from "../../assets/partner's logos/fb.svg";
import microsoft from "../../assets/partner's logos/microsoft.svg";
import sony from "../../assets/partner's logos/sony.svg";
import cocacola from "../../assets/partner's logos/cocacola.svg";
import IconsList from "../iconsList";
const logoList = [
  {
    src: disney,
    alt: "Disney",
  },
  {
    src: fb,
    alt: "Facebook",
  },
  {
    src: microsoft,
    alt: "Microsoft",
  },
  {
    src: sony,
    alt: "Sony",
  },
  {
    src: cocacola,
    alt: "Cocacola",
  },
];

function Header() {
  return (
    <>
      <header className={styles.main_container}>
        <nav>
          <div className={styles.left_side_menu}>
            <a href="#">
              {" "}
              <img src={logo} alt="Company's logo" className="logo_image" />
            </a>

            <ul>
              <li>
                <a href="">Job Search</a>
              </li>
              <li>
                <a href="">Sturtup Search</a>
              </li>
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
          {logoList.map((logo) => (
            <IconsList logo={logo} key={logo.alt} />
          ))}
        </ul>
      </div>
    </>
  );
}
export default Header;
