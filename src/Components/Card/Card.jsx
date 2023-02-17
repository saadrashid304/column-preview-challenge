import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div
      className={`${styles.mainContainer} ${
        props.btnStyle === "btn1" && styles.leftBorder
      } ${props.btnStyle === "btn3" && styles.rightBorder}`}
      style={props.style}
    >
      <img src={props.icon} alt="" className={styles.icon} />
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.description}>{props.description}</p>
      <div
        className={`${styles.btn} ${props.btnStyle === "btn1" && styles.btn1} ${
          props.btnStyle === "btn2" && styles.btn2
        } ${props.btnStyle === "btn3" && styles.btn3}`}
      >
        Learn More
      </div>
    </div>
  );
};

export default Card;
