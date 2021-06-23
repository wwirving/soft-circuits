import React from "react";
import styles from "./Frame.module.scss";

const Frame = (props) => {
  return (
    <>
      <div className={styles.frameContainer}>
        <iframe src={props.link} frameborder="0" title={props.link}></iframe>
      </div>
    </>
  );
};

export default Frame;
