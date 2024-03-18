import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';
export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content} >
        <h1 className={styles.title} >Hi, I am Harish</h1>
        <p className={styles.description}>
            I'm a Software Developer, currenty pursuing by bachelor's in Computer Science 
            engineering at Karpagam college of engineering.
            Reach out if you'd like to learn more!!!!
        </p>
          <a href="mailto:harisheaswaran2004@gmail.com" className={styles.contactBtn} >Contact Me</a>
    </div>
    <img src={getImageUrl("hero/hero2.png")} 
    className={styles.heroImg}
    alt="Hero image of me"
    />
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
  </section>
};
