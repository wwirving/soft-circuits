import React from "react";
import styles from "./FrameOverlay.module.scss";

const FrameOverlay = (props) => {
  return (
    <div className={styles.mainCont}>
      <div className={styles.frameContainer}>
        <iframe src={props.link} frameborder="0" title="objectCloud"></iframe>
      </div>
    </div>
  );
};

export default FrameOverlay;
