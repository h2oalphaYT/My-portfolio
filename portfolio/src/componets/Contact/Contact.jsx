

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {

  const backgroundImageUrl = getImageUrl("hero/stars.png");
  
  return (
    <footer id="contact" className={styles.container} style={{ backgroundImage: `url(${backgroundImageUrl})` , position:""} }>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
        <a href="mailto:chanukaddevin@gmail.com" className={styles.emailLink}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a>chanukaddevin@gmail.com</a>
          </a>
        </li>
        <li className={styles.link}>
        <a href="https://www.linkedin.com/in/chanuka-devin/" className={styles.emailLink}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a>linkedin.com/ChanukaDevin</a>

          </a>
        </li>
        <li className={styles.link}>
        <a href="https://github.com/h2oalphaYT" className={styles.emailLink}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a>github.com/ChanukaDevin</a>

          </a>
        </li>
      </ul>
    </footer>
  );
};