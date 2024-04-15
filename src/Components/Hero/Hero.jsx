import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shobhit</h1>
        <p className={styles.description}>
          I'm a full stack developer weaving together front-end finesse and
          back-end magic to create captivating user experiences.
        </p>
        <a className={styles.contactBtn} href="mailto:shobithsugumar@gmail.com">
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroimage.webp")}
        alt="Hero image "
        className={styles.heroImage}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
