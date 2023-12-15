
import React , {useEffect} from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";



export const Hero = () => {

  useEffect(() => {
    const handleScroll = () => {
      const titleElement = document.querySelector(`.${styles.title}`);
      titleElement.classList.remove(styles.typingAnimation);

      // Trigger reflow to restart the animation
      void titleElement.offsetWidth;

      titleElement.classList.add(styles.typingAnimation);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const cvUrl =  'http://localhost:5173/public/MY_CV.pdf.pdf';
  const backgroundImageUrl = getImageUrl("hero/stars.png");


  return (
    <section className={styles.container} style={{ backgroundImage: `url(${backgroundImageUrl})` } }>
      
      <div className={styles.content}>

      <h1 className={`${styles.title} ${styles.typingAnimation}`}>Hi, I'm Chanuka Devin...</h1>
        <p className={styles.description}>
        As an aspiring and dedicated student, I am excited about the opportunity to learn and grow with discipline. My experience for around two years has equipped me with strong analytical and organisational
skills within the IT industry.
        </p>
        <div className="styles.Button">
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href={cvUrl} className={styles.downloadBtn} download>
          Download CV
        </a>
        </div>
      </div>

      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};