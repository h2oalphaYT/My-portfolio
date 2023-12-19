import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Chanuka</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/me.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>. Me,</h3>
              <p>⚡ Fun fact 🤔 I'm 01100110 01100101 01100101 01101100 01101001 01101110 01100111 00100000 01101100 01110101 01100011 01101011 01111001 00001010</p>
              <br/>
              <p style={{fontFamily:"fantasy" , fontSize:"35px" , color:"#576cbc"}}>#OpenToWork</p>
               <p>I have a strong focus on mobile app development and full-stack web development. I have a keen interest in building mobile applications using Kotlin, demonstrating my proficiency in modern app development techniques. Additionally, I am skilled in full-stack development using the MERN stack, showcasing my versatility and adaptability in the field of software development.Currently, I am seeking an <span style={{fontFamily:"fantasy" , fontSize:"25px" , color:"red"}}>internship opportunity</span> that will allow me to further develop these skills in a professional setting.</p>
<br/>
              <h3 style={{marginBottom:"5px"}}>As a Student</h3>
              <p>
              🎓 I'm a dedicated third-year Information Technology student at SLIIT, with a focus in Software Engineering. I possess strong technical skills in React,NodeJs,HTML, CSS, JavaScript, PHP, and Java, demonstrated through projects like a Construction Management System and an Online Education System. My academic credentials include a BSc (Hons) in IT from SLIIT, supplemented by a Diploma in English and an International Diploma in IT. My education and projects reflect my commitment to practical and innovative solutions in software development
              </p>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
};