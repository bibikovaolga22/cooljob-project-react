import styles from "./styles.module.css";
import logo from "../../assets/icons/socialmedia/logo_footer.svg";
import fb from "../../assets/icons/socialmedia/fb.svg";
import google from "../../assets/icons/socialmedia/google.svg";
import tweeter from "../../assets/icons/socialmedia/tweeter.svg";
import ln from "../../assets/icons/socialmedia/ln.svg";

function Footer() {
  return (
    <div className={styles.cities}>
      <div className={styles.popular_cities}>
        <h3>Popular cities</h3>
        <ul className={styles.cities_list}>
          <li>Osaka</li>
          <li>Koyasan</li>
          <li>Tokyo</li>
          <li>Hakone</li>
          <li>Naeba</li>
          <li>Tomamu</li>
          <li>Yokohama</li>
          <li>Nagoya</li>
          <li>Sapporo</li>
          <li>Kobe</li>
        </ul>
      </div>
      <div className={styles.social_media}>
        <img src={logo} alt="Logo" />
        <ul className={styles.socialmedia_list}>
          <li>
            <img src={fb} alt="facebook logo" />
          </li>
          <li>
            {" "}
            <img src={google} alt="google logo" />
          </li>
          <li>
            {" "}
            <img src={tweeter} alt="tweeter logo" />
          </li>
          <li>
            {" "}
            <img src={ln} alt="linkedin logo" />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
