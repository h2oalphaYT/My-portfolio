

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
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:chanukaddevin@gmail.com">chanukaddevin@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/chanuka-devin/">linkedin.com/ChanukaDevin</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/h2oalphaYT">github.com/ChanukaDevin</a>
        </li>
      </ul>
    </footer>
  );
};