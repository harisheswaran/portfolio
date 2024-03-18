import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";
export const About = () => {
    return <section className={styles.container} id='about'>
        <h2 className={styles.title}>
            About
        </h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/abouthero.png")}
            className={styles.aboutImage} 
            alt="Me sitting eith lap" />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} 
                    alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>
                            Frontend Developer
                        </h3>
                        <p>
                            I'm a frontend developer with experience in building optimized sites
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} 
                    alt="server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>
                            Android Developer
                        </h3>
                        <p>
                            I have a experience in developing android application 
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} 
                    alt="ui icon" />
                    <div className={styles.aboutItemText}>
                        <h3>
                            Programming
                        </h3>
                        <p>
                            I am a proactive learner and
                            problem solver using c/c++,java
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
};
