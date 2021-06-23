import React from "react";
import styles from "./FramePlayer.module.scss";

const FramePlayer = (props) => {
  return (
    <div className={styles.mainCont}>
      <div className={styles.frameContainer}>
        <iframe
          src={props.link}
          frameborder="0"
          title="objectCloud"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
};

export default FramePlayer;
